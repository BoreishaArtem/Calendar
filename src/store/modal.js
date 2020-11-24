export default {
    state: {
        show: false
    },
    mutations: {
        showModal(state) {
            state.show = true
        },
        closeModal(state) {
            state.show = false
        }
    },
    actions: {
        closeModal({ commit }) {
            commit('closeModal')
        },
        showModal({ commit }) {
            commit('showModal')
        }
    },
    getters: {
        modal(state) {
            return state.show
        }
    }
}