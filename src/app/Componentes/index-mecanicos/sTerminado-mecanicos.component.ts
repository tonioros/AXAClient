import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie";
import { MecanicoService } from '../../Servicios/mecanico-servicio.service'

@Component({
  selector: 'app-sTerminado-mecanicos',
  templateUrl: './sTerminado-mecanicos.component.html',
  styles: []
})
export class sTerminadoComponent implements OnInit {
  servicios:any[] = [];
  detalleServicios:any[] = [];
  idMecanico = localStorage.getItem('UDI');
  model:any = {

  }
  constructor(private _cookie:CookieService, private service:MecanicoService) { 

  }


  ngOnInit() {
    
    this.service.getServiciosFinalizados(this.idMecanico).subscribe(res =>{
      this.servicios = res;
    });
  }

  cargar(data) {
    this.model = data;
    this.service.getDetalleServicio(this.model.idServicio).subscribe(res =>{
      this.detalleServicios = res;
      console.log(res);
    });
    /*this.service.getComentarios(this.model.idServicio).subscribe(res =>{
      console.log(res);
    })
    console.log(data);*/
  }

}
