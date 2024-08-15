import { Cargo } from "./Cargo";
import { Comision } from "./Comision";
import { Personal } from "./Personal";

export class Miembro{
    
    miembroPk:number;
    nestado:string;
    ffechaRegistro:string;
    ffechaModificacion:string;
    comisionfk: Comision;
    personalfk: Personal;
    cargofk: Cargo;

}
