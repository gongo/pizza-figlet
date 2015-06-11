<template>
    <div id="result-pizza-figlet">
        <header>Preview</header>
        <section>
            <span v-repeat="names">
                <br v-if="!$value" />
                <img v-if="$value" class="emoji" v-attr="src:emojiSrc($value)" />
            </span>
        </section>
    </div>
</template>

<script lang="coffee">
request = require('superagent')

module.exports =
  props: ['names']

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

</script>
