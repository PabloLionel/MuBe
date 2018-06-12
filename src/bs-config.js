module.exports = {
  "server": {
    baseDir: "./public/dist/"//por defecto es ./ pero no tenemos el proyecto en la raiz
  },
  "files": [
    "./public/dist/html/*.html",
    "./public/dist/css/*.css",
    "./public/dist/js/*.js",
    "./public/dist/img/*.*"
  ],
  "browser": "default",
  "injectChanges": true,
  "online": false,
  "open": false,
  "port": 3000,
  "proxy": false,
  "notify": false,
  "watchTask": true
};
