var 
  SERVER_PORT = 8080,
  LIVERELOAD_PORT = 35729,

  insertLiveReloadScript = require('connect-livereload')({
    port: LIVERELOAD_PORT
  }),

  mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
  }
;

module.exports = {
  server: {
    options: {
      port: SERVER_PORT,
      middleware: function (connect) {
        return [
          insertLiveReloadScript,
          mountFolder(connect, '.')
        ];
      }
    }
  }
};