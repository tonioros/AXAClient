import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie";

@Component({
  selector: 'app-calendario-mecanicos',
  templateUrl: './calendario-mecanicos.component.html',
  styles: []
})
export class CalendarioComponent implements OnInit {
  nombreEmpresa:string = '';
  constructor(private _cookie:CookieService) { 

  }

  ngOnInit() {
  }

}
