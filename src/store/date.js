export default {
    state: {
        // thisDayDate: null,
        thisDayTime: null,
        // months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        // weeks: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    },
    mutations: {
        // createThisDayDate(state, payload) {
        //     state.thisDayDate = payload
        // },
        createThisDayTime(state, payload) {
            state.thisDayTime = payload
        },
        // createDaysInMonth(state, payload) {
        //     state.daysInMonth = payload
        // }
    },
    actions: {
        // createThisDayDate({ commit }) {
        //     const thisDay = new Date()
        //     const date = {
        //         day: thisDay.getDate(),
        //         week: this.state.Date.weeks[thisDay.getDay()],
        //         month: this.state.Date.months[thisDay.getMonth()],
        //         year: thisDay.getFullYear(),
        //         dayInMonth: new Date(thisDay.getFullYear(), thisDay.getMonth() + 1, 0).getDate()
        //     }
        //     commit('createThisDayDate', date)
        // },
        createThisDayTime({ commit }) {
            const thisDay = new Date()
            const time = {
                hours: thisDay.getHours(),
                minutes: thisDay.getMinutes(),
                seconds: thisDay.getSeconds()
            }
            commit('createThisDayTime', time)
        }
    },
    getters: {
        // getThisDayDate(state) {
        //     return state.thisDayDate
        // },
        getThisDayTime(state) {
            return state.thisDayTime
        },
        // getWeeks(state) {
        //     return state.weeks
        // },
        // getMonths(state) {
        //     return state.months
        // }

    }
}