Vue     = require 'vue'
request = require 'superagent'

new Vue
  el: '#demo'

  components:
    emoji: require('./components/emoji.vue')
    source: require('./components/source.vue')

  data:
    inputText: ''
    emojiText: ''

  methods:
    updateFigletText: (text) ->
      request
        .get('/figlet')
        .query({ text: text })
        .end (err, res) =>
          @updateEmojiText(res.text)

    updateEmojiText: (text) ->
      emojiText = text.replace(/\S/g, ':pizza:').replace(/[^\n\S]/g, ':cloud:')
      @emojiText = emojiText
