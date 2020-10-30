<template>
  <div id="app">
    <v-calendar />
  </div>
</template>

<script>
import Calendar from "./components/Calendar.vue";

export default {
  data() {
    return {};
  },
  components: {
    vCalendar: Calendar
  }
};
</script>
<style scoped>
</style>
