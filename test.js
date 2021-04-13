const Noise = require('./noise');

const perlin = new Noise();

let xoff = 0;
while (true) {
  console.log(perlin.noise(xoff, xoff))
  xoff+=0.1;
}