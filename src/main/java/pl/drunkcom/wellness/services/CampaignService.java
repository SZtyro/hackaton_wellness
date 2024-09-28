package pl.drunkcom.wellness.services;

import org.springframework.stereotype.Service;
import pl.drunkcom.core.service.BaseService;
import pl.drunkcom.wellness.models.Campaign;
import pl.drunkcom.wellness.repositories.CampaignRepository;

@Service
public class CampaignService extends GradeService<Campaign, CampaignRepository> {
}
