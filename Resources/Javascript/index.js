
// Global variables
var image;

function upload() {
  var fileinput = document.getElementById('fileinput');

  //innstantiate new SimpleImage using fileinput:
  image = new SimpleImage(fileinput);

  //pass newly created image into other functions:
  window.onload(draw(image));
  window.onload(getDimensions(image));
}

function draw() {
  //Draw image to canvas:
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  image.drawTo(canvas);

}

//Get image dimensions and return to output:
function getDimensions() {
  //TODO: FIX THIS FUNCTION
  var xDim = 10;
  var yDim = 10;
  document.getElementById('dim-output').innerHTML = xDim + ' x ' + yDim;

}
