<template>
    <span v-repeat="source | emojiUrl">
        <br v-if="!$value" />
        <img v-if="$value" class="emoji" v-attr="src:$value" />
    </span>
</template>

<script lang="coffee">
request = require('superagent')

module.exports =
  data: ->
    source: ''
    emojiUrls: []

  created: ->
    request
      .get('https://api.github.com/emojis')
      .end (err, res) =>
        @emojiUrls = JSON.parse(res.text)

  filters:
    emojiUrl: (text) ->
      urls = []
      re = /(?::([\w+-]+?):|\n)/g # :emoji-syntax: or return code

      while (m = re.exec(text))?
        key = m[1]
        urls.push @emojiUrls[key]

      urls
</script>
