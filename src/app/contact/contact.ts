import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { HttpEmailService } from "./sendemail";
import { Router } from '@angular/router';
import {Location} from '@angular/common';



@Component({
  templateUrl: 'contact.html',
  providers: [HttpEmailService]

})
export class Contact implements OnInit {

  registerForm: FormGroup; 
  client: Object;
  router:Router;
  

  constructor(private formBuilder: FormBuilder, private _httpEmailService: HttpEmailService,private _location: Location) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      phone: '',
      email: '',
      skype: ''

    });
  }

  returnBack(event) {
    // event.preventDefault();
    // this.client =Object.create(null);
    this._location.back();
    // this.router.navigate(['about']);
  }


  saveClient(value: any) {

    for (var name in this.registerForm.controls) {
      (<FormControl>this.registerForm.controls[name]).updateValue('');
      this.registerForm.controls[name].setErrors(null);
    }

    this._httpEmailService.getEmailRestful(value.phone, value.email, value.skype)
      .subscribe(
      // data => this.sendClientToServer = JSON.stringify(data), // put the data returned from the server in our variable
      data => this.client = data,
      error => console.log("Error HTTP GET Service"), // in case of failure show this message
      () => console.log("OK")//run this code in all cases
      );
  }

}




