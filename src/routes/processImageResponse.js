const { Router } = require('express');
// router making a new route
const router = Router();

router.get('/', (req, res) => {
    console.log(`Consumo de API ProcessImageResponse de tipo GET`);

    let response = {
        "author": "Daniel Zanabria",
        "webService": "ProcessImageResponse"
    };

    res.json(response);
});

router.post('/', (req, res) => {
    const { Option } = req.body;

    if( Option === '1' ){
        console.log(`Consumo de API ProcessImageResponse de tipo POST`);
        let responseBody = {
            response: {
                code: "00",
                webServiceResponse: 'https://stgaccintebotne5t7ecgyzx.blob.core.windows.net/multimedia/tal vez.jpg' 
            }
        }

        res.send(responseBody);
    } else {
        let responseBody = {
            response: {
                code: "01",
                webServiceResponse: 'ERROR A LA HORA DE RECIBIR LA PETICIÓN. ERROR EN LA PETICIÓN' 
            }
        }
        res.send(responseBody);
    }

});

module.exports = router;