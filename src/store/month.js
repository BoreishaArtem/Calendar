export default {
    state: {
        month: null,
        daysInMonth: null,
        monthFirstDayIndex: null,
        monthLastDayIndex: null,
        prevMonthLastDay: null,
        thisMonthLastDay: null
    },
    mutations: {
        onToday(state) {
            const date = new Date()
            state.month = date.getMonth()
            this.state.Date.year = date.getFullYear()
            state.daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
            state.monthFirstDayIndex = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay()
            state.monthLastDayIndex = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDay();
            state.prevMonthLastDay = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
        },
        onNext(state) {
            if (state.month === 11) {
                state.month = 0
                this.state.Date.year += 1
                state.daysInMonth = new Date(this.state.Date.year, state.month + 1, 0).getDate()
            } else {
                state.month += 1
                state.daysInMonth = new Date(this.state.Date.year, state.month + 1, 0).getDate()
            }
            state.monthFirstDayIndex = new Date(this.state.Date.year, state.month, 1).getDay()
            state.monthLastDayIndex = new Date(this.state.Date.year, state.month + 1, 0).getDay()

            state.prevMonthLastDay = new Date(this.state.Date.year, state.month, 0).getDate()
        },
        onPrev(state) {
            if (state.month !== 0) {
                state.month -= 1
                state.daysInMonth = new Date(this.state.Date.year, state.month + 1, 0).getDate()
            } else {
                state.month = 11
                this.state.Date.year -= 1
                state.daysInMonth = new Date(this.state.Date.year, state.month + 1, 0).getDate()
            }
            state.monthFirstDayIndex = new Date(this.state.Date.year, state.month, 1).getDay()
            state.monthLastDayIndex = new Date(this.state.Date.year, state.month + 1, 0).getDay()
            state.prevMonthLastDay = new Date(this.state.Date.year, state.month, 0).getDate()
        }
    },
    actions: {
        onToday({ commit }) {
            commit('onToday')
        },
        onNext({ commit }) {
            commit('onNext')
        },
        onPrev({ commit }) {
            commit('onPrev')
        }
    },
    getters: {
        getMonth(state) {
            return {
                month: state.month,
                daysInMonth: state.daysInMonth,
                monthFirstDayIndex: state.monthFirstDayIndex,
                prevMonthLastDay: state.prevMonthLastDay,
                monthLastDayIndex: state.monthLastDayIndex
            }
        }
    }
}