import { Component } from '@angular/core';
import { ActivityService } from 'src/app/service/activity.service';
import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseService } from 'src/app/service/base.service';
import { TaskService } from 'src/app/service/task.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-activities-form',
  templateUrl: './activities-form.component.html',
  styleUrl: './activities-form.component.scss'
})
export class ActivitiesFormComponent extends BaseFormComponent{
  override resource: BaseService<any> = this.injector.get(ActivityService);
  tasks = this.injector.get(TaskService);


  addTask(){
    let index = this.object.tasks != null ? this.object.tasks.length : 0;
    this.tasks.create({activity: {id: this.object.id}, draft: false, index: index}).subscribe(
      task => this.router.navigate(["tasks", task.id]),
    )
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.object.tasks , event.previousIndex, event.currentIndex);
  }
}
