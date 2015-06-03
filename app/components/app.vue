<template>
    <div class="page-header">
        <h1>Pizza FIGlet</h1>
    </div>

    <div class="row" >
        <component class="col-xs-12 col-md-5" is="input"></div>
    </div>

    <div class="row">
        <component class="col-xs-12 col-md-6" is="source" source="{{emojiText}}"></div>
        <component class="col-xs-12 col-md-6" is="emoji"  source="{{emojiText}}"></div>
    </div>

    <div id="footer">
        <p>
            &copy; 2014 Wataru MIYAGUNI
        </p>
        <p>
            Powered by <a href="http://vuejs.org/">Vue.js</a> and <a href="https://github.com/scottgonzalez/figlet-js">FIGlet.js</a>
        </p>
    </div>
</template>

<script lang="coffee">
module.exports =
  components:
    input: require('./input.vue')
    emoji: require('./emoji.vue')
    source: require('./source.vue')

  data: ->
    emojiText: ''

  events:
    updateEmojiText: (text) ->
      @emojiText = text.replace(/\S/g, ':pizza:').replace(/[^\n\S]/g, ':cloud:')
</script>
