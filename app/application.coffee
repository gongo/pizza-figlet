Vue     = require 'vue'
request = require 'superagent'

new Vue
  el: '#demo'

  components:
    emoji: require('./components/emoji.vue')

  created: ->
    @$watch 'figletText', (newText) -> @updateEmojiText(newText)

  data:
    inputText: ''
    figletText: ''
    emojiText: ''

  methods:
    selectSource: (e) ->
      e.target.select()

    updateFigletText: (text) ->
      request
        .get('/figlet')
        .query({ text: text })
        .end (err, res) =>
          @figletText = res.text

    updateEmojiText: (text) ->
      emojiText = text.replace(/\S/g, ':pizza:').replace(/[^\n\S]/g, ':cloud:')
      @emojiText = emojiText
