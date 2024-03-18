// CLASS FORMULAIRE POUR LA CREATION DE L'IDENTITE DU TAMAKEMON

export default class Formulaire {
  name;
  gender;

  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  // METHODES
  // RECUPERATION DES INFORMATIONS

  getGender() {
    let value = document.getElementsByName("gender");
    let selectValue = Array.from(value).find((radio) => radio.checked);
    return selectValue.value;
  }
// MISE EN PLACE DES INFORMATION DANS LA FICHE D'IDENTITE 

  applyIdentity() {
    let tamaName = document.querySelector(".nameGen");
    let name = document.getElementById("tamaName").value;
    let gender = this.getGender();
    let newName = new Formulaire(name, gender);
    tamaName.innerHTML += `<p>${newName.name}</p><p class="gender">${newName.gender}</p>`;
  }


  closeFormulaire() {
    let formulaire = document.querySelector(".login");
    formulaire.style.display = "none";
  }
}
