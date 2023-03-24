
import { Ingreso } from "./ingreso.model";

export class IngresoService {

    ingresos: Ingreso[] = [
        new Ingreso('Salario', 250000)
       
    ];

   elminarIngreso( ingreso: Ingreso) {
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice,1); //borra un solo elemento
   }


        
      
}