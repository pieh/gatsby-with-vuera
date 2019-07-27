<template>
  <p>{{ greeting }} World! It's hot reloading</p>
</template>

<script>
module.exports = {
  props: ["greeting"],
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>