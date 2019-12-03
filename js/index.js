// Your code goes here
const links = document.querySelectorAll('a')

// Looping through links and adding event listener to each one
links.forEach(element => {
  element.addEventListener('mouseenter', () => {
    element.style.transform = 'scale(1.5)';
    element.style.transition = 'transform 0.3'
    element.style.textDecoration = 'underline'
  })
  element.addEventListener('mouseleave', () => {
    element.style.transform = 'scale(1)'
    element.style.textDecoration = 'none'
  })
});

// Adding image on click
const blownUpBus = document.querySelector('img')

blownUpBus.addEventListener('click', () => {
  blownUpBus.setAttribute('src', 'img/blownup.jpg')
  // var i = 1
  // while (i < 6) {
  //   blownUpBus.setAttribute('src', 'img/blownup.jpg')
  //   setTimeout(blownUpBus.setAttribute('src', 'img/fun-bus.jpg'), 1000)
  //   i++
  // }
})

// Adding image on double click
const destroyBus = document.querySelector('img')

destroyBus.addEventListener('dblclick', () => {
  destroyBus.setAttribute('src', 'img/destroyedbus.jpg')
})

// Adding triple click
blownUpBus.addEventListener('click', e => {
  if (e.detail === 3) {
    blownUpBus.setAttribute('src', 'img/fun-bus.jpg')
  }
})

//change to dark mode with keydown
const background = document.querySelector('*');
document.addEventListener('keydown', (event) => {
  if (background.style.backgroundColor != 'black') {
    background.style.backgroundColor = 'black';
    background.style.color = 'whitesmoke';
  }
})


//change back to light mode with keypress
document.addEventListener('keypress', (event) => {
  if (background.style.backgroundColor != 'white') {
    background.style.backgroundColor = 'white';
    background.style.color = 'black';
  }
}) 