module.exports =
  props: ['source']

  template: require('./template.html')

  methods:
    selectSource: (e) ->
      e.target.select()
