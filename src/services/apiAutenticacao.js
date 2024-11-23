import axios from "axios";

const apiAutenticacao = axios.create({
    baseURL: "https://66fdc9cc69936930895633ef.mockapi.io/Cadastro",
});

export default apiAutenticacao;