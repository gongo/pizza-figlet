gulp       = require 'gulp'
less       = require 'gulp-less'
minifyJs   = require 'gulp-uglify'
minifyCss  = require 'gulp-minify-css'
concat     = require 'gulp-concat'
browserify = require 'browserify'
source     = require 'vinyl-source-stream'
buffer     = require 'vinyl-buffer'

isProduction = ->
  process.env.NODE_ENV == 'production'

gulp.task 'server', ->
  require './web.js'

gulp.task 'watch', ->
  gulp.watch ['./app/main.coffee', './app/components/*.vue'], ['js']
  gulp.watch ['./app/styles/*.less'], ['css']

gulp.task 'js', ->
  stream = browserify
    entries: './app/main.coffee'
    transform: ['coffeeify', 'vueify']
  .bundle()
  .pipe source('build.js')
  .pipe buffer()

  stream.pipe minifyJs() if isProduction()
  stream.pipe gulp.dest('public/build')

gulp.task 'css', ->
  stream = gulp.src 'app/styles/*.less'
  .pipe less()
  .pipe concat('build.css')

  stream.pipe minifyCss() if isProduction()
  stream.pipe gulp.dest('public/build')

gulp.task 'build', ['js', 'css']
gulp.task 'dev', ['build', 'server', 'watch']
