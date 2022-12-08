const express = require('express');
const client = require('./client/network');
const product = require('./Product/network');
const market = require('./Market/network');

const app = express();
//const router = express.Router();


app.use('/client', client);
app.use('/product', product);
app.use('/market', market);



module.exports = app;