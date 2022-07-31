export class Habilidad {
    id?:number;
    nombreH:string;
    porcentaje:number;
    hard:boolean;
    imgURL:string;

    constructor(nombreH:string, porcentaje:number, hard:boolean, imgURL:string) {
        this.nombreH = nombreH;
        this.porcentaje = porcentaje;
        this.hard = hard;
        this.imgURL = imgURL;
    }
}
