const button = document.querySelector('#show-versions')
const output = document.querySelector('#versions')

button.addEventListener('click', () => {
  const { chrome, electron, node } = window.desktopApp.versions
  output.textContent = `Chrome ${chrome} · Electron ${electron} · Node ${node}`
})
