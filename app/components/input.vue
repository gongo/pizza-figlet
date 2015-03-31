<template>
    <div id="form">
        <span class="glyphicon glyphicon-pencil"></span>
        Enter the text want to emojinize! (Only <strong>ASCII printable characters</strong>)
        <textarea v-model="inputText" v-on="keyup:updateFigletText(inputText)"></textarea>
    </div>
</template>

<script lang="coffee">
request = require 'superagent'

module.exports =
  data: ->
    inputText: ''

  methods:
    updateFigletText: (text) ->
      request
        .get('/figlet')
        .query({ text: text })
        .end (err, res) =>
          @$dispatch 'updateEmojiText', res.text
</script>
