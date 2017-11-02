var asar = require('asar');

var src = './docs';
var dest = 'app.asar';

asar.createPackage(src, dest, function() {
  console.log('asar package created!');
})