<template>
  <div id="facility-damage">
    <div id="facility">
      <h4>Facility</h4>
      <div class="facility">
        <div class="facility-type">
          <input type="checkbox" name="residential" id="residential" />
          <label for="residential">Residential </label>
        </div>
        <div class="facility-type">
          <input type="checkbox" name="commercial" id="commercial" />
          <label for="commercial">Commercial </label>
        </div>
        <div class="facility-type">
          <input type="checkbox" name="industrial" id="industrial" />
          <label for="industrial"> Industrial</label>
        </div>
        <div class="facility-type">
          <input type="checkbox" name="government" id="government" />
          <label for="government">Government </label>
        </div>
      </div>
    </div>
    <div id="severity">
      <h4>Leak/Damage Severity</h4>
      <div class="severity">
        <div class="severity-extent">
          <div>
            <span>
              <input type="checkbox" name="none" id="none" />
              <label for="none">None</label>
            </span>
            <p class="explanation"></p>
          </div>
        </div>
        <div class="severity-extent">
          <div>
            <span>
              <input type="checkbox" name="minor" id="minor" />
              <label for="minor">Minor</label>
            </span>
            <p class="explanation"></p>
          </div>
        </div>
        <div class="severity-extent">
          <div>
            <span>
              <input type="checkbox" name="significant" id="significant" />
              <label for="significant">Significant</label>
            </span>
            <p class="explanation"></p>
          </div>
        </div>
        <div class="severity-extent">
          <div>
            <span>
              <input type="checkbox" name="critical" id="critical" />
              <label for="critical">Critical</label>
            </span>
            <p class="explanation"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#facility-damage {
  display: flex;
}

#facility,
#severity {
  width: 50%;
}

.facility,
.severity {
  display: flex;
  width: 100%;
}

.facility-type,
.severity-extent {
  width: 25%;
}
</style>
