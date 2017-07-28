import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie";
import { MecanicoService } from '../../Servicios/mecanico-servicio.service'
@Component({
  selector: 'app-index-mecanicos',
  templateUrl: './index-mecanicos.component.html',
  styles: []
})
export class IndexMecanicosComponent implements OnInit {
  nombreEmpresa:string = '';
  constructor(private _cookie:CookieService, private mecService:MecanicoService) { 

    //Esto entrara en funcion cuando el usuario este Logeado por Facebook
    if(this._cookie.get("data") != null) {
      var data = JSON.parse(this._cookie.get("data"));
      localStorage.setItem("UDI", data.idUsuario)
      localStorage.setItem("UNA", data.nombre)
      localStorage.setItem("UROi", data.idTipoUsuario)  
      localStorage.setItem("UIDE", data.idEmpresa)    
      localStorage.setItem("URLI", data.urlIMG)
      this._cookie.removeAll();
      mecService.getEmpresa(localStorage.getItem('UIDE')).subscribe(res =>{
        this.nombreEmpresa = res.nombre;
      });
    }
  }

  ngOnInit() {
  }

}
