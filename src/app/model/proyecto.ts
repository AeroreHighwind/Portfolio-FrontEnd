export class Proyecto {
    id?: number;
    nombrePro: string;
    descripcionPro: string;

    constructor(nombrePro: string, descripcionPro: string) {
        this.nombrePro = nombrePro;
        this.descripcionPro = descripcionPro;
    }
}
