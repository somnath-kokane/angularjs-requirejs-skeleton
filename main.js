/* 
 * @Author: somnath
 * @Date:   2015-06-16 17:08:02
 * @Last Modified by:   somnath
 * @Last Modified time: 2015-06-16 20:27:26
 */

'use strict';


(function(factory) {

    var main = factory();
    var root = this;
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = main;
        } else {
            exports.config = main.config;
            exports.init = main.init;
        }
    } else {
        root.main = main;
        requirejs.config(main.config);
        main.init();
    }

}(function() {
    return {
        init: function(){
            requirejs([
                'jquery',
                'angular',
                'angular-route',
                'text'
            ], function(){
                requirejs([
                    'app'
                ], function(app){
                    app.init();
                    angular.element(document).ready(function(){
                        angular.bootstrap(document, [app.moduleName]);
                    });
                });
            });
        },
        config: {
            urlArgs: (new Date()).getTime(),
            waitSeconds: 0,
            paths: {
                'jquery': 'vendor/jquery/jquery',
                'angular': 'vendor/angular/angular',
                'text': 'vendor/requirejs-text/text',
                'angular-route': 'vendor/angular-route/angular-route',
            },
            shim: {
                'angular': {
                    exports: 'angular'
                },
                'angular-route': ['angular']
            },
            priority: ['jquery', 'angular']
        }
    };
}));