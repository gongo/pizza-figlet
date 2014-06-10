Vue.component 'emoji', { template: '#emoji-template' }

new Vue
  el: '#demo'

  created: ->
    @fetchEmojiUrls()
    @$watch 'figletText', (newText) -> @updateEmojiText(newText)
    @$watch 'emojiText',  (newText) -> @updatePrintEmojiUrls(newText)

  data:
    inputText: ''
    figletText: ''
    emojiText: ''
    emojiUrls: []
    printEmojiUrls: []

  methods:
    fetchEmojiUrls: ->
      apiUrl = 'https://api.github.com/emojis'

      xhr = new XMLHttpRequest
      xhr.open 'GET', apiUrl
      xhr.onload = =>
        @emojiUrls = JSON.parse(xhr.responseText)
      xhr.send()

    updateFigletText: (text) ->
      figlet text, 'Old Banner', (err, resultText) =>
        @$set 'figletText', resultText

    updateEmojiText: (text) ->
      emojiText = text.replace(/\S/g, ':pizza:').replace(/[^\n\S]/g, ':cloud:')
      @$set 'emojiText', emojiText

    updatePrintEmojiUrls: (text) ->
      @printEmojiUrls.length = 0
      re = /(?::([\w+-]+?):|\n)/g # :emoji-syntax: or return code

      while (m = re.exec(text))?
        key = m[1]
        @printEmojiUrls.push @emojiUrls[key]
