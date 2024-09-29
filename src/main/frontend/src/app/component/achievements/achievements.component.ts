import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent {

  achievements = [
    {icon: 'landscape', progress: 30, title: 'Sudety'},
    {icon: 'elevation', progress: 70, title: 'Strome podejście'},
    {icon: 'avg_time', progress: 22, title: 'Długi trening'},
    {icon: 'landscape', progress: 80, title: 'Beskid Śląski'},
    {icon: 'star_half', progress: 50, title: 'Twórca'},
    {icon: 'face', progress: 33, title: 'Katowice'}
  ];

}
