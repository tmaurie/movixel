<template>
  <v-app id="app">

    <AppNavDrawer/>
    <v-main>
      <Nuxt/>
    </v-main>

    <v-footer>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>movixel</strong>
      </v-col>
    </v-footer>

  </v-app>
</template>

<script>
import AppNavDrawer from "../components/AppNavDrawer";

export default {
  name: 'DefaultLayout',
  components: {AppNavDrawer},
  data() {
    return {}
  }
}
</script>
<style>
#app {
  background-image: linear-gradient(-35deg, #3e508f 0%, #7865b0 100%);
}
</style>
