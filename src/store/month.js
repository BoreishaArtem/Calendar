export default {
    state: {
        months: ['January','February','March','April','May','June','July','August','September','October','November','December']
    },
    mutations: {},
    actions: {},
    getters: {
        showMonth(state) {
            return state.months
        }
    }
}