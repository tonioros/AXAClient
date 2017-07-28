import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
import { CookieService } from 'ngx-cookie';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AdminService {

    constructor(private http: Http) { }

    insertContacto(nombre:string, edad:string, correo:number, contrasena:string, idTipoUsuario:number, idEmpresa:number, callback){
        this.http.post("http://http://axaws.herokuapp.com/api/usuario", {
            nombre: nombre,
            edad: edad,
            correo: correo,
            contrasena: contrasena,
            idTipoUsuario: idTipoUsuario,
            idEmpresa: idEmpresa
        }).toPromise().then((response)=>{
            callback(response.json().Mensaje);
        }).catch((response)=>{
            console.log(response)
            callback(false);});
    }
}