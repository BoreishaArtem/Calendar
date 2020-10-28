<template>
  <div id="app">
    <button @click="onToday">Today</button>
    <button @click="onBack">Back</button>
    <button @click="onNext">Next</button>

    <v-calendar />


  </div>
</template>

<script>
import Calendar from './components/Calendar.vue'

export default {
  data() {
    return {
    }
  },
  computed: {
    Error() {
      console.log('Error...')
    }  
  },
  methods: {
    onToday() {
      const res = this.$store.dispatch('createDay')
      console.log(this.$store.getters.getDay)
    },
    onBack() {
      console.log('The back button was clicked...')
    },
    onNext() {
      console.log('The next button was clicked...')
    }
  },
  created() {
    
  },
  components: {
    vCalendar: Calendar
  }
}
</script>
<style scoped>
</style>
