<template>
  <input type="file" ref="imageInput" multiple />
  <button type="submit" @click="displayImages">Test me!</button>
</template>
<style scoped></style>
<script>
export default {
  methods: {
    displayImages() {
      const imageInput = this.$ref();
      const toDisplay = imageInput;
      console.log(toDisplay);
    },
  },
};
</script>
