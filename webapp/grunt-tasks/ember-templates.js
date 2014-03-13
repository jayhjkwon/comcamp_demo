module.exports = {
  dev: {
    options: {
      precompile: false,
      templateName: function(sourceFile) {
        return sourceFile.replace(/templates\//, '');
      }
    },
    files: {
      "templates/templates.js": ["templates/**/*.hbs"]
    }
  },
  dist: {
    options: {
      templateName: function(sourceFile) {
        return sourceFile.replace(/templates\//, '');
      }
    },
    files: {
      "templates/templates.js": ["templates/**/*.hbs"]
    }
  }
};