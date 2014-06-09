vm = new Vue
  el: '#demo'

  created: ->
    @$watch 'figletText', (newFigletText) ->
      @updateEmojiText(newFigletText)

  data:
    figletText: ''
    emojiText: ''

  methods:
    updateEmojiText: (text) ->
      emojiText = text.replace(/\S/g, ':pizza:').replace(/[^\n\S]/g, ':cloud:')
      @$set 'emojiText', emojiText

    updateFigletText: (text) ->
      figlet text, 'Old Banner', (err, resultText) =>
        @$set 'figletText', resultText
