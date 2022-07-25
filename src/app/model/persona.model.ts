export class persona{

    id?:number;
    nombre:String;
    apellido:String;
    img:String;
    about:String;

    constructor(nombre:String, apellido:String, img:String, about:String){
        this.nombre = "nombre";
        this.apellido = "apellido";
        this.img = "img";
        this.about = "about";
    }

    public getNombre():String{
        return this.nombre;
    }
}