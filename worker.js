const states = [
  { name: "RED", duration: 3000 },
  { name: "YELLOW", duration: 500 },
  { name: "GREEN", duration: 3000 },
]

let index = 0

const nextState = () => {
  const state = states[index] //index = 0 -> {name: "RED", duration: 3000}

  postMessage(state.name) // Envia mensaje al hilo principal

  setTimeout(() => {
    index = (index + 1) % states.length // Cambia el índice al siguiente estado
    /* Explicacion cuenta
            index = 0, (0 + 1) % 3 = 1
            index = 1, (1 + 1) % 3 = 2
            index = 2, (2 + 1) % 3 = 0
            index = 0, (....)
        */
    nextState()
  }, state.duration) //index = 0 -> 3000ms
}

nextState()
