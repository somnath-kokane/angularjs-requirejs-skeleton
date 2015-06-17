/* 
* @Author: somnath
* @Date:   2015-06-16 20:17:47
* @Last Modified by:   somnath
* @Last Modified time: 2015-06-17 14:55:36
*/

'use strict';

define(function(){

    return AppCtrl;

    function AppCtrl($rootScope, $scope, AppSvc) {
        var settings;
        AppSvc.getSettings().then(function(data){
            $rootScope.settings = settings = data || {};
            $rootScope.user = settings.user || {};
        });
    }
});