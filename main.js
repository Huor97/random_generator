// ----------------------- function générator aléatoir

// générato aléatoir color
buttonColor.addEventListener("click", function (e) {
  let symbols = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  parantColor.style.backgroundColor = color;

  hex.textContent = color;
});
// générator aléatoir citation
// crée un tableau de citation objet
// déclar un variable pour stocker objet
// crée un bocle pour générer aléatoir
buttonCitation.addEventListener("click", function (e) {
  // citaionP;
  // let citationOutput = "Ce n'est pas vrais la realiter";
  monjison = {
    1: "Ce n'est pas vrais la realiter",
    2: "Ce n'est pas vrais la realiter2",
    3: "Ce n'est pas vrais la realiter3",
    4: "Ce n'est pas vrais la realiter4",
    5: "Ce n'est pas vrais la realiter5",
    6: "Ce n'est pas vrais la realiter6",
    7: "Ce n'est pas vrais la realiter7",
    8: "Ce n'est pas vrais la realiter8",
  };
  let citaionResulta;

  for (let i = 0; i < 8; i++) {
    citaionResulta = monjison[Math.floor(Math.random() * 10)];
  }
  citaionP.textContent = citaionResulta;
});
