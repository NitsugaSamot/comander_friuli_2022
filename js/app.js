let cliente = {
    mozo: '',
    mesa: '',
    fecha:'',
    hora: '',
    comensales: '',
    pedido: [

    ]
}

let DB

const btnGuardarCliente = document.querySelector('#guardar-cliente')
btnGuardarCliente.addEventListener('click', guardarCliente)

function guardarCliente() {
    const mozo = document.querySelector('#mozo').value
    const mesa = document.querySelector('#mesa').value
    const fecha = document.querySelector('#fecha').value
    const hora = document.querySelector('#hora').value
    const comensales = document.querySelector('#comensal').value

    //Revisar si hay campos

    const camposVacios = [mozo, mesa, fecha, hora, comensales ].some( campo => campo === '')

    //El some es el array method que se va a fijar si algun campo esta vacio

    if(camposVacios) {
    
        //Verificar si hay una alerta 
        const existeAlerta = document.querySelector('.invalid-feedback')
        
        if(!existeAlerta) {        
            const alerta = document.createElement('DIV')
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center')
            alerta.textContent = 'Todos los campos son obligatorios'
            document.querySelector('.modal-body form').appendChild(alerta)
    
            //Eliminar la alerta
            setTimeout(() => {
                alerta.remove()
                }, 3000)
            }
    
        return
    
        } 

    console.log(cliente)

    //Asignar datos del formulario al cliente
    cliente = { ...cliente,mozo, mesa, fecha, hora, comensales }

    //Ocultar Modal
    const modalFormulario = document.querySelector('#formulario')
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario)
    modalBootstrap.hide()

    //Mostrar secciones
    mostrarSecciones()

    //Obtener los platillos
    obtenerEntradas()

    obtenerParaCompartir()

    obtenerPastas()

    obtenerSalsas()

    obtenerMenuInfantil()

    obtenerTablas()

    obtenerCarnesPollosPescados()

    obtenerPizzas()

    obtenerSandwiches()

    obtenerEnsaladas()

    obtenerAlPlato()

    obtenerPostres()

    obtenerSinAlchol()

    obtenerVinosMalbec()

    obtenerVinosCaroyences()

    obtenerVinosBlancos()

    obtenerVinosRosados()

    obtenerCervezas()

    obtenerCafeteria()
    

}

function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll('.d-none')
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'))
}

function obtenerEntradas() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/entradas.json'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarEntradas(resultado))
    .catch(error => console.log(error))

}

function obtenerParaCompartir() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/paraCompartir.json'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarParaCompartir(resultado))
    .catch(error => console.log(error))

}

function obtenerPastas() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/pastas.json'

    fetch(url)
        .then(respuesta => respuesta.json())
        .then( resultado => mostrarPastas(resultado))
        .catch(error => console.log(error))
}


function obtenerSalsas() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/Salsas.json'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarSalsas(resultado))
    .catch(error => console.log(error))

}

function obtenerMenuInfantil() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/menuInfantil.json'

    fetch(url)
        .then(respuesta => respuesta.json())
        .then( resultado => mostrarMenuInfantil(resultado))
        .catch(error => console.log(error))
}

function obtenerTablas() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/tablas.json'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarTablas(resultado))
    .catch(error => console.log(error))

}

function obtenerAlPlato() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/alPlatoConGuarnicion.json'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarAlPlato(resultado))
    .catch(error => console.log(error))

}

function obtenerEnsaladas() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/ensaladas.json'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarEnsaladas(resultado))
    .catch(error => console.log(error))
}

function obtenerCarnesPollosPescados() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/carnesPollosPescados.json'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarCarnesPollosPescados(resultado))
    .catch(error => console.log(error))

}

function obtenerPizzas() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/pizzas.json'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarPizzas(resultado))
    .catch(error => console.log(error))
}

function obtenerSandwiches() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/sandwiches.json'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarSandwiches(resultado))
    .catch(error => console.log(error))
}

function obtenerTablas() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/tablas.json'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarTablas(resultado))
    .catch(error => console.log(error))
}

function obtenerPostres() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/postres.json'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarPostres(resultado))
    .catch(error => console.log(error))
}

function obtenerVinosCaroyences() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/vinosCaroyences.json'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarVinosCaroyences(resultado))
    .catch(error => console.log(error))
}

function obtenerVinosMalbec() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/vinosMalbec.json'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarVinosMalbec(resultado))
    .catch(error => console.log(error))
}

function obtenerVinosBlancos() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/vinosBlancos.json'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarVinosBlancos(resultado))
    .catch(error => console.log(error))
}

function obtenerVinosRosados() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/vinosRosados.json'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarVinosRosados(resultado))
    .catch(error => console.log(error))
}

function obtenerCervezas() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/cervezas.json'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarCervezas(resultado))
    .catch(error => console.log(error))
}


function obtenerSinAlchol() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/sinAlcohol.json'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarSinAlcohol(resultado))
    .catch(error => console.log(error))
}

function obtenerCafeteria() {
    const url = 'https://comandera-e65c1-default-rtdb.firebaseio.com/cafeteria.json'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrarCafeteria(resultado))
    .catch(error => console.log(error))
}

function mostrarEntradas(entradas) {
    const contenido = document.querySelector('#entradas .contenido')

    entradas.forEach( entradas => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-5')
        nombre.textContent = entradas.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-4', 'fw-bold')
        precio.textContent = `$${entradas.precio}`

        const inputCantidad = document.createElement('INPUT') 
        inputCantidad.type = 'number'
        inputCantidad.min = 0
        inputCantidad.value = 0
        inputCantidad.id = `producto-${entradas.id}`
        inputCantidad.classList.add('form-control')

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-3')
        agregar.appendChild(inputCantidad)

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...entradas, cantidad})
        }


        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(agregar)

        contenido.appendChild(row)
    })
}

function mostrarParaCompartir(paraCompartir) {
    const contenido = document.querySelector('#paraCompartir .contenido')

    paraCompartir.forEach( paraCompartir => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-5')
        nombre.textContent = paraCompartir.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-4', 'fw-bold')
        precio.textContent = `$${paraCompartir.precio}`

        const inputCantidad = document.createElement('INPUT') 
        inputCantidad.type = 'number'
        inputCantidad.min = 0
        inputCantidad.value = 0
        inputCantidad.id = `producto-${paraCompartir.id}`
        inputCantidad.classList.add('form-control')

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-3')
        agregar.appendChild(inputCantidad)

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...paraCompartir, cantidad})
        }


        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(agregar)

        contenido.appendChild(row)
    })
}


function mostrarPastas(pastas) {
    const contenido = document.querySelector('#pastas .contenido')

    pastas.forEach( pastas => {
    const row = document.createElement('DIV')
    row.classList.add('row', 'py-3', 'border-top')

    const nombre = document.createElement('DIV')
    nombre.classList.add('col-md-5')
    nombre.textContent = pastas.nombre

    const precio = document.createElement('DIV')
    precio.classList.add('col-md-4', 'fw-bold')
    precio.textContent = `$${pastas.precio}`

    // const categoria = document.createElement('DIV')
    // categoria.classList.add('col-md-3', 'fw-bold')
    // categoria.textContent = `${pastas.categoria}`

    const inputCantidad = document.createElement('INPUT') 
    inputCantidad.type = 'number'
    inputCantidad.min = 0
    inputCantidad.value = 0
    inputCantidad.id = `producto-${pastas.id}`
    inputCantidad.classList.add('form-control')

    //Funcion que detecta la cantidad y el plato que se esta agregando


    // inputCantidad.onchange = function() {
    //     agregarPlatillo(pastas.id)
    // }
    inputCantidad.onchange = function () {
        const cantidad = parseInt(inputCantidad.value)
        agregarPlatillo({...pastas, cantidad})
      }

      const agregar = document.createElement('DIV')
      agregar.classList.add('col-md-3')
      agregar.appendChild(inputCantidad)

      row.appendChild(nombre)
      row.appendChild(precio)
      row.appendChild(agregar)
      

      contenido.appendChild(row)
    })
}

function mostrarSalsas(Salsas) {
    const contenido = document.querySelector('#salsas .contenido')

    Salsas.forEach( Salsas => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-5')
        nombre.textContent = Salsas.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-4', 'fw-bold')
        precio.textContent = `$${Salsas.precio}`

        const inputCantidad = document.createElement('INPUT') 
        inputCantidad.type = 'number'
        inputCantidad.min = 0
        inputCantidad.value = 0
        inputCantidad.id = `producto-${Salsas.id}`
        inputCantidad.classList.add('form-control')

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-3')
        agregar.appendChild(inputCantidad)

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...Salsas, cantidad})
        }


        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(agregar)

        contenido.appendChild(row)
    })
}

function mostrarMenuInfantil(menuInfantil) {
    const contenido = document.querySelector('#menuInfantil .contenido')

    menuInfantil.forEach( menuInfantil => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-5')
        nombre.textContent = menuInfantil.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-4', 'fw-bold')
        precio.textContent = `$${menuInfantil.precio}`

        const inputCantidad = document.createElement('INPUT') 
        inputCantidad.type = 'number'
        inputCantidad.min = 0
        inputCantidad.value = 0
        inputCantidad.id = `producto-${menuInfantil.id}`
        inputCantidad.classList.add('form-control')

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-3')
        agregar.appendChild(inputCantidad)

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...menuInfantil, cantidad})
        }


        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(agregar)

        contenido.appendChild(row)
    })
}

function mostrarCarnesPollosPescados(carnesPollosPescados) {
    const contenido = document.querySelector('#carnesPollosPescados .contenido')

    carnesPollosPescados.forEach( carnesPollosPescados => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-5')
        nombre.textContent = carnesPollosPescados.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-4', 'fw-bold')
        precio.textContent = `$${carnesPollosPescados.precio}`

        const inputCantidad = document.createElement('INPUT') 
        inputCantidad.type = 'number'
        inputCantidad.min = 0
        inputCantidad.value = 0
        inputCantidad.id = `producto-${carnesPollosPescados.id}`
        inputCantidad.classList.add('form-control')

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-3')
        agregar.appendChild(inputCantidad)

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...carnesPollosPescados, cantidad})
        }


        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(agregar)

        contenido.appendChild(row)
    })
}

function mostrarAlPlato(alPlatoConGuarnicion) {
    const contenido = document.querySelector('#alPlato .contenido')

    alPlatoConGuarnicion.forEach( alPlatoConGuarnicion => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-5')
        nombre.textContent = alPlatoConGuarnicion.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-4', 'fw-bold')
        precio.textContent = `$${alPlatoConGuarnicion.precio}`

        const inputCantidad = document.createElement('INPUT') 
        inputCantidad.type = 'number'
        inputCantidad.min = 0
        inputCantidad.value = 0
        inputCantidad.id = `producto-${alPlatoConGuarnicion.id}`
        inputCantidad.classList.add('form-control')

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-3')
        agregar.appendChild(inputCantidad)

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...alPlatoConGuarnicion, cantidad})
        }


        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(agregar)

        contenido.appendChild(row)
    })
}

function mostrarPizzas(pizzas) {
    const contenido = document.querySelector('#pizzas .contenido')

    pizzas.forEach( pizzas => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-5')
        nombre.textContent = pizzas.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-4', 'fw-bold')
        precio.textContent = `$${pizzas.precio}`

        const inputCantidad = document.createElement('INPUT') 
        inputCantidad.type = 'number'
        inputCantidad.min = 0
        inputCantidad.value = 0
        inputCantidad.id = `producto-${pizzas.id}`
        inputCantidad.classList.add('form-control')

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-3')
        agregar.appendChild(inputCantidad)

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...pizzas, cantidad})
        }


        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(agregar)

        contenido.appendChild(row)
    })
}

function mostrarSandwiches(sandwiches) {
    const contenido = document.querySelector('#sandwiches .contenido')

    sandwiches.forEach( sandwiches => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-5')
        nombre.textContent = sandwiches.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-4', 'fw-bold')
        precio.textContent = `$${sandwiches.precio}`

        const inputCantidad = document.createElement('INPUT') 
        inputCantidad.type = 'number'
        inputCantidad.min = 0
        inputCantidad.value = 0
        inputCantidad.id = `producto-${sandwiches.id}`
        inputCantidad.classList.add('form-control')

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-3')
        agregar.appendChild(inputCantidad)

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...sandwiches, cantidad})
        }


        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(agregar)

        contenido.appendChild(row)
    })
}

function mostrarEnsaladas(ensaladas) {
    const contenido = document.querySelector('#ensaladas .contenido')

    ensaladas.forEach( ensaladas => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-5')
        nombre.textContent = ensaladas.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-4', 'fw-bold')
        precio.textContent = `$${ensaladas.precio}`

        const inputCantidad = document.createElement('INPUT') 
        inputCantidad.type = 'number'
        inputCantidad.min = 0
        inputCantidad.value = 0
        inputCantidad.id = `producto-${ensaladas.id}`
        inputCantidad.classList.add('form-control')

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-3')
        agregar.appendChild(inputCantidad)

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...ensaladas, cantidad})
        }


        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(agregar)

        contenido.appendChild(row)
    })
}

function mostrarTablas(tablas) {
    const contenido = document.querySelector('#tablas .contenido')

    tablas.forEach( tablas => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-5')
        nombre.textContent = tablas.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-4', 'fw-bold')
        precio.textContent = `$${tablas.precio}`

        const inputCantidad = document.createElement('INPUT') 
        inputCantidad.type = 'number'
        inputCantidad.min = 0
        inputCantidad.value = 0
        inputCantidad.id = `producto-${tablas.id}`
        inputCantidad.classList.add('form-control')

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-3')
        agregar.appendChild(inputCantidad)

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...tablas, cantidad})
        }


        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(agregar)

        contenido.appendChild(row)
    })
}

function mostrarPostres(postres) {
    const contenido = document.querySelector('#postres .contenido')

    postres.forEach( postres => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-5')
        nombre.textContent = postres.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-4', 'fw-bold')
        precio.textContent = `$${postres.precio}`

        const inputCantidad = document.createElement('INPUT') 
        inputCantidad.type = 'number'
        inputCantidad.min = 0
        inputCantidad.value = 0
        inputCantidad.id = `producto-${postres.id}`
        inputCantidad.classList.add('form-control')

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-3')
        agregar.appendChild(inputCantidad)

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...postres, cantidad})
        }


        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(agregar)

        contenido.appendChild(row)
    })
}

function mostrarVinosCaroyences(vinosCaroyences) {
    const contenido = document.querySelector('#vinosCaroyences .contenido')

    vinosCaroyences.forEach( vinosCaroyences => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-5')
        nombre.textContent = vinosCaroyences.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-4', 'fw-bold')
        precio.textContent = `$${vinosCaroyences.precio}`

        const inputCantidad = document.createElement('INPUT') 
        inputCantidad.type = 'number'
        inputCantidad.min = 0
        inputCantidad.value = 0
        inputCantidad.id = `producto-${vinosCaroyences.id}`
        inputCantidad.classList.add('form-control')

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-3')
        agregar.appendChild(inputCantidad)

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...vinosCaroyences, cantidad})
        }


        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(agregar)

        contenido.appendChild(row)
    })
}

function mostrarVinosMalbec(vinosMalbec) {
    const contenido = document.querySelector('#vinosMalbec .contenido')

    vinosMalbec.forEach( vinosMalbec => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-5')
        nombre.textContent = vinosMalbec.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-4', 'fw-bold')
        precio.textContent = `$${vinosMalbec.precio}`

        const inputCantidad = document.createElement('INPUT') 
        inputCantidad.type = 'number'
        inputCantidad.min = 0
        inputCantidad.value = 0
        inputCantidad.id = `producto-${vinosMalbec.id}`
        inputCantidad.classList.add('form-control')

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-3')
        agregar.appendChild(inputCantidad)

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...vinosMalbec, cantidad})
        }


        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(agregar)

        contenido.appendChild(row)
    })
}

function mostrarVinosBlancos(vinosBlancos) {
    const contenido = document.querySelector('#vinosBlancos .contenido')

    vinosBlancos.forEach( vinosBlancos => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-5')
        nombre.textContent = vinosBlancos.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-4', 'fw-bold')
        precio.textContent = `$${vinosBlancos.precio}`

        const inputCantidad = document.createElement('INPUT') 
        inputCantidad.type = 'number'
        inputCantidad.min = 0
        inputCantidad.value = 0
        inputCantidad.id = `producto-${vinosBlancos.id}`
        inputCantidad.classList.add('form-control')

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-3')
        agregar.appendChild(inputCantidad)

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...vinosBlancos, cantidad})
        }


        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(agregar)

        contenido.appendChild(row)
    })
}

function mostrarVinosRosados(vinosRosados) {
    const contenido = document.querySelector('#vinosRosados .contenido')

    vinosRosados.forEach( vinosRosados => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-5')
        nombre.textContent = vinosRosados.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-4', 'fw-bold')
        precio.textContent = `$${vinosRosados.precio}`

        const inputCantidad = document.createElement('INPUT') 
        inputCantidad.type = 'number'
        inputCantidad.min = 0
        inputCantidad.value = 0
        inputCantidad.id = `producto-${vinosRosados.id}`
        inputCantidad.classList.add('form-control')

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-3')
        agregar.appendChild(inputCantidad)

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...vinosRosados, cantidad})
        }


        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(agregar)

        contenido.appendChild(row)
    })
} 

function mostrarCervezas(cervezas) {
    const contenido = document.querySelector('#cervezas .contenido')

    cervezas.forEach( cervezas => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-5')
        nombre.textContent = cervezas.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-4', 'fw-bold')
        precio.textContent = `$${cervezas.precio}`

        const inputCantidad = document.createElement('INPUT') 
        inputCantidad.type = 'number'
        inputCantidad.min = 0
        inputCantidad.value = 0
        inputCantidad.id = `producto-${cervezas.id}`
        inputCantidad.classList.add('form-control')

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-3')
        agregar.appendChild(inputCantidad)

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...cervezas, cantidad})
        }


        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(agregar)

        contenido.appendChild(row)
    })
}

function mostrarSinAlcohol(sinAlcohol) {
    const contenido = document.querySelector('#sinAlcohol .contenido')

    sinAlcohol.forEach( sinAlcohol => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-5')
        nombre.textContent = sinAlcohol.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-4', 'fw-bold')
        precio.textContent = `$${sinAlcohol.precio}`

        const inputCantidad = document.createElement('INPUT') 
        inputCantidad.type = 'number'
        inputCantidad.min = 0
        inputCantidad.value = 0
        inputCantidad.id = `producto-${sinAlcohol.id}`
        inputCantidad.classList.add('form-control')

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-3')
        agregar.appendChild(inputCantidad)

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...sinAlcohol, cantidad})
        }


        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(agregar)

        contenido.appendChild(row)
    })
}

function mostrarCafeteria(cafeteria) {
    const contenido = document.querySelector('#cafeteria .contenido')

    cafeteria.forEach( cafeteria => {
        const row = document.createElement('DIV')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('DIV')
        nombre.classList.add('col-md-5')
        nombre.textContent = cafeteria.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-4', 'fw-bold')
        precio.textContent = `$${cafeteria.precio}`

        const inputCantidad = document.createElement('INPUT') 
        inputCantidad.type = 'number'
        inputCantidad.min = 0
        inputCantidad.value = 0
        inputCantidad.id = `producto-${cafeteria.id}`
        inputCantidad.classList.add('form-control')

        const agregar = document.createElement('DIV')
        agregar.classList.add('col-md-3')
        agregar.appendChild(inputCantidad)

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value)
            agregarPlatillo({...cafeteria, cantidad})
        }


        row.appendChild(nombre)
        row.appendChild(precio)
        row.appendChild(agregar)

        contenido.appendChild(row)
    })
}

function agregarPlatillo(producto) {
    
    
    //Extraer el pedido actual
    let { pedido } = cliente

    // Revisar que la cantidad sea mayor a 0
    if(producto.cantidad > 0){

        // Comprueba si el elemento ya existe en el array
        if(pedido.some(articulo => articulo.id === producto.id)) {
            //El articulo ya existe
            const pedidoActualizado = pedido.map(articulo => {
                if(articulo.id === producto.id) {
                    articulo.cantidad = producto.cantidad
                }
                return articulo
            })
            //Se asigna el nuevo array a cliente.pedido
            cliente.pedido = [...pedidoActualizado]
        } else {
            // El articulo no existe, lo agregamos al array de pedido
            cliente.pedido = [...pedido, producto]
        }        
    }else{
        //Eliminar elementos cuando la cantidad es 0
        const resultado = pedido.filter(articulo => articulo.id !== producto.id)

        cliente.pedido = [...resultado]
    }

    limpiarHTML()

    if(cliente.pedido.length){
        //Mostrar Resumen
        actualizarResumen()
    } else {
        mensajePedidoVacio()
    }
}

function actualizarResumen() {
   const contenido = document.querySelector('#resumen .contenido')

   const resumen = document.createElement('DIV')
   resumen.classList.add('col-md-12', 'card', 'py-2', 'px-3', 'shadow')
  
    //Información del mesero/a
    const mozo = document.createElement('P')
    mozo.textContent = 'Moza/o: '
    mozo.classList.add('fw-bold')

    const mozoSpan = document.createElement('SPAN')
    mozoSpan.textContent = cliente.mozo
    mozoSpan.classList.add('fw-normal')

    //Información de la mesa
   const mesa = document.createElement('P')
   mesa.textContent = 'Mesa: '
   mesa.classList.add('fw-bold')

   const mesaSpan = document.createElement('SPAN')
   mesaSpan.textContent = cliente.mesa
   mesaSpan.classList.add('fw-normal')

   //Información de la hora
   const hora = document.createElement('P')
   hora.textContent = 'Hora: '
   hora.classList.add('fw-bold')
   
   const horaSpan = document.createElement('SPAN')
   horaSpan.textContent = cliente.hora
   horaSpan.classList.add('fw-normal')

    //Información de la fecha
   const fecha = document.createElement('P')
   fecha.textContent = 'Fecha: '
   fecha.classList.add('fw-bold')
   
   const fechaSpan = document.createElement('SPAN')
   fechaSpan.textContent = cliente.fecha
   fechaSpan.classList.add('fw-normal')

    //Información de los comensales
    const comensales = document.createElement('P')
    comensales.textContent = 'comensales: '
    comensales.classList.add('fw-bold')
      
    const comensalesSpan = document.createElement('SPAN')
    comensalesSpan.textContent = cliente.comensales
    comensalesSpan.classList.add('fw-normal')

   // Agregar a los elementos padre
   mozo.appendChild(mozoSpan)
   hora.appendChild(horaSpan)
   fecha.appendChild(fechaSpan)
   mesa.appendChild(mesaSpan)
   comensales.appendChild(comensalesSpan)

   //Titulo de la seccion

   //Iterar sobre el rray de pedididos
   const grupo = document.createElement('DIV')
   grupo.classList.add('list-group', 'ok')

   const { pedido } = cliente 
   pedido.forEach(articulo => {
       const { nombre, cantidad, precio, id } = articulo

       const lista = document.createElement('DIV')
       lista.classList.add('infoMesa')

       const nombreEl = document.createElement('P')
       nombreEl.classList.add('fw-bold')
       nombreEl.textContent = nombre

       //Cantidad del articulo
       const cantidadEl = document.createElement('P')
       cantidadEl.classList.add('fw-bold')
       cantidadEl.textContent = 'Cantidad: '

       const cantidadValor = document.createElement('SPAN')
       cantidadValor.classList.add('fw-normal')
       cantidadValor.textContent = cantidad

       //Precio del articulo
       const precioEl = document.createElement('P')
       precioEl.classList.add('fw-bold')
       precioEl.textContent = 'Precio: '

       const precioValor = document.createElement('SPAN')
       precioValor.classList.add('fw-normal')
       precioValor.textContent = `$${precio}`

       //Subtotal del articulo
       const subtotalEl = document.createElement('P')
       subtotalEl.classList.add('fw-bold')
       subtotalEl.textContent = 'Subtotal: '

       const subtotalValor = document.createElement('SPAN')
       subtotalValor.classList.add('fw-normal')
       subtotalValor.textContent = calcularSubtotal(precio, cantidad)

       // Boton para eliminar
       const btnEliminar = document.createElement('BUTTON')
       btnEliminar.classList.add('btnEliminar', 'btn-danger')
       btnEliminar.textContent = 'Eliminar'

       // Funcion para eliminar del pedido
       btnEliminar.onclick = function() {
           eliminarProducto(id)
       }

       //Agregar valores a sus contenedores
       cantidadEl.appendChild(cantidadValor)
       precioEl.appendChild(precioValor)
       subtotalEl.appendChild(subtotalValor)

       //Agregar elementos al Li
       lista.classList.add('infoMesa')

       lista.appendChild(nombreEl) 
       lista.appendChild(cantidadEl)
       lista.appendChild(precioEl)
       lista.appendChild(subtotalEl)
       lista.appendChild(btnEliminar)
       
       //Agregar lista al grupo principal
       grupo.appendChild(lista)
   })

   //Agregar contenido
   resumen.classList.add('resumen')

//    resumen.appendChild(heading)
   resumen.appendChild(mozo)
   resumen.appendChild(mesa)
   resumen.appendChild(fecha)
   resumen.appendChild(hora)
   resumen.appendChild(comensales)
   resumen.appendChild(grupo)

   contenido.appendChild(resumen)

   // Formulario de total
   formularioTotal()

}

function limpiarHTML() {
    const contenido = document.querySelector('#resumen .contenido')

    while(contenido.firstChild) {
        contenido.removeChild(contenido.firstChild)
    }
}

function calcularSubtotal(precio, cantidad) {
    return `$ ${precio * cantidad}`
}

function eliminarProducto(id) {
    const { pedido } = cliente
    const resultado = pedido.filter(articulo => articulo.id !== id)

    cliente.pedido = [...resultado]

    limpiarHTML()
    if(cliente.pedido.length){
        //Mostrar Resumen
        actualizarResumen()
    } else {
        mensajePedidoVacio()
    }

    //El producto se elimno por lo tanto el formulario vuelve  a 0
    const productoEliminado = `#producto-${id}`
    const inputEliminado = document.querySelector(productoEliminado)
    inputEliminado.value = 0
}

function mensajePedidoVacio()  {
    const contenido = document.querySelector('#resumen .contenido')

    const texto = document.createElement('P')
    texto.classList.add('text-center')
    texto.textContent = 'Añade los elementos al pedido'

    contenido.appendChild(texto)
}

function formularioTotal(){
    const contenido = document.querySelector('#resumen .contenido')
    
    const formulario = document.createElement('DIV')
    formulario.classList.add( 'formulario')

    const divFormulario = document.createElement('DIV')
    divFormulario.classList.add('card', 'py-2', 'shadow')

    const heading = document.createElement('P')
    heading.classList.add('my-4')
    heading.textContent = 'Total a pagar'

    // Boton

    const botonCalcular = document.createElement('BUTTON')
    botonCalcular.classList.add('btnCalcular', 'btn-danger')
    botonCalcular.textContent = 'Calcular Total'
    botonCalcular.onclick = calcularTotal

    divFormulario.appendChild(heading)
    formulario.appendChild(divFormulario)
    divFormulario.appendChild(botonCalcular)
    contenido.appendChild(formulario)
    
}

function calcularTotal() {
   const {pedido} = cliente
   let subtotal = 0

    pedido.forEach( articulo => {
        subtotal += articulo.cantidad * articulo.precio
    })

    const total = subtotal

    mostrarTotalHTML(subtotal, total)

    const transaction = DB.transaction(['comandas'], 'readwrite')

    const objectStore = transaction.objectStore('comandas')

    objectStore.add(mostrarTotalHTML)

    transaction.oncomplete = function() {
        console.log('comanda guardada')
    }
}

function mostrarTotalHTML(subtotal, total) {

    const divTotales = document.createElement('DIV')
    divTotales.classList.add('total-pagar')
   
    const subtotalSpan = document.createElement('DIV')
    subtotalSpan.classList.add('col-md-6', 'card', 'totalFinal')
    subtotalSpan.textContent = `$${subtotal}`
     
    divTotales.appendChild(subtotalSpan)
   
    const formulario = document.querySelector('.formulario')
    formulario.appendChild(divTotales)
  
    console.log(divTotales)  

  }

      function imprimirTicket(mostrarTotalHTML) {

        let ventana = window.open('', 'PRINT', 'height=900, width=900')
        ventana.document.write('<html><head>') 
        ventana.document.write('<link rel="stylesheet" href="js/styles/styles.css">')
        ventana.document.write('</head><body>');

        ventana.document.write(mostrarTotalHTML.innerHTML);
        ventana.document.write('<h2>Gracias Por Su Visita!!</h2></body></html>');
        ventana.document.close();
        ventana.focus();
        ventana.onload = function() {
            ventana.print();
            ventana.close();
          }
        return true;
        
        console.log(error)
      }

      document.querySelector("#imprimirResumen").addEventListener("click", function(){
          let div = document.querySelector("#resumen")
          imprimirTicket(div)
          
      })


// json-server --watch db.json

window.onload = () => {
    formularioTotal()

    crearDB()
}

function crearDB() {
    const crearDB = window.indexedDB.open('comandas', 1)

    //error
    crearDB.onerror = function() {
        console.log('Hubo un error')
    }

    //Si todo sale bien
    crearDB.onsuccess = function() {
        console.log('BD creada')

        DB = crearDB.result

        console.log(DB)
    }

    //Definir el schema 
    crearDB.onupgradeneeded = function(e) {
        const db = e.target.result

        const objectStore = db.createObjectStore('comandas', {
            keyPath: 'id',
            autoIncrement: true
        })

        //Definir todas las columnas
        objectStore.createIndex('mesa', 'mesa' , {unique: true})
        objectStore.createIndex('mozo', 'mozo' , {unique: false})
        objectStore.createIndex('fecha', 'fecha' , {unique: false})
        objectStore.createIndex('hora', 'hora' , {unique: false})
        objectStore.createIndex('comensales', 'comensales' , {unique: false})
        objectStore.createIndex('pedido', 'pedido' , {unique: false})

        console.log('DB creada y lista')
    }
        
}
