import Vue from 'vue'
Vue.config.devtools = true

import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)

import App from './App.vue'

new Vue({
    el: '#app',
    render: h => h(App)
})
// vim: set ts=4 sw=4 et:
