module.exports = function(grunt) {

	/* ------------------------- */
	/*    Grunt configuration    */
	/* ------------------------- */

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			options: {
				httpPath: '/public/',
				sassDir: 'public/sass',
				cssDir: 'public/css',
				imagesDir: 'public/img',
				javascriptsDir: 'public/js',
				cacheDir: 'public/sass/.sass-cache'
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
		watch: {
			options: {
				atBegin: true
			},
			compass: {
				files: ['public/sass/**/*.scss'],
				tasks: ['compass:compile']
			}
		}
	});

	
	/**
	*	Load Grunt tasks.
	*/

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	/**
	**	Set Grunt tasks.
	*/

	grunt.registerTask('compass:compile', 'Compiles sass to css.', function(env){

		if(grunt.option('env')) var environment = grunt.option('env');
		else if(env) var environment = env;
		else if(process.env.NODE_ENV) var environment = process.env.NODE_ENV;
		else var environment = "development";

		if(environment == "production"){
			grunt.task.run('compass:production');
		}
		else{
			grunt.task.run('compass:development');
		}

	});

	grunt.registerTask('compile', ['compass:compile']);

};
