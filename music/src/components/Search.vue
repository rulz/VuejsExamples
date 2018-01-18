<template>
  <main>
    <music-notification v-show="showNotification">
      <p slot="body">No se encontrado resultados</p>
    </music-notification>
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
  </main>
</template>

<script>
import trackService from '@/services/track.js'

import MusicTrack from '@/components/Track.vue'

import MusicNotification from '@/components/shared/Notification.vue'
import MusicLoader from '@/components/shared/Loader.vue'

// const tracks = [
//   { name: 'Muchacha', artist:'Luis Alberto Spinetta' },
//   { name: 'Un día normal', artist:'Juanes' },
//   { name: 'Rise', artist:'Eddie Vedder' },
// ]
export default {
  name: 'app',
  components: {
    MusicTrack: MusicTrack,
    MusicLoader: MusicLoader,
    MusicNotification: MusicNotification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: ''
    }
  },
  computed: {
    searchMessage: function () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  watch: {
    showNotification: function () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
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
        self.showNotification = res.tracks.total === 0
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

  .results {
    margin-top:50px;
  }
  .is-active {
    border: 3px #23d160 solid;
  }
</style>
