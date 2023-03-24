import { Component, Input, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos: Ingreso[] = [];

  constructor( private iServicio: IngresoService ) {
    
  }
  ngOnInit(): void {
    this.ingresos = this.iServicio.ingresos;
  }

  borrarIngreso(ingreso: Ingreso) {
    this.iServicio.elminarIngreso(ingreso);
  }
}
