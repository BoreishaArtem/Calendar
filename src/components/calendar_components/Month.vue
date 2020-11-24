<template>
  <div>
    <h1>{{ dateNames.monthNames[monthData.month] }} {{ getYear }}</h1>

    <div class="container">
      <div class="calendar">
        <div class="week-days">
          <div
            class="week-day"
            v-for="(weekName, index) in dateNames.weekNames"
            :key="'g' + index"
          >{{ weekName }}</div>
        </div>
        <div class="month-days">
          <div v-for="(prevDay, index) in prevDays" :key="'b' + index" class="prevDay">
            <span class="month-days-number">{{ prevDay }}</span>
          </div>
          <div
            v-for="(curDay, index) in curDays"
            :key="'a' + index"
            :class="{ curentDay : (curDay === today && monthData.month === new Date().getMonth()) }"
          >
            <span class="month-days-number">{{ curDay }}</span>
          </div>
          <div v-for="(nextDay, index) in nextDays" :key="'c' + index" class="nextDay">
            <span class="month-days-number">{{ nextDay }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      prevDays: [],
      curDays: [],
      nextDays: [],
      today: new Date().getDate()
    };
  },
  methods: {
    prevMonthDays() {
      let days = [];
      const prevMonthLastDay = this.monthData.prevMonthLastDay;
      const curMonthFirstDay = this.monthData.monthFirstDayIndex;
      for (let i = curMonthFirstDay; i > 0; i--) {
        days.push(prevMonthLastDay - i + 1);
      }
      this.prevDays = days;
    },
    renderDays() {
      let day = [];
      const days = this.monthData.daysInMonth;
      for (let i = 1; i <= days; i++) {
        day.push(i);
      }
      this.curDays = day;
    },
    nextMonthDays() {
      let days = [];
      const month = this.monthData.month + 1;
      const year = this.$store.getters.getYear;
      const monthLastDay = this.monthData.monthLastDayIndex;
      for (let i = 1; i <= 6 - monthLastDay; i++) {
        days.push(i);
      }
      this.nextDays = days;
    },
    onRender() {
      this.prevMonthDays();
      this.renderDays();
      this.nextMonthDays();
    }
  },
  computed: {
    getYear() {
      return this.$store.getters.getYear;
    },
    monthData() {
      return this.$store.getters.getMonth;
    },
    dateNames() {
      return this.$store.getters.getDateNames;
    }
  },
  mounted() {
    this.$store.dispatch("onToday");
    this.onRender();
  },
  beforeUpdate() {
    this.onRender();
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto" sans-serif;
}

html {
  font-size: 62.5%;
}

h1 {
  text-align: center;
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.calendar {
  margin-top: 50px;
  width: 100%;
  height: 100%;
}

.curentDay {
  background-color: #f8f8f8;
}
.week-days {
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  color: #a3a6b4;
  background-color: #f5f6fa;
  border-bottom: 1px solid #eaf0f4;
  border-top: 1px solid #eaf0f4;
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
}
.week-day {
  width: calc(100% / 7);
}
.month-days {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
}
.month-days div {
  font-size: 0.9rem;
  width: calc(100% / 7);
  min-height: 9rem;
  padding: 10px 10px;
  text-align: right;
  border: 1px solid #eaf0f4;
}
.month-days div:hover {
  background-color: #f8f8f8;
}

.prevDay {
  color: rgba(67, 66, 93, 0.3);
}
.nextDay {
  color: rgba(67, 66, 93, 0.3);
}
</style>