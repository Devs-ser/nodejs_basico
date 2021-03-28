const timeout = 1000
const checking =() => console.log('1seg')
let interval = setInterval(checking,timeout)
setTimeout( ()=> clearInterval(interval), 5000)