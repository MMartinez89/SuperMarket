const store = require('../../store/mysql');

const TABLE = 'Product';

module.exports = function(injectable){
    let store = injectable

    if(!store){
        //store =  require('../../../mysql/index');
        store = require('../../../store/mysql')
 
    }

    function list(){
        return store.list(TABLE);
    }

    function getOne(id){
        return store.getOne(TABLE, id);
    }

    function insert(body){
        return store.insert(TABLE,body)
    }

    function update(id, data){
        return store.update(TABLE, id, data);
    }

    function deleted(id){
        return store.deleted(TABLE, id)
    }


    return {list, insert, getOne, update, deleted}
}