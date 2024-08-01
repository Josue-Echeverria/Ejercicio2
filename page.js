import { DefaultFeatures } from "./defaultFeatures"
export class Page{
    constructor(device, itemsAvailable){
        this.items = itemsAvailable
        if(device === undefined) // Si el device viene indefinido quiere decir que no existen caracteristicas especificas para el dispositivo 
            this.features = new DefaultFeatures()
        else
            this.features = device.customFeatures
    }
}