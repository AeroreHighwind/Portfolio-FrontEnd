export class persona{

    id?:number;
    nombre:String;
    apellido:String;
    img:String;
    about:String;
    job:String;
    mainEdu:String;
    location:String;

    constructor(nombre:String, apellido:String, img:String, about:String, job:String, mainEdu:String, location:String){
        this.nombre = "nombre";
        this.apellido = "apellido";
        this.img = "img";
        this.about = "about";
        this.job = "job";
        this.mainEdu = "mainEdu";
        this.location = "location";
    }

    public getNombre():String{
        return this.nombre;
    }
}