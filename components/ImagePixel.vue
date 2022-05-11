<template>

  <div>
    <canvas class="rounded-xl" id="canvas"></canvas>
  </div>
</template>

<script>

import {pixelizeImage} from "@/plugins/utils";

const ratio_by_try = [60, 45, 30, 20, 10, 7, 1]

export default {
  name: "ImagePixel",
  props: {
    poster: {},
    tryNumber: {},
    winState: {}
  },

  mounted() {
    const canvas = document.getElementById("canvas");
    this.initCanvas(canvas, this.poster, ratio_by_try[this.tryNumber])
  },

  updated() {
    const canvas = document.getElementById("canvas");
    pixelizeImage(canvas, this.poster, ratio_by_try[this.tryNumber])
  },

  watch: {
    tryNumber() {
      const canvas = document.getElementById("canvas");
      pixelizeImage(canvas, this.poster, ratio_by_try[this.tryNumber])
    },
    winState() {
      const canvas = document.getElementById("canvas");
      pixelizeImage(canvas, this.poster, 1)
    }
  },

  methods: {
    initCanvas(canvas, img, ratio) {
      img.onload = function () {
        pixelizeImage(canvas, img, ratio)
      }
    }
  }
}
</script>

<style scoped>

</style>
