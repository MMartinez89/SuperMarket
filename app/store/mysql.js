const mysql = require('mysql');

const config = require('../config/config');

const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
};

let conection;

function handleCon(){
    conection = mysql.createConnection(dbConfig);

    conection.connect((err)=>{
        if(err){
            console.error('db error', err);
            setTimeout(handleCon, 2000);
        }else{
            console.log('DB connected');
        }
    })

    conection.on('Error' ,err=>{
        console.error('db error', err);
        if(err.code === 'PROTOCOL_CONECTION_LOST'){
            handleCon()
        }else{
            throw err;
        } 
    })
}

handleCon();

function list(table){
    return new Promise((resolve, reject) =>{
        conection.query(`SELECT * FROM ${table}`, (error, data) =>{
            if(error) return reject(error);
            resolve(data);
        })
    })
}

function getOne(table,id){
    return new Promise((resolve, reject)=>{
        conection.query(`SELECT * FROM ${table} WHERE id = ${id}`, (err, data)=>{
            if(err) return reject(err);
            resolve(data);
        })
    });
}

function insert(table, data){
    return new Promise((resolve, reject)=>{
        conection.query(`INSERT INTO ${table} SET ?`, data, (err, data)=>{
            if(err) return reject(err);
            resolve(data);
        })
    });
}

function update(table,id,data){
    return new Promise((resolve, reject)=>{
        conection.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, id], (err, data)=>{
            if(err)return reject(err);
            resolve(data);
        })
    })
}

function deleted(table, id){
    return new Promise((resolve, reject)=>{
        conection.query(`DELETE FROM ${table} WHERE id = ${id}`,(err, data)=>{
            if(err) return reject(err);
            resolve(data);
        });
    })
}

module.exports = {list,insert, getOne, update, deleted}