exports.config =
  # See http://brunch.io/#documentation for docs.
  sourceMaps: false
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^bower_components/
    stylesheets:
      defaultExtension: 'less'
      joinTo:
        'stylesheets/app.css': /^app\/styles/
