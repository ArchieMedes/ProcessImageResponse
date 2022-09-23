module.exports = async function (context, req) {
    
    console.log(`Consumo de API ProcessImageResponse de tipo POST`);
    const { Option } = req.body;
    
    if( Option === '1' ){
        
        /*let responseBody = {
            response: {
                code: "00",
                webServiceResponse: 'https://stgaccintebotne5t7ecgyzx.blob.core.windows.net/multimedia/tal vez.jpg' 
            }
        }

        res.send(responseBody);*/
        
        context.res = {
            body: {
                response: {
                    code: "00",
                    webServiceResponse: 'https://stgaccintebotne5t7ecgyzx.blob.core.windows.net/multimedia/tal vez.jpg' 
                }
            }  
        };
    } else {
        
        /*let responseBody = {
            response: {
                code: "01",
                webServiceResponse: 'ERROR A LA HORA DE RECIBIR LA PETICIÓN. ERROR EN LA PETICIÓN' 
            }
        }
        res.send(responseBody);*/
        
        context.res = {
            body: {
                response: {
                    code: "01",
                    webServiceResponse: 'ERROR A LA HORA DE RECIBIR LA PETICIÓN. ERROR EN LA PETICIÓN' 
                }
            }  
        };
    }
}