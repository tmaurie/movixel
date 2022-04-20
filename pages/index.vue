<template>
  <v-container class="justify-center" fill-height>
    <div class="d-flex flex-column">
      <h1 class="mb-4 text-center">MoviXel</h1>
      <v-btn color="primary" class="mb-4">Play the game</v-btn>
      <v-btn color="primary" class="mb-4">Daily challenge</v-btn>
      <v-btn color="primary" class="mb-4">tet</v-btn>
      <v-btn color="primary" class="mb-4">tet</v-btn>

    </div>
  </v-container>

</template>

<script>
import NuxtLogo from "../components/NuxtLogo";
import VuetifyLogo from "../components/VuetifyLogo";

export default {
  name: 'IndexPage',
  components: {VuetifyLogo, NuxtLogo},
}
</script>
