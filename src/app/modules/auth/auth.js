/* 
* @Author: somnath
* @Date:   2015-06-17 14:30:59
* @Last Modified by:   somnath
* @Last Modified time: 2015-06-17 15:17:01
*/

'use strict';

define([
    'auth/controllers/loginCtrl',
    'auth/services/authSvc',
    'text!auth/templates/login.html',
    'text!auth/templates/logout.html'
], function(
    LoginCtrl,
    AuthSvc,
    loginTemplate,
    logoutTemplate){

    var authModule;

    return {
        init: init
    };

    function init(){
        if(authModule){
            return;
        }
        authModule = angular.module('auth', []);
        authModule.factory('AuthSvc', ['$http', AuthSvc]);
        authModule.controller('LoginCtrl', ['$rootScope', '$scope', '$location', 'AuthSvc', LoginCtrl]);
        authModule.config(['$routeProvider', authConfig]);
        authModule.run(['$templateCache', authRun]);
    }

    function authConfig($routeProvider){
        $routeProvider.when('/login/', {
            controller: 'LoginCtrl',
            controllerAs: 'vm',
            templateUrl: 'auth/login.html'
        });
        $routeProvider.when('/logout/', {
            templateUrl: 'auth/logout.html',
            resolve: {
                logout: ['$rootScope', '$q', '$timeout', '$location', logout]
            }
        });
    }

    function logout($rootScope, $q, $timeout, $location){
        var defered = $q.defer();
        $timeout(function(){
            $rootScope.user.isLoggedIn = false;
            defered.resolve(true);
        }, 0);
        return defered.promise;
    }

    function authRun($templateCache){
        $templateCache.put('auth/login.html', loginTemplate);
        $templateCache.put('auth/logout.html', logoutTemplate);
    }

});