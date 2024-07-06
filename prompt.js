alert("Bienvenido al número secreto")
let userChoice = prompt("Elige un número entre 1 y 10")
alert("Tú elección fue: " + userChoice)
let secretNumber = Math.floor (Math.random() * 10)

if (userChoice == secretNumber){
    alert("¡Ganaste!")
} else { 
    alert("¡Perdiste! el número secreto era : " + secretNumber)
} 