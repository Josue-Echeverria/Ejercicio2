import Page from "page"
import { SamsungA10 } from "./Phone/samsungA10"
import { Iphone8 } from "./Phone/iphone8"

const devicesCustomRender = {}
// Dispositivos de ejemplo 
devicesCustomRender["SamsungA10"] = new SamsungA10()
devicesCustomRender["Iphone8"] = new Iphone8()
//...

/*
Esta es el request que se deberia de llamar para renderizar la pagina
*/

export function sendPage(req, res){
    try{
        const page = new Page(devicesCustomRender[req.params.deviceModel], getItemsAvailable())
        res.json(page)
    } 
    catch (error) {
        res.status(500).send('Error fetching data.');
    }
}

async function getItemsAvailable(req, res){
    /**
     * Deberia de hacer un request a la base de datos para verificar cuales articulos estan en inventario
     * La base de datos deberia de retornar el codigo de articulo y cuantos hay 
     */
    return [{"NE0092": 32}, {"X1A34": 10}, {"NQ5690": 90}]
}