import Vue from 'vue'
import Vuex from 'vuex'

import Date from './date'
import Month from './month'
import Modal from './modal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Date,
    Month,
    Modal
  }
})
