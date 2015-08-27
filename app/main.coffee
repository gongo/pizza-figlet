Vue       = require 'vue'
appConfig = require './components/app'

app = new Vue(appConfig)
app.$mount('#pizza')
