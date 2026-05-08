const axios = require('axios');

const pawapay = axios.create({
    baseURL:process.env.PAWAPAY_BASE_URL,
    headers:{
        Authorization:`Bearer ${process.env.PAWAPAY_API_TOKEN}`,
        'Content-Type':'application/json'
    }
});

module.exports = pawapay;
