<template>
  <v-container class="justify-center" fill-height>
    <div class="d-flex flex-column">
      <h1 class="mb-4 text-center title--movixel white--text">MoviXel</h1>
      <v-btn x-large color="primary" class="mb-4 rounded-xl" to="/play">Play the game</v-btn>
      <v-btn x-large color="primary" disabled class="mb-4 rounded-xl">Daily challenge</v-btn>
      <v-btn x-large color="primary" disabled class="mb-4 rounded-xl">Settings</v-btn>

    </div>
  </v-container>

</template>

<script>

export default {
  name: 'IndexPage',
  head: {
    title: 'Home'
  }
}
</script>
