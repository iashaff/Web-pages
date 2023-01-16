const photo = document.getElementById('changed-photo');

window.addEventListener('resize', function(event) {
     if(window.innerWidth <= 500) {
       photo.src = 'images/article-image-03.png'
  } else {
       photo.src = 'images/blog-image-04.png'
  }
}, true);

function windowSize() {
     if(window.innerWidth <= 500) {
     photo.src = 'images/article-image-03.png'
  } else {
      photo.src = 'images/blog-image-04.png'
  }
}
 
windowSize()

