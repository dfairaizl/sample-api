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
        },

        shell: {
            options: {
                stderr: false
            },
            install: {
                command: 'npm install'
            },
            migrate: {
                command: 'knex migrate:latest'
            },
            seed: {
                command: 'knex seed:run'
            }
        }
    };

    // Load the configuration
    grunt.initConfig(cfg);

    grunt.registerTask('dev', 'description', ['express:dev', 'watch']);

    grunt.registerTask('init', ['shell:install', 'shell:migrate', 'shell:seed']);

    // Database Tasks
    grunt.registerTask('migrate', ['shell:migrate']);
    grunt.registerTask('seed', ['shell:seed']);
};

// Export the configuration
module.exports = configureGrunt;
