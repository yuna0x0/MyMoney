/**
 * MyMoney - build.js
 * Copyright (c) 2019 MING-CHIEN LEE
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const fs = require("fs");
const workboxBuild = require("workbox-build");
var Terser = require("terser");
// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  return workboxBuild
    .generateSW({
      swDest: "dist/sw.out.js",
      cacheId: "mymoney",
      skipWaiting: true,
      clientsClaim: true,
      cleanupOutdatedCaches: true,
      globDirectory: "./",
      globPatterns: [
        "**/*.{html,png,xml,js,css,eot,svg,ttf,woff,woff2,otf,ico,json,webmanifest}"
      ]
    })
    .then(({ count, size, warnings }) => {
      warnings.forEach(console.warn);
      console.log(`${count} files will be precached, totaling ${size} bytes.`);
    });
};

const minify = () => {
  fs.writeFileSync(
    "sw.js",
    Terser.minify(fs.readFileSync("dist/sw.out.js", "utf8")).code,
    "utf8"
  );
};
buildSW().then(() => {
  minify();
});
