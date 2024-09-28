import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  emailFormControl = new FormControl(null, [Validators.required]);
  passwordFormControl = new FormControl(null, [Validators.required]);

  login(register:boolean){
    this.http.post(`api/auth/${register ? 'register' : 'login'}`,{
      username: this.emailFormControl.value,
      password: this.passwordFormControl.value,
    }).subscribe(
      () => this.router.navigate(["/dashboard"]),
    )
  }
}
