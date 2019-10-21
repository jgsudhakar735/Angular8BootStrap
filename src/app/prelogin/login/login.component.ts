import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule, FormControl  } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  form: FormGroup ;
  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
   });
  }

  registerHere() {
  this.router.navigate(['/register']);
  }

  login() {
    const userName = this.form.get('username');
    const userPassword = this.form.get('password');
    alert('user name:' + userName.value + ':' + userPassword.value);
    this.router.navigate(['core', 'dashboard']);
  }

}
