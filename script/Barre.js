// CLASS BARRE : CREATION ET GESTION DES BARRES "FOOD" ET "LOVE"

export default class Barre {
  id;
  life;
  color;

  constructor(life = 100, color = "#3AD73F") {
    this.id = this.idAleatoire();
    this.life = life;
    this.color = color;

    this.createHTML1();
    this.createHTML2();
  }

  //   GET/SET
  get id() {
    return this.id;
  }
  set id(ID) {
    this.id = ID;
  }

  get life() {
    return this.life;
  }

  set life(life) {
    if (life <= 0) this.life = life;
  }

  get color() {
    return this.color;
  }
  set color(color) {
    this.color = color;
  }

  get buttonFood() {
    return document.querySelector(".apple");
  }
  // , ".meat", ".fish"
  get buttonPet() {
    return document.querySelector(".pet");
  }
  get textStat() {
    return document.querySelector(".barre p");
  }
  get container() {
    return document.getElementById(this.id);
  }

  get progress() {
    return document.querySelector(".progress");
  }

  //   METHODS
  // creation des barres
  createHTML1() {
    let afficher = document.getElementById("food");

    let container = document.createElement("div");
    container.classList.add("container");
    container.id = this.id;

    afficher.appendChild(container);

    let barre = document.createElement("div");
    barre.classList.add("barre");

    container.appendChild(barre);

    let textStat = document.createElement("p");
    textStat.classList.add("textStat");
    textStat.textContent = this.life + "/100";

    barre.appendChild(textStat);

    let progress = document.createElement("div");
    progress.classList.add("progress");
    progress.style.backgroundColor = this.color;
    progress.style.width = this.life + "%";

    barre.appendChild(progress);
  }

  createHTML2() {
    let afficher2 = document.getElementById("love");
    let container = document.createElement("div");
    container.classList.add("container");
    container.id = this.id;

    afficher2.appendChild(container);

    let barre = document.createElement("div");
    barre.classList.add("barre");

    container.appendChild(barre);

    let textStat = document.createElement("p");
    textStat.classList.add("textStat");
    textStat.textContent = this.life + "/100";

    barre.appendChild(textStat);

    let progress = document.createElement("div");
    progress.classList.add("progress");
    progress.style.backgroundColor = this.color;
    progress.style.width = this.life + "%";

    barre.appendChild(progress);
  }

  // genration d'un id aleatoir
  idAleatoire() {
    return Math.floor(Math.random() * 100);
  }

  // mise en place de la décrementation
  lose() {
    let width = this.life;
    let repeat = setInterval(less, 1000);

    function less() {
      if (width == 0) {
        clearInterval(repeat);
        // alert("Game Over");
        document.querySelector(".main").remove();
        document.body.innerHTML = `<div class="over"><h1>Game Over !</h1><p class="replay">Replay</p></div>`;
      } else {
        width--;
        let textStat = document.querySelector(".textStat");
        textStat.textContent = width + "/100";
        let theprogress = document.querySelector(".progress");
        theprogress.style.width = width + "%";
        return width;
      }
    }
  }

  // methode de gain pour les jauges 
  getFood(quantity) {
    let textStat = document.querySelector(".textStat");
    let progress = document.querySelector(".progress");
    let width = this.life + quantity;
    progress.style.width = width + "%";
    progress.style.maxWidth = "100%";
    textStat.textContent = width + "/100";
  }
}
