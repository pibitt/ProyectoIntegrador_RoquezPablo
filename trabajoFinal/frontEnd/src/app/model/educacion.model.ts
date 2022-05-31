export class educacion{
    id?: number; 
    descripcionEdu: string;
    fechaEdu: number;
    imagenEdu: string;
    tituloEdu: string;
    
    

    constructor(descripcioEdu: string, fechaEdu: number, imagenEdu: string, tituloEdu: string){
        this.descripcionEdu = descripcioEdu;
        this.fechaEdu = fechaEdu;
        this.imagenEdu = imagenEdu;
        this.tituloEdu = tituloEdu;
    }
}
