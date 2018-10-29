
document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

document.querySelector("#activate-mindreading").addEventListener("click", mindReadingFunction)

document.querySelector("#activate-xray").addEventListener("click", xrayFunction)

document.querySelectorAll("#activate-all").addEventListener("click", activateAllFunction)

document.querySelectorAll("#deactivate-all").addEventListener("click", deactivateAllFunction)

function flightHandlerFunction () {
  let flight = document.getElementById("flight");
  flight.classList.toggle("enabled")
  console.log(flight)
}
flightHandlerFunction()

function mindReadingFunction () {
  let mindReading = document.getElementById("mindreading");
  mindReading.classList.toggle("enabled")
  console.log(mindReading)
}
mindReadingFunction()

function xrayFunction () {
  let xray = document.getElementById("xray");
  xray.classList.toggle("enabled")
  console.log(xray)
}
xrayFunction()

function activateAllFunction () {
  let activateAll = document.getElementById("activate-all");
  activateAll.classList.toggle("enabled")
  console.log(activateAll)
}
activateAllFunction()