/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
          $: true,
          Index: true
        }
      },
      src: {
        src: ['app/assets/javascripts/**/*.js', '!app/assets/javascripts/lib/**/*.js', '!app/assets/javascripts/script.js', '!app/assets/javascripts/featured.js', '!app/assets/javascripts/init.js', '!app/assets/javascripts/home-preloader.js']
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);

};
