import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { CookieService } from "ngx-cookie";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise'
@Injectable()
export class UsuarioSevicioService {

  constructor(private _http:Http, private _cookie:CookieService) { }
  autenticar(data:any, callback){
    console.log(data);
    
    this._http.post("http://axaws.herokuapp.com/autenticar", data).toPromise()
    .then(res=>{
      callback(res.json())
    })
    .catch(res=>{
      console.log(res);
      callback(false)
      
    })
  }
}
