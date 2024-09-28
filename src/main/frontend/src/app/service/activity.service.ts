import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActivityService extends BaseService implements Resolve<any>{
  
  override endpoint: string = 'api/activities';

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.getAll();
  }
}
