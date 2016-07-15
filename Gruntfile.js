'use strict';

module.exports = function(grunt) {
	// show elapsed time at the end
	require('time-grunt')(grunt);
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		eslint: {
			options: {
				configFile: ".eslintrc.json"
			},
			target: ["js/*.js", "modules/default/*.js", "serveronly/*.js", "*.js"]
		},
		clean: {
			app: ['assets/css/*.css'],
		//	dist: ['dist/']
		},
		jshint: {
						options: {
								node: true,
								curly: true,
								eqeqeq: true,
								immed: true,
								latedef: true,
								newcap: true,
								noarg: true,
								sub: true,
								undef: true,
								unused: true,
								eqnull: true,
								browser: true,
								globals: { jQuery: true },
								boss: true
						},
						gruntfile: {
								src: 'gruntfile.js'
						},
						lib_test: {
								src: ['lib/**/*.js', 'test/**/*.js']
						}
		},
		qunit: {
				files: ['test/**/*.html']
		},
		less: {
			dist: {
				files: {
					'assets/css/main.min.css': 'assets/less/main.less',
					// 'public/css/mc.css': '/Users/rgreathouse/sites/aem/sfdc-marketingcloud/sfdc-marketingcloud-view/src/main/content/jcr_root/etc/clientlibs/sfdc-marketingcloud/clientlibs_base/less/marketingcloud-all.less',
					// 'public/css/app.css' : 'public/less/app.less'
				}
			}
		},
		postcss: {
			lint: {
				options: {
					processors: [
						require("stylelint")({"extends": "stylelint-config-standard", "font-family-name-quotes": "double-where-recommended"}),
						require("postcss-reporter")({ clearMessages: true })
					]
				},
				dist: {
					src: "**/**/**/**/**/**/**/**.css"
				}
			}
		}
	});

	grunt.registerTask("style", [ 'clean', 'less']);

	grunt.registerTask("default", ["eslint", "postcss:lint"]);
};
