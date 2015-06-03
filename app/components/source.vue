<template>
    <div id="source-pizza-figlet">
        <header>FIGlet source</header>
        <section>
            <textarea rows="16" readonly v-model="source" v-on="click: selectSource"></textarea>
        </section>
    </div>
</template>

<script lang="coffee">
module.exports =
  props: ['source']

  methods:
    selectSource: (e) ->
      e.target.select()
</script>
