const axios = require('axios');

exports.handleWebhook = async (req , res) =>{
    try{
        
        let payment = req.body;
        if(payment.status === 'COMPLETED'){
            console.log(payment.amount);
            // RECUPERER LES INFORMATIONS DU PAIEMENT
            const localPayment = global.payments[payment.depositId];
            if(localPayment){
                await axios.post('https://https://unverdant-shily-mayson.ngrok-free.dev/payment/api/render',
                    {
                         userId:
                        localPayment.userId,

                        amount:
                        localPayment.montant,

                        operator:
                        localPayment.operateur,

                        phone:
                        localPayment.phone,

                        depositId:
                        payment.depositId,

                        status:
                        payment.status
                    }
                );
            }
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