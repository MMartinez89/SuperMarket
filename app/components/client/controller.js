const strore = require('../../store/mysql')

const TABLE = "CLient";

module.exports = function(injectedStorage){
    let store = injectedStorage;

    if(!store){
        store = require('../../../store/mysql')
 
    }

    function list(){
       return store.list(TABLE);
    }

    function getOne(id){
        return store.getOne(TABLE, id);
    }

    function insert(body){
        return store.insert(TABLE, body)
    }

    function update(id, body){
        return store.update(table, id, body)
    }

    function deleted(id){
        return store.deleted(TABLE, id);
    }

    return {list, insert, getOne, update, deleted}
}