Vue.filter 'figlet', (text) ->

vm = new Vue
  el: '#demo'
  data:
    hoge: ''
  methods:
    figlet: ->
      figlet this.$get('text'), 'Standard', (err, resultText) =>
        this.$set('hoge', resultText)

