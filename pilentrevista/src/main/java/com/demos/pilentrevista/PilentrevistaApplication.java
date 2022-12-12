package com.demos.pilentrevista;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PilentrevistaApplication {

	public static void main(String[] args) {
		SpringApplication.run(PilentrevistaApplication.class, args);
		System.out.println("Iniciando el servidor en el puerto 8080");
	}


@Bean
public CorsConfigurationSource corsConfiguration() {
    CorsConfiguration corsConfig = new CorsConfiguration();
    corsConfig.applyPermitDefaultValues();
    corsConfig.addAllowedOrigin("http://localhost:3000");
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", corsConfig);
    return source;
}

}
