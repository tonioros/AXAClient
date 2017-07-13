import { Routes, RouterModule } from "@angular/router"

import { IndexComponent } from "./Componentes/Index/index.component"

const APP_ROUTES:Routes = [
    { path: '', component: IndexComponent }
]

export const RouterApp = RouterModule.forRoot(APP_ROUTES);