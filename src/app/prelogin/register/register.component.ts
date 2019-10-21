import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  validatingForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      required: new FormControl(null, Validators.required)
    });
  }

  backtoLogin() {
    this.router.navigate(['/login']);
  }

}
