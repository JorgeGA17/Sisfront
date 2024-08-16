import { Corte } from "./corte";
import { Periodo } from "./Periodo";
import { Personal } from "./Personal";

export class Presidente{

    presidentePk:number;
    nestado:string;
    ffechaRegistro:string;
    ffechaModificacion:string;
    periodofk: Periodo;
    cortefk: Corte;
    personalfk: Personal;
    fotoUrl: string;
 
}