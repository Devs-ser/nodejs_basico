//cancela o timeout
const timeout = 3000
const finished =() => console.log('done!')


let timer =  (setTimeout(finished, timeout))
clearTimeout(timer)
console.log('Mostrar')