<template lang="html">
  <div class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <img v-bind:src="track.album.images[0].url" alt="">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img v-bind:src="track.album.images[0].url" alt="">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-6">
            <strong>{{ track.name }}</strong>
          </p>
          <p class="subtitle is-6">
            {{ track.artists[0].name }}
          </p>
        </div>
      </div>
      <div class="content">
        <small>{{ track.duration_ms }}</small>
        <nav class="level">
          <div class="level-left">
            <a href="#" class="level-item">
              <span class="icon is-small" v-on:click="selectTrack">play</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    track: { type: Object, required: true }
  },
  methods: {
    selectTrack: function () {
      this.$emit('select', this.track.id)
    }
  }
}
</script>

<style lang="css">
</style>
