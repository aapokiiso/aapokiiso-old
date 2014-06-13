module.exports = function(grunt) {

	/* ------------------------- */
	/*    Grunt configuration    */
	/* ------------------------- */

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			options: {
				httpPath: '/public/',
				sassDir: 'public/sass/',
				cssDir: 'public/css/',
				imagesDir: 'public/img/',
				javascriptsDir: 'public/js/',
				cacheDir: 'public/sass/.sass-cache/'
			},
			development: {
				options: {
					outputStyle: 'expanded'
				}
			},
			production: {
				options: {
					outputStyle: 'compressed'
				}
			}
		},
		jade: {
			options: {
				client: true,
				amd: true,
				namespace: false
			},
			compile: {
				files: [{
					expand: true,
					cwd: 'views/templates/',
					src: ['**/*.jade'],
					dest: 'public/js/templates/',
					ext: '.js'
				}]
			}
		},
		jshint: {
			options: {
				undef: true,
				unused: true,
				force: true,
				reporter: require('jshint-log-reporter'),
			},
			backend: {
				options: {
					globals: {
						require: true,
						module: true
					},
					reporterOutput: 'logs/jshint-backend.log'
				}, 
				files: {
					src: ['routes/**/*.js']
				}
			},
			frontend: {
				options: {
					browser: true,
					globals: {
						define: true,
						require: true
					},
					reporterOutput: 'logs/jshint-frontend.log'
				}, 
				files: {
					src: ['public/js/**/*.js', '!public/js/templates/**/*.js', '!public/js/vendor/**/*.js']
				}
			}
		},
		watch: {
			options: {
				atBegin: true
			},
			development: {
				files: ['public/sass/**/*.scss', 'views/templates/**/*.jade'],
				tasks: ['compass:development', 'jade:compile']
			},
			production: {
				files: ['public/sass/**/*.scss', 'views/templates/**/*.jade'],
				tasks: ['compass:production', 'jade:compile']
			},
			compass: {
				files: ['public/sass/**/*.scss'],
				tasks: ['compass:development']
			},
			jade: {
				files: ['views/templates/**/*.jade'],
				tasks: ['jade:compile']
			}
		}
	});
	
	/* ------------------------- */
	/*    Task initialization    */
	/* ------------------------- */

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	/* ------------------------ */
	/*    Task configuration    */
	/* ------------------------ */

	/**
	*	compile:development
	*		Compile everything in development mode (expanded, with comments etc.).
	*/

	grunt.registerTask('compile:development', function(){

		grunt.task.run('compass:development');
		grunt.task.run('jade:compile');
		grunt.task.run('jshint:lint');

	});

	/**
	*	compile:production
	*		Compile everything in production mode (minified, without comments etc.).
	*/

	grunt.registerTask('compile:production', function(){

		/**
		*	Run all compilation tasks.
		*/

		grunt.task.run('compass:production');
		grunt.task.run('jade:compile');
		grunt.task.run('jshint:lint');

	});

	/**
	*	jshint:lint
	*		Lints (checks for errors, bad practices) both backend and frontend JS.
	*/

	grunt.registerTask('jshint:lint', 'Lints both backend and frontend JS.', function(){
		grunt.task.run('jshint:backend');
		grunt.task.run('jshint:frontend');
	});

};
