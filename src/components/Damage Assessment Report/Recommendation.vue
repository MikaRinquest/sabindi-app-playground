<template>
  <div id="recommendation">
    <h4>Repair Action Recommendation</h4>
    <div id="recommended-actions">
      <div class="action">
        <input type="checkbox" name="repair" id="repair" />
        <label for="repair">Repair </label>
      </div>
      <div class="action">
        <input type="checkbox" name="replace" id="replace" />
        <label for="replace">Replace </label>
      </div>
      <div class="action">
        <input type="checkbox" name="investigate" id="investigate" />
        <label for="investigate">Further Investigation</label>
      </div>
      <div class="action">
        <input type="checkbox" name="inconclusive" id="inconclusive" />
        <label for="inconclusive">Inconclusive </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#recommended-actions {
  display: flex;
}
.action {
  width: 25%;
}
</style>
