<template>
<div>
    <h1>{{ greeting }}</h1>
    <input type="text" v-model="greeting">
    <v-day/>
    <v-week/>
    <v-month/>
</div>
</template>

<script>

import Day from './calendar_components/Day.vue'
import Week from './calendar_components/Week.vue'
import Month from './calendar_components/Month.vue'


export default {
    data() {
        return {
            greeting: "Hello i Im CALLENDAR"
        }
    },
    components: {
        vDay: Day,
        vWeek: Week,
        vMonth: Month,
    },
    computed: {
        
    },
    methods: {

    }
}
</script>

<style scoped>

</style>