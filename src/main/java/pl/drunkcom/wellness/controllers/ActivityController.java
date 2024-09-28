package pl.drunkcom.wellness.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;
import pl.drunkcom.core.rest.BaseController;
import pl.drunkcom.wellness.models.Activity;
import pl.drunkcom.wellness.models.ActivityTag;
import pl.drunkcom.wellness.repositories.ActivityRepository;
import pl.drunkcom.wellness.services.ActivityService;
import pl.drunkcom.wellness.services.ActivityTagService;

import java.util.List;

@RestController
@RequestMapping("/api/activities")
public class ActivityController extends BaseController<Activity, ActivityRepository> {

    @Autowired
    private ActivityTagService tagService;

    @Autowired
    private ActivityService service;

    @PostMapping("/addGrade")
    public ResponseEntity<Activity> addGrade(Long id, Double grade){
        Activity activity = service.get(id);
        if(activity == null)
            return ResponseEntity.notFound().build();

        activity.setCountOfGrades(activity.getCountOfGrades() + 1);
        activity.setSumGrade(activity.getSumGrade() + grade);
        return ResponseEntity.ok(service.save(activity));
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

    public String getPrincipal(){
        User temp = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return temp.getUsername();
    }
}
