<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <img
          src="/v.png"
          alt="Vuetify.js"
          class="mb-5"
        >
        <blockquote class="blockquote">
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-col>
    </v-row>

    <v-row justify="center">
      <NuxtLink to="/">toto</NuxtLink>

    </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'InspirePage'
}
</script>
