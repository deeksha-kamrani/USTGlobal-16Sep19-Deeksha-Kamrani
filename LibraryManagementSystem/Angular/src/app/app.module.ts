import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { AddLibrarianComponent } from './add-librarian/add-librarian.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { DisplayLibrarianComponent } from './display-librarian/display-librarian.component';
import { RequestBookComponent } from './request-book/request-book.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { IssuedBookComponent } from './issued-book/issued-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    HeaderComponent,
    PageNotFoundComponent,
    AddBooksComponent,
    AddLibrarianComponent,
    DisplayBooksComponent,
    AddStudentComponent,
    DeleteStudentComponent,
    DisplayBooksComponent,
    DisplayLibrarianComponent,
    RequestBookComponent,
    RequestStatusComponent,
    ReturnBookComponent,
    ViewRequestComponent,
    IssuedBookComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
