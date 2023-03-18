/* Para fijar las palabras arriba de las celdas a completar*/
var inputs= document.getElementsByClassName ("formulario_input");
for (var i=0; i<inputs.length; i++){
    inputs [i].addEventListener ("keyup", function() {
        if (this.value.length>=1){ 
            this.nextElementSibling.classList.add("fijar");
        } else {
            this.nextElementSibling.classList.remove("fijar");
        }
    });
}

/*Para mostrar el formulario oculto*/
const form= document.querySelector("form")
document.querySelector(".show").addEventListener("click", () => {
    form.classList.add("form_mostrar")
})


