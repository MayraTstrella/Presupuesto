import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoService } from './egreso/egreso.servicio';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoService } from './ingreso/ingreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Presupuesto';

  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor( private iService: IngresoService,
               private eService: EgresoService ) {

                this.ingresos = iService.ingresos;
                this.egresos = eService.egresos;
             
  }


  ingresoTotal() {
    let ingresoTotal: number = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor;
    })
    return ingresoTotal;
  }

  egresoTotal() {
    let egresoTotal: number = 0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor;
    })
    return egresoTotal;
  }

  porcentajeTotal() {
    return this.egresoTotal()/this.ingresoTotal();
  }

  presupuestoTotal() {
    return this.ingresoTotal() - this.egresoTotal();
  }


}
