// Global variables
var image;

function upload() {
  var fileinput = document.getElementById('fileinput');

  //innstantiate new SimpleImage using fileinput:
  image = new SimpleImage(fileinput);

  //pass newly created image into other functions:
  drawBackup(image);
  draw(image);
  getDimensions(image);
}

function draw() {
  //Draw image to canvas:
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  image.drawTo(canvas);

}

function drawBackup() {
  //Draw image to backupCanvas:
  var backupCanvas = document.getElementById('backupCanvas');
  var backupContext = backupCanvas.getContext('2d');
  image.drawTo(backupCanvas);

}

function resetImage() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var backupCanvas = document.getElementById('backupCanvas');
  var backupContext = backupCanvas.getContext('2d');

  context.drawImage(backupCanvas, 0, 0);

}

//Get image dimensions and return to output:
function getDimensions() {
  var xDim = image.width;
  var yDim = image.height;
  document.getElementById('dim-output').innerHTML = xDim + ' x ' + yDim;

}

function grayScale() {

  //iterate over every pixel and take average of RGB values
  for (var pixel of image.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

    //set each pixel to avg value
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }

  //draw new image
  draw();

}

function betterGrayScale() {
  //iterate over every pixel and use better forumla for converting each pixel to gray.
  for (var pixel of image.values()) {

    var avg = 0.3 * pixel.getRed() + 0.59 * pixel.getGreen() + 0.11 * pixel.getBlue();

    //set each pixel to avg value
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }

  //draw new image
  draw();
}

function sepia() {

  //iterate over every pixel and take average of RGB values
  for (var pixel of image.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

    //set each pixel to avg value + flat values for sepia effect
    pixel.setRed(avg + 100);
    pixel.setGreen(avg + 50);
    pixel.setBlue(avg + 50);
  }

  //draw new image
  draw();

}

function negative() {

  //iterate over every pixel
  for (var pixel of image.values()) {

    //get each pixel value and subtract it from 255
    pixel.setRed(255 - pixel.getRed());
    pixel.setGreen(255 - pixel.getGreen());
    pixel.setBlue(255 - pixel.getBlue());
  }

  //draw new image
  draw();

}

function noise() {

  //iterate over every pixel
  for (var pixel of image.values()) {

    // declare a variable "factor" to be multiplied by a random number below
    var factor = 65; //TODO: Make this variable a user input by slider.

    //define a variable "rand" by adding a random value to each RGB value
    var rand = (0.5 - Math.random()) * factor;
    pixel.setRed(pixel.getRed() + rand);
    pixel.setGreen(pixel.getGreen() + rand);
    pixel.setBlue(pixel.getBlue() + rand);
  }

  //draw new image
  draw();

}
