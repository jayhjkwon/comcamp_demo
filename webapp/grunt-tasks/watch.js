var LIVERELOAD_PORT = 35729;

module.exports = {
  options: {
    spawn: false,
    livereload: LIVERELOAD_PORT
  },
  js: {
    tasks: ['uglify:dev'],
    files: ['js/**/*.js', '!js/**/*.min.js', '!js/bundle.js']
  },
  hbs: {
    tasks: ['emberTemplates:dev'],
    files: ['templates/**/*.hbs']
  }
};