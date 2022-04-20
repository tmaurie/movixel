<template>
  <v-app dark>

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
