import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { ChangepasswordComponent } from './user/changepassword/changepassword.component';
import { RegisterComponent } from './user/register/register.component';


const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'changepassword',component: ChangepasswordComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
