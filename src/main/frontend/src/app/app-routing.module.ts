import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ActivitiesListComponent } from './component/activities-list/activities-list.component';
import { ActivityService } from './service/activity.service';
import { MainComponent } from './component/main/main.component'

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
        path: 'activities',
        component: ActivitiesListComponent,
        resolve: {
          list: ActivityService
        }
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
