import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos: Egreso[] = [];
  @Input() ingresoTotal: number; 

  constructor( private eServicio: EgresoService ) {
     
  }

  ngOnInit(): void {
    this.egresos = this.eServicio.egresos;
  }

  borrarEgreso(egreso: Egreso) {
    this.eServicio.eliminar(egreso);
  }

  porcentajeEgr(egreso: Egreso) {
    return egreso.valor/this.ingresoTotal;
  }
}
