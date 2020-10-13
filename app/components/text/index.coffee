request = require 'superagent'

module.exports =
  template: require('./template.html')

  data: ->
    inputText: ''

  methods:
    updateFigletText: (text) ->
      request
        .get('/figlet')
        .query({ text: text })
        .end (err, res) =>
          @$dispatch 'updateEmojiText', res.text
