
document.querySelector("#activate-flight").addEventListener("click", function() {
 toggleClass("power-enabled")
})

let flight = document.querySelector("#flight")

function flightHandlerFunction () {
  flight.toggleClass("power-enabled")
}

flightHandlerFunction()

console.log(flight)