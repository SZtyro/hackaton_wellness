package pl.drunkcom.wellness.services;

import org.springframework.stereotype.Service;
import pl.drunkcom.core.service.BaseService;
import pl.drunkcom.wellness.models.ActivityTag;
import pl.drunkcom.wellness.repositories.ActivityTagRepository;

@Service
public class ActivityTagService extends BaseService<ActivityTag, ActivityTagRepository> {
}
