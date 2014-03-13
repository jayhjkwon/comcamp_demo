module.exports = {      
  vendor: {
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

  dev: {
    options: {
      mangle: false,
      sourceMap: true,
      beautify: true,
      compress: false
    },
    files: {
      'js/app.min.js': ['js/app.js', 'js/posts.js']
    }
  },

  dist: {
    files: {
      'js/app.min.js': ['js/app.js', 'js/posts.js']
    }
  },

  /* --> visualstudio specific build */
  vsvendor: {
    options: {
      mangle: false,
      compress: false
    },
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
    options: {
      mangle: false,
      compress: false
    },
    files: {
      'js/app.min.js': ['js/app.js', 'js/posts.js']
    }
  }
  /* <-- visualstudio specific build */
};