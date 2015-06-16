/* 
* @Author: somnath
* @Date:   2015-06-16 19:52:30
* @Last Modified by:   somnath
* @Last Modified time: 2015-06-16 20:29:57
*/

'use strict';

define([
    'app/services/appSvc',
    'app/controllers/AppCtrl',
    'app/controllers/HomeCtrl',
    'app/directives/sampleDtve',
    'app/templates/shell.html',
    'text!app/templates/home.html'
], function(
    AppSvc,
    AppCtrl,
    HomeCtrl,
    sampleDtve,
    shellTemplate,
    homeTemplate){

    var appModule;

    return {
        init: init,
        appModuleName: 'appModule'
    };

    function init(){
        if(appModule){
            return;
        }
        $('#shell').html(shellTemplate);
        appModule = angular.module('appModule', ['ngRoute']);
        appModule.directive('sample', ['$compile', sampleDtve]);
        appModule.factory('AppSvc', ['$http', '$q', AppSvc]);
        appModule.controller('AppCtrl', ['$rootScope', '$scope', 'AppSvc', 'settings', AppCtrl]);
        appModule.controller('HomeCtrl', ['$rootScope', '$scope', 'AppSvc', HomeCtrl]);
        appModule.config(['$routeProvider', '$locationProvider', appConfig]);
        appModule.run(['$templateCache', appRun]);
    }

    function appConfig($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('!');
        $routeProvider.when('/', {
            templateUrl: 'home.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
        }).otherwise({redirectTo:'/'});
    }

    function appRun($templateCache){
        $templateCache.put('home.html', homeTemplate);
    }
});