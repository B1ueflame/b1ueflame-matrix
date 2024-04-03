
const song = new Audio('Assets/bluebands.mp3');
song.volume = 0.5;
song.loop = true;

song.play().catch(() => {
  document.addEventListener('keypress', () => {
    song.play()
  })
  document.addEventListener('click', () => {
    song.play()
  })
})

song.addEventListener('play', e => {
  document.querySelector('body').insertAdjacentHTML('afterend', `<song class="full-display">${song.name}</song>`)
  setTimeout(() => {document.querySelector('song').classList.remove('full-display')}, 15000)
  document.addEventListener('mousedown', () => {
    setTimeout(() => {document.querySelector('song').classList.remove('full-display')}, 1500)
  })

  document.addEventListener('click', () => {
    setTimeout(() => {document.querySelector('song').classList.remove('full-display')}, 1500)
  })
})