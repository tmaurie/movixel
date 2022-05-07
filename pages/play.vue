<template>
  <v-container>

    <v-row justify="center">
      <v-progress-circular v-if="!loaded" indeterminate></v-progress-circular>
      <ImagePixel v-else :poster="poster" :try-number="tries.length"></ImagePixel>
      <!--      <PixelImage v-if="poster" :poster="poster"></PixelImage>-->
      <!--      {{ movie.title }}-->
      <!--      <canvas class="rounded-xl" width="300" height="500" ref="posterCanvas"></canvas>-->
      <!--      <v-btn @click="pixelateImage($refs.posterCanvas, poster, 30)"></v-btn>-->
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
          ref="inputAuto"
          :search-input.sync="search"
          item-text="title"
          clearable
          rounded
          outlined
          hide-no-data
          return-object
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


  </v-container>
</template>

<script>
import ImagePixel from "@/components/ImagePixel";

const API_KEY = process.env.NUXT_ENV_API_KEY
export default {
  name: "play",
  components: {ImagePixel},
  // transition: 'bounce',
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
      poster: null,
      tries: []
    }
  },
  mounted() {
    this.getMovie()
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
      }).finally(() => (this.loaded = true))
    },
    checkAnswer(input) {
      if (input.target.value !== "" && !this.tries.includes(input.target.value) && this.tries.length < 6) {
        this.tries.push(input.target.value)
        console.log(this.tries.length)

        if (this.movie.title === input.target.value) {
          // alert(this.movie.title)
        }
        this.$refs.inputAuto.reset()
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

