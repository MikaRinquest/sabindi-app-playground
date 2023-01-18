<template>
  <div class="date-picker">
    <div class="custom-select">
      <select @change="editValue('date', $event)" ref="date">
        <option v-for="i in daysInMonth" :key="i" :value="i">
          {{ i }}
        </option>
      </select>
    </div>
    <div class="custom-select">
      <select @change="editValue('months', $event)" ref="month">
        <option v-for="(month, index) in months" :key="month" :value="index">
          {{ month }}
        </option>
      </select>
      <div class="custom-select">
        <select @change="editValue('year', $event)" ref="year">
          <option v-for="i in numberOfYears" :key="i" :value="startingYear + (i - 1)">
            {{ startingYear + (i - 1) }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import moment from "moment";
export default {
  name:"calendartest",
  setup(props, context) {
    const months = [
      "blabla",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const startingYear = 2020;
    const numberOfYears = 20;
    const dateValue = moment();
    const daysInMonth = ref(dateValue.daysInMonth());
    const date = ref(null);
    const month = ref(null);
    const year = ref(null);

    const editValue = (unit, evt) => {
      dateValue.set(unit, evt.target.value);
      daysInMonth.value = dateValue.daysInMonth();
      updateElements;
      context.emit("update", dateValue);
      console.log(date.value.value);
      console.log(month.value.value);
      console.log(year.value.value);
    };

    onMounted(() => {
      updateElements();
    });

    const updateElements = () => {
      date.value.value = dateValue.date();
      month.value.value = dateValue.month();
      year.value.value = dateValue.format("YYYY");
    };
    return {
      months,
      numberOfYears,
      startingYear,
      daysInMonth,
      editValue,
      month,
      date,
      year,
    };
  },
};
</script>

<style scoped>
/* wrapper-div for including arrow */
.custom-select {
  background-color: #eee;
  float: left;
  margin-right: 10px;
  position: relative;
}

.custom-select select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none; /* remove default styling */
  background-color: inherit;
  border: none;
  color: #333;
  display: block;
  font-size: 16px;
  height: 32px;
  padding: 5px 30px 5px 10px;
  margin: 0;
  outline: none;
}

/* drop arrow */
.custom-select:after {
  content: "\25bc";
  color: #aaa;
  font-size: 12px;
  position: absolute;
  right: 8px;
  top: 10px;
}
</style>
