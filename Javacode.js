var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#text-input");

btnTranslate.addEventListener("click", clickHandler)
 function clickHandler()
 {
     console.log("clicked")
     console.log("input", txtinput.value)
 }
