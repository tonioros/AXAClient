import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UsuarioSevicioService } from "../../../Servicios/usuario-sevicio.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  state= {
    show:false,
    title:"",
    mensage:"",
    type:"",
    name:"fa fa-user-circle"
  }
  constructor(private _router:Router, public _usuario:UsuarioSevicioService) { }

  ngOnInit() {
  }
  iniciarSesion(data:NgForm){  
    this.state.name="fa fa-refresh fa-spin"
    this._usuario.autenticar(data.value,(res)=>{
    if(res.Mensaje ==true || res ==true){
      localStorage.setItem("UDI", res.usuario.idUsuario)
      localStorage.setItem("UNA", res.usuario.nombre)
      localStorage.setItem("UROi", res.usuario.idTipoUsuario)  
      localStorage.setItem("UIDE", res.usuario.idEmpresa)    
      localStorage.setItem("URLI", res.usuario.urlIMG)
      this.state.name= "fa fa-user-circle"
      this._router.navigateByUrl(res.location)
      }else{
        this.state.type="alert-warning"
        this.state.name= "fa fa-user-circle"
        this.state.show=true
        this.state.title="Oh oh!"
        this.state.mensage ="Usuario o Contraseña incorrectos, vuelve a intentarlo"
      }
    })

  }
}
