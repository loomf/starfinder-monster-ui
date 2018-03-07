<template>
  <div id="app">
    <p>{{ stats }}</p>
    <StatBlock :stats="stats"/>
  </div>
</template>

<script>
import StatBlock from './components/StatBlock'

export default {
  name: 'App',
  components: {
    StatBlock
  },
  data: function () {
    return {
      stats: JSON.parse(new URLSearchParams(window.location.search).get('stats'))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
