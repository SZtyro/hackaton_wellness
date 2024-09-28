import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mobileView:boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mobileView = event.target.innerWidth > 768;
  }

  menu = [
    {name: 'Dashboard', icon: 'home', path: 'dashboard'},
    {name: 'Activities', icon: 'directions_run', path: 'activities'},
    {name: 'Campaigns', icon: 'trophy', path: 'campaigns'},
    {name: 'Achievements', icon: 'social_leaderboard', path: 'achievements'},
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

}
