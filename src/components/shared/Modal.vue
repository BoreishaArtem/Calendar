<template>
  <div class="container">
    <div class="modal">
      <div class="modal-head">
        <h1 class="modal-head-title title">Create event</h1>
        <span @click="closeModal" class="close">&times;</span>
      </div>
      <div class="modal-body">
        <div class="modal-body-event">
          <h1 class="title">Event name</h1>
          <input type="text" class="event" />
        </div>
        <div class="modal-body-date">
          <h1 class="title">Date</h1>
          <input type="date" class="date" />
        </div>
        <h1 class="title">Time</h1>
        <div class="modal-body-time">
          <div class="time-start">
            <h1 class="title">Start time</h1>
            <input type="time" class="timeToday" />
          </div>
          <div class="time-end">
            <h1 class="title">End time</h1>
            <input type="time" class="timeToday" />
          </div>
        </div>
      </div>
      <div class="close-modal-buttons">
        <button @click="closeModal" class="closeModal">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$store.dispatch("closeModal");
    }
  }
};
</script>

<style>
.modal {
  background: #ffffff;
  margin: 0 auto;
  border: 1px solid black;
  width: 100%;
  max-width: 450px;
  z-index: 1000;
  font-size: 14px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  padding: 10px;
  position: absolute;
  top: -600px;
  left: 0;
  right: 0;
}

.modal-head {
  border-bottom: 1px solid #eaf0f4;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  font-weight: 700;
}

.modal-body-time {
  display: flex;
  width: 100%;
}
.time-start {
  width: 50%;
  padding: 0 15px;
}
.time-end {
  width: 50%;
  padding: 0 15px;
}

.title {
  font-size: 16px;
  font-weight: normal;
  margin: 10px 0;
}

.close {
  font-size: 21px;
  cursor: pointer;
  height: 20px;
}
.close:hover {
  font-size: 22px;
}
.date {
  outline: none;
  width: 100%;
}
.timeToday {
  outline: none;
  width: 100%;
}
.event {
  outline: none;
  width: 100%;
}

.close-modal-buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
}

.closeModal {
  color: #ffffff;
  background-color: #3b86ff;
  border-color: #3b86ff;
  width: 70px;
  height: 30px;
  cursor: pointer;
  border-radius: 5px;
}
</style>