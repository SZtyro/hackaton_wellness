import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(
      private http: HttpClient,
      private router: Router
      ){}

 redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
