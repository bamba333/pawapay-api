const axios = require('axios');

exports.handleWebhook = async (req , res) =>{
    try{
        
        const payment = req.body[0];
        if(payment.status === 'COMPLETED'){

            // RECUPERER LES INFORMATIONS DU PAIEMENT
            const amount = data.amount;
            const country = data.country;
            const currency = data.currency;
            const depositId = data.depositId;
            const created = data.created;
            const phoneNumber = data.payer.accountDetails.phoneNumber;
            const provider = data.payer.accountDetails.provider;
            const providerTransactionId = data.providerTransactionId;

            console.log(amount);

        }
        res.status(200).json({
            success : true
        });
    }catch(error){
        
        console.error(error.message);

        res.status(500).json({
            success:false
        });
    }
}