<template>
  <div class="container">
    <button @click="onToday">Today</button>
    <button @click="onBack">Back</button>
    <button @click="onNext">Next</button>
    <v-cur-date />
    <v-week />
    <v-month />
  </div>
</template>

<script>
import CurrentDate from "./calendar_components/Day.vue";
import Week from "./calendar_components/Week.vue";
import Month from "./calendar_components/Month.vue";

export default {
  name: "Calendar",
  data() {
    return {};
  },
  computed: {
    Error() {
      console.log("Error...");
    }
  },
  methods: {
    onToday() {
      console.log("The Today button was clicked...");
    },
    onBack() {
      console.log("The back button was clicked...");
    },
    onNext() {
      console.log("The next button was clicked...");
    }
  },
  created() {},
  components: {
    vCurDate: CurrentDate,
    vWeek: Week,
    vMonth: Month
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 12px;
  color: #000;
}
</style>