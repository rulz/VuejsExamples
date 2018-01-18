<template lang="html">
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset-4">
        <div class="notification is-danger">
          <slot name="body"> algo anduvo mal</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .notification {
    margin: 10px;
  }
</style>
