
const axios = require('axios');

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3bf9a28600bb24f1c41ae8c12f615971&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}