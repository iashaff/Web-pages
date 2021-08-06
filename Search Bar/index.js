let input  = document.getElementById('usernameInput');

input.addEventListener('keyup', function(event) {
    let username = event.target.value.toLowerCase()
    let allNamesDOMCollection = document.getElementsByClassName('name')
     for (let counter = 0; counter < allNamesDOMCollection.length; counter++){
        const currentname = allNamesDOMCollection[counter].textContent.toLowerCase()
        if (currentname.includes(username)){
           allNamesDOMCollection[counter].style.display = 'block' 
        } else allNamesDOMCollection[counter].style.display = 'none'
        
    }
})


