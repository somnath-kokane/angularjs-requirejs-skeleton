/* 
* @Author: somnath
* @Date:   2015-06-17 14:34:43
* @Last Modified by:   somnath
* @Last Modified time: 2015-06-17 14:37:10
*/

'use strict';

define(function(){

    return AuthSvc;

    function AuthSvc($http){
        return {
            login: login
        };

        function login(user, callback){
            callback = callback || angular.noop;
            callback(null, user);
        }
    }
});