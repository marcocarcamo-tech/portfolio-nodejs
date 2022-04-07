const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

//Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'))
app.set ('view engine', 'ejs');

//Middlewares

//Routes
app.use(require('./routes/index'));


//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Listening the server
app.listen(app.get ('port'), (req, res) =>{
    console.log('Server on port ' + app.get ('port'));
});