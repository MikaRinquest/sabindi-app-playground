<template>
  <div id="location-status">
    <div id="location">
      <h4>Leak/Damage Location</h4>
      <div class="location">
        <div id="internal">
          <span>
            <input type="checkbox" name="toilet" id="toilet" />
            <label for="toilet">Toilet</label> </span
          ><span>
            <input type="checkbox" name="bathroom" id="bathroom" />
            <label for="bathroom">Bathroom</label> </span
          ><span>
            <input type="checkbox" name="en-suite" id="en-suite" />
            <label for="en-suite">En-suite</label> </span
          ><span>
            <input type="checkbox" name="kitchen" id="kitchen" />
            <label for="kitchen">Kitchen/Scullery</label> </span
          ><span>
            <input type="checkbox" name="lounge" id="lounge" />
            <label for="lounge">Lounge</label> </span
          ><span>
            <input type="checkbox" name="dining" id="dining" />
            <label for="dining">Dining Room</label> </span
          ><span>
            <input type="checkbox" name="study" id="study" />
            <label for="study">Study/Office</label> </span
          ><span>
            <input type="checkbox" name="bedroom" id="bedroom" />
            <label for="bedroom">Bedroom</label> </span
          ><span>
            <input type="checkbox" name="attic" id="attic" />
            <label for="attic">Attic</label> </span
          ><span>
            <input type="checkbox" name="basement" id="basement" />
            <label for="basement">Basement</label>
          </span>
          <span>
            <input type="checkbox" name="staircase" id="staircase" />
            <label for="staircase">Staircase</label> </span
          ><span>
            <input type="checkbox" name="blank1" id="blank1" />
            <label for="blank1">insert additional area</label>
          </span>
          <span>
            <input type="checkbox" name="blank2" id="blank2" />
            <label for="blank2">insert additional area</label>
          </span>
        </div>
        <div class="area"></div>

        <div id="external">
          <span>
            <input type="checkbox" name="driveway" id="driveway" />
            <label for="driveway">Driveway</label> </span
          ><span>
            <input type="checkbox" name="carport" id="carport" />
            <label for="carport">Carport</label>
          </span>
          <span>
            <input type="checkbox" name="garage" id="garage" />
            <label for="garage">Garage</label> </span
          ><span>
            <input type="checkbox" name="pool" id="pool" />
            <label for="pool">Pool Area</label> </span
          ><span>
            <input type="checkbox" name="yard" id="yard" />
            <label for="yard">Yard</label> </span
          ><span>
            <input type="checkbox" name="garden" id="garden" />
            <label for="garden">Garden</label> </span
          ><span>
            <input type="checkbox" name="entertainment" id="entertainment" />
            <label for="entertainment">Entertainment Area</label> </span
          ><span>
            <input type="checkbox" name="recreational" id="recreational" />
            <label for="recreational">Recreational Area</label> </span
          ><span>
            <input type="checkbox" name="sunroom" id="sunroom" />
            <label for="sunroom">Sunroom</label> </span
          ><span>
            <input type="checkbox" name="balcony" id="balcony" />
            <label for="balcony">Balcony</label> </span
          ><span>
            <input type="checkbox" name="staircase" id="staircase" />
            <label for="staircase">Staircase</label>
          </span>
          <span>
            <input type="checkbox" name="blank3" id="blank3" />
            <label for="blank3">insert additional area</label>
          </span>
          <span>
            <input type="checkbox" name="blank4" id="blank4" />
            <label for="blank4">insert additional area</label>
          </span>
        </div>
        <div class="area"></div>
      </div>
    </div>
    <div id="status">
      <h4>Leak/Damage Status</h4>
      <div class="status">
        <div id="concealed">
          <span>
            <input type="checkbox" name="ceiling" id="ceiling" />
            <label for="ceiling">Ceiling</label> </span
          ><span>
            <input type="checkbox" name="wall" id="wall" />
            <label for="wall">Wall</label> </span
          ><span>
            <input type="checkbox" name="floor" id="floor" />
            <label for="floor">Floor</label> </span
          ><span>
            <input type="checkbox" name="underground" id="underground" />
            <label for="underground">Underground</label>
          </span>
        </div>
        <div id="n-concealed">
          <span>
            <input type="checkbox" name="ceiling" id="ceiling" />
            <label for="ceiling">Ceiling</label> </span
          ><span>
            <input type="checkbox" name="wall" id="wall" />
            <label for="wall">Wall</label> </span
          ><span>
            <input type="checkbox" name="floor" id="floor" />
            <label for="floor">Floor</label> </span
          ><span>
            <input type="checkbox" name="underground" id="underground" />
            <label for="underground">Underground</label>
          </span>
        </div>
      </div>
      <div id="remarks">
        <h4>Remarks</h4>
        <textarea
          placeholder="Insert additional remarks of assessment"
        ></textarea>
      </div>
      <div id="auth">
        <h4>Authorisation</h4>
        <div>
          <p>Report Compiled by:</p>
          <input type="text" placeholder="Insert assessor name" />
          <input type="text" placeholder="Insert assessor phone number" />
        </div>
        <p>
          Sabindi Group Global Maintencance Division - Cape Town, South Africa
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#location-status {
  display: flex;
}

.location,
.status {
  display: flex;
  width: 100%;
}

#location,
#internal,
#external,
#status,
#concealed,
#n-concealed {
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
}
</style>
