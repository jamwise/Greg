module.exports = function(grunt) {
  grunt.initConfig({

    uglify: {
      build: {
        files: {
          'greg.min.js': 'greg.js'
        }
      }
    }

  });

  grunt.registerTask(
    'build', 
    '', 
    [ 'uglify' ]
  );

  grunt.loadNpmTasks('grunt-contrib-uglify');
  
};