package com.ai2connect.companyService.config;


import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	
    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(Arrays.asList("http://localhost:3001"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type", "X-Requested-With", "Accept", "Origin"));
        config.setExposedHeaders(Arrays.asList("Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"));
        config.setAllowCredentials(true);  // Wichtig: Erlaubt das Setzen von Credentials
        config.setMaxAge(3600L);
        


        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

	@Override
    public void addCorsMappings(CorsRegistry registry) {
		  registry.addMapping("/**")
          .allowedOrigins("http://localhost:3001") // Hier die URL Ihres Frontends
          .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
          .allowedHeaders("*")
//          .allowedHeaders("Authorization", "Content-Type", "Accept", "Origin", "X-Requested-With")
//          .exposedHeaders("Authorization")
          .allowCredentials(true); // CORS mit Anmeldeinformationen aktivieren
    }
}