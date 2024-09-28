package pl.drunkcom.wellness.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import pl.drunkcom.wellness.config.PlainTextPasswordEncoder;
import pl.drunkcom.wellness.models.AppUser;
import pl.drunkcom.wellness.repositories.AppUserRepository;

@Service
public class AppUserService {

    @Autowired
    private AppUserRepository appUserRepository;

    private AuthenticationManager authenticationManager;

    @Autowired
    public void setAuthenticationManager(@Lazy AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Autowired
    private PlainTextPasswordEncoder passwordEncoder;  // Use your custom encoder

    public AppUser register(AppUser user) {
        // Store the plaintext password
        return appUserRepository.save(user);
    }

    public boolean login(AppUser user) {
        AppUser storedUser = appUserRepository.findByUsername(user.getUsername());

        if (storedUser != null && passwordEncoder.matches(user.getPassword(), storedUser.getPassword())) {
            // If the plaintext password matches, authenticate the user
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(storedUser.getUsername(), user.getPassword())
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);
            return authentication.isAuthenticated();
        }

        return false; // Authentication failed
    }

    public AppUser findByUsername(String username) {
        return appUserRepository.findByUsername(username);
    }
}
