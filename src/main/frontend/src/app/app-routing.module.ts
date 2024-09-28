import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ActivitiesListComponent } from './component/activities-list/activities-list.component';
import { ActivityService } from './service/activity.service';
import { LoginComponent } from './component/login/login.component';
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
        path: 'login',
        component: LoginComponent
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
