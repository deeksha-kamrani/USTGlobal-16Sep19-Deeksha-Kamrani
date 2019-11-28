import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { HeadComponent } from './head/head.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { RouterModule } from '@angular/router';
import { Form5Component } from './form5/form5.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    HeadComponent,
    Form3Component,
    Form4Component,
    Form5Component,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot ([
      {path : 'form1' , component : Form1Component },
      {path : 'form2' , component : Form2Component },
      {path : 'form3' , component : Form3Component },
      {path : 'form4' , component : Form4Component },
      {path : 'form5' , component : Form5Component },
      {path : 'parent' , component : ParentComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
