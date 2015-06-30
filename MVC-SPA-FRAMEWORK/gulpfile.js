var gulp = require('gulp');
var concat = require('gulp-concat');
var angularFileSort = require('gulp-angular-filesort');
var strip = require('gulp-strip-line');
var templateCache = require('gulp-angular-templatecache');

gulp.task('buildMenuTemplateCashe', function () {
    return gulp
        .src([
        './ext-modules/psMenu/**/*.html'
    ])
    .pipe(templateCache({
        root: 'ext-modules/psMenu/',
        module: 'psMenu'
    }))
    .pipe(gulp.dest('./ext-modules/psMenu/'))
    ;
});
gulp.task('buildDashboardTemplateCashe', function () {
    return gulp
        .src([
        './ext-modules/psDashboard/**/*.html'
        ])
    .pipe(templateCache({
        root: 'ext-modules/psDashboard/',
        module: 'psDashboard'
    }))
    .pipe(gulp.dest('./ext-modules/psDashboard/'))
    ;
});
gulp.task('buildFrameworkTemplateCashe', function () {
    return gulp
        .src([
        './ext-modules/psFramework/**/*.html'
        ])
    .pipe(templateCache({
        root: 'ext-modules/psFramework/',
        module: 'psFramework'
    }))
    .pipe(gulp.dest('./ext-modules/psFramework/'))
    ;
});
gulp.task('buildJavascript', function () {
    return gulp
        .src([
        './ext-modules/**/*.js'
        ])
    .pipe(angularFileSort()) //sortira po potrebi fajl npr. module prije directiva ili contorlera
    .pipe(strip(["use strict"]))
    .pipe(concat('psFramework.js'))
    .pipe(gulp.dest('./dist/'))
    ;
});
gulp.task('buildJavascript', function () {
    return gulp
        .src([
        './ext-modules/**/*.js'
        ])
    .pipe(angularFileSort())
    .pipe(strip(["use strict"]))
    .pipe(concat('psFramework.js'))
    .pipe(gulp.dest('./dist/'))
    ;
});
gulp.task('buildCSS', function () {
    return gulp
        .src([
        './ext-modules/**/*.css'
        ])
    
    .pipe(concat('psFramework.css'))
    .pipe(gulp.dest('./dist/'))
    ;
});

