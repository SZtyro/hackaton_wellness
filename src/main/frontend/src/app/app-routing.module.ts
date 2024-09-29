import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ActivitiesListComponent } from './component/activities-list/activities-list.component';
import { ActivityService } from './service/activity.service';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component'
import { ActivitiesFormComponent } from './component/activities-form/activities-form.component';
import { AchievementsComponent } from './component/achievements/achievements.component';
import { TaskFormComponent } from './component/task-form/task-form.component';

const routes: Routes = [
  {
    path: '',
    resolve: { },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'activities',
        children: [
          { path: '', 
            component: ActivitiesListComponent,
            resolve: {
              list: ActivityService
            },
          },
          {path: ':id', component: ActivitiesFormComponent}
        ]

      },
      {
        path: 'tasks/:id',
        component: TaskFormComponent
      },
      {
        path: 'achievements',
        component: AchievementsComponent
      },
      {
        path: '',
        component: MainComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
