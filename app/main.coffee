Vue       = require 'vue'
appConfig = require './components/app.vue'

app = new Vue(appConfig)
app.$mount('#demo')
