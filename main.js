// ----------------------- function générator aléatoir

hex1.addEventListener("click", function (e) {
  let symbols = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  parantColor.style.backgroundColor = color;

  //   let colorHex = document.createElement(color);
  //   hex.appendChild(colorHex);
  document.getElementById("hex").innerHTML = color;
});
