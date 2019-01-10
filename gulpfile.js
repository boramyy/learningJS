const gulp = require('gulp');
const babel = require('gulp-babel');
// 걸프 의존성 작성

gulp.task('default', function (cb) {
  // 걸프가 실행할 작업을 여기 쓴다

  // 노드(서버) 소스
  gulp.src('es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));

  // 브라우저(프론트) 소스
  gulp.src('public/es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public/dist'));

  // return cb();
});
