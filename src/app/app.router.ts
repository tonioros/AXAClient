import { Routes, RouterModule } from "@angular/router"

import { IndexComponent } from "./Componentes/Index/index.component"
import { LoginComponent } from './Componentes/usuario/login/login.component';
import { IndexAdministradorComponent } from "./Componentes/index-administrador/index-administrador.component";
import { IndexMecanicosComponent } from "./Componentes/index-mecanicos/index-mecanicos.component";
import { AutoComponent } from "./Componentes/auto/auto.component";
import { ClienteComponent } from "./Componentes/cliente/cliente.component";
import { FacturaComponent } from "./Componentes/factura/factura.component";
import { MecanicoComponent } from "./Componentes/mecanico/mecanico.component";
import { RegistroComponent } from "./Componentes/usuario/registro/registro.component";
import { mecanico_Route } from './Componentes/index-mecanicos/mecanicos.router';

const APP_ROUTES:Routes = [
    { path: '', component: IndexComponent },
    { path: 'autenticar', component: LoginComponent },
    { path: 'sign', component: RegistroComponent },
    { path: 'MEC', component: IndexMecanicosComponent, children: mecanico_Route },
    { path: 'ADM', component: IndexAdministradorComponent,
    children:[
        {path: "auto", component: AutoComponent},
        {path: "cliente", component: ClienteComponent},
        {path: "fact", component: FacturaComponent},
        {path: "mecs", component: MecanicoComponent},
    ] }
]

export const RouterApp = RouterModule.forRoot(APP_ROUTES);