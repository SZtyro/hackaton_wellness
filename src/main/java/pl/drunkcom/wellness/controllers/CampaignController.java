package pl.drunkcom.wellness.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.drunkcom.core.rest.BaseController;
import pl.drunkcom.wellness.models.Campaign;
import pl.drunkcom.wellness.repositories.CampaignRepository;

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
