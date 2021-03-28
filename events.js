// const {EventEmitter}= require('events')
// const ev = new EventEmitter()
// ev.on('saySomething', (message) => {
//   console.log('eu ouvi voce',message)
// })

// ev.emit('saySomething', "Joao")
// ev.emit('saySomething', "Allan")
// ev.emit('saySomething', "Pablo")

const {inherits} = require('util')
const { EventEmitter} = require('events')

function Character (name){
  this.name = name
}
inherits(Character, EventEmitter)

const chapolin = new Character('chapolin');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?')

chapolin.emit('help')