function stelle() {
  for (let i = 0; i <= 10; i++) {
    const star = document.getElementById("main #star");
    // foto = document.createElement(" ");
    // (foto.src = " width="),
    //   47,
    //   " height=",
    //   46,
    //   " viewBox=",
    //   0,
    //   0,
    //   47,
    //   46,
    //   " fill=",
    //   none;
    foto = document.createElement("img");
    foto.src = "./assets/star.svg";
    star.appendChild(foto);
  }
}
stelle();
