import { Routes, RouterModule } from "@angular/router"

import { IndexComponent } from "./Componentes/Index/index.component"
import { LoginComponent } from './Componentes/usuario/login/login.component';
import { IndexAdministradorComponent } from "./Componentes/index-administrador/index-administrador.component";
import { IndexMecanicosComponent } from "./Componentes/index-mecanicos/index-mecanicos.component";
import { mecanico_Route } from './Componentes/index-mecanicos/mecanicos.router';

const APP_ROUTES:Routes = [
    { path: '', component: IndexComponent },
    { path: 'autenticar', component: LoginComponent },
    { path: 'MEC', component: IndexMecanicosComponent, children: mecanico_Route},
    { path: 'ADM', component: IndexAdministradorComponent }
]

export const RouterApp = RouterModule.forRoot(APP_ROUTES);