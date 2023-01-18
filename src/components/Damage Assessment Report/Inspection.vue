<template>
  <div id="inspection">
    <h4>Inspection Category</h4>
    <div class="grid-list">
      <div class="category">
        <span class="inspection-container">
          <input type="checkbox" name="carpentry" id="carpentry" />
          <label for="carpentry">Roof/Carpentry</label>
        </span>
        <span class="inspection-container">
          <input type="checkbox" name="ceiling" id="ceiling" />
          <label for="ceiling">Dry Wall/Ceiling</label>
        </span>
        <span class="inspection-container">
          <input type="checkbox" name="flooring" id="flooring" />
          <label for="flooring">Flooring</label>
        </span>
      </div>
      <div class="category">
        <span class="inspection-container">
          <input type="checkbox" name="joinery" id="joinery" />
          <label for="joinery">Joinery</label>
        </span>
        <span class="inspection-container">
          <input type="checkbox" name="masonry" id="masonry" />
          <label for="masonry">Masonry</label>
        </span>
        <span class="inspection-container">
          <input type="checkbox" name="painting" id="painting" />
          <label for="painting">Painting</label>
        </span>
      </div>
      <div class="category">
        <span>
          <input type="checkbox" name="plumbing" id="plumbing" />
          <label for="plumbing">Plumbing</label>
        </span>
        <span>
          <input type="checkbox" name="electrical" id="electrical" />
          <label for="electrical">Electrical</label>
        </span>
        <span>
          <input type="checkbox" name="decking" id="decking" />
          <label for="decking">Pools/Decking</label>
        </span>
      </div>
      <div class="category">
        <span>
          <input type="checkbox" name="furniture" id="furniture" />
          <label for="furniture">Furniture</label>
        </span>
        <span>
          <input type="checkbox" name="electronics" id="electronics" />
          <label for="electronics">Electronics</label>
        </span>
        <span>
          <input type="checkbox" name="appliances" id="appliances" />
          <label for="appliances">Appliances</label>
        </span>
      </div>
      <div class="category">
        <span>
          <input type="checkbox" name="steelworks" id="steelworks" />
          <label for="steelworks">Steelworks</label>
        </span>
        <span>
          <input type="checkbox" name="glazing" id="glazing" />
          <label for="glazing">Glazing</label>
        </span>
        <span>
          <input type="checkbox" name="fixtures" id="fixtures" />
          <label for="fixtures">Fixtures</label>
        </span>
      </div>
      <div class="category">
        <span>
          <input type="checkbox" name="civils" id="civils" />
          <label for="civils">Civils</label>
        </span>
        <span>
          <input type="checkbox" name="landscaping" id="landscaping" />
          <label for="landscaping">Landscaping</label>
        </span>
        <span>
          <input type="checkbox" name="miscellaneous" id="miscellaneous" />
          <label for="miscellaneous">Miscellaneous</label>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.grid-list {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
}

.category {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
