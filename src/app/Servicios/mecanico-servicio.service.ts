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

  getEmpresa(id) {
    let uri2 = this.uriEmpresa + id;
    return this.http.get(uri2).map(response=>{
        return response.json();
    });
  }
  
  

}
