/* 
* @Author: somnath
* @Date:   2015-06-16 19:52:30
* @Last Modified by:   somnath
* @Last Modified time: 2015-06-18 18:01:57
*/

'use strict';

define([
    'app/services/appSvc',
    'app/controllers/appCtrl',
    'app/controllers/homeCtrl',
    'app/directives/sampleDtve',
    'auth/auth',
    'text!app/templates/shell.html',
    'text!app/templates/home.html',
    'text!app/templates/directives/sample.html'
], function(
    AppSvc,
    AppCtrl,
    HomeCtrl,
    sampleDtve,
    authModule,
    shellTemplate,
    homeTemplate,
    sampleTemplate){

    var appModule;

    return {
        init: init,
        appModuleName: 'mainApp'
    };

    function init(){
        if(appModule){
            return;
        }
        $('#shell').html(shellTemplate);
        appModule = angular.module('app', ['ngRoute']);
        appModule.directive('sample', ['$compile', sampleDtve]);
        appModule.factory('AppSvc', ['$http', '$q', '$timeout', AppSvc]);
        appModule.controller('AppCtrl', ['$rootScope', '$scope', 'AppSvc', AppCtrl]);
        appModule.controller('HomeCtrl', ['$rootScope', '$scope', 'AppSvc', HomeCtrl]);
        appModule.config(['$routeProvider', '$locationProvider', appConfig]);
        appModule.run(['$templateCache', appRun]);
        authModule.init();
        angular.module('mainApp', ['app', 'auth']);
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
        $templateCache.put('directives/sample.html', sampleTemplate);
    }
});