<template>
  <v-app id="app">

    <AppNavDrawer/>
    <v-main>
      <Nuxt/>
    </v-main>

    <v-footer color="transparent">
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
.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}

.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0)
  }
  50% {
    transform: scale(1.25)
  }
  100% {
    transform: scale(1)
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(1.25)
  }
  100% {
    transform: scale(0)
  }
}
</style>
