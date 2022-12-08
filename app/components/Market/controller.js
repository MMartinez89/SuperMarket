const store = require('../../store/mysql');

TABLE = "Market";

module.exports = function(injectable){
   let store = injectable;

   function list(){
    return store.list(TABLE);
   }

   function getOne(id){
        return store.getOne(TABLE, id);
   }

   function insert(body){
    return store.insert(TABLE, body);
   }

   function update(id, body){
        return store.update(TABLE,id, body);
   }

   function deleted(id){
        return store.deleted(TABLE ,id)
   }


   return {list, insert, getOne, update, deleted};

}