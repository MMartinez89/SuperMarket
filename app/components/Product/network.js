const express = require('express');
const controller = require('./index');
const response = require('../../network/response');

const router = express.Router();

router.get('/', list);
router.get('/:id', getOne)
router.post('/', insert)
router.put('/:id', update);
router.delete('/:id', deleted)

function list(req, res){
    controller.list()
        .then((data)=>{
            response.success(req, res, data, 200);
        }).catch((err)=>{
            response.error(req, res, err.message, 500);
        })
}

function getOne(req, res){
    controller.getOne(req.params.id)   
        .then((data)=>{
            response.success(req, res, data, 200)
        }).catch((err)=>{
            response.error(req, res, err.message, 500)
        })
}

function insert(req, res){
    controller.insert(req.body)
        .then((data)=>{
            response.success(req, res, req.body, 201);
        }).catch((err)=>{
            response.error(req, res, err.message, 500);
        })
}

function update(req, res){
    controller.update(req.params.id, req.body)
        .then((data)=>{
            response.success(req, res, data, 201);
        }).catch((err)=>{
            response.error(req, res, err.message, 500)
        })
}

function deleted(req, res){
    controller.deleted(req.params.id)
        .then((data)=>{
            response.success(req, res, data, 200)
        }).catch((err)=>{
            response.error(req, res, err.message, 500)
        })
}

module.exports = router;