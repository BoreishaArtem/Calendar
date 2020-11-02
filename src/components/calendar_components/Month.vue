<template>
  <div>

        <h1>Month has been innited</h1>
        <div class="table">
          <div class="table-head">
              <div v-for="dayName in weekDays" :key="dayName" class="table-head-el">{{ dayName }}</div>
          </div>
          <div class="table-body">
            <div v-for="day in daysInMonth" :key="day" class="table-body-el">{{ day }}</div>
          </div>
        </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    setActiveDay() {
      const tableBodyEls = document.querySelectorAll('.table-body-el')
      tableBodyEls.forEach(el => {
        if (el.innerHTML == this.$store.getters.getThisDayDate.day) {
          el.classList.add('active')
        }
      })
    },
    init() {
      this.$store.getters.getMonthDays
    }
  },
  computed: {
    weekDays() {
      return this.$store.getters.getWeeks;
    },
    daysInMonth() {
      return this.$store.getters.getThisDayDate.dayInMonth;
    },
    arrays() {
      
      this.$store.getters.getMonthDays
    }
  },
  mounted() {
    this.setActiveDay()
    this.init()
    this.$store.dispatch('getDays', {
      data: this.$store.getters.getThisDayDate
    })
    console.log(this.$store.getters.getMonthDays)
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
h1 {
  text-align: center;
}
.table {
 width: 70%;
 margin: 0 auto;
 padding: 50px 0;
}

.table-head {
  display: flex;
  justify-content: space-between;
  background-color: #f5f6fa;
}

.table-head-el {
  text-align: center;
  width: 30%;
  text-transform: uppercase;
  font-weight: 700;
  padding: 15px 0;
  color: #9396a5;
  font-size: 11px;
}
.table-body {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 1px auto;
}
.table-body-el {
  width: 9.28%;
  text-align: center;
  padding: 20px;
  border: 1px solid #eaf0f4;
}

.table-body-el.active {
  background-color: #f5f6fa;
}

</style>