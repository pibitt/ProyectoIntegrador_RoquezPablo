export class Proyectos {
    id?: number;
    nombrePro: string;
    descripcionPro: string;
    imagenPro: string;

    constructor(nombrePro: string, descripcionPro: string, imagenPro: string) {
        this.nombrePro = nombrePro;
        this.descripcionPro = descripcionPro;
        this.imagenPro = imagenPro;
    }
}
