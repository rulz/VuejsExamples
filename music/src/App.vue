<template>
  <div id="app">
    <music-header></music-header>
    <music-loader v-show="isLoading"></music-loader>
    <section class="section" v-show="!isLoading">
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
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for='t in tracks'>
              <p><small>{{ searchMessage }}</small></p>
              <music-track v-bind:class="{ 'is-active':t.id === selectedTrack }" v-bind:track='t' v-on:select='setSelectedTrack'></music-track>

          </div>

        </div>

      </div>
    </section>
    <music-footer></music-footer>
  </div>
</template>

<script>
import trackService from '@/services/track.js'
import MusicFooter from '@/components/layout/Footer.vue'
import MusicHeader from '@/components/layout/Header.vue'

import MusicTrack from '@/components/Track.vue'

import MusicLoader from '@/components/shared/Loader.vue'

// const tracks = [
//   { name: 'Muchacha', artist:'Luis Alberto Spinetta' },
//   { name: 'Un día normal', artist:'Juanes' },
//   { name: 'Rise', artist:'Eddie Vedder' },
// ]
export default {
  name: 'app',
  components: {
    MusicFooter: MusicFooter,
    MusicHeader: MusicHeader,
    MusicTrack: MusicTrack,
    MusicLoader: MusicLoader
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: ''
    }
  },
  computed: {
    searchMessage: function () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods: {
    search: function () {
      if (!this.searchQuery) {
        return ''
      }
      const self = this
      this.isLoading = true
      this.tracks = []
      trackService.search(this.searchQuery)
      .then(function(res) {
        self.tracks = res.tracks.items
        self.isLoading = false
      })
    },
    setSelectedTrack: function (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin-top:50px;
  }
  .is-active {
    border: 3px #23d160 solid;
  }
</style>
