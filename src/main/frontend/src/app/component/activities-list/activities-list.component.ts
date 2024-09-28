import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from 'src/app/service/activity.service';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrl: './activities-list.component.scss'
})
export class ActivitiesListComponent implements OnInit{

  items = [];

  constructor(
    private resource: ActivityService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.items = this.activatedRoute.snapshot.data.list
  }
  
}
