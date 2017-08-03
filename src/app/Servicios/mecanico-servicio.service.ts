import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { CookieService } from "ngx-cookie";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise'
@Injectable()
export class MecanicoService {

  constructor(private http:Http, private _cookie:CookieService) { }
  uriEmpresa = 'http://axaws.herokuapp.com/api/empresa/';
  uriServicio = 'http://axaws.herokuapp.com/api/servicio/'
  uriDs = 'http://axaws.herokuapp.com/api/ds/'
  uriFactura = 'http://axaws.herokuapp.com/api/factura/'
  uriComentario = 'http://axaws.herokuapp.com/api/cs/'
  getEmpresa(id) {
    let uri2 = this.uriEmpresa + id;
    return this.http.get(uri2).map(response=>{
        return response.json();
    });
  }
  getServiciosFinalizados(idMecanico){
    let uri2 = this.uriServicio+'mec/CF/'+ idMecanico;
    return this.http.get(uri2).map(res =>{
      return res.json();
    })
  }

  getServiciosNuevos(idMecanico){
    let uri2 = this.uriServicio+'mec/SF/'+ idMecanico;
    return this.http.get(uri2).map(res =>{
      console.log(res.json());
      return res.json();
      
    })
  }

  getDetalleServicio(idServicio){
    let uri2 = this.uriDs+'serv/'+ idServicio;
    return this.http.get(uri2).map(res =>{
      return res.json();
    })
  }

  getFactura(idServicio){
      let uri2 = this.uriFactura+'serv/'+idServicio;
      return this.http.get(uri2).map(res =>{
        return res.json();
      })
  }

  addFactura(data){
    let datos = JSON.parse(data);
    return this.http.post(this.uriFactura,datos).map(res =>{
      console.log('Se increso');
      return res.json();
    })
  }

  addComentario(data){
    let datos = JSON.parse(data);
    return this.http.post(this.uriComentario,datos).map(res =>{
      console.log('Se increso');
      return res.json();
    })
  }

  addDetalleServicio(data){
    let datos = JSON.parse(data);
    return this.http.post(this.uriDs,datos).map(res =>{
      return res.json();
    })
  }

  getComentarios(idServicio){
    let uri2 = this.uriComentario+'serv/'+idServicio;
    return this.http.get(uri2).map(res =>{
      return res.json();
    })
  }
}
