package com.ai2connect.companyService.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

	 @Bean
	    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	        http
	            // Deaktiviere CSRF
	            .csrf(csrf -> csrf.disable())
	            
	            // Aktiviere CORS
	            .cors(Customizer.withDefaults())
	            
	            // Erlaube alle Anfragen
	            .authorizeHttpRequests(auth -> 
	                auth.anyRequest().permitAll()
	            );

	        return http.build();
	    }

	    @Bean
	    public CorsConfigurationSource corsConfigurationSource() {
	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        CorsConfiguration config = new CorsConfiguration();
	        
	        // Erlaube localhost:3001
	        config.addAllowedOrigin("http://localhost:3001");
	        
	        // Erlaube alle Methoden
	        config.addAllowedMethod("*");
	        
	        // Erlaube alle Headers
	        config.addAllowedHeader("*");
	        
	        // Setze allowCredentials auf false
	        config.setAllowCredentials(false);
	        
	        source.registerCorsConfiguration("/**", config);
	        return source;
	    }
	}