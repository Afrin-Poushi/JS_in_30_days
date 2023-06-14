/** Declare Variables */
const takePhotoBtn = document.querySelector(".capture-btn");
const video = document.querySelector(".player");
const showPhotos = document.querySelector(".showPhotos");
const snapSound = document.querySelector(".snap");
const canvas = document.querySelector(".photo-canvas");
const ctx = canvas.getContext("2d");

/**Building Function */
/**Get the video feed */
function getVideo(e) {
  /**This returns A Promise whose fulfillment handler receives MediaStream object
   *  when the requested media has successfully been obtained. */
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      console.log(localMediaStream);
      video.srcObject = localMediaStream;

      video.play();
    })
    .catch((err) => {
      console.error(err);
      window.alert("To take photo, allow the camera access of your device");
    });
}

/** Get the canvas for getting photos */
function getPhotoCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  /**every 15 ms canvas will take video element and drop on canvas */
  return setInterval(() => {
    /**drawImage(image, dx, dy, dWidth, dHeight)
     * ways to draw an image onto the canvas
     */
    ctx.drawImage(video, 0, 0, width, height);
    /**getImageData will return every pixels of array */
    let pixels = ctx.getImageData(0, 0, width, height);

    // pixels = redEffect(pixels);
    pixels = greenScreen(pixels);

    /**put pixels back onto canvas*/
    ctx.putImageData(pixels, 0, 0);
  }, 15);
}

/**play capture sound and take pic */
function takePhoto() {
  snapSound.currentTime = 0;
  snapSound.play();

  /**Take the picture-data from canvas which is base64 in url link*/
  const picData = canvas.toDataURL("images/jpeg");
  const linkTag = document.createElement("a");
  linkTag.href = picData;
  /**download attribute means target will be downloaded
   * when a user clicks on the hyperlink*/
  linkTag.setAttribute("download", "pretty_img");
  linkTag.innerHTML = `<img src=${picData} alt="pretty image"/>`;
  showPhotos.insertBefore(linkTag, showPhotos.firstChild);
}

/**give red effect camera */
function redEffect(pixels) {
  /**4 bacause rgb, alpha value */
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] = pixels.data[i] + 100; // red
  }
  return pixels;
}

/** Get inputs from user and set it */
function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll(".rgb input").forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();
takePhotoBtn.addEventListener("click", takePhoto);

/** once the video is playing it emits an event named canplay*/
video.addEventListener("canplay", getPhotoCanvas);
