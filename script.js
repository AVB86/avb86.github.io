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



// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


