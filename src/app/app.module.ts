import { NgModule }       from  '@angular/core';
import { BrowserModule }  from  '@angular/platform-browser';
import { FormsModule}     from  '@angular/forms';   // <-- ngModel lives here

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule     // <-- import the FormsModule before binding with [(ngModel)]
  ],
  // every component must be declared in one, and only one, Angular module.
  declarations: [
      AppComponent,
      HeroDetailComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
