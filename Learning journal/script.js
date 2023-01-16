const article4 = document.querySelector('.article4')
const article5 = document.querySelector('.article5')
const article6 = document.querySelector('.article6')


window.addEventListener('resize', function(event) {
     if(window.innerWidth <= 500) {
      article4.style.display = "none"
      article5.style.display = "none"
      article6.style.display = "none"
  } else {
      article4.style.display = "block"
      article5.style.display = "block"
      article6.style.display = "block"
  }
}, true);
 
 
 function windowSize() {
     if(window.innerWidth <= 500) {
      article4.style.display = "none"
      article5.style.display = "none"
      article6.style.display = "none"
  } else {
      article4.style.display = "block"
      article5.style.display = "block"
      article6.style.display = "block"
  }
}
 
windowSize()

