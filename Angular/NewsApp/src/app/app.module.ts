import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import { SourceComponent } from './source/source.component';
import { NewssearchComponent } from './newssearch/newssearch.component';
import { DubaiComponent } from './home/dubai/dubai.component';
import { UsaComponent } from './home/usa/usa.component';
import { RussiaComponent } from './home/russia/russia.component';
import { ChinaComponent } from './home/china/china.component';
import { EntertainmentComponent } from './categories/entertainment/entertainment.component';
import { BuisnessComponent } from './categories/buisness/buisness.component';
import { GeneralComponent } from './categories/general/general.component';
import { HealthComponent } from './categories/health/health.component';
import { ScienceComponent } from './categories/science/science.component';
import { SportsComponent } from './categories/sports/sports.component';
import { TechnologyComponent } from './categories/technology/technology.component';
import { TimesComponent } from './source/times/times.component';
import { BbcComponent } from './source/bbc/bbc.component';
import { FoxComponent } from './source/fox/fox.component';
import { EspnComponent } from './source/espn/espn.component';
import { News24Component } from './source/news24/news24.component';
import { ThehinduComponent } from './source/thehindu/thehindu.component';
import { NationalgeographicComponent } from './source/nationalgeographic/nationalgeographic.component';
import { UsatodayComponent } from './source/usatoday/usatoday.component';
import { MirrorComponent } from './source/mirror/mirror.component';
import { KingComponent } from './king/king.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategoriesComponent,
    SourceComponent,
    NewssearchComponent,
    DubaiComponent,
    UsaComponent,
    RussiaComponent,
    ChinaComponent,
    EntertainmentComponent,
    BuisnessComponent,
    GeneralComponent,
    HealthComponent,
    ScienceComponent,
    SportsComponent,
    TechnologyComponent,
    TimesComponent,
    BbcComponent,
    FoxComponent,
    EspnComponent,
    News24Component,
    ThehinduComponent,
    NationalgeographicComponent,
    UsatodayComponent,
    MirrorComponent,
    KingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
