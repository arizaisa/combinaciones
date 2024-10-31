// Boton 1

let background_button = document.getElementById("backgroung_button");

console.log(background_button);

background_button.addEventListener("click", changeBackground);

let background_image = document.getElementById("backgroung_image");

let background_counter = 1;

function changeBackground() {
  background_counter += 1;
  if (background_counter > 4) {
    background_counter = 1;
  }
  background_image.src = "./img/Background" + background_counter + ".PNG";
  console.log("change Background");
}

// Boton 2

let letter_button = document.getElementById("letter_button");

console.log(letter_button);

letter_button.addEventListener("click", changeLetter);

let letter_image = document.getElementById("letter_image");

let letter_counter = 1;

function changeLetter() {
  letter_counter += 1;
  if (letter_counter > 5) {
    letter_counter = 1;
  }
  letter_image.src = "./img/Letter" + letter_counter + ".PNG";
  console.log("change Letter");
}

// Boton 3

let sticker_button = document.getElementById("sticker_button");

console.log(sticker_button);

sticker_button.addEventListener("click", changeSticker);

let sticker_image = document.getElementById("sticker_image");

let sticker_counter = 1;

function changeSticker() {
  sticker_counter += 1;
  if (sticker_counter > 4) {
    sticker_counter = 1;
  }
  sticker_image.src = "./img/Sticker" + sticker_counter + ".PNG";
  console.log("change Sticker");
}
