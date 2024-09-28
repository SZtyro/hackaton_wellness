package pl.drunkcom.wellness.services;

import org.springframework.stereotype.Service;
import pl.drunkcom.core.service.BaseService;
import pl.drunkcom.wellness.models.Activity;
import pl.drunkcom.wellness.repositories.ActivityRepository;

@Service
public class ActivityService extends GradeService<Activity, ActivityRepository> {
}
