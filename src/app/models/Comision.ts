import { Corte } from './corte';
import { Periodo } from './Periodo';


export class Comision {

    comisionPk:number;
    xdescripcion: string;
    nestado: string;
    ffechaRegistro:string;
    ffechaModificacion:string;
    cortefk: Corte;
    periodofk: Periodo;

}