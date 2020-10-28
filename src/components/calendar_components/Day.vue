<template>
  <h1>the today date is {{ month }} {{ date }}</h1>
</template>

<script>
export default {
    data() {
        return {
            time: null,
            dayOfWeek: null,
            date: null,
            month: null,
            year: null
        }
    },
    methods: {
        showDate() {
            const today = new Date()
            const monthsLabels = this.$store.getters.showMonth
            this.date = today.getDate()
            this.month = monthsLabels[today.getMonth()]

            console.log(monthsLabels[today.getMonth()])
            
        }            
    },
    created() {
        this.showDate()
        // setInterval(() => {
        //     const date = this.showDate()
        //     if (date !== null) {
        //         this.date = date 
        //     } else {
        //         this.date = 'Something went wrong!'
        //         window.clearInterval()
        //     }
        // }, 1000)
    }
}
</script>

<style scoped>

</style>