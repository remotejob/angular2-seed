import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';


@Component({
  templateUrl: 'contact.html'
  
})
export class Contact {
  localState = {
    email: ''
  };
 
  // constructor() {
  // }
 export class LoginPage {

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit(value, form) {
    if (form.valid) {
      console.log('form value', value);
    } else {
      console.log('form invalid');
    }
  }

doLogin(event) {
    console.log(this.loginForm.value);
    event.preventDefault();
  }


}
