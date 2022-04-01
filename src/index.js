const express = require('express');
const app = express();

const path = require('path');



//Configuracion del puerto del servidor
app.set('port',4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares


//Routes
app.use(require('./routers/index'));


//Static files


//Escuchando el servidor, iniciando el servidor 
app.listen(app.set('port'), () =>{
    console.log('Server on port', app.set('port'));
});


