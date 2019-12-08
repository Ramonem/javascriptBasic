const participantes = [
    {
        id: 1,
        name: 'Ramón',
        lastname: 'Escobar',
        status: true,
    },
    {
        id: 2,
        name: 'Camila',
        lastname: 'Vallejos',
        status: true,
    },
    {
        id: 3,
        name: 'Miguel',
        lastname: 'Calluqueo',
        status: false,
    },
    {
        id: 4,
        name: 'Gabriel',
        lastname: 'Condeza',
        status: true,
    },
    {
        id: 5,
        name: 'Francisco',
        lastname: 'Castillo',
        status: false,
    },
]

const firstFilter = participantes.filter(participante => participante.id > 2)
console.log(firstFilter)

const secondFilter = participantes.filter(participante => participante.status)
console.log(secondFilter)