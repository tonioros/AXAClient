import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
    public state= {out: true, in1:false}
    constructor() { }

    ngOnInit() { }

    getEstado() {
        if (localStorage.getItem("UDI") != null) {
            this.state.out = false;
            this.state.in1 = true;
        }
        return (this.state.out && !this.state.in1);
    }
}