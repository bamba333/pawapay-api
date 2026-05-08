
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const paymentRoute = require('./routes/paymentRoutes');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/payment',paymentRoute);

app.listen(process.env.PORT,()=>{
    console.log('Serveur lancé sur :'+process.env.PORT);
})