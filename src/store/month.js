export default {
    state: {
        month: null,
        daysInMonth: null,
        year: null
    },
    mutations: {
        setUpMonth(state, payload) {
            state.month = payload.month,
                state.year = payload.year,
                state.daysInMonth = payload.daysInMonth
        },
        onToday(state, payload) {
            state.month = payload.month + 1,
                state.year = payload.year,
                state.daysInMonth = payload.daysInMonth
        },
        onPrev(state) {
            if (state.month !== 1) {
                state.month -= 1
                state.daysInMonth = new Date(state.year, state.month, 0).getDate()
            } else {
                state.month = 12
                state.year -= 1
                state.daysInMonth = new Date(state.year, state.month, 0).getDate()
            }
        },
        onNext(state) {
            if (state.month === 12) {
                state.month = 1
                state.year += 1
                state.daysInMonth = new Date(state.year, state.month, 0).getDate()
            } else {
                state.month += 1
                state.daysInMonth = new Date(state.year, state.month, 0).getDate()
            }
        }
    },
    actions: {
        onToday({ commit }) {
            const month = new Date().getMonth()
            const year = new Date().getFullYear()
            const daysInMonth = new Date(year, month + 1, 0).getDate()
            commit('onToday', {
                month,
                year,
                daysInMonth
            })
        },
        onPrev({ commit }) {
            commit('onPrev')
        },
        onNext({ commit }) {
            commit('onNext')
        }
    },
    getters: {
        getMonthDate(state) {
            return {
                month: state.month,
                year: state.year,
                daysInMonth: state.daysInMonth
            }
        }
    }
}