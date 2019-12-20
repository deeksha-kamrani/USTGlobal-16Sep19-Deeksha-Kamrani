import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {

  }

  get isALoggedIn() {
    return this.auth.isAdminLoggedIn();
  }

  get isLLoggedIn() {
    return this.auth.isLibrarianLoggedIn();
  }

  get isSLoggedIn() {
    return this.auth.isStudentLoggedIn();
  }

  logout() {
    this.auth.isALoggedIn = false;
    this.auth.isLLoggedIn = false;
    this.auth.isSLoggedIn = false;
    this.router.navigate(['/login']);
  }
}