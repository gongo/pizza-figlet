gulp       = require 'gulp'
less       = require 'gulp-less'
minifyJs   = require 'gulp-uglify'
minifyCss  = require 'gulp-minify-css'
concat     = require 'gulp-concat'
browserify = require 'browserify'
source     = require 'vinyl-source-stream'
buffer     = require 'vinyl-buffer'

gulp.task 'server', ->
  require './web.js'

gulp.task 'watch', ->
  gulp.watch ['./app/application.coffee', './app/components/*.vue'], ['js']
  gulp.watch ['./app/styles/*.less'], ['css']

gulp.task 'js', ->
  browserify
    entries: './app/application.coffee'
    transform: ['coffeeify', 'vueify']
  .bundle()
  .pipe source('build.js')
  # .pipe buffer()
  # .pipe minifyJs()
  .pipe gulp.dest('public/build')

gulp.task 'css', ->
  gulp.src 'app/styles/*.less'
  .pipe less()
  .pipe concat('build.css')
  .pipe minifyCss()
  .pipe gulp.dest('public/build')

gulp.task 'default', ['js', 'css']
gulp.task 'dev', ['server', 'watch']
