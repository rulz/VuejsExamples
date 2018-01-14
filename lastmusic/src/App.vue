<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>LastFm Music</h2>
    <select v-model="selectedCountry">
      <option v-for="countrie in countries" v-bind:value="countrie.value">
        {{countrie.name}}
      </option>
    </select>
    <ul>
      <artist v-for="art in artists" v-bind:art="art" v-bind:key="art.mbid"></artist>
    </ul>
  </div>
</template>

<script>
import Artist from './components/Artist.vue'
import getArtists from './api'

export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries: [
        {name:'Chile', value:'chile'},
        {name:'Colombia', value:'colombia'},
        {name:'Argentina', value:'argentina'},
        {name:'España', value:'spain'}
      ],
      selectedCountry: 'chile'
    }
  },
  components: {
    Artist
  },
  methods: {
    refreshArtists: function() {
      const self = this
      getArtists(this.selectedCountry)
        .then((artists) => {
          self.artists = artists
        })
    }
  },
  mounted: function() {
    this.refreshArtists()
  },
  watch:{
    selectedCountry: function() {
      this.refreshArtists()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
