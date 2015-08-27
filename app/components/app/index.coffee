require('../../styles/app.less')

module.exports =
  template: require('./template.html')

  components:
    input: require('../input')
    preview: require('../preview')
    source: require('../source')

  data: ->
    emojiText: ''
    emojiList: []

  events:
    updateEmojiText: (text) ->
      @emojiText = text.replace(/\S/g, ':pizza:').replace(/[^\n\S]/g, ':cloud:')
      @emojiList = []
      re = /(?::([\w+-]+?):|\n)/g # :emoji-syntax: or return code
      while (m = re.exec(@emojiText))?
        key = m[1]
        @emojiList.push(key)
