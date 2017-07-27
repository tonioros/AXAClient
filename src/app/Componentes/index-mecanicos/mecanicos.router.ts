import { Routes } from '@angular/router';
import { SNuevoComponent } from './sNuevo-mecanicos.component';
import { sTerminadoComponent } from './sTerminado-mecanicos.component';

export const mecanico_Route:Routes = [
    { path: 'serviciosTerminados', component: sTerminadoComponent},
    { path: 'serviciosNuevos', component: SNuevoComponent}
]