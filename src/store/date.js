export default {
    state: {
        thisDayTime: null,
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weeks: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
        year: new Date().getFullYear(),
        events: [{
            year: '',
            month: '',
            day: '',
            timeStart: '',
            timeEnd: ''
        }]
    },
    mutations: {
        createThisDayTime(state, payload) {
            state.thisDayTime = payload
        }
    },
    actions: {
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
        getThisDayTime(state) {
            return state.thisDayTime
        },
        getDateNames(state) {
            return {
                monthNames: state.months,
                weekNames: state.weeks
            }
        },
        getYear(state) {
            return state.year
        }

    }
}