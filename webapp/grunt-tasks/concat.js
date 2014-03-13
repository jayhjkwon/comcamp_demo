module.exports = {
  vsvendor: {
      files: {
        'js/vendor.min.js':
        [
          'bower_components/jquery/jquery.js',
          'bower_components/handlebars/handlebars.js',
          'bower_components/ember/ember.js',
          'node_modules/markdown/lib/markdown.js',
          'bower_components/lodash/dist/lodash.js'
        ]
      }
  },

  vsdev: {
      files: {
        'js/app.min.js': ['js/app.js', 'js/posts.js']
      }
  }
}