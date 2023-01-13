import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routes';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Page2Component,
    Page3Component,
    Page4Component,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
