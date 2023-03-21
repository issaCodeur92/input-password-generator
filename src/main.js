import Vue from 'vue'
import InputPasswordGenerator from './InputPasswordGenerator.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(InputPasswordGenerator),
}).$mount('#app')


export default InputPasswordGenerator