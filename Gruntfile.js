/**
 *	Gruntfile for building a single page app.
 */
module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-html2js');

	var config = {

		/**
		 *	Directories
		 */
		
		source_dir: 'src',
		build_dir: 'build',
		tmp_dir: 'tmp',
		scss_dir: '<%= source_dir %>/scss',
		assets_dir: '<%= source_dir %>/assets',
		js_dir: '<%= source_dir %>/js',
		vendor_dir: '<%= source_dir %>/vendor',
		templates_dir: '<%= source_dir %>/templates',

		pkg: grunt.file.readJSON("package.json"),

		/** 
		 *	Task configurations
		 */

		// Concat JS to a single file.
		concat: {
			js: {
				options: {
					sourceMap: true
				},
				src: [ 
					'<%= js_dir %>/*.js',
					'<%= js_dir %>/**/*.directive.js',
					'<%= js_dir %>/**/*.service.js',
					'<%= js_dir %>/**/*.model.js',
					'<%= js_dir %>/**/*.controller.js',
					'<%= js_dir %>/**/*.js'
				],
				dest: '<%= build_dir %>/code.js'
			}
		},

		// Scss, with globbing.
		sass: {
			options: {
				require: 'sass-globbing'
			},
			dist: {
				files: {
					'<%= build_dir %>/css/styles.css' : '<%= scss_dir %>/main.scss'
				}
			}
		},

		// Copy assets and sources to build directory.
		copy: {
			all: {
				files: [
					{
						src: [ '*.html', 'assets/**/*', 'vendor/**/*' ],
						dest: '<%= build_dir %>',
						cwd: '<%= source_dir %>',
						expand: true
					}
				]
			}
		},

		// Bake HTML templates to angular template cache
		html2js: {
			options: {
				base: '<%= templates_dir %>',
				module: 'angularTemplates',
				singleModule: true,
				useStrict: true,
				htmlmin: {
					collapseBooleanAttributes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			},
			templates: {
				src: ['<%= templates_dir %>/**/*.html'],
				dest: '<%= build_dir %>/templates.js'
			}
		},

		// Watch task.
		watch: {
			sass: {
				files: ['<%= scss_dir %>/**/*.scss'],
				tasks: ['sass']
			},
			all: {
				files: ['<%= source_dir %>/**/*', '!<%= scss_dir %>/**/*', '!<%= js_dir %>/**/*'],
				tasks: ['copy:all']
			},
			js: {
				files: ['<%= js_dir %>/**/*.js', '!<%= js_dir %>/**/*.spec.js'],
				tasks: ['concat:js']
			},
			tpl: {
				files: ['<%= source_dir %>/templates/**/*.html'],
				tasks: ['html2js']
			}
		}
	};

	grunt.initConfig(config);

	grunt.registerTask('build', ['sass:dist', 'copy:all', 'concat:js', 'html2js:templates']);
	grunt.registerTask('default', ['build', 'watch']);


};