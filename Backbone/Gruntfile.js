module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options: {

        },
        my_target: {
          files: {
            'dist/output.min.js': ['dist/app.concat.js']
          }
        }
    },
      concat: {
        dist: {
          src: ['js/app.js','js/app1.js'],
          dest: 'dist/app.concat.js',
        },
      },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Default task(s).
  grunt.registerTask('default', ['concat','ugligy']);

};