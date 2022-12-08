const express = require('express');
const controller = require('./index');
const responde = require('../../network/response');

const router = express.Router();

router.get('/', list);
router.get('/:id', getOne);
router.post('/', insert);
router.put('/:id', update);
router.delete('/:id', deleted);

function list(req, res){
    controller.list()
        .then((data)=>{
            responde.success(req, res, data, 200);
        }).catch((err)=>{
            responde.error(req, res, err.message, 500);
        });
}

function getOne(req, res){
    controller.getOne(req.params.id)
        .then((data)=>{
            responde.success(req, res, data, 200);
        }).catch((err)=>{
            responde.error(req, res, err.message, 500);
        })
}

function insert(req, res){
    controller.insert(req.body)
        .then((data)=>{
            responde.success(req, res, data.body, 201);
        }).catch((err)=>{
            responde.error(req, res, err.message, 500)
        })
}

function update(req, res){
    controller.update(req.params.id, req.body)
        .then((data)=>{
            responde.success(req, res, data.body, 201);
        }).catch((err)=>{
            responde.error(req, res, err.message, 500);
        })
}

function deleted(req, res){
    controller.deleted(req.params.id)
        .then((data)=>{
            responde.success(req, res, data, 200);
        }).catch((err)=>{
            responde.error(req, res, err.message, 500)
        })
}


module.exports = router;