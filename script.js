let button = document.querySelector(".btn")
button.addEventListener("click", handleSubmit)
function handleSubmit(e){
    alert("I was clicked!")
}

let p = document.createElement("p")
p.textContent= "I was created through JavaScript"
document.querySelector("body").appendChild(p)
let s = "Hello"
console.log(s)