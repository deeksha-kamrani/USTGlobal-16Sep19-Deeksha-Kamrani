import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComposeComponent } from './compose/compose.component';
import { MailpageComponent } from './mailpage/mailpage.component';




@NgModule({
  declarations: [HeaderComponent, HomeComponent, ChangepasswordComponent, LoginComponent, RegisterComponent, ComposeComponent, MailpageComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  exports: [HeaderComponent, HomeComponent, ChangepasswordComponent, LoginComponent]
})
export class UserModule { }
