/* 
* @Author: somnath
* @Date:   2015-06-17 14:19:45
* @Last Modified by:   somnath
* @Last Modified time: 2015-06-17 14:59:51
*/

'use strict';

define(function(){

    return LoginCtrl;

    function LoginCtrl($rootScope, $scope, $location, AuthSvc){
        var vm = this;
        vm.onSubmit = function(){
            var login = angular.copy(vm.login);
            AuthSvc.login(login, function(err, data){
                if(!err){
                    $rootScope.user.isLoggedIn = true;
                    $location.path('/');
                }
            });
        };
    }
});