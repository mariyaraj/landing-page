package com.ai2connect.companyService.config;


import java.util.List;

//@Configuration
//@EnableWebSecurity
public class SecurityConfig {

//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
//            .csrf(AbstractHttpConfigurer::disable) // CSRF deaktivieren für REST APIs
//            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//            .authorizeHttpRequests(auth -> auth
//                .requestMatchers("/api/public/**").permitAll()  // Öffentliche Endpunkte ohne Authentifizierung
//                .requestMatchers("/api/**").authenticated()    // Geschützte Endpunkte
//            )
//            .oauth2ResourceServer(oauth2 -> oauth2.jwt());  // Keycloak nutzt JWT
//
//        return http.build();
//    }
//
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration configuration = new CorsConfiguration();
//        configuration.setAllowedOrigins(List.of("http://localhost:3001")); // Erlaubte Origin für CORS
//        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
//        configuration.setAllowedHeaders(List.of("Authorization", "Content-Type", "Accept", "Origin", "X-Requested-With"));
//        configuration.setExposedHeaders(List.of("Authorization"));
//        configuration.setAllowCredentials(true); // Erlaubt Anfragen mit Credentials
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration); // Konfiguration für alle Routen
//        return source;
//    }
}
