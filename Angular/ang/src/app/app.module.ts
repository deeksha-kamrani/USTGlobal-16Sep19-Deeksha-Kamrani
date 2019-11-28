import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { AboutComponent } from './About/about.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './Home/home.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';
import { EventBindingComponent } from './data-binding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './data-binding/two-way-binding/two-way-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { StructuralDirectiveComponent } from './directive/structural-directive/structural-directive.component';
import { NgIfComponent } from './directive/structural-directive/ng-if/ng-if.component';
import { NgForComponent } from './directive/structural-directive/ng-for/ng-for.component';
import { NgSwitchComponent } from './directive/structural-directive/ng-switch/ng-switch.component';
import { CustomDirective } from './custom.directive';
import { RegisterComponent } from './register/register.component';

import { DollarPipe } from './dollar.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HomeComponent,
    AboutComponent,
    HelpComponent,
    FooterComponent,
    DataBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    DirectiveComponent,
    StructuralDirectiveComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    CustomDirective,
    RegisterComponent,
    DollarPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'home', component : HomeComponent },
      {path : 'about', component : AboutComponent},
      {path : 'help', component : HelpComponent},
      {path : 'property-binding' , component : PropertyBindingComponent},
      {path : 'event-binding' , component : EventBindingComponent},
      {path : 'two-way-binding' , component : TwoWayBindingComponent},
      {path : 'ng-if' , component : NgIfComponent},
      {path : 'ng-switch' , component : NgSwitchComponent},
      {path : 'ng-for' , component : NgForComponent},
      {path : 'register' , component : RegisterComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
