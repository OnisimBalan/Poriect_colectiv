<template>
  <div id="app">
    <div>
      <b-row class="d-flex flex-column flex-nowrap">
        <b-cols cols="4">
          <NavPanel></NavPanel>
        </b-cols>

        <b-cols cols="8">
          <div class="d-flex">// <Dashboard></Dashboard></div>
        </b-cols>
      </b-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import Dashboard from "./components/bashboard.app.vue";
import NavPanel from "./components/nav-panel.vue";

@Component({
  components: {
    // Dashboard,
    NavPanel,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
