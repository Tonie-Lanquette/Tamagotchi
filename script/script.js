// IMPORT DES MODULES
import Formulaire from "./Formulaire.js";
import { levelUp, lvlBar } from "./LevelUp.js";
import Barre from "./Barre.js";
import { move } from "./Mouvement.js";
import { soundOn, soundOff } from "./Music.js";

// FONCTION D'INITIALISATION QUI LANCE TOUTES LES AUTRE FONCTIONS/METHODES
function startGame() {
  let intervalle = setInterval(() => {
    levelUp();
  }, 100);
  formulaire.applyIdentity();
  formulaire.closeFormulaire();
  levelUp();
  lvlBar();
  move();
  barre1.lose();
  soundOff();
  soundOn();
}
let save = document.querySelector(".save");
save.addEventListener("click", () => {
  startGame();
});

// CREATION DES BARRES
let formulaire = new Formulaire();
const tableau = [];
let barre1 = new Barre();
tableau.push(barre1);
tableau.forEach((progress) => {
  progress.buttonFood.addEventListener("click", () => {
    progress.getFood(10);
  });
});

// CREATION D'UNE FONCTION DE RELOAD DE LA PAGE APRES GAME OVER
let replay = document.getElementById("replay");
function reload() {
  location.reload();
}
replay.addEventListener("click", reload());
