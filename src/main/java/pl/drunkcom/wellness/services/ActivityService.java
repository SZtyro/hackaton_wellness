package pl.drunkcom.wellness.services;

import org.hibernate.Hibernate;
import org.springframework.stereotype.Service;
import pl.drunkcom.core.service.BaseService;
import pl.drunkcom.wellness.models.Activity;
import pl.drunkcom.wellness.repositories.ActivityRepository;

import java.util.List;

@Service
public class ActivityService extends GradeService<Activity, ActivityRepository> {
}
