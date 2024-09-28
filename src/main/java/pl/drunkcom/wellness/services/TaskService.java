package pl.drunkcom.wellness.services;

import org.springframework.stereotype.Service;
import pl.drunkcom.core.service.BaseService;
import pl.drunkcom.wellness.models.Task;
import pl.drunkcom.wellness.repositories.TaskRepository;

@Service
public class TaskService extends BaseService<Task, TaskRepository> {
}
