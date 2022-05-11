<template>
  <v-container class="mt-6">

    <v-row justify="center">
      <v-progress-circular v-if="!loaded" indeterminate></v-progress-circular>
      <ImagePixel v-else :poster="poster" :try-number="tries.length" :winState="isWon"></ImagePixel>
    </v-row>

    <v-row justify="center">
      <v-col
        class="d-flex"
        cols="12" sm="4"
      >
        <v-autocomplete
          v-model="autocompleteMovie"
          v-on:keyup.enter="checkAnswer"
          :items="results"
          :loading="isLoading"
          ref="inputAuto"
          :search-input.sync="search"
          item-text="title"
          hide-no-data
          hide-details
          flat
          outlined
          rounded
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-chip-group column>
        <v-chip color="error" class="text-decoration-line-through" v-for="(_try, idx) in tries" :key="idx">
          {{ _try }}
        </v-chip>
      </v-chip-group>
    </v-row>

    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <v-card>
        <v-card-title class="text-h5 justify-center"
                      v-text="isWon ?  $t('play.won') :  $t('play.lost')"></v-card-title>
        <v-card-text class="text-center">
          {{ $t('play.answer') }} <p class="text--primary">{{ movie.title }}</p>
        </v-card-text>
        <!--        <v-img alt="" class="rounded-xl" max-width="200"-->
        <!--               :src="`https://image.tmdb.org/t/p/w200${this.movie.poster_path}`"></v-img>-->

      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
import ImagePixel from "@/components/ImagePixel";

const API_KEY = process.env.NUXT_ENV_API_KEY
export default {
  name: "play",
  components: {ImagePixel},
  transition: 'bounce',
  head: {
    title: "Play"
  },
  data() {
    return {
      movie: [],
      results: [],
      loaded: false,
      isLoading: false,
      search: null,
      autocompleteMovie: '',
      poster: null,
      tries: [],
      dialog: false,
      isWon: false
    }
  },
  mounted() {
    this.getRandomMovie()
  },

  methods: {
    getRandomMovie() {
      const language = this.$i18n.locale === 'en' ? 'en-US' : 'fr-FR'

      let randomPage = Math.floor(Math.random() * 5) + 1;
      let randomItem = Math.floor(Math.random() * 19)
      this.$axios.$get("/movie/top_rated",
        {
          params: {
            api_key: API_KEY,
            page: randomPage,
            language: language
          }
        }).then((res) => {
        this.movie = res.results[randomItem]
        this.poster = new Image(350, 500)
        this.poster.src = 'https://image.tmdb.org/t/p/w342' + this.movie.poster_path
      }).finally(() => (this.loaded = true))
    },
    checkAnswer(input) {
      if (input.target.value !== "" && !this.tries.includes(input.target.value) && this.tries.length < 6) {

        if (this.movie.title !== input.target.value) {
          this.tries.push(input.target.value)
        } else {
          this.isWon = true;
        }

        if (this.tries.length === 6 || this.isWon)
          this.dialog = true
        this.$refs.inputAuto.reset()
      }
    },
  },
  watch: {
    search(input) {
      const language = this.$i18n.locale === 'en' ? 'en-US' : 'fr-FR'

      this.isLoading = true
      if (input != null && input.length > 0) {
        this.$axios.$get('search/movie',
          {
            params: {
              api_key: API_KEY,
              query: input,
              language: language
            }
          }).then((res) => {
          this.results = res.results
        }).finally(() => {
          this.isLoading = false
        })
      } else {
        this.results = []
        this.isLoading = false
      }
    }
  }

}
</script>

