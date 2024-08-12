import { Corte } from './corte';
import { Eje } from './Eje';
import { Especialidad } from './especialidad';
import { Estado } from './estado';
import { Etiqueta } from './Etiqueta';
import { Jerarquia } from './Jerarquia';

export class Proyecto {
    proyectopk: number;
    xnombreproyecto: string;
    xproblematica: string;
    xresumen: string;
    xobjetivogeneral: string;
    cortefk: Corte;
    estadofk: Estado;
    especialidades: Especialidad[];
    etiquetas: Etiqueta[];
    jerarquias:Jerarquia[];
    ejes: Eje[];
}
