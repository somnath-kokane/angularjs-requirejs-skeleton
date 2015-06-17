/* 
* @Author: somnath
* @Date:   2015-06-16 20:20:05
* @Last Modified by:   somnath
* @Last Modified time: 2015-06-17 11:59:52
*/

'use strict';

define(function(){

    return HomeCtrl;

    function HomeCtrl($rootScope, $scope, AppSvc){
        $rootScope.metaTitle = 'Home - Sample Angular Web Application';
    }
});