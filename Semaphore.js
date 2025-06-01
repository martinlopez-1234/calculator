export class Semaphore {
  constructor() {
    this.redLightsState = false
    this.yellowLightsState = false
    this.greenLightsState = false
  }

  run() {
    this.worker = new Worker("worker.js")
    this.worker.addEventListener("message", (e) => {
      const state = e.data
      switch (state) {
        case "RED":
          this.redToYellowTransition()
          break
        case "YELLOW":
          this.yellowToGreenTransition()
          break
        case "GREEN":
          this.greenToRedTransition()
          break
        default:
          break
      }
    })
  }

  redToYellowTransition() {
    this.redLightsState = false
    this.yellowLightsState = true
    this.greenLightsState = false
    dispatchEvent(new CustomEvent("changed", { detail: this.getStates() }))
  }

  yellowToGreenTransition() {
    this.redLightsState = false
    this.yellowLightsState = false
    this.greenLightsState = true
    dispatchEvent(new CustomEvent("changed", { detail: this.getStates() }))
  }

  greenToRedTransition() {
    this.redLightsState = true
    this.yellowLightsState = false
    this.greenLightsState = false
    dispatchEvent(new CustomEvent("changed", { detail: this.getStates() }))
  }

  stop() {
    this.redLightsState = false
    this.greenLightsState = false
    this.greenLightsState = false
    this.worker?.terminate()
  }

  getStates() {
    return {
      red: this.redLightsState,
      yellow: this.yellowLightsState,
      green: this.greenLightsState,
    }
  }
}
