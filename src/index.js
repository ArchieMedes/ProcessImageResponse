const express = require('express');
const morgan = require('morgan');
// application
const app = express();

app.set('port', process.env.PORT || process.env.port || 3010);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));  // para obtener datos de status de la app (codigos 200, 404, etc)
app.use(express.json());  // para soportar formatos json por parte de mi servidor

app.use('/test', require('./routes/index')); 
app.use('/api/processImageResponse', require('./routes/processImageResponse'));

app.listen( app.get('port'), () => {
    console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
});