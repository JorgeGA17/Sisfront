import { Corte } from './corte';
import { Especialidad } from './especialidad';
import { Estado } from './estado';

export class Proyecto {
    proyectopk: number;
    xnombreproyecto: string;
    xproblematica: string;
    xresumen: string;
    xobjetivogeneral: string;
    cortefk: Corte;
    estadofk: Estado;
    especialidades: Especialidad[];
  
}
