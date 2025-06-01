// 2.1 Inserta dinámicamente en un HTML un div vacío con JavaScript
const divVacio = document.createElement('div')
document.body.appendChild(divVacio)

// 2.2 Inserta dinámicamente en un HTML un div que contenga una p con JavaScript
const divConP = document.createElement('div')
const pEnDiv = document.createElement('p')
divConP.appendChild(pEnDiv)
document.body.appendChild(divConP)

// 2.3 Inserta dinámicamente en un HTML un div que contenga 6 p utilizando un loop
const divCon6P = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p')
  p.textContent = `Párrafo ${i + 1}`
  divCon6P.appendChild(p)
}
document.body.appendChild(divCon6P)

// 2.4 Inserta dinámicamente con JavaScript en un HTML una p con el texto 'Soy dinámico!'
const pDinamico = document.createElement('p')
pDinamico.textContent = 'Soy dinámico!'
document.body.appendChild(pDinamico)

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'
const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

// 2.6 Basándote en el siguiente array crea una lista ul > li con los textos del array
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
for (const app of apps) {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
}
document.body.appendChild(ul)

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementosAEliminar = document.querySelectorAll('.fn-remove-me')
elementosAEliminar.forEach((el) => el.remove())

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div
const divs = document.querySelectorAll('body > div') // solo divs directos del body
const pEnMedio = document.createElement('p')
pEnMedio.textContent = 'Voy en medio!'
if (divs.length >= 2) {
  divs[0].insertAdjacentElement('afterend', pEnMedio)
}

// 2.9 Inserta una p con el texto 'Voy dentro!' dentro de todos los div con la clase .fn-insert-here
const divsTarget = document.querySelectorAll('div.fn-insert-here')
divsTarget.forEach((div) => {
  const p = document.createElement('p')
  p.textContent = 'Voy dentro!'
  div.appendChild(p)
})
