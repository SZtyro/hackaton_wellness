package pl.drunkcom.wellness.controllers;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.drunkcom.core.rest.BaseController;
import pl.drunkcom.wellness.models.Activity;
import pl.drunkcom.wellness.repositories.ActivityRepository;

@RestController
@RequestMapping("/api/activities")
public class ActivityController extends BaseController<Activity, ActivityRepository> {

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

//        Activity init != null ? init : new Activity();
//        init.setAuthor(getPrincipal());

    }

    public String getPrincipal(){
        User temp = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return temp.getUsername();
    }
}
