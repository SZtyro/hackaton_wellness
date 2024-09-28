package pl.drunkcom.wellness.campaign;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.drunkcom.core.rest.BaseController;

@RestController
@RequestMapping("/api/campaigns")
public class CampaignController extends BaseController<Campaign, CampaignRepository> {

    public CampaignController(){
        super(CampaignController.class, Campaign.class);
    }


    @Override
    public Campaign createEntity(Campaign init) {
        return init != null ? init : new Campaign();
    }
}
