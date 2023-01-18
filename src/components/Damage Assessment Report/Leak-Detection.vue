<template>
  <div id="leak-detection">
    <h4>Leak Detection Method</h4>
    <div id="detection-methods">
      <div class="method">
        <input type="checkbox" name="dye" id="dye" />
        <label for="dye">Dye </label>
      </div>
      <div class="method">
        <input type="checkbox" name="moisture" id="moisture" />
        <label for="moisture">Moisture Meter</label>
      </div>
      <div class="method">
        <input type="checkbox" name="gas" id="gas" />
        <label for="gas">Gas Detection</label>
      </div>
      <div class="method">
        <input type="checkbox" name="thermal" id="thermal" />
        <label for="thermal">Thermal Imaging</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#detection-methods {
  display: flex;
}
.method {
  width: 25%;
}
</style>
