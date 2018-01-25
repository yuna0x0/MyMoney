/**
 * Copyright (c) 2018 MING-CHIEN LEE
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const electron = require("electron");
const proc = require("child_process");
console.log(electron);
const child = proc.spawn(electron);
