import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, RouterConfig } from '@angular/router';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Contact } from './contact';

export const ROUTER_CONFIG = [
  { path: '', component: Contact, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    Contact
  ],
  imports: [
    // Components / Directives/ Pipes
    RouterModule.forChild(ROUTER_CONFIG),
    // FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ]
})
export default class ContactModule {
  static routes = ROUTER_CONFIG;
}

