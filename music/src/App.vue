<template>
  <div id="app">
    <section class="section">
      <nav class="nav has-shadow">
        <div class="container">
          <input type="text" name=""
                value="" class="input is-large"
                placeholder="Buscar canciones"
                v-model="searchQuery">
                <a href="#"
                  class="button is-info is-large"
                  v-on:click="search">
                  Buscar
                </a>
                <a href="#"
                  class="button is-danger is-large">&times;</a>
        </div>
      </nav>
      <div class="container results">
        <div class="columns">
          <div class="column">
              <p>{{ searchMessage }}</p>
              <ul v-for='track in tracks'>
                <li>{{ track.name }} - {{ track.artist }}</li>
              </ul>
          </div>

        </div>

      </div>
    </section>
  </div>
</template>

<script>
const tracks = [
  { name: 'Muchacha', artist:'Luis Alberto Spinetta' },
  { name: 'Un día normal', artist:'Juanes' },
  { name: 'Rise', artist:'Eddie Vedder' },
]
export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  computed: {
    searchMessage: function () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods: {
    search: function () {
      this.tracks = tracks
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin-top:50px;
  }
</style>
