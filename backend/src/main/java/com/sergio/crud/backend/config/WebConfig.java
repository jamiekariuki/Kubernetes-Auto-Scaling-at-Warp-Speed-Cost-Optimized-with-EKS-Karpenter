package com.sergio.crud.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer corsConfig() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS") // ✅ includes OPTIONS
                        .allowedOrigins("http://130.107.187.238")
                        .allowedHeaders("*") // ✅ allow all headers (like Content-Type)
                        .allowCredentials(true); // optional if you use cookies or authj
            }
        };
    }
}

