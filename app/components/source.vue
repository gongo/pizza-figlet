<template>
    <textarea rows="16" readonly v-model="source" v-on="click: selectSource">
    </textarea>
</template>

<script lang="coffee">
module.exports =
  data: ->
    source: ''

  methods:
    selectSource: (e) ->
      e.target.select()
</script>
