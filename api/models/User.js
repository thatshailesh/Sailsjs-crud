/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName : 'users',
  adapter : 'someMysqlServer',
  attributes: {
    firstname : {
      type : 'string',
      required : true
    },
    lastname : {
      type : 'string',
      required : true
    },
    city : {
      type : 'string',
      required : true
    }
  }
};

