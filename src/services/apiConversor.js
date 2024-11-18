import axios from "axios";

const apiConversor = axios.create({
    baseURL: 'https://api.openweathermap.org/geo/1.0/direct?q='
});

export default apiConversor;