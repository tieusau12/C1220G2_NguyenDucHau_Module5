import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm !: FormGroup;
  login: boolean = false;

  constructor(private builder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  onLogin() {
    this.login= true;
    if (!this.login){
      return;
    }
    console.log(this.loginForm.value);
  }

  onReset() {
  this.login=false;
  this.loginForm.reset();
  }
}
