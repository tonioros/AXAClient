import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IndexComponent} from "./Componentes/Index/index.component"
import { AppComponent } from './app.component';

import { RouterApp} from "./app.router"



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterApp
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
