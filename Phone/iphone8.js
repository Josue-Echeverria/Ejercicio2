import { DefaultFeatures } from "../defaultFeatures";

export class Iphone8 {
    constructor() {
        this.DefaultFeatures = new DefaultFeatures();// Todo dispositivo debe de poseer tambien las caracteristicas actuales
        this.customFeatures = {
            "Vista 360": () =>{
                //Aqui deberia de venir la implementacion del Vista 360 para el Iphone8
            },  
            "IA Help": () =>{
                //Aqui deberia de venir la implementacion del IA Help para el Iphone8
            },  
            "HD Video": () =>{
                //Aqui deberia de venir la implementacion del HD Video para el Iphone8
            }  
        };
    }
}