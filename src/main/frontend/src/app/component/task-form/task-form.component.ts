import { Component } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseService } from 'src/app/service/base.service';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent extends BaseFormComponent{
  override resource: BaseService<any> = this.injector.get(TaskService);

  

}
