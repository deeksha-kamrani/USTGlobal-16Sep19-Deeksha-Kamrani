import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AddBooksComponent } from './add-books/add-books.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { DisplayLibrarianComponent } from './display-librarian/display-librarian.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { RequestBookComponent } from './request-book/request-book.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { IssuedBookComponent } from './issued-book/issued-book.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { AddLibrarianComponent } from './add-librarian/add-librarian.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AuthGuard], data: { roles: ['admin'] }
  },
  {
    path: 'user', component: UserComponent,
    canActivate: [AuthGuard], data: { roles: ['admin', 'user'] }
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addBooks', component: AddBooksComponent },
  { path: 'addStudent', component: AddStudentComponent },
  { path: 'delete-student', component: DeleteStudentComponent },
  { path: 'display-book', component: DisplayBooksComponent },
  { path: 'display-librarian', component: DisplayLibrarianComponent },
  { path: 'add-librarian', component: AddLibrarianComponent },
  { path: 'request-book', component: RequestBookComponent },
  { path: 'request-status', component: RequestStatusComponent },
  { path: 'return-book', component: ReturnBookComponent },
  { path: 'issued-book', component: IssuedBookComponent },
  { path: 'view-request', component: ViewRequestComponent },
  { path: 'dltbook', component: DeleteBookComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
