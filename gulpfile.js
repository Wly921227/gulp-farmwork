const path = require('path');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const SSI = require('browsersync-ssi');
const plumber = require('gulp-plumber');
const minify = require('gulp-minify');
const babel = require('gulp-babel');
const less = require('gulp-less');
const LessAutoPrefix = require('less-plugin-autoprefix');
const imagemin = require('gulp-imagemin');
const zip = require('gulp-zip');
const clean = require('gulp-clean');
const connect = require('gulp-connect');

const args = require('process.args')();

// const {OUTPUT_PATH, SCRIPT_PATH, LESS_PATH, HTML_PATH, IMAGES_PATH} = require('./config');
const OUTPUT_PATH = output = path.resolve(__dirname, 'static/');
const SCRIPT_PATH = path.resolve(__dirname, 'app/pages/**/js/*.js');
const LESS_PATH = path.resolve(__dirname, 'app/pages/**/css/*.less');
const IMAGES_PATH = path.resolve(__dirname, 'app/pages/**/images/*.*');
const OTHER_PATH = path.resolve(__dirname, 'app/pages/**/other/*');
const HTML_PATH = path.resolve(__dirname, 'app/pages/**/*.html');

gulp.task('serve', ['default'], function () {
    browserSync.init({
        server: {
            baseDir: [path.resolve(__dirname, './static')],
            middleware: SSI({
                baseDir: path.resolve(__dirname, './static'),
                ext: '.html',
                version: '1.0.0'
            })
        }
    });
    gulp.watch(SCRIPT_PATH, ['js']);
    gulp.watch(LESS_PATH, ['less']);
    gulp.watch(HTML_PATH, ['html']);
    gulp.watch(IMAGES_PATH, ['image']);
    gulp.watch(path.resolve(__dirname, 'static/**/*.html')).on('change', browserSync.reload);
});

gulp.task('less', function () {
    return gulp.src(LESS_PATH)
        .pipe(plumber())
        .pipe(less({
            plugins: [new LessAutoPrefix({browsers: ['last 2 versions'], remove: false})]
        }))
        .pipe(gulp.dest(OUTPUT_PATH))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src(SCRIPT_PATH)
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(OUTPUT_PATH))
        .pipe(browserSync.stream());
});

gulp.task('html', function () {
    return gulp.src(HTML_PATH)
        .pipe(plumber())
        .pipe(gulp.dest(OUTPUT_PATH))
        .pipe(browserSync.stream());
});

gulp.task('image', function () {
    return gulp.src(IMAGES_PATH)
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest(OUTPUT_PATH))
        .pipe(browserSync.stream());
});

gulp.task('other', function () {
    return gulp.src(OTHER_PATH)
        .pipe(plumber())
        .pipe(gulp.dest(OUTPUT_PATH))
        .pipe(browserSync.stream());
});

// build
gulp.task('build', ['default'], function () {
    return gulp.src(path.resolve(__dirname, 'static/**/*'))
        .pipe(plumber())
        .pipe(minify())
        .pipe(gulp.dest('dist'));
});

// product
gulp.task('product', ['build'], function () {
    connect.server({
        port: 3030,
        root: 'dist'
    });
});

// publish
gulp.task('publish', function () {
    let page = args.publish.page ? args.publish.page : '';
    let filePath = path.resolve(__dirname, 'dist/' + (page ? page + '/' : '') + '**/*');
    return gulp.src(filePath)
        .pipe(plumber())
        .pipe(zip((page || 'publish') + '.zip'))
        .pipe(gulp.dest('release'))
});

// clean
gulp.task('clean', function () {
    return gulp.src(OUTPUT_PATH, {read: false})
        .pipe(clean({force: true}))
        .pipe(gulp.dest('../static'));
});

// default
gulp.task('default', ['html', 'js', 'less', 'image', 'other']);
