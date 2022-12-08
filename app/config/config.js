module.exports = {
    api:{
        port: process.env.API_PORT || 3001,
    },
    mysql:{
        host:'localhost',
        port:3306,
        user:'root',
        password:'tupassword',
        database: 'SuperMarket'
    }
}