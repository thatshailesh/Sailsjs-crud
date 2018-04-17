/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addOrUpdateUser : function(req,res) {

        userParams = req.allParams();
        
        if(typeof userParams.id !== 'undefined') {
           User.update(userParams.id, userParams).then(function (result){
               sails.log('User updated');
               return res.ok();
           });
        } else {
            User.create(userParams).exec(function (err, user) {
                if (err) { return res.serverError(err); }
                sails.log('New user created:', user);
                return res.ok();
            });
        }
    },
    deleteUser : function(req, res) {
        userParams = req.allParams();
        User.destroy({id : userParams.id}).then(function (result){
            sails.log('User deleted');
            return res.ok();
        });
    }
};