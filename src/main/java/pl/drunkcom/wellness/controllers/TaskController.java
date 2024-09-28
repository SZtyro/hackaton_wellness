package pl.drunkcom.wellness.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.drunkcom.core.rest.BaseController;
import pl.drunkcom.wellness.models.Task;
import pl.drunkcom.wellness.repositories.TaskRepository;

@RestController
@RequestMapping("/api/tasks")
public class TaskController extends BaseController<Task, TaskRepository> {

    public TaskController(){
        super(TaskController.class, Task.class);
    }

    @Override
    public Task createEntity(Task init) {
        return init != null ? init : new Task();
    }
}
