function hola1() {
    return 'hola'
}

const hola2 = () => {
    return 'hola1'
}

const hola3 = () => 'hola'

function holaAsync1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() >= 0.5) {
                resolve('listo C:')
            } else {
                reject('error :C')
            }
        }, 500);
    })
}

async function holaAsyncConAwait() {
    try {
        const respuesta = await holaAsync1()
        console.log('ok', respuesta)
    } catch (error) {
        console.log('error', error)
    }
}

// console.log('funcion hola1', hola1())
// console.log('funcion hola2', hola2())
// console.log('funcion hola3', hola3())
// holaAsync1().then(res => console.log('ok', res)).catch(err => console.log('error', err))
holaAsyncConAwait()