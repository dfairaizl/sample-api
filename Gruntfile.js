// ## Grunt configuration

var configureGrunt = function (grunt) {

    // Load all grunt tasks
    require('matchdep').filterDev(['grunt-*', '!grunt-cli']).forEach(grunt.loadNpmTasks);

    var cfg = {

        pkg: grunt.file.readJSON('package.json'),

        // ### grunt-contrib-watch
        watch: {
            express: {
                files:  ['app.js', 'controllers/*.js', 'models/*.js', 'routes/*.js'],
                tasks:  ['express:dev'],
                options: {
                    nospawn: true
                }
            }
        },

        // ### grunt-express-server
        // Start a Ghost expess server for use in development and testing
        express: {
            options: {
                cmd: 'DEBUG=sample-api',
                script: './bin/www',
                output: 'App is running'
            },

            dev: {
                options: {

                }
            }
        }
    };

    // Load the configuration
    grunt.initConfig(cfg);

    grunt.registerTask('dev', 'description', ['express:dev', 'watch']);
};

// Export the configuration
module.exports = configureGrunt;
