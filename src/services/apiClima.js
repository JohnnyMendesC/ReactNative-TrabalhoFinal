import axios from "axios";

const apiClima = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather?'
});

export default apiClima;