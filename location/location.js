const axios = require('axios');

const getLocationLatLon = async(ciudad) => {
    const encUrl = encodeURI(ciudad);
    console.log('encUrl: ', encUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encUrl }`,
        headers: { 'x-rapidapi-key': 'a4ac827befmshe20462a385425dbp123730jsn213b312ccd3f' }
    });
    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error(`No se encontro "${ ciudad }"`)
    }
    const data = resp.data.Results[0];
    const name = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        name,
        lat,
        lon
    }
    /*
    instance.get()
        .then((result) => {
            console.log('Respuesta: ', result.data.Results[0]);
        }).catch((err) => {
            console.log('err: ', err);
        });*/
}

module.exports = {
    getLocationLatLon
}