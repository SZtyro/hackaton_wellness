import { AfterViewInit, Component, Directive, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BaseService } from 'src/app/service/base.service';

@Directive()
export abstract class BaseFormComponent implements AfterViewInit {

  abstract resource: BaseService;
  object: any = {};

  loaded: boolean = false;

  constructor(
    protected injector: Injector,
    protected activatedRoute: ActivatedRoute,
    protected router: Router
    ){
    
  }
  
  ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.resource.get(params.id).subscribe(form => {
        this.object = form;
        this.loaded = true;
        this.onObjectReady();
    })
  })
  
 }

  onObjectReady(){

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

  delete(){
    this.resource.delete(this.object.id).subscribe(
      () => this.close()
    )
  }

  close(){
    window.history.back()
  }

}
