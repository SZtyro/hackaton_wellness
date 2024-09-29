import { Component, Directive, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BaseService } from 'src/app/service/base.service';

@Directive()
export abstract class BaseFormComponent implements OnInit {

  abstract resource: BaseService;
  object: any = {};

  loaded: boolean = false;

  constructor(
    protected injector: Injector,
    protected activatedRoute: ActivatedRoute,
    protected router: Router
    ){
    
  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.resource.get(params.id).subscribe(form => {
        this.object = form;
        this.loaded = true;
      })
    })
  }

  setValue(event, fieldName:string){
    this.object[fieldName] = event.value;
    console.log(event);
    
  }

  save(){
    this.resource.update(this.object.id, this.object).subscribe(
      updated => this.object = updated
    )
  }

  close(){
    window.history.back()
  }

}
