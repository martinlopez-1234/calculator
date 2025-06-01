import { Semaphore } from "./Semaphore.js"

document.addEventListener("DOMContentLoaded", function () {
  const semaforo = new Semaphore()
  semaforo.run()

  addEventListener("changed", (e) => {
    const { red, yellow, green } = e.detail //{red, yellow, green}

    document.querySelector(".red-s").style.opacity = red ? 1 : 0.2
    document.querySelector(".yellow-s").style.opacity = yellow ? 1 : 0.2
    document.querySelector(".green-s").style.opacity = green ? 1 : 0.2
  })
})
