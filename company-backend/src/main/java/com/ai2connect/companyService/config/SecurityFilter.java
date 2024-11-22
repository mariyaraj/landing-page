package com.ai2connect.companyService.config;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class SecurityFilter implements Filter {
    private static final Logger logger = LoggerFactory.getLogger(SecurityFilter.class);
    
    @Value("${app.allowed-origins}")
    private String allowedOrigins;
    
    @Value("${app.api-key}")
    private String apiKey;

    // Rate Limiting
    private final Map<String, RequestTracker> requestTrackers = new ConcurrentHashMap<>();
    private static final int MAX_REQUESTS_PER_MINUTE = 30;
    private static final long ONE_MINUTE = 60_000;

    private static class RequestTracker {
        int requestCount;
        long windowStart;

        RequestTracker() {
            this.requestCount = 1;
            this.windowStart = System.currentTimeMillis();
        }
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
            throws IOException, ServletException {
        
        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;

        // 1. CORS Headers
        response.setHeader("Access-Control-Allow-Origin", allowedOrigins);
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, X-API-Key");
        response.setHeader("Access-Control-Max-Age", "3600");

        // 2. Security Headers
        response.setHeader("X-Content-Type-Security", "nosniff");
        response.setHeader("X-Frame-Options", "DENY");
        response.setHeader("X-XSS-Protection", "1; mode=block");
        response.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
        response.setHeader("Content-Security-Policy", "default-src 'self'");

        // 3. OPTIONS request handling
        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
            return;
        }

        // 4. API Key Validation für nicht-OPTIONS Requests
        String requestApiKey = request.getHeader("X-API-Key");
        if (!apiKey.equals(requestApiKey)) {
            logger.warn("Invalid API key attempt from IP: {}", request.getRemoteAddr());
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid API Key");
            return;
        }

        // 5. Rate Limiting
        String clientIp = getClientIp(request);
        if (!checkRateLimit(clientIp)) {
            logger.warn("Rate limit exceeded for IP: {}", clientIp);
            response.sendError(429, "Too many requests");
            return;
        }

        // 6. Request Logging
        logger.info("Processing request: {} {} from IP: {}", 
            request.getMethod(), 
            request.getRequestURI(), 
            clientIp
        );
        
        logger.debug("CORS-Header gesetzt.");
        logger.debug("Prüfe API-Key: Erwartet = {}, Erhalten = {}", apiKey, requestApiKey);

        chain.doFilter(req, res);
    }

    private String getClientIp(HttpServletRequest request) {
        String forwardedFor = request.getHeader("X-Forwarded-For");
        if (forwardedFor != null && !forwardedFor.isEmpty()) {
            return forwardedFor.split(",")[0].trim();
        }
        return request.getRemoteAddr();
    }

    private boolean checkRateLimit(String clientIp) {
        long now = System.currentTimeMillis();
        
        RequestTracker tracker = requestTrackers.compute(clientIp, (key, existing) -> {
            if (existing == null || now - existing.windowStart > ONE_MINUTE) {
                return new RequestTracker();
            }
            existing.requestCount++;
            return existing;
        });

        // Clean up old entries
        if (now % 100 == 0) { // Nur gelegentlich aufräumen
            requestTrackers.entrySet().removeIf(entry -> 
                now - entry.getValue().windowStart > ONE_MINUTE);
        }

        return tracker.requestCount <= MAX_REQUESTS_PER_MINUTE;
    }
}