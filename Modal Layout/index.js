const contactBtn = document.getElementById('open-modal')
const closeBtn = document.getElementById('close-modal')
const overlayEl = document.getElementById('overlay')

contactBtn.addEventListener('click', function() {
   overlayEl.style.display = "block"
})

closeBtn.addEventListener('click', function() {
   overlayEl.style.display = "none"
})