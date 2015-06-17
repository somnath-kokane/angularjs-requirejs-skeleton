/* 
* @Author: somnath
* @Date:   2015-06-16 20:31:58
* @Last Modified by:   somnath
* @Last Modified time: 2015-06-17 14:14:37
*/

'use strict';

define(function(){

    return sampleDtve;

    function sampleDtve($compile, $templateCache){
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'directives/sample.html',
            scope: {},
            link: function(scope, element, attrs){
                scope.onClick = function(){
                    scope.value = 'you clicked me!';                    
                };
            }
        };
    }
});