package pl.drunkcom.wellness.activity;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.drunkcom.core.rest.BaseController;

@RestController
@RequestMapping("/api/activities")
public class ActivityController extends BaseController<Activity, ActivityRepository> {

    public ActivityController(){
        super(ActivityController.class, Activity.class);
    }

    @Override
    public Activity createEntity(Activity init) {
        return init != null ? init : new Activity();
    }
}
