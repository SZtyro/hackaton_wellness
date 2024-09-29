import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from 'src/app/service/activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrl: './activities-list.component.scss'
})
export class ActivitiesListComponent implements OnInit{

  items = [];

  constructor(
    private resource: ActivityService,
    private activatedRoute: ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.items = this.activatedRoute.snapshot.data.list
    console.log(this.items)
  }

addTask(){
    this.resource.create({}).subscribe(
      activity => this.router.navigate(["activities", activity.id]),
    )
  }

}
