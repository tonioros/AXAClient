//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

//Componentes
import { AppComponent } from './app.component';
import { IndexComponent} from "./Componentes/Index/index.component";
import { LoginComponent } from './Componentes/usuario/login/login.component';
import { CookieModule } from "ngx-cookie";
import { NavbarComponent } from "./Componentes/navbar/navbar.component";
import { IndexMecanicosComponent } from './Componentes/index-mecanicos/index-mecanicos.component';
import { IndexAdministradorComponent } from './Componentes/index-administrador/index-administrador.component';
import { AutoComponent } from "./Componentes/auto/auto.component";
import { ClienteComponent } from "./Componentes/cliente/cliente.component";
import { FacturaComponent } from "./Componentes/factura/factura.component";
import { MecanicoComponent } from "./Componentes/mecanico/mecanico.component";
import { RegistroComponent } from "./Componentes/usuario/registro/registro.component";
//Router
import { RouterApp} from "./app.router";
//Servicios
import { UsuarioSevicioService } from "./Servicios/usuario-sevicio.service";
import { AdminService } from "./Servicios/admin-servicio.service";

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    IndexComponent,
    LoginComponent,
    NavbarComponent,
    IndexMecanicosComponent,
    IndexAdministradorComponent,
    AutoComponent,
    ClienteComponent,
    FacturaComponent,
    MecanicoComponent
  ],
  imports: [
    BrowserModule,
    RouterApp,
    HttpModule,
    FormsModule,
    CookieModule.forRoot()
  ],
  providers: [
    UsuarioSevicioService,
    AdminService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
