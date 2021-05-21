const axios = require('axios');

exports.clienteAxios = axios.create({
    baseURL: 'http://localhost:3000/'
});
