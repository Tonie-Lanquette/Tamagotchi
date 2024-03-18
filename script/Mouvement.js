// FONCTION MOUVEMENT PAR UNE BOUCLE D'IMAGES
export function move() {
  let frame1 = document.querySelector(".frame1");
  let frame2 = document.querySelector(".frame2");
  frame1.classList.remove("appear");
  frame1.classList.add("hidden");

  frame2.classList.remove("hidden");
  frame2.classList.add("appear");

  setTimeout(moveBis, 1000);
}
function moveBis() {
  let frame1 = document.querySelector(".frame1");
  let frame2 = document.querySelector(".frame2");
  frame1.classList.remove("hidden");
  frame1.classList.add("appear");

  frame2.classList.remove("appear");
  frame2.classList.add("hidden");
}

setInterval(move, 2000);
