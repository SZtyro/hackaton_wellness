package pl.drunkcom.wellness.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.SecurityFilterChain;
import pl.drunkcom.wellness.models.AppUser;
import pl.drunkcom.wellness.services.AppUserService;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()  // Disable CSRF for API endpoints
                .authorizeHttpRequests((requests) -> requests
                        .antMatchers("/api/auth/**").permitAll()  // Allow public access to /api/auth/**
                        .anyRequest().authenticated()  // Secure all other endpoints
                )
                .formLogin().disable()  // Disable form-based login, we handle login ourselves
                .httpBasic().disable();  // Disable HTTP Basic authentication
        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService(AppUserService appUserService) {
        return username -> {
            AppUser appUser = appUserService.findByUsername(username);
            if (appUser != null) {
                return org.springframework.security.core.userdetails.User.withUsername(appUser.getUsername())
                        .password(appUser.getPassword())
                        .roles("USER")
                        .build();
            } else {
                throw new UsernameNotFoundException("User not found");
            }
        };
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}
