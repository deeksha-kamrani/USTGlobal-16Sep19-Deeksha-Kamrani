import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { DubaiComponent } from './home/dubai/dubai.component';
import { RussiaComponent } from './home/russia/russia.component';
import { ChinaComponent } from './home/china/china.component';
import { UsaComponent } from './home/usa/usa.component';
import { SportsComponent } from './categories/sports/sports.component';
import { EntertainmentComponent } from './categories/entertainment/entertainment.component';
import { GeneralComponent } from './categories/general/general.component';
import { BuisnessComponent } from './categories/buisness/buisness.component';
import { ScienceComponent } from './categories/science/science.component';
import { HealthComponent } from './categories/health/health.component';
import { TechnologyComponent } from './categories/technology/technology.component';
import { TimesComponent } from './source/times/times.component';
import { BbcComponent } from './source/bbc/bbc.component';
import { FoxComponent } from './source/fox/fox.component';
import { EspnComponent } from './source/espn/espn.component';
import { NationalgeographicComponent } from './source/nationalgeographic/nationalgeographic.component';
import { ThehinduComponent } from './source/thehindu/thehindu.component';
import { MirrorComponent } from './source/mirror/mirror.component';
import { UsatodayComponent } from './source/usatoday/usatoday.component';
import { News24Component } from './source/news24/news24.component';
import { SourceComponent } from './source/source.component';
import { KingComponent } from './king/king.component';



const routes: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'category' , component : CategoriesComponent},
  {path : 'source' , component : SourceComponent},
  {path: 'dubai' , component : DubaiComponent},
  {path: 'russia' , component : RussiaComponent},
  {path: 'usa' , component : UsaComponent},
  {path: 'china' , component : ChinaComponent},
  {path: 'sports' , component : SportsComponent},
  {path: 'entertainment' , component : EntertainmentComponent},
  {path: 'general' , component : GeneralComponent},
  {path: 'buisness' , component : BuisnessComponent},
  {path: 'science' , component : ScienceComponent},
  {path: 'health' , component : HealthComponent},
  {path: 'technology' , component : TechnologyComponent},
  {path: 'times' , component : TimesComponent},
  {path : 'bbc' , component : BbcComponent},
  {path : 'fox' , component : FoxComponent},
  {path : 'espn' , component : EspnComponent},
  {path : 'national' , component : NationalgeographicComponent},
  {path : 'thehindu' , component : ThehinduComponent},
  {path : 'mirror' , component : MirrorComponent},
  {path : 'usatoday', component : UsatodayComponent},
  {path : 'news24' , component : News24Component},
  {path : 'king' , component : KingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
