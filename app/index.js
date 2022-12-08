const  express = require('express');
const config = require('./config/config');
const bodyParser = require('body-parser');
const router = require('./components/routes')

const app = express();
app.use(bodyParser.json());

app.use('/api/', router);
app.get('/', (req, res) => {
    res.send('welcome to me api');
});


//app.use('/api/client', client);
app.listen(config.api.port, ()=>{
    console.log(`API escuchando en el puerto ${config.api.port}`)
});
