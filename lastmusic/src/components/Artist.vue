<template>
  <li>
    <h2><a v-bind:href="art.url" target="_blank">{{ art.name }}</a></h2>
    <img v-bind:src="art.image[2]['#text']">
  </li>
</template>

<script>
export default {
  name: 'artist',
  props: ['art']
}
</script>

<style>
li {
  display: block;
  margin: 10px 0;
}
</style>
