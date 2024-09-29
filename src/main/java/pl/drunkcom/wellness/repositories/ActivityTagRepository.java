package pl.drunkcom.wellness.repositories;

import org.springframework.stereotype.Repository;
import pl.drunkcom.core.interfaces.BaseRepository;
import pl.drunkcom.wellness.models.ActivityTag;

@Repository
public interface ActivityTagRepository extends BaseRepository<ActivityTag> {
}
