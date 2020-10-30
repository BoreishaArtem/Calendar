import Vue from 'vue'
import Vuex from 'vuex'

import Date from './date'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Date,
  }
})
