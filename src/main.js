import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

registerMicroApps([{
  name: 'vue app',
  entry: { scripts: ['//localhost:8888'] },
  container: '#vueApp',
  activeRule: '/vue'
}],
{
  beforeLoad: [
    app => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name)
    }
  ],
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }
  ]
})
start()
