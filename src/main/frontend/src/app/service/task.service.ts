import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends BaseService {
  override endpoint: string = 'api/tasks';

}
