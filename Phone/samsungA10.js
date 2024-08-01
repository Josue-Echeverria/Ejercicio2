import { DefaultFeatures } from "../defaultFeatures";

export class SamsungA10 {
    constructor() {
        this.DefaultFeatures = new DefaultFeatures();// Todo dispositivo debe de poseer tambien las caracteristicas actuales
        this.customFeatures = {
            "Resolucion baja calidad": () =>{
                //Aqui deberia de venir la implementacion del Resolucion baja calidad para el SamsungA10
            },  
            "Movimiento giroscopio": () =>{
                //Aqui deberia de venir la implementacion del Movimiento giroscopio para el SamsungA10
            },  
            "Huella digital": () =>{
                //Aqui deberia de venir la implementacion del Huella digital para el SamsungA10
            }  
        };
    }
}