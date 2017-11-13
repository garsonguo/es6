import gulp from "gulp";
import gulpSequence from 'gulp-sequence'

//server一定放到最后执行
gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'serve']))