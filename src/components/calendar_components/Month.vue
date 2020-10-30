<template>
  <div>
    <h2 class="calendar-date">{{date.month}} {{date.year}}</h2>
    <h2 class="calendar-time">{{dayTime.hours}} : {{dayTime.minutes}} : {{dayTime.seconds}}</h2>
    <table>
      <thead>
        <th v-for="week in weekDays" :key="week">{{ week }}</th>
      </thead>
      <tbody></tbody>
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
    }
  },
  computed: {
    weekDays() {
      return this.$store.getters.getWeeks;
    }
  },
  created() {
    const newDate = new Date();
    console.log(newDate.getDay());
    console.log(this.$store.getters);
    this.$store.dispatch("createThisDayDate");
    this.date = this.$store.getters.getThisDayDate;

    setInterval(() => {
      this.$store.dispatch("createThisDayTime");
      this.setDayTime();
    }, 1000);
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