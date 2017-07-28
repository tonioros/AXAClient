import { Component, OnInit } from '@angular/core';
import { AdminService } from "../../../Servicios/admin-servicio.service";
import { NgForm } from "@angular/forms"
import { Router } from "@angular/router"

@Component({
    selector: 'app-registro',
    templateUrl: "registro.component.html"
})

export class RegistroComponent implements OnInit {

    constructor(private newUser: AdminService, private _router: Router) { }
    public _data_alert: any = {
        show: false,
        titulo: "",
        mensaje: "",
        state: "alert-success"
    }
    public idMyEmpresa = localStorage.getItem("UIDE");
    ngOnInit() {

    }

    agregarContacto(data: NgForm) {
        console.log(data);
        if (data.valid) {
            this.newUser.insertContacto(data.value.nombre, data.value.edad, data.value.correo, data.value.contrasena, data.value.idTipoUsuario, idEmpresa, (value) => {
                if (value) {
                    setTimeout(() => {
                        this._router.navigate(["contactos"]);
                    }, 2800);
                } else {
                    this._data_alert.show = true;
                    this._data_alert.titulo = "¡No!"
                    this._data_alert.mensaje = "No se pudo completar la solicitud, por favor recarga la pagina"
                    this._data_alert.state = "alert-danger"
                }
            });
        }
    }
}