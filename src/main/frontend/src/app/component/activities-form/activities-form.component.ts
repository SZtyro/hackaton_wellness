import { Component } from '@angular/core';
import { ActivityService } from 'src/app/service/activity.service';
import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseService } from 'src/app/service/base.service';

@Component({
  selector: 'app-activities-form',
  templateUrl: './activities-form.component.html',
  styleUrl: './activities-form.component.scss'
})
export class ActivitiesFormComponent extends BaseFormComponent{
  override resource: BaseService<any> = this.injector.get(ActivityService);

  

}
