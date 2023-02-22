import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginPageComponent } from './account/login-page/login-page.component';
import { SignupPageComponent } from './account/signup-page/signup-page.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    SignupPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
