gulp    = require "gulp"
espower = require "gulp-espower"
mocha   = require "gulp-mocha"
coffee  = require "gulp-coffee"

paths =
  test: "./test/*.coffee"
  powered_test: "./powered-test/*.js"
  powered_test_dist: "./powered-test/"

gulp.task "power-assert", ->
  gulp.src(paths.test)
      .pipe(coffee())
      .pipe(espower())
      .pipe(gulp.dest(paths.powered_test_dist))

gulp.task "test", ["power-assert"], ->
  gulp.src(paths.powered_test)
      .pipe(mocha())
