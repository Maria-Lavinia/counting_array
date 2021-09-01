"use strict";

const number = [0];
let iterator = 0;

loop();

function loop() {
  iterator++;

  if (iterator < 10) {
    number.unshift(iterator);
    console.log(number);
    setTimeout(loop, 500);
  }
}
