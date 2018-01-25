/**
 * Copyright (c) 2018 MING-CHIEN LEE
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var asar = require('asar');

var src = './docs';
var dest = 'app.asar';

asar.createPackage(src, dest, function() {
  console.log('MyMoney asar package created!');
})
