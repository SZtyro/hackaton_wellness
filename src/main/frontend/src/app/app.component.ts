import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mobileView:boolean = false;

  constructor(private router: Router){

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mobileView = event.target.innerWidth > 768;
  }

  menu = [
    {name: 'Start', icon: 'home', path: 'dashboard'},
    {name: 'Aktywności', icon: 'directions_run', path: 'activities', badge: 2},
    {name: 'Kampanie', icon: 'trophy', path: 'campaigns', badge: 4},
    {name: 'Osiagnięcia', icon: 'social_leaderboard', path: 'achievements'},
  ]

  ngOnInit(): void {
    this.mobileView = window.innerWidth > 768;
  }

  getCurrentPath(): string{
    return location.pathname.slice(1)
  }

  isServeEnabled(): boolean{
    return (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
      && location.port === '4200';
  }

  getDevelopHref(): string{
    return location.href.replace(':8080', ':4200')
  }

  isAuthorized(){
    return !this.router.url.includes('login')
  }
}
