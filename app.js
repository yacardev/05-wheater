const location = require('./location/location');
const weather = require('./wheater/wheater');


const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Nombre de la ciudad',
        demand: true
    }
}).argv;
/*
location.getLocationLatLon(argv.ciudad)
    .then(console.log)
    .catch(console.log);

weather.getWheater(-33.310001, -66.349998)
    .then(console.log)
    .catch(console.log);
*/

//const getLocationWheater = async(ciudad) => {
//    const resp = await location.getLocationLatLon(ciudad);
//    if (resp) {
//        const wheater = await weather.getWheater(resp.lat, resp.lon);
//        if (wheater) {
//            return (`Temperatura de ${ ciudad }: ${ wheater }`);
//        } else {
//            throw new Error(`No se puedo definir temperatura para "${ ciudad }", latitud: ${ resp.lat }, longitud: ${ resp.lon }`)
//        }
//
//    } else {
//        throw new Error(`No se encontro "${ ciudad }"`)
//    }
//}

const getLocationWheater = async(ciudad) => {
    try {
        const resp = await location.getLocationLatLon(ciudad);
        //console.log(resp);
        const wheater = await weather.getWheater(resp.lat, resp.lon);
        return (`Temperatura de ${ resp.name }: ${ wheater }`);
    } catch (e) {
        return (`No se pudo definir temperatura para "${ ciudad }"`);
    }

}

getLocationWheater(argv.ciudad)
    .then(console.log)
    .catch(console.log);