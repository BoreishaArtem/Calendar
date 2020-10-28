export default {
    state: {
        day: null
    },
    mutations: {
        createDay(state, payload) {
            state.day = payload
        }
    },
    actions: {
        createDay({ commit }) {
            const thisDay = Date()
            commit('createDay', thisDay)
        }
    },
    getters: {
        getDay(state) {
            return state.day
        }
    }
}