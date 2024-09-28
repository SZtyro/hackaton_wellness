import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';

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
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
