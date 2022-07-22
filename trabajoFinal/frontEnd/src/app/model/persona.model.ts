export class persona{
    id?: number; 
    nombre: string;
    apellido: string;
    img: string;
    titulo: string;
    descripcion: string;
    imgPortada: string
    

    constructor(nombre: string, apellido: string, img: string, titulo: string, descripcion: string, imgPortada:string){
        this.nombre = nombre
        this.apellido = apellido
        this.img = img
        this.titulo = titulo
        this.descripcion = descripcion
        this.imgPortada = imgPortada
    }
}
