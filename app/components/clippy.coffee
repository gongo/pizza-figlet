module.exports =
  template: require('./templates/clippy')()

  created: ->
    ZeroClipboard.config swfPath: "./ZeroClipboard.swf"
    new ZeroClipboard document.getElementById('clippy-button')
