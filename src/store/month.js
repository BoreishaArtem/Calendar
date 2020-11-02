export default {
    state: {
        monthsDayArr: ''
    },
    mutations: {
        setDays(state, payload) {
            state.monthsDayArr = payload
        }
    },
    actions: {
        getDays({ commit }, payload) {
            const days = payload.data.dayInMonth;
            let newArr = []
            for(let i = 1; i <= days; i++) {
                if (i % 7 === 0) {
                    for(let k = i; k <= i; k++) {
                        newArr.push(k)
                    }
                }
            }
            const newArrpush = (days - newArr[newArr.length - 1]) + newArr[newArr.length - 1]
            newArr.push(newArrpush)
            const currentArr = []
            newArr.forEach(numberOfDays => {
                currentArr.push(new Array())
                currentArr.forEach(el => {
                    for(let i = (numberOfDays + 1) - 7; i <= numberOfDays; i++) {
                        el.push(i)
                    }
                })
            })
            console.log(currentArr, "THE CURRENT ARR")
            commit('setDays', currentArr)
        }
    },
    getters: {
        getMonthDays(state) {
            return state.monthsDayArr
        }
    }
}