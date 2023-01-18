<template>
  <div id="damage-type">
    <h4>Damage Type</h4>
    <div id="damages">
      <div class="damages">
        <input type="checkbox" name="leak" id="leak" />
        <label for="leak">Leak Detection</label>
      </div>
      <div class="damages">
        <input type="checkbox" name="burst-pipe" id="burst-pipe" />
        <label for="burst-pipe">Burst Pipe</label>
      </div>
      <div class="damages">
        <input type="checkbox" name="burst-geyser" id="burst-geyser" />
        <label for="burst-geyser">Burst Geyser</label>
      </div>
      <div class="damages">
        <input type="checkbox" name="resultant" id="resultant" />
        <label for="resultant">Resultant Damage</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#damages {
  display: flex;
}
.damages {
  width: 25%;
}
</style>
