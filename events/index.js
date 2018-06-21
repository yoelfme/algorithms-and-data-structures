// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor(){
    this.events = {}
  }

  // Register an event handler
  on(eventName, callback) {
    const event = this.events[eventName]
    if (event) {
      event.push(callback)
    } else {
      this.events[eventName] = [callback]
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    const event = this.events[eventName]

    if (event) {
      event.forEach(cb => {
        cb()
      })
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName]
  }
}

module.exports = Events;
