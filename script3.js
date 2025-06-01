// 1.1 Crea una lista <ul><li> con países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

const ulCountries = document.createElement('ul')
for (const country of countries) {
  const li = document.createElement('li')
  li.textContent = country
  ulCountries.appendChild(li)
}
document.body.appendChild(ulCountries)

// 1.2 Elimina el elemento con clase .fn-remove-me
const elementoAEliminar = document.querySelector('.fn-remove-me')
if (elementoAEliminar) {
  elementoAEliminar.remove()
}

// 1.3 Crea lista <ul><li> en el div con data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const printHereDiv = document.querySelector('div[data-function="printHere"]')

const ulCars = document.createElement('ul')
for (const car of cars) {
  const li = document.createElement('li')
  li.textContent = car
  ulCars.appendChild(li)
}
printHereDiv.appendChild(ulCars)

// 1.4 Crea divs con h4 y img
const countriesWithImages = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

const container = document.createElement('div')
container.id = 'image-container' // Para facilitar el 1.5

countriesWithImages.forEach((item, index) => {
  const div = document.createElement('div')
  div.classList.add('country-block')

  const h4 = document.createElement('h4')
  h4.textContent = item.title

  const img = document.createElement('img')
  img.src = item.imgUrl

  // 1.6: Botón para eliminar ese mismo div
  const btnEliminar = document.createElement('button')
  btnEliminar.textContent = 'Eliminar este bloque'
  btnEliminar.addEventListener('click', () => {
    div.remove()
  })

  div.appendChild(h4)
  div.appendChild(img)
  div.appendChild(btnEliminar)

  container.appendChild(div)
})

document.body.appendChild(container)

// 1.5: Botón para eliminar el último div
const btnEliminarUltimo = document.createElement('button')
btnEliminarUltimo.textContent = 'Eliminar último bloque'
btnEliminarUltimo.addEventListener('click', () => {
  const bloques = document.querySelectorAll('.country-block')
  if (bloques.length > 0) {
    bloques[bloques.length - 1].remove()
  }
})
document.body.appendChild(btnEliminarUltimo)
