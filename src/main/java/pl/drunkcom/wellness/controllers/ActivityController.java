package pl.drunkcom.wellness.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;
import pl.drunkcom.core.rest.BaseController;
import pl.drunkcom.wellness.models.Activity;
import pl.drunkcom.wellness.models.ActivityTag;
import pl.drunkcom.wellness.models.AppUser;
import pl.drunkcom.wellness.models.Task;
import pl.drunkcom.wellness.repositories.ActivityRepository;
import pl.drunkcom.wellness.services.ActivityService;
import pl.drunkcom.wellness.services.ActivityTagService;
import pl.drunkcom.wellness.services.AppUserService;
import pl.drunkcom.wellness.services.TaskService;

import javax.websocket.server.PathParam;
import java.io.IOException;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/activities")
public class ActivityController extends BaseController<Activity, ActivityRepository> {

    @Autowired
    private ActivityTagService tagService;

    @Autowired
    private ActivityService service;

    @Autowired
    private AppUserService userService;

    @Autowired
    private TaskService taskService;

    @PostMapping("/addGrade")
    public ResponseEntity<Activity> addGrade(Long id, Double grade){
        Activity activity = service.get(id);
        if(activity == null)
            return ResponseEntity.notFound().build();

        activity.setCountOfGrades(activity.getCountOfGrades() + 1);
        activity.setSumGrade(activity.getSumGrade() + grade);
        return ResponseEntity.ok(service.save(activity));
    }

    @GetMapping("/start/{id}")
    public ResponseEntity<Activity> startActivity(@PathVariable("id") Long id){
        Activity activity = service.get(id);
        Activity copy = new Activity();
        copy.setId(null);
        copy.setParent(activity);
        copy.setDraft(false);
        List<Task> copiedTasks = new ArrayList<>();
        for(Task t : activity.getTasks()){
            Task newTask = new Task();
            newTask.setId(null);
            newTask.setDraft(false);
            newTask.setName(t.getName());
            newTask.setCoordinates(t.getCoordinates());
            copiedTasks.add(taskService.save(newTask));
        }
        copy.setTasks(copiedTasks);
        copy = service.save(copy);

        AppUser user = userService.findByUsername(getPrincipal());
        user.setCurrentActivity(copy);
        userService.save(user);

        return ResponseEntity.ok(copy);
    }

    @GetMapping("/getAllTags")
    public ResponseEntity<List<ActivityTag>> getTags(){
        return ResponseEntity.ok(tagService.getAll());
    }

    @GetMapping("/getByTags")
    public ResponseEntity<List<Activity>> getByTags(@RequestParam List<ActivityTag> tags){
        return ResponseEntity.ok(service.findByAllTags(tags));
    }

    public ActivityController(){
        super(ActivityController.class, Activity.class);
    }

    @Override
    public Activity createEntity(Activity init) {
        if (init != null) {
            init.setAuthor(getPrincipal());
            return init;
        }

        return new Activity();

    }
}
