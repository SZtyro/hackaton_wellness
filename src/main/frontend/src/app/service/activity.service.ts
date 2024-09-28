import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService extends BaseService{
  override endpoint: string = 'api/activities';
}
