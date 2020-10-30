<template>
  <div>
    <h2 class="calendar-date">{{date.month}} {{date.year}}</h2>
    <h2 class="calendar-time">{{dayTime.hours}} : {{dayTime.minutes}} : {{dayTime.seconds}}</h2>
    <table>
      <thead>
        <th v-for="week in weekDays" :key="week" :class="week">{{ week }}</th>
      </thead>
      <tbody class="table-body">
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
      dayTime: "",
      monthDays: null
    };
  },
  methods: {
    setDayTime() {
      const time = this.$store.getters.getThisDayTime;
      if (time !== null) {
        this.dayTime = time;
      } else {
        this.dayTime = "Something went wrong...";
      }
    },
    renderDays(month, year, numberOfDays) {
      const tbody = document.querySelector('.table-body')
      const months = this.$store.getters.getMonths
      for(let i = 0; i < numberOfDays; i++) {
        const day = i + 1
        const dayDate = new Date(year, months.indexOf(month), day).getDay()
        const daysOfWeek = this.$store.getters.getWeeks[dayDate];
        console.log(daysOfWeek, day)
      }
    }
  },
  computed: {
    weekDays() {
      return this.$store.getters.getWeeks;
    }
  },
  created() {
    const newDate = new Date();
    this.$store.dispatch("createThisDayDate");
    this.date = this.$store.getters.getThisDayDate;
    console.log(this.date);

    setInterval(() => {
      this.$store.dispatch("createThisDayTime");
      this.setDayTime();
    }, 1000);
  },
  mounted() {
    this.renderDays(this.date.month, this.date.year, this.date.dayInMonth)
  }
};
</script>

<style scoped>
.calendar-date {
  text-align: center;
}
.calendar-time {
  text-align: center;
}
table {
  border: 1px solid black;
}

thead {
  border: 1px solid black;
}
tbody {
  border: 1px solid black;
}

tr {
  border: 1px solid black;
}

td {
  border: 1px solid black;
}
th {
  border: 2px solid black;
  font-size: 18px;
  font-weight: 400;
  color: #000;
}
</style>