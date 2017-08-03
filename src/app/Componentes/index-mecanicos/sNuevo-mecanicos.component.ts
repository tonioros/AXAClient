import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie";
import { MecanicoService } from '../../Servicios/mecanico-servicio.service'

@Component({
  selector: 'app-sNuevo-mecanicos',
  templateUrl: './sNuevo-mecanicos.component.html',
  styles: []
})
export class SNuevoComponent implements OnInit {
  nombreEmpresa:string = '';
  servicios:any[] = [];
  comentarios:any[] =[];
  detalleServicios:any[] = [];
  idMecanico = localStorage.getItem('UDI');
  facturaBuscada;
  modelDetalle = {
    idServicio: 0,
    descripcion: '',
    subtotal: 0
  }
  modelFactura = {
    idServicio: 0,
    fecha: '',
    idUsuario: localStorage.getItem('UDI'),
    total: 0,
    idEmpresa: localStorage.getItem('UIDE')
  }
  modelComentario = {
    idCliente: localStorage.getItem('UDI'),
    idServicio: 0,
    descripcion: ''
  }
  constructor(private _cookie:CookieService, private service:MecanicoService) { 

  }

  ngOnInit() {
    this.service.getServiciosNuevos(this.idMecanico).subscribe(res => {
      if (!res.Mensaje){
        this.servicios = res;
      }
    });
    
  }
  
  cargar(data) {
    this.modelDetalle.idServicio = data.idServicio;
    this.modelFactura.idServicio = data.idServicio;
    this.modelComentario.idServicio = data.idServicio;
    this.service.getDetalleServicio(this.modelDetalle.idServicio).subscribe(res =>{
      this.detalleServicios = res;
      console.log(res);
    });
    this.service.getComentarios(this.modelDetalle.idServicio).subscribe(res =>{
      this.comentarios = res;
      console.log(res);
    })
    console.log(data);
  }
  factura(data){
    let to:any = 0;
    this.service.getDetalleServicio(data.idServicio).subscribe(res =>{
      this.detalleServicios = res;
    })
    for(let variable of this.detalleServicios){
      to = to+variable.subtotal;
    }
    this.modelFactura.total = to;
    this.service.addFactura(JSON.stringify(this.modelFactura)).subscribe(res =>{
      console.log(res);
      this.service.getServiciosNuevos(this.idMecanico).subscribe(res =>{
        this.servicios = res;
      })
    })
  }
  agregarDetalle(){
    console.log(this.modelDetalle)
    this.service.addDetalleServicio(JSON.stringify(this.modelDetalle)).subscribe(res => {
      console.log(res);
      this.service.getDetalleServicio(this.modelDetalle.idServicio).subscribe(res =>{
        this.detalleServicios = res;
      })
    });
  }

  recargarComentario(id:any){
    setTimeout(() => {
      this.service.getComentarios(this.modelComentario.idServicio).subscribe(res =>{
        this.comentarios = res;
      })
      this.recargarComentario(this.modelComentario.idServicio)
    }, 3000);
  }

  comentar(){
    this.service.addComentario(JSON.stringify(this.modelComentario)).subscribe(res =>{
      this.recargarComentario(this.modelComentario.idServicio);
    })
  }
}