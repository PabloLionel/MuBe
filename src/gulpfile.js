const
//[[[[[[[[[[TAREAS]]]]]]]]]]
gulp          = require('gulp'),
// [[[[[[[[[[HTML]]]]]]]]]]
pug           = require('gulp-pug'), //compila archivos .pug a .html
// htmlmin       = require('gulp-htmlmin'),
// [[[[[[[[[[CSS]]]]]]]]]]
sass          = require('gulp-sass'),//
autoprefixer  = require('gulp-autoprefixer'),// compatibilisa nuestro css
csscomb       = require('gulp-csscomb'), //formatea los archivos css
cssnano       = require('gulp-cssnano'), //minifica css
// postcss       = require('gulp-postcss'), //para solucionar el problema de los sourcemaps
//  [[[[[[[[[[JS]]]]]]]]]]
concat        = require('gulp-concat'),
//[[[[[[[[[[SystFlow]]]]]]]]]]
plumber       = require('gulp-plumber'), //control de errores
rename        = require('gulp-rename'), //renombra los archivos en el destino
browserSync   = require('browser-sync').create(), //inyecta las salida en el navegador anfitrin
sourcemaps    = require('gulp-sourcemaps'), // mapea el origen
notify        = require("gulp-notify"),
//[[[[[[[[[[Direcs]]]]]]]]]]
SRC           = './public/dev/',
DEST          = './public/dist/';
// DEST_PROD     = './src/server/app/public/';

//Variables Globales:
//=======================================================================

//para capturar el error y no detener el proceso gulp
var onError = function(err) {
  notify.onError({
    title:    "Error",
    message:  "<%= error %>",
  })(err);
  this.emit('end');
};
var plumberOptions = {
  errorHandler: onError,
};

var postCSSOptions = require('./config.postcss.json');
var autoprefixerOptions = postCSSOptions.autoprefixer;

//para renderizar los resultados front-end
var browserSyncConfig = require('./bs-config.js');

//Tareas:
//=======================================================================

gulp.task('pug', () =>{
  gulp.src(SRC + 'view/*.pug')
    .pipe(plumber(plumberOptions))
    .pipe(sourcemaps.init())
    .pipe(pug({
        pretty:true/*para que el resultado no este comprimido*/
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(DEST))
    .pipe(browserSync.stream())
  }
)

gulp.task('sass', ()=>{
  gulp.src([SRC + 'sass/*.scss', SRC + 'sass/*.sass'])
    .pipe(plumber(plumberOptions))
    .pipe(sourcemaps.init({largeFile: true}))
    .pipe(sass())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(csscomb('.csscomb.json'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(DEST +'css/'))
  gulp.src([DEST +'css/main.css'])
    .pipe(cssnano())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(DEST + 'css/'))
    .pipe(browserSync.stream())
})

gulp.task('js', () => {
  gulp.src([SRC + 'js/lib/_helpers.js',SRC + 'js/**/*.js'])
    .pipe(plumber(plumberOptions))
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(DEST + 'js/'))
    .pipe(browserSync.stream())
    // .pipe(gulp.dest(DEST_PROD + 'js/'))
})

gulp.task('prod', ()=>{
  gulp.src([SRC + 'sass/*.scss', SRC + 'sass/*.sass'])
    .pipe(plumber(plumberOptions))
    .pipe(sass())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(csscomb('.csscomb.json'))
    .pipe(cssnano())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('server/static/css/'))
  gulp.src(SRC + 'view/*.pug')
    .pipe(plumber(plumberOptions))
    .pipe(pug({
      pretty:false/*para que el resultado no este comprimido*/
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('server/templates/'))
  gulp.src([SRC + 'js/lib/_helpers.js',SRC + 'js/**/*.js'])
    .pipe(plumber(plumberOptions))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('server/static/js/'))
  gulp.src([SRC + 'img/*.*'])
    .pipe(gulp.dest('server/static/img/'))
})

gulp.task('img', ()=>{
 gulp.src([SRC + 'img/*.*'])
    .pipe(gulp.dest(DEST + 'img/*.*'))
})

gulp.task('default', ['pug','sass','js','img'], ()=>{

  browserSync.init(require('./bs-config.js'));

  gulp.watch([SRC + 'view/**/*.pug'], ['pug']).on('change', browserSync.reload);
  gulp.watch([SRC + 'sass/**/*.scss', SRC + 'sass/**/*.sass'], ['sass']).on('change', browserSync.reload);
  gulp.watch([SRC + 'js/**/*.js'], ['js']).on('change', browserSync.reload);
})
