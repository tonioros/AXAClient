import { Routes, RouterModule } from "@angular/router"

import { IndexComponent } from "./Componentes/Index/index.component"
import { LoginComponent } from './Componentes/usuario/login/login.component';

const APP_ROUTES:Routes = [
    { path: '', component: IndexComponent },
    { path: 'autenticar', component: LoginComponent }
]

export const RouterApp = RouterModule.forRoot(APP_ROUTES);