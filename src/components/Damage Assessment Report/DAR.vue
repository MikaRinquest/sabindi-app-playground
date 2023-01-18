<template>
  <div id="DAR">
    <div class="grid">
      <div class="logo">
        <img
          src="https://i.postimg.cc/Gp1yC88q/sabindi-group.png"
          class="image"
        />
      </div>
      <div class="heading">
        <span>
          <h1 class="subheading">DAMAGE ASSESSMENT REPORT</h1>
          <div class="border"></div>
        </span>
        <h2 class="subheading">PLUMBING & GENERAL BUILDING</h2>
      </div>
      <div class="details">
        <p>Sabindi Group Global</p>
        <p>REG NO: 2017/312397/07</p>
        <p>NHBRC: 3000 2459 46</p>
        <p>124 Fishermans Walk</p>
        <p>Zeekoevlei</p>
        <p>074 927 9035</p>
        <p>construction@sabindi.co.za</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#DAR {
  width: 100%;
}

.grid {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto auto auto auto auto;
}

.logo {
  grid-row: 1/8;
}

.heading {
  grid-row: 1/7;
}

.subheading {
  display: inline-flex;
  margin-top: 0;
  margin-bottom: 5px;
  color: black;
  border-bottom: thick solid black;
}

.details {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  grid-row: 1/8;
}

.details > p {
  padding: 0;
  margin: 0;
}
</style>
