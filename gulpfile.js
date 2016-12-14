var gulp = require('gulp');

var assetsDev = 'assets/';
var assetsProd = 'src/';

var appDev = 'dev/';
var appProd = 'app/';

/* CSS */
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cssClean = require('gulp-clean-css');
var concat = require('gulp-concat');

/* JS & TS */
var typescript = require('gulp-typescript');

var tsProject = typescript.createProject('tsconfig.json');

gulp.task('build-images', function () {
    return gulp.src(assetsDev + 'images/*.{jpg,png,gif}')
      .pipe(gulp.dest(assetsProd + 'images/'));
});

gulp.task('build-fonts', function () {
    return gulp.src(assetsDev + 'fonts/*.woff')
      .pipe(gulp.dest(assetsProd + 'fonts/'));
});

gulp.task('build-htmls', function () {
    return gulp.src(appDev + '**/*.html')
      .pipe(gulp.dest(appProd));
});

gulp.task('build-css', function () {
    return gulp.src(assetsDev + 'scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(cssClean({compatibility: 'ie8'}))
        .pipe(gulp.dest(assetsProd + 'css/'));
});

gulp.task('build-ts', function () {
    return gulp.src(appDev + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write())
        //.pipe(jsuglify())
        .pipe(gulp.dest(appProd));
});

gulp.task('bundle-ts', ['build-ts'], function() {
//     var path = require("path");
//     var Builder = require('systemjs-builder');
//
// // optional constructor options
// // sets the baseURL and loads the configuration file
//     var builder = new Builder('', 'systemjs.config.js');
//
//     // builder
//     //     .buildStatic('app/bundle.js', { minify: true, sourceMaps: true})
//     //     .then(function() {
//     //         console.log('Build complete');
//     //     })
//     //     .catch(function(err) {
//     //         console.log('Build error');
//     //         console.log(err);
//     //     });
});

gulp.task('bundle:vendor', function () {
    return gulp.src([
      'node_modules/zone.js/dist/zone.js',
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js'
      ])
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest(appProd));
});

gulp.task('watch', function () {
    gulp.watch(appDev + '**/*.ts', ['build-ts']);
    gulp.watch(appDev + '**/*.html', ['build-htmls']);
    gulp.watch(assetsDev + '**/*.scss', ['build-css']);
});

gulp.task('assets', ['build-images', 'build-fonts']);

gulp.task('ts', ['build-ts', 'bundle-ts']);
gulp.task('ch', ['build-css', 'build-htmls']);
gulp.task('css', ['build-css']);
gulp.task('html', ['build-htmls']);

gulp.task('default', ['watch', 'build-htmls', 'build-ts', 'bundle-ts', 'build-css', 'bundle:vendor']);
