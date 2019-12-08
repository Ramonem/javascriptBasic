// Ya no ocupar var!
var antiguo = 'asd'
console.log(antiguo)
antiguo = 123
console.log(antiguo)
antiguo = { asd: 'asd' }
console.log(antiguo)
console.log('')

// Ocupar let cuando la variable puede cambiar de tipo
let puedeCambiar = 'asd'
console.log(puedeCambiar)
puedeCambiar = 123
console.log(puedeCambiar)
puedeCambiar = { asd: 'asd' }
console.log(puedeCambiar)
console.log('')

// Ocupar const cuando la variable no cambia de tipo
const noCambiaTipo = {}
console.log(noCambiaTipo)
noCambiaTipo.nombre = 'Ramón'
console.log(noCambiaTipo)
noCambiaTipo.apellido = 'Escobar'
console.log(noCambiaTipo)
noCambiaTipo = 'asd'
console.log('')
