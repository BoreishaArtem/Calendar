<template>
  <div class="container" :class="{ show : 'dark' }">
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

    <div class="calendar" @click="showModal">
      <div class="calendar-clock">
        <h2 class="calendar-time">{{dayTime.hours}} : {{dayTime.minutes}} : {{dayTime.seconds}}</h2>
      </div>
      <v-cur-date v-if="showDay" />
      <v-week v-if="showWeek" />
      <v-month v-if="showMonth" />
      <v-modal v-if="modal" />
    </div>
  </div>
</template>

<script>
import CurrentDate from "./calendar_components/Day.vue";
import Week from "./calendar_components/Week.vue";
import Month from "./calendar_components/Month.vue";
import Modal from "./shared/Modal";

export default {
  name: "Calendar",
  data() {
    return {
      showMonth: false,
      showDay: false,
      showWeek: false,
      dayTime: ""
    };
  },
  components: {
    vCurDate: CurrentDate,
    vWeek: Week,
    vMonth: Month,
    vModal: Modal
  },
  methods: {
    onToday() {
      this.$store.dispatch("onToday");
    },
    onBack() {
      this.$store.dispatch("onPrev");
    },
    onNext() {
      this.$store.dispatch("onNext");
    },
    init() {
      this.showMonth = true;
    },
    showModal(event) {
      const target = event.target.firstChild;
      if (target.classList[0] === "month-days-number") {
        console.log("yes", target.innerHTML);
        this.$store.dispatch("showModal");
        console.log(this.$store.getters);
      } else {
        return 0;
      }
    },
    closeModal(event) {
      console.log(event)
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
  computed: {
    modal() {
      return this.$store.getters.modal;
    },
    show() {
      if (!this.$store.modal) {
        return false;
      }
      return true;
    }
  },
  mounted() {
    setInterval(() => {
      this.$store.dispatch("createThisDayTime");
      this.setDayTime();
    }, 1000);
    this.init();
  }
};
</script>

<style>
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
  position: relative;
  z-index: 999;
}
.dark {
  background: dark;
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
  /* color: #ffff;s */
}
</style>