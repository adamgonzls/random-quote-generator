var gulp 					= require('gulp');
var browserSync 	= require('browser-sync').create();
var sass 					= require('gulp-sass');
var autoprefixer 	= require('gulp-autoprefixer');
var ghPages				= require('gulp-gh-pages');

// static server + watch scss/html files
gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server: "./public"
	});

	gulp.watch("./scss/*.scss", ['sass']);
	gulp.watch("./public/*.js").on('change', browserSync.reload);
	gulp.watch("./public/*.html").on('change', browserSync.reload);
});

// compile sass & auto-inject into browsers

//sass
gulp.task('sass', function() {
	return gulp.src('./scss/*.scss')
	.pipe(sass().on('error', sass.logError))
//pipe to autoprefixer
	.pipe(autoprefixer({
		browsers: ['last 5 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('./public'))
	.pipe(browserSync.stream());
});

gulp.task('deploy', function() {
	return gulp.src("./public/**/*")
	.pipe(ghPages());
})

gulp.task('default', ['serve']);