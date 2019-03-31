var gulp        = require('gulp');
var nodemon     = require('gulp-nodemon');

var ts = require('gulp-typescript');
var tsProject = ts.createProject("tsconfig.json", {});
var sourcemaps = require('gulp-sourcemaps');

var srcPath = {
    src: './ts_src/**/*.ts',
    dest: './'
};

// 静态服务器
gulp.task('start', ['ts'], function() {
   nodemon({
        script: 'app.js',
        ext: 'js',
        env: { 'NODE_ENV': 'development' }
    });
    
    gulp.watch(srcPath.src, ['ts']);
});

gulp.task('ts', function() {

	return gulp.src(srcPath.src)
        .pipe(sourcemaps.init())
		.pipe(ts(tsProject))
        .pipe(sourcemaps.write())
		.pipe(gulp.dest(srcPath.dest));
});