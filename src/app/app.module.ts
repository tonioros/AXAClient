//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

//Componentes
import { AppComponent } from './app.component';
import { IndexComponent} from "./Componentes/Index/index.component"
import { LoginComponent } from './Componentes/usuario/login/login.component'
import { CookieModule } from "ngx-cookie";
//Router
import { RouterApp} from "./app.router";
//Servicios
import { UsuarioSevicioService } from "./Servicios/usuario-sevicio.service";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterApp,
    HttpModule,
    FormsModule,
    CookieModule.forRoot()
  ],
  providers: [
    UsuarioSevicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
