import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie";

@Component({
  selector: 'app-sNuevo-mecanicos',
  templateUrl: './sNuevo-mecanicos.component.html',
  styles: []
})
export class sTerminadoComponent implements OnInit {
  nombreEmpresa:string = '';
  constructor(private _cookie:CookieService) { 

  }

  ngOnInit() {
  }

}
