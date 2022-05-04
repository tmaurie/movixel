<template>

  <div>
    <canvas class="rounded-xl" id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "PixelImage",
  props: {
    poster: {}
  },

  mounted() {
    const canvas = document.getElementById("canvas");
    this.pixelateImage(canvas, this.poster, 60)
  },

  methods: {
    pixelateImage(canvas, img, ratio) {
      img.onload = function () {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;

        const smallCanvas = document.createElement('canvas');
        smallCanvas.width = img.naturalWidth / ratio;
        smallCanvas.height = img.naturalHeight / ratio;
        const ctx2 = smallCanvas.getContext('2d');

        ctx2.drawImage(img, 0, 0, smallCanvas.width, smallCanvas.height);
        ctx.drawImage(smallCanvas, 0, 0, smallCanvas.width, smallCanvas.height, 0, 0, canvas.width, canvas.height);
      }

    }
  }
}
</script>

<style scoped>

</style>
