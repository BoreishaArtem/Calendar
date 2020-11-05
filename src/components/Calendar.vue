<template>
  <div class="container">
    <div class="calendar-btns">
      <div class="btns btns-left-side">
        <button @click="onToday" class="btn">Today</button>
        <button @click="onBack" class="btn">Back</button>
        <button @click="onNext" class="btn">Next</button>
      </div>
      <div class="btns btns-right-side">
        <button
          @click="showMonth = true, showDay = false, showWeek = false"
          class="btn active"
        >Month</button>
        <button @click="showWeek = true, showDay = false, showMonth = false" class="btn">Week</button>
        <button @click="showDay = true, showWeek = false, showMonth = false" class="btn">Day</button>
      </div>
    </div>

    <div class="calendar">
      <div class="calendar-clock">
        <h2 class="calendar-date">{{date.year}} {{date.month}}</h2>
        <h2 class="calendar-time">{{dayTime.hours}} : {{dayTime.minutes}} : {{dayTime.seconds}}</h2>
      </div>
      <v-cur-date v-if="showDay" />
      <v-week v-if="showWeek" />
      <v-month v-if="showMonth" ref="onRender" />
    </div>
  </div>
</template>

<script>
import CurrentDate from "./calendar_components/Day.vue";
import Week from "./calendar_components/Week.vue";
import Month from "./calendar_components/Month.vue";

export default {
  name: "Calendar",
  data() {
    return {
      showMonth: false,
      showDay: false,
      showWeek: false,
      date: "",
      dayTime: ""
    };
  },
  components: {
    vCurDate: CurrentDate,
    vWeek: Week,
    vMonth: Month
  },
  computed: {
    Error() {
      console.log("Error...");
    }
  },
  methods: {
    onToday() {
      this.$store.dispatch("onToday");
      this.$refs.onRender.render();
    },
    onBack() {
      console.log("The back button was clicked...");
      this.$store.dispatch("onPrev");
      this.$refs.onRender.render();
    },
    onNext() {
      console.log("The next button was clicked...");
      this.$store.dispatch("onNext");
      this.$refs.onRender.render();
    },
    init() {
      this.showMonth = true;
    },
    setDayTime() {
      const time = this.$store.getters.getThisDayTime;
      if (time !== null) {
        if (time.minutes < 10) {
          time.minutes = "0" + time.minutes;
        }
        if (time.seconds < 10) {
          time.seconds = "0" + time.seconds;
        }
        if (time.hours < 10) {
          time.hours = "0" + time.hours;
        }
        this.dayTime = time;
      } else {
        this.dayTime = "Something went wrong...";
      }
    }
  },
  mounted() {
    // this.$store.dispatch("setUpMonth");
    // this.date = this.$store.getters.getThisDayDate;

    setInterval(() => {
      this.$store.dispatch("createThisDayTime");
      this.setDayTime();
    }, 1000);
    this.init();
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 12px;
  color: #000;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.calendar-btns {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.calendar-clock {
  text-align: center;
  margin-top: 30px;
}

.btns button {
  padding: 8px 18px;
  border: 1px solid #d7dae2;
  background-color: #ffffff;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: color 0.3s;
}

button:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

button:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

button:hover {
  color: #3b86ff;
}
</style>