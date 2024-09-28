import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CampaignService extends BaseService {
  override endpoint: string = 'api/campaigns';
}
