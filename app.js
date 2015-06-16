/* 
* @Author: somnath
* @Date:   2015-06-16 19:52:30
* @Last Modified by:   somnath
* @Last Modified time: 2015-06-16 20:28:12
*/

'use strict';

define([
    'app/services/appSvc',
    'app/controllers/AppCtrl',
    'app/controllers/HomeCtrl',
    'app/directive/sampleDtve',
    'app/modules/todo/todo',
    'app/templates/shell.html',
    'text!app/templates/home.html'
], function(
    AppSvc,
    AppCtrl,
    HomeCtrl,
    sampleDtve,
    todoModule,
    shellTemplate,
    homeTemplate){

    var appModule;

    return {
        init: init,
        moduleName: 'appModule'
    };

    function init(){
        if(appModule){
            return;
        }
        $('#shell').html(shellTemplate);
        appModule = angular.module('appModule', ['ngRoute']);
        appModule.directive('sample', ['$compile', sampleDtve]);
        appModule.factory('AppSvc', ['$http', '$q', AppSvc]);
        appModule.controller('AppCtrl', ['$rootScope', '$scope', 'testSvc', 'appData', AppCtrl]);
        appModule.controller('HomeCtrl', ['$rootScope', '$scope', 'testSvc', 'homeData', HomeCtrl]);
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