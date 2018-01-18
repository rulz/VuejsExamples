<template>
  <div id="app">
    <music-header></music-header>

    <router-view></router-view>

    <music-footer></music-footer>
  </div>
</template>

<script>
import MusicFooter from '@/components/layout/Footer.vue'
import MusicHeader from '@/components/layout/Header.vue'

// const tracks = [
//   { name: 'Muchacha', artist:'Luis Alberto Spinetta' },
//   { name: 'Un día normal', artist:'Juanes' },
//   { name: 'Rise', artist:'Eddie Vedder' },
// ]
export default {
  name: 'app',
  components: {
    MusicFooter: MusicFooter,
    MusicHeader: MusicHeader
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
