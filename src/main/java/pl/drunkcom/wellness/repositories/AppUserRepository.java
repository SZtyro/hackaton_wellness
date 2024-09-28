package pl.drunkcom.wellness.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.drunkcom.wellness.models.AppUser;

@Repository
public interface AppUserRepository extends  JpaRepository<AppUser, Long>{
    AppUser findByUsername(String username);
}
