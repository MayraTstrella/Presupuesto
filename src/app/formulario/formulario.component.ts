import { Component, OnInit, Output } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoService } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoService } from '../ingreso/ingreso.servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  implements OnInit{
  op :string = "ing";
  descripcionInp : string;
  valorInp: number;

  constructor( private ingServicio: IngresoService,
               private egrServicio: EgresoService ) {

  }
  
  ngOnInit() {
     
    }

    operacion(evento) {
      this.op = evento.target.value;
    }
  
    ingresarValor() {
      if (this.op === "ing")
      this.ingServicio.ingresos.push( new Ingreso(this.descripcionInp, this.valorInp));
      else
      this.egrServicio.egresos.push( new Egreso(this.descripcionInp, this.valorInp));
    }


}
