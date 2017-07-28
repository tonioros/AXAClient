//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

//Componentes
import { AppComponent } from './app.component';
import { IndexComponent} from "./Componentes/Index/index.component";
import { LoginComponent } from './Componentes/usuario/login/login.component';
<<<<<<< HEAD
=======
import { sTerminadoComponent } from './Componentes/index-mecanicos/sTerminado-mecanicos.component';
import { SNuevoComponent } from './Componentes/index-mecanicos/sNuevo-mecanicos.component'
>>>>>>> 024b8e35041153c5a3a37624b84ed0384a09b816
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
<<<<<<< HEAD
import { AdminService } from "./Servicios/admin-servicio.service";
=======
import { IndexMecanicosComponent } from './Componentes/index-mecanicos/index-mecanicos.component';
import { IndexAdministradorComponent } from './Componentes/index-administrador/index-administrador.component';
import { MecanicoService } from './Servicios/mecanico-servicio.service'
>>>>>>> 024b8e35041153c5a3a37624b84ed0384a09b816

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    IndexComponent,
    LoginComponent,
    NavbarComponent,
    IndexMecanicosComponent,
    IndexAdministradorComponent,
<<<<<<< HEAD
    AutoComponent,
    ClienteComponent,
    FacturaComponent,
    MecanicoComponent
=======
    SNuevoComponent,
    sTerminadoComponent
>>>>>>> 024b8e35041153c5a3a37624b84ed0384a09b816
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
<<<<<<< HEAD
    AdminService 
=======
    MecanicoService
>>>>>>> 024b8e35041153c5a3a37624b84ed0384a09b816
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
