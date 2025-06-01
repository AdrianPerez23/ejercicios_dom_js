// 1.1 Evento click sobre el botón
const btn = document.getElementById('btnToClick')
btn.addEventListener('click', function (event) {
  console.log('Click event:', event)
})

// Valor final en input .click
const clickInput = document.querySelector('.click')
clickInput.addEventListener('change', function (event) {
  console.log('Valor final en input .click:', event.target.value)
})

// 1.2 Valor final en input .focus
const focusInput = document.querySelector('.focus')
focusInput.addEventListener('change', function (event) {
  console.log('Valor final en input .focus:', event.target.value)
})

// 1.3 Valor final en input .value
const valueInput = document.querySelector('.value')
valueInput.addEventListener('change', function (event) {
  console.log('Valor final en input .value:', event.target.value)
})
