const axios = require('axios');

exports.handleWebhook = async (req , res) =>{
    try{
        
        let payment = req.body;
        if(payment.status === 'COMPLETED'){
            
            // RECUPERER LES INFORMATIONS DU PAIEMENT
            let amount = payment.amount;
            let country = payment.country;
            let currency = payment.currency;
            let depositId = payment.depositId;
            let created = payment.created;
            let phoneNumber = payment.payer.accountDetails.phoneNumber;
            let provider = payment.payer.accountDetails.provider;
            let providerTransactionId = payment.providerTransactionId;

                await axios.post('https://https://unverdant-shily-mayson.ngrok-free.dev/payment/api/render',
                    {
                       montant: amount,
                       pays : country,
                       devise: currency,
                       depositId: depositId,
                       date: created,
                       numero: phoneNumber,
                       operateur: provider,
                       operateurId: providerTransactionId
                    }
                );
            
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

module.exports = {
    handleWebhook
};