require('../../styles/app.less')

module.exports =
  template: require('./template.html')

  components:
    text: require('../text')
    preview: require('../preview')
    source: require('../source')

  data: ->
    backgroundEmoji: ':cloud:'
    foregroundEmoji: ':pizza:'
    text: ''

  computed:
    emojiText: ->
      @text.replace(/\S/g, @foregroundEmoji).replace(/[^\n\S]/g, @backgroundEmoji)

    emojiList: ->
      emojiList = []
      re = /(?::([\w+-]+?):|\n)/g # :emoji-syntax: or return code
      while (m = re.exec(@emojiText))?
        key = m[1]
        emojiList.push(key)
      emojiList

  events:
    updateEmojiText: (text) ->
      @text = text
