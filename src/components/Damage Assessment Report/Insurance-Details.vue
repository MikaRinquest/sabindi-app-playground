<template>
  <div id="insurance-details">
    <div class="grid">
      <div class="client-details">
        <p class="client">Client Details</p>
        <div>
          <p class="client-name">insert client</p>
          <p class="client-street">insert client</p>
          <p class="client-suburb">insert client</p>
          <p class="client-number">insert client</p>
          <p class="client-email">insert client</p>
        </div>
      </div>
      <div class="claim-details">
        <div>
          <p>Assessment Date</p>
          <p>Report Number</p>
          <p>Quote Number</p>
          <p>Claim Number</p>
          <p>Agent/Broker</p>
        </div>
        <div>
          <p class="assessment-date">insert client</p>
          <p class="report-number">DAR/insert/2023</p>
          <p class="quote-number">QTE insert client</p>
          <p class="claim-number">insert client</p>
          <p class="broker">Santam</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#insurance-details {
  display: flex;
}



.client-details,
.claim-details {
  display: flex;
}


</style>
