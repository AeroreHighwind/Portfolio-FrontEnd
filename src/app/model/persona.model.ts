export class persona{

    id?:number;
    nombre:String;
    apellido:String;
    img:String;
    about:String;
    job:String;
    mainEdu:String;
    location:String;
    locationImg:String;
    locationAltImg:String;
    mainEduImg:String;
    mainEduAltImg:String;


    constructor(nombre:String, apellido:String, img:String, about:String, job:String,
        mainEdu:String, location:String, locationImg:String, locationAltImg:String, 
        mainEduImg:String, mainEduAltImg:String)
        {
       this.nombre = "nombre";
       this.apellido = "apellido";
       this.img = "img";
       this.about = "about";
       this.job = "job";
       this.mainEdu = "mainEdu";
       this.location = "location";
       this.locationImg = "locationImg";
       this.locationAltImg = "locationAltImg";
       this.mainEduImg = "mainEduImg";
       this.mainEduAltImg = "mainEduAltImg";
   }

    public getNombre():String{
        return this.nombre;
    }
}