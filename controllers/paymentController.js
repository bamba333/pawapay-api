const pawapay = require('../services/pawapayService');

const { v4 : uuidv4 } = require('uuid');

exports.deposit = async (req , res)=>{
        try {

        const {
            phone,
            amount
        } = req.body;

        const response = await pawapay.post('/deposits', {

            depositId: uuidv4(),

            amount: amount,

            currency: 'XOF',

            country: 'CIV',

            correspondent: 'ORANGE_CI',

            payer: {
                type: 'MSISDN',
                address: {
                    value: phone
                }
            }
        });

        res.json(response.data);

    } catch (error) {

        console.error(error.response?.data);

        res.status(500).json({
            error: error.message
        });
    }
}