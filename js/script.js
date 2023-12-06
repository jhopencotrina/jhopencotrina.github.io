
//slider

let n = document.getElementsByClassName("fd");
console.log(n);
for(x=0; x<5; x++){
    n[x].onclick = function () {
      for (i = 0; i < 5; i++) {
        n[i].classList.remove("activo");
      }
      this.classList.add("activo");
    };
}