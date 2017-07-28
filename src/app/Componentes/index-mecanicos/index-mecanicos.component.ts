import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie";

@Component({
  selector: 'app-index-mecanicos',
  templateUrl: './index-mecanicos.component.html',
  styles: []
})
export class IndexMecanicosComponent implements OnInit {

  constructor(private _cookie:CookieService) { 

    //Esto entrara en funcion cuando el usuario este Logeado por Facebook
    if(this._cookie.get("data") != null) {
      var data = JSON.parse(this._cookie.get("data"));
      localStorage.setItem("UDI", data.idUsuario)
      localStorage.setItem("UNA", data.nombre)
      localStorage.setItem("UROi", data.idTipoUsuario)  
      localStorage.setItem("UIDE", data.idEmpresa)    
      localStorage.setItem("URLI", data.urlIMG)
      this._cookie.removeAll();
    }
  }

  ngOnInit() {
  }

}
