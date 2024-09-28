package pl.drunkcom.wellness.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.drunkcom.core.rest.BaseController;
import pl.drunkcom.wellness.models.Activity;
import pl.drunkcom.wellness.repositories.ActivityRepository;

@RestController
@RequestMapping("/api/activities")
public class ActivityController extends BaseController<Activity, ActivityRepository> {

    @PostMapping("/addGrade")
    public ResponseEntity<Activity> addGrade(Long id, Double grade){
        Activity activity = service.get(id);
        if(activity == null)
            return ResponseEntity.notFound().build();

        activity.setCountOfGrades(activity.getCountOfGrades() + 1);
        activity.setSumGrade(activity.getSumGrade() + grade);
        return ResponseEntity.ok(service.save(activity));
    }

    public ActivityController(){
        super(ActivityController.class, Activity.class);
    }

    @Override
    public Activity createEntity(Activity init) {
        if (init != null) {
            init.setAuthor(getPrincipal());
            return init;  // Return the existing Activity if it's not null
        } else {
            return new Activity();  // Return a new Activity if init is null
        }
    }

    public String getPrincipal(){
        User temp = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return temp.getUsername();
    }
}
