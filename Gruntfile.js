//'use strict';

var requirejsConfig = require('./src/main');

module.exports = function(grunt) {
    var globalConfig = {
        srcBasePath: null
    };


    // Project configuration.
    grunt.initConfig({
        globalConfig: globalConfig,
        // This line makes your node configurations available for use
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                options: {
                    targetDir: './src/vendor',
                    cleanTargetDir: true,
                    layout: 'byType'
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    paths: requirejsConfig.config.paths,
                    removeCombined: true,
                    findNestedDependencies: true,
                    fileExclusionRegExp: /(^\.)/,
                    baseUrl: './src',
                    dir: "./dist",
                    optimize: 'uglify2',
                    optimizeCss: 'standard',
                    generateSourceMaps: true,
                    preserveLicenseComments: false,
                    modules: [{
                        name: "main",
                        include: ["vendor/almond/almond"],
                    }],
                    done: function(done, output) {
                        console.log('output', output);
                    }
                }
            }
        }
    });
   
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-bower-task');

    grunt.registerTask('default', ['bower','requirejs']);

};