export function pixelizeImage(canvas, img, ratio) {

  canvas.width = 350;
  canvas.height = 500;

  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  const smallCanvas = reduceImage(img, ratio);

  ctx.drawImage(
    smallCanvas,
    0, 0,
    smallCanvas.width, smallCanvas.height,
    0, 0,
    canvas.width, canvas.height
  );
}

export function reduceImage(img, ratio) {
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
