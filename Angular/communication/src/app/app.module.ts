import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { BikesComponent } from './bikes/bikes.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { BikeChildComponent } from './bike-child/bike-child.component';
import { MoviesChildComponent } from './movies-child/movies-child.component';
import { LaptopchildComponent } from './laptopchild/laptopchild.component';
import { MobilechildComponent } from './mobilechild/mobilechild.component';
import { CommentComponent } from './comment/comment.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HomeComponent,
    CarsComponent,
    BikesComponent,
    MobilesComponent,
    LaptopsComponent,
    MoviesComponent,
    ChildComponent,
    BikeChildComponent,
    MoviesChildComponent,
    LaptopchildComponent,
    MobilechildComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path : 'home' , component : HomeComponent },
      { path : 'cars' , component : CarsComponent },
      { path : 'bikes' , component : BikesComponent },
      { path : 'mobiles' , component : MobilesComponent },
      { path : 'laptops' , component : LaptopsComponent },
      { path : 'movies' , component : MoviesComponent },
      { path : 'comment-details' , component : CommentDetailsComponent },

  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
