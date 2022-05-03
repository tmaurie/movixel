<template>
  <v-container>

    <v-row justify="center">
      <v-progress-circular v-if="!loaded" indeterminate></v-progress-circular>
      <ImagePixel v-else :poster="poster"></ImagePixel>
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
          :search-input.sync="search"
          item-text="title"
          clearable
          rounded
          cache-items
          outlined
          hide-no-data
          return-object
        ></v-autocomplete>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
import ImagePixel from "@/components/ImagePixel";

const API_KEY = process.env.NUXT_ENV_API_KEY
export default {
  name: "play",
  components: {ImagePixel},
  head: {
    title: "Play"
  },
  data() {
    return {
      movie: [],
      results: [],
      loaded: false,
      search: null,
      autocompleteMovie: '',
      poster: null
    }
  },
  mounted() {
    this.getMovie()
  },
  updated() {

  },

  methods: {
    getMovie() {
      this.$axios.$get("/movie/634649",
        {
          params: {
            api_key: API_KEY
          }
        }).then((res) => {
        this.movie = res
        this.poster = new Image(350, 500)
        this.poster.src = 'https://image.tmdb.org/t/p/w342' + this.movie.poster_path
      }).then().finally(() => (this.loaded = true))
    },


    checkAnswer() {
      if (this.movie.title === this.autocompleteMovie.title) {
        alert(this.movie.title)
      }
    },
  },
  watch: {
    search(input) {
      if (input != null && input.length > 0) {
        this.$axios.$get('search/movie',
          {
            params: {
              api_key: API_KEY,
              query: input
            }
          }).then((res) => {
          this.results = res.results
        })
      } else {
        this.results = []
      }
    }
  }

}
</script>

