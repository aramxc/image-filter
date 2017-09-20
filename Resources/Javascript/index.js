//TODO: Add save functionality
//TODO: Allow uncheck to reset image to previous state

// Global variables, initiate each filter as null
var originalImage = null;
var grayImage = null;
var betterGrayImage = null;
var sepiaImage = null;
var negativeImage = null;
var noiseImage = null;
var rainbowImage = null;
var redImage = null;

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function upload() {

  //get file input from element
  var file = document.getElementById('fileInput');

  //save the first image as "originalImage"
  originalImage = new SimpleImage(file);


  //create a new instance of every filtered image
  grayImage = new SimpleImage(file);
  betterGrayImage = new SimpleImage(file);
  sepiaImage = new SimpleImage(file);
  negativeImage = new SimpleImage(file);
  noiseImage = new SimpleImage(file);
  redImage = new SimpleImage(file);
  rainbowImage = new SimpleImage(file);

  //draw originalImage to canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  originalImage.drawTo(canvas);

}

function resetImage() {

  uncheckAll();

  //check if original image is completely rendered in canvas
  if (imageIsLoaded(originalImage)) {

    //draw the original image back to canvas
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    originalImage.drawTo(canvas);

    //set each filtered image to a new instance of SimpleImage after reset
    grayImage = new SimpleImage(originalImage);
    betterGrayImage = new SimpleImage(originalImage);
    sepiaImage = new SimpleImage(originalImage);
    negativeImage = new SimpleImage(originalImage);
    noiseImage = new SimpleImage(originalImage);
    redImage = new SimpleImage(originalImage);
    rainbowImage = new SimpleImage(originalImage);
  }
}

function uncheckAll() {
  var checks = document.querySelectorAll('input[type = "checkbox"]');
  for (var i = 0; i < checks.length; i++) {
    var check = checks[i];
    if (!check.disabled) {
      check.checked = false;
    }
  }
}

function saveImage() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');

  window.location.href = image; // save locally
}

function imageIsLoaded(image) {

  //check if image has been instantiated and fully rendered
  if (image == null || !image.complete()) {
    alert('Image not loaded');
    return false;
  } else {
    return true;

  }
}

function doGray() {

  //if image is loaded, run grayScale() function
  if (imageIsLoaded(grayImage)) {

    grayScale();

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    grayImage.drawTo(canvas);
  }
}

function grayScale() {

  //iterate over every pixel and take average of RGB values
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

    //set each pixel to avg value
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}

function doBetterGray() {

  //if image is loaded, run grayScale() function
  if (imageIsLoaded(betterGrayImage)) {

    betterGrayScale();

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    betterGrayImage.drawTo(canvas);
  }
}

function betterGrayScale() {
  //iterate over every pixel and use better forumla for converting each pixel to gray.
  for (var pixel of betterGrayImage.values()) {

    var avg = 0.3 * pixel.getRed() + 0.59 * pixel.getGreen() + 0.11 * pixel.getBlue();

    //set each pixel to avg value
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}

function doSepia() {

  //if image is loaded, run sepia() function
  if (imageIsLoaded(sepiaImage)) {

    sepia();

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    sepiaImage.drawTo(canvas);
  }
}

function sepia() {

  //iterate over every pixel and take average of RGB values
  for (var pixel of sepiaImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

    //set each pixel to avg value + flat values for sepia effect
    pixel.setRed(avg + 100);
    pixel.setGreen(avg + 50);
    pixel.setBlue(avg + 50);
  }
}

function doNegative() {

  //if image is loaded, run negative() function
  if (imageIsLoaded(negativeImage)) {

    negative();

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    negativeImage.drawTo(canvas);
  }
}

function negative() {

  //iterate over every pixel
  for (var pixel of negativeImage.values()) {

    //get each pixel value and subtract it from 255
    pixel.setRed(255 - pixel.getRed());
    pixel.setGreen(255 - pixel.getGreen());
    pixel.setBlue(255 - pixel.getBlue());
  }
}

function doNoise() {

  //if image is loaded, run noise() function
  if (imageIsLoaded(noiseImage)) {

    noise();

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    noiseImage.drawTo(canvas);
  }
}

function noise() {

  //iterate over every pixel
  for (var pixel of noiseImage.values()) {

    // declare a variable "factor" to be multiplied by a random number below
    var factor = 65; //TODO: Make this variable a user input by slider.

    //define a variable "rand" by adding a random value to each RGB value
    var rand = (0.5 - Math.random()) * factor;
    pixel.setRed(pixel.getRed() + rand);
    pixel.setGreen(pixel.getGreen() + rand);
    pixel.setBlue(pixel.getBlue() + rand);
  }
}

function doRed() {

  //if image is loaded, run red() function
  if (imageIsLoaded(redImage)) {

    red();

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    redImage.drawTo(canvas);
  }
}

function red() {

  //iterate over every pixel
  for (var pixel of redImage.values()) {
    //calculate avg of RGB values
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    //if avg is below 128, change RGB values to add a red hue
    if (avg < 128) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
      // otherwise, change RGB values to different values for red hue
    } else {
      pixel.setRed(255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(2 * avg - 255);
    }
  }
}

function doRainbow() {

  //if image is loaded, run rainbow() function
  if (imageIsLoaded(rainbowImage)) {

    rainbow();

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    rainbowImage.drawTo(canvas);
  }
}

function rainbow() {

  //iterate over every pixel
  for (var pixel of rainbowImage.values()) {

    //calculate avg of RGB values
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

    //if avg is below 128, change RGB values according to rainbow algorithm
    if (avg < 128) {
      if (pixel.getY() < rainbowImage.height / 7) {
        //values for Red band
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);

      } else if ((pixel.getY() >= rainbowImage.height / 7) &&
        (pixel.getY() < rainbowImage.height * 2 / 7)) {
        //values for Orange band
        pixel.setRed(2 * avg);
        pixel.setGreen(0.8 * avg);
        pixel.setBlue(0);

      } else if ((pixel.getY() >= rainbowImage.height * 2 / 7) &&
        (pixel.getY() < rainbowImage.height * 3 / 7)) {
        //values for Yellow band
        pixel.setRed(2 * avg);
        pixel.setGreen(2 * avg);
        pixel.setBlue(0);

      } else if ((pixel.getY() >= rainbowImage.height * 3 / 7) &&
        pixel.getY() < rainbowImage.height * 4 / 7) {
        //values for Green band
        pixel.setRed(0);
        pixel.setGreen(2 * avg);
        pixel.setBlue(0);

      } else if ((pixel.getY() >= rainbowImage.height * 4 / 7) &&
        (pixel.getY() < rainbowImage.height * 5 / 7)) {
        //values for Blue band
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2 * avg);

      } else if ((pixel.getY() >= rainbowImage.height * 5 / 7) &&
        (pixel.getY() < rainbowImage.height * 6 / 7)) {
        //values for Indigo band
        pixel.setRed(0.8 * avg);
        pixel.setGreen(0);
        pixel.setBlue(2 * avg);

      } else {
        //values for Violet band
        pixel.setRed(1.6 * avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6 * avg);
      }

      // if avg is > 128 apply a different algorith for rainbow effect
    } else {
      if (pixel.getY() < rainbowImage.height / 7) {
        //values for Red band
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      } else if ((pixel.getY() >= rainbowImage.height / 7) &&
        (pixel.getY() < rainbowImage.height * 2 / 7)) {
        //values for Orange band
        pixel.setRed(255);
        pixel.setGreen(1.2 * avg - 51);
        pixel.setBlue(2 * avg - 255);

      } else if ((pixel.getY() >= rainbowImage.height * 2 / 7) &&
        (pixel.getY() < rainbowImage.height * 3 / 7)) {
        //values for Yellow band
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);

      } else if ((pixel.getY() >= rainbowImage.height * 3 / 7) &&
        (pixel.getY() < rainbowImage.height * 4 / 7)) {
        //values for Green band
        pixel.setRed(2 * avg - 255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);

      } else if ((pixel.getY() >= rainbowImage.height * 4 / 7) &&
        (pixel.getY() < rainbowImage.height * 5 / 7)) {
        //values for Blue band
        pixel.setRed(2 * avg - 255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);

      } else if ((pixel.getY() >= rainbowImage.height * 5 / 7) &&
        (pixel.getY() < rainbowImage.height * 6 / 7)) {
        //values for Indigo band
        pixel.setRed(1.2 * avg - 51);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);

      } else {
        //values for Violet band
        pixel.setRed(0.4 * avg + 153);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(0.4 * avg + 153);
      }
    }
  }
}
