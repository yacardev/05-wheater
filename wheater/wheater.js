const axios = require('axios');

const getWheater = async(lat, lon) => {

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=2acf64c34678bdcbbfb7643bfad04f79&units=metric`
    });
    const resp = await instance.get();

    if (resp.data === 0) {
        throw new Error(`No se encontro para lataitud: ${ lat }, longitud: ${ lon }`)
    }
    const data = resp.data.main;
    const temp = data.temp;

    return temp
}

module.exports = {
    getWheater
}