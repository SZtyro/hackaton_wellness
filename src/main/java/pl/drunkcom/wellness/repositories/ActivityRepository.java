package pl.drunkcom.wellness.repositories;

import org.springframework.stereotype.Repository;
import pl.drunkcom.core.interfaces.BaseRepository;
import pl.drunkcom.wellness.models.Activity;

@Repository
public interface ActivityRepository extends BaseRepository<Activity> {
}
