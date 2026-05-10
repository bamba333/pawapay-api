const axios = require('axios');

exports.handleWebhook = async (req , res) =>{
    try{
        console.log('WEBHOOK PAWAPAY');
        console.log(req.body);
        const payment = req.body[0];
        if(payment.status === 'COMPLETED'){

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