import Vue from 'vue'
import Vuex from 'vuex'
import Day from './day'
import Month from './month'
import Week from './week'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Day,
    Month,
    Week
  }
})
