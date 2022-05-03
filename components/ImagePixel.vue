<template>
  <div>
    <canvas v-if="poster" class="rounded-xl" width="300" height="500" ref="posterCanvas"></canvas>

  </div>

</template>
<script>
export default {
  name: 'ImagePixel',
  props: {
    poster: {},
  },
  data() {
    return {}
  },

  mounted() {
    //
    // console.log("mounted")
    // window.addEventListener('load', () => {
    //   this.pixelateImage(this.$refs.posterCanvas, this.poster, 30)
    //
    // })
    this.pixelateImage(this.$refs.posterCanvas, this.poster, 30)
  },
  updated() {
    this.pixelateImage(this.$refs.posterCanvas, this.poster, 30)

  },

  methods: {

    pixelateImage(canvas, img, ratio) {

      // console.log(canvas)
      // console.log(img)
      // console.log(ratio)

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext('2d');
      ctx.imageSmoothingEnabled = false;
      const smallCanvas = this.reduceImage(img, ratio);

      ctx.drawImage(
        smallCanvas,
        0, 0,
        smallCanvas.width, smallCanvas.height,
        0, 0,
        canvas.width, canvas.height
      );
    },

    reduceImage(img, ratio) {

      const canvas = document.createElement('canvas');

      canvas.width = img.naturalWidth / ratio;
      canvas.height = img.naturalHeight / ratio;

      const ctx = canvas.getContext('2d');

      ctx.drawImage(
        img,
        0, 0,
        canvas.width, canvas.height
      );

      return canvas;
    }
  }
}
</script>
