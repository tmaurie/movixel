<template>
  <v-container class="justify-center" fill-height>
    <div class="d-flex flex-column">
      <h1 class="mb-4 text-center title--movixel white--text">MoviXel</h1>
      <v-btn x-large color="primary" class="mb-4 rounded-xl" :to="localePath('/play')">
        <v-icon>mdi-play</v-icon>
        {{ $t('home.play') }}
      </v-btn>
      <v-btn x-large color="primary" disabled class="mb-4 rounded-xl">
        <v-icon>mdi-calendar-clock</v-icon>
        {{ $t('home.daily') }}
      </v-btn>
      <v-btn x-large color="primary" disabled class="mb-4 rounded-xl">
        <v-icon>mdi-cog</v-icon>
        {{ $t('home.settings') }}
      </v-btn>

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
