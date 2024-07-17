let object = document.querySelector(".object")
let texto = document.querySelector(".texto")

texto.addEventListener("input",() => {
    object.style.borderRadius = texto.value;
    object.style.background = texto.value;
    object.style.borderColor = texto.value;
   if (texto.value === "img"){
    object.style.setProperty("background-imagen", "url(../'logo slaq.png')")
   }
});