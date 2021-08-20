// ----------------------- function générateur aléatoir

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
// générateur aléatoir citation
// crée un tableau de citation objet
// déclar un variable pour stocker objet
// crée un bocle pour générer aléatoir
buttonCitation.addEventListener("click", function (e) {
  monjison = {
    0: "Le souvenire, c'est la présence invisible: Victor Hugo",
    1: "Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur: Nelson Mandela",
    2: "Un problème sans solution est un problème mal posé: Albert Einstein",
    3: "Deux choses sont infinies: l'Univers et la bêtise humaine. Mais en ce qui concerne l'Univers, je n'en ai pas encore acquis la certitude absolue: Albert Einstein",
    4: "Quand on veut on peut, quand on peut on doit, Napoléon Bonaparte",
    5: "C'est de l'enfer des pauvres qu'est fait le paradi des riches: Vicor Hugo",
    6: "Ce n'est pas vrais la realiter7",
    7: "Ce n'est pas vrais la realiter8",
  };
  let monjisonMin = 0;
  let monjisonMax = 7;
  let citaionResulta;
  //La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x
  citaionResulta =
    monjison[
      Math.floor(Math.random() * (monjisonMax - monjisonMin + 1)) + monjisonMin
    ];

  citaionP.textContent = citaionResulta;
});
