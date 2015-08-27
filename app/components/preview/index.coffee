request = require('superagent')

module.exports =
  props: ['names']

  template: require('./template.html')

  data: ->
    emojiUrls: []

  created: ->
    request
      .get('https://api.github.com/emojis')
      .end (err, res) =>
        @emojiUrls = JSON.parse(res.text)

  methods:
    emojiSrc: (name) ->
      @emojiUrls[name]
