import { Egreso } from "./egreso.model";

export class EgresoService {

    egresos: Egreso[] = [
        new Egreso ('Compra Ropa', 9000),
        new Egreso ('Impuesto Casa', 5000)
        
    ];

    eliminar(egreso: Egreso) {
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }

 
}