import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie";
import { MecanicoService } from '../../Servicios/mecanico-servicio.service'

@Component({
  selector: 'app-calendario-mecanicos',
  templateUrl: './calendario-mecanicos.component.html',
  styles: []
})
export class CalendarioComponent implements OnInit {
  calendario:any[] = [];
  nombreEmpresa:string = '';
  constructor(private _cookie:CookieService, private service:MecanicoService) { 

  }

  ngOnInit() {
    this.service.getServiciosNuevos(localStorage.getItem('UDI')).subscribe(res =>{
      this.calendario = res;
    })
  }

}
