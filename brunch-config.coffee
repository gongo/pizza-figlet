exports.config =
  # See http://brunch.io/#documentation for docs.
  sourceMaps: false
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^bower_components/
    stylesheets:
      joinTo: 'app.css'
    templates:
      joinTo: 'app.js'
