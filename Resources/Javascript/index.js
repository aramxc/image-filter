
// Global variables
var image;

function upload() {
  var fileinput = document.getElementById('fileinput');

  //innstantiate new SimpleImage using fileinput:
  image = new SimpleImage(fileinput);

  //Get image dimensions and return to output:
  var xDim = image.width;
  var yDim =  image.height;
  document.getElementById('dim-output').innerHTML = xDim + ' x ' + yDim;

  //Draw image to canvas:
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  image.drawTo(canvas);

}
