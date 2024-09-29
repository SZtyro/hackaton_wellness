package pl.drunkcom.wellness.services;

import org.hibernate.Hibernate;
import org.springframework.stereotype.Service;
import pl.drunkcom.core.service.BaseService;
import pl.drunkcom.wellness.models.Activity;
import pl.drunkcom.wellness.models.ActivityTag;
import pl.drunkcom.wellness.repositories.ActivityRepository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import javax.transaction.Transactional;
import java.util.List;

@Service
public class ActivityService extends GradeService<Activity, ActivityRepository> {

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public List<Activity> findByAllTags(List<ActivityTag> requestedTags) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Activity> query = cb.createQuery(Activity.class);
        Root<Activity> activity = query.from(Activity.class);

        // Join with tags
        Join<Activity, ActivityTag> tags = activity.join("tags");

        // Predicate for tag filtering
        Predicate tagsPredicate = tags.in(requestedTags);

        // Group by and having clause
        query.select(activity)
                .where(tagsPredicate)
                .groupBy(activity.get("id"))
                .having(cb.equal(cb.count(tags), requestedTags.size()));

        return entityManager.createQuery(query).getResultList();
    }

}
