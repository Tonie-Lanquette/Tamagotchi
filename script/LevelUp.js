let up = document.getElementById("up");
let result = "0";
up.innerHTML = result;
let base = document.querySelector(".base");
let secund = document.querySelector(".secund");
let third = document.querySelector(".third");

// fonctions prise de niveau

// fonction augmenter le
export function levelUp() {
  if (width == 100) {
    width = 0;
    result++;
    up.innerHTML = result;
    lvlBar();
    evolve();
  } else lvlBar();
}

let width = 1;
let i = 0;
export function lvlBar() {
  if (i == 0) {
    i = 1;
    let bar = document.getElementById("levelBar");
    let id = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        bar.style.width = width + "%";
      }
    }
  }
}


// Changer l'apparence du tamagotchi
function evolve() {
  if (result >= 2 && result < 4) {
    if (result == 2) {
      congratulation();
      document.querySelector(".base").remove();
    }
    secund.classList.add("appear");
    secund.classList.remove("hidden");
  } else if (result >= 4) {
    if (result == 4) {
      document.querySelector(".secund").remove();
      congratulation();
    }
    third.classList.add("appear");
    third.classList.remove("hidden");
  }
}

function congratulation() {
  let message = document.querySelector(".message");
  message.innerHTML = `<p>Congratulation your tamakemon just evolve !!!</p>`;
  message.classList.add("appear");
  message.classList.remove("hidden");
  setTimeout(() => {
    message.classList.remove("appear");
    message.classList.add("hidden");
  }, "3000");
}
