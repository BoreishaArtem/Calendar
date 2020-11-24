<template>
  <div id="app" class="overflow">
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
<style>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
