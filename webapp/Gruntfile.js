var config = function(name) {
  return require('./grunt-tasks/' + name + '.js');
};

module.exports = function (grunt) {
  require('matchdep')
    .filterDev('grunt-*')
    .forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: config('watch'),
    connect: config('connect'),
    emberTemplates: config('ember-templates'),
    uglify: config('uglify'),
    concat: config('concat')
  });

  grunt.registerTask('vsdevbuild', ['emberTemplates:dev', 'concat:vsvendor', 'concat:vsdev']);
  grunt.registerTask('vsdistbuild', ['emberTemplates:dist', 'uglify:vendor', 'uglify:dist']);

  grunt.registerTask('build', ['emberTemplates:dist', 'uglify:vendor', 'uglify:dist']);
  grunt.registerTask('server', ['emberTemplates:dev', 'uglify:vendor', 'uglify:dev', 'connect', 'watch']);
};