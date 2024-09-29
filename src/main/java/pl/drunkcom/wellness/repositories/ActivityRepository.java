package pl.drunkcom.wellness.repositories;

import org.springframework.stereotype.Repository;
import pl.drunkcom.core.interfaces.BaseRepository;
import pl.drunkcom.wellness.models.Activity;
import pl.drunkcom.wellness.models.ActivityTag;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface ActivityRepository extends BaseRepository<Activity> {
}
