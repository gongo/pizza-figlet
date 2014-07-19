new Vue
  el: '#demo'

  components:
    clippy: require('components/clippy')
    emoji: require('components/emoji')

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
      superagent
        .get('https://api.github.com/emojis')
        .end (res) =>
          @emojiUrls = JSON.parse(res.text)

    updateFigletText: (text) ->
      superagent
        .get('/figlet')
        .query({ text: text })
        .end (res) =>
          @figletText = res.text

    updateEmojiText: (text) ->
      emojiText = text.replace(/\S/g, ':pizza:').replace(/[^\n\S]/g, ':cloud:')
      @emojiText = emojiText

    updatePrintEmojiUrls: (text) ->
      @printEmojiUrls.length = 0
      re = /(?::([\w+-]+?):|\n)/g # :emoji-syntax: or return code

      while (m = re.exec(text))?
        key = m[1]
        @printEmojiUrls.push @emojiUrls[key]
