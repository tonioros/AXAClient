import { Routes } from '@angular/router';
import { SNuevoComponent } from './sNuevo-mecanicos.component';
import { sTerminadoComponent } from './sTerminado-mecanicos.component';
import { CalendarioComponent } from './calendario-mecanicos.component'

export const mecanico_Route:Routes = [
    { path: 'calendario', component: CalendarioComponent},
    { path: 'serviciosTerminados', component: sTerminadoComponent},
    { path: 'serviciosNuevos', component: SNuevoComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'calendario'}
]