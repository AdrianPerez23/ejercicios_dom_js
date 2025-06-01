// 1.1 Mostrar el botón con la clase .showme
const boton = document.querySelector('.showme')
console.log('1.1 Botón con clase .showme:', boton)

// 1.2 Mostrar el h1 con el id #pillado
const h1 = document.querySelector('#pillado')
console.log('1.2 H1 con id #pillado:', h1)

// 1.3 Mostrar todos los <p>
const parrafos = document.querySelectorAll('p')
console.log('1.3 Todos los <p>:', parrafos)

// 1.4 Mostrar todos los elementos con la clase .pokemon
const pokemons = document.querySelectorAll('.pokemon')
console.log('1.4 Elementos con clase .pokemon:', pokemons)

// 1.5 Mostrar todos los elementos con atributo data-function="testMe"
const personajes = document.querySelectorAll('[data-function="testMe"]')
console.log('1.5 Elementos con data-function="testMe":', personajes)

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe". / querySelector solo devuelve el primero que encuentra
const tercerPersonaje = personajes[2]
console.log('1.6 Tercer personaje con data-function:', tercerPersonaje)
