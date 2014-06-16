module.exports =
  template: require('./templates/clippy')()

  created: ->
    clipboardButton = $('#clippy > button')
    clipboardButton.tooltip()

    ZeroClipboard.config swfPath: "./ZeroClipboard.swf"
    new ZeroClipboard clipboardButton
