/* 
* @Author: somnath
* @Date:   2015-06-16 21:23:32
* @Last Modified by:   somnath
* @Last Modified time: 2015-06-17 11:04:17
*/

'use strict';

define(function(){

    return AppSvc;

    function AppSvc($http, $q, $timeout){

        var settings = {
            user: {
                id: 1,
                name: 'user name'
            }
        };

        return {
            getSettings: getSettings
        };

        function getSettings(){
            var defered = $q.defer();

            $timeout(function(){
                defered.resolve(settings);
            }, 0);

            return defered.promise;

        }
    }
});