// SCRIPT SUR LA GESTION DE LA MUSIQUE D'AMBIANCE

let music = document.querySelector(".music");
let musicOff = document.querySelector(".musicOff");
let musicOn = document.querySelector(".musicOn");

// addEvenlistener qui vont réaliser les fonctions

export function soundOn() {
  musicOff.addEventListener("click", () => {
    play();
  });
}

export function soundOff() {
  musicOn.addEventListener("click", () => {
    pause();
  });
}

// fonction qui vient interchanger deux boutons pour permettre le basculement play/stop de la musique

function play() {
  musicOff.classList.add("hidden");
  musicOff.classList.remove("appear");
  musicOn.classList.add("appear");
  musicOn.classList.remove("hidden");
  music.innerHTML = `<audio src="audio/music.mp3" autoplay loop></audio>
      </div>`;
}

function pause() {
  musicOn.classList.add("hidden");
  musicOn.classList.remove("appear");
  musicOff.classList.add("appear");
  musicOff.classList.remove("hidden");
  music.innerHTML = `<audio src="audio/music.mp3" muted loop></audio>
      </div>`;
}
