<template>
  <div>
    <h1>Month has been innited {{ month }}</h1>
    <h1>{{ year }}</h1>
    <h1>{{ daysInMonth }}</h1>
    <!-- <div class="calendar">
      <div class="calendar-head">
        <div
          v-for="(dayName, index) in weekDays"
          :key="index"
          class="calendar-head-el"
          :id="index"
        >{{ dayName }}</div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      month: "",
      daysInMonth: "",
      year: ""
    };
  },
  methods: {
    // setActiveDay() {
    //   const tableBodyEls = document.querySelectorAll(".calendar-body-el");
    //   tableBodyEls.forEach(el => {
    //     if (+el.innerHTML === this.$store.getters.getThisDayDate.day) {
    //       el.style.color = "#badc58";
    //     }
    //     if (+el.id === 0 || +el.id === 6) {
    //       el.style.color = "#ff7979";
    //     }
    //   });
    // },
    render(thisMonthDays, year, month) {
      const monthDate = this.$store.getters.getMonthDate;
      this.year = monthDate.year;
      this.month = monthDate.month;
      this.daysInMonth = monthDate.daysInMonth;

      const currMonthDays = this.daysInMonth;
      const prevMonthDays = new Date(this.year, this.month - 1, 0).getDate();
      const nextMonthDays = new Date(this.year, this.month + 1, 0).getDate();
      const weekDays = this.weekDays(
        currMonthDays,
        prevMonthDays,
        nextMonthDays
      );
      // console.log(weekDays);

      // for (let i = 1; i <= this.daysInMonth; i++) {
      // console.log(i);
      //   const domEl = document.getElementById(new Date(2020, 10, i).getDay());
      //   const div = document.createElement("div");
      //   div.classList.add("calendar-body-el");
      //   div.id = new Date(2020, 10, i).getDay();
      //   div.innerHTML = i;
      //   // domEl.appendChild(div);
      // }
    },
    weekDays(currMonth, prevMonth, nextMonth) {
      // console.log(currMonth, "Current");
      // console.log(prevMonth, "Prev");
      // console.log(nextMonth, "Next");

      for (let i = 1; i <= currMonth; i++) {
        const currMonthWeekDays = new Date(this.year, this.month, i).getDay();
        console.log(currMonthWeekDays);
      }
      // return currMonth + "Hello";
    }
  },
  computed: {},
  mounted() {
    // this.setActiveDay();
    this.$store.dispatch("onToday");
    this.render();
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
h1 {
  text-align: center;
}
.calendar {
  width: 70%;
  margin: 0 auto;
  padding: 50px 0;
}

.calendar-head {
  display: flex;
  justify-content: space-between;
  background-color: #f5f6fa;
}

.calendar-head-el {
  text-align: center;
  width: 30%;
  text-transform: uppercase;
  font-weight: 700;
  padding: 15px 0;
  color: #9396a5;
  font-size: 16px;
  background-color: #ffffff;
}
.calendar-body {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 1px auto;
}
.calendar-body-el {
  width: 9.28%;
  text-align: center;
  padding: 20px;
  border: 1px solid #eaf0f4;
}

.calendar-body-el.active {
  color: red;
}
</style>