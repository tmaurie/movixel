<template>
  <v-container>
  </v-container>
</template>

<script>
const API_KEY = process.env.VUE_APP_API_KEY

export default {
  name: "play",
  data() {
    return {
      apiKey: 'tset'

    }
  },
  mounted() {
    console.log("api:" + API_KEY)
  }
}
</script>

<style scoped>

</style>
