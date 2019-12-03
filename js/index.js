// Your code goes here

// Looping through links and adding event listener to each one
const links = document.querySelectorAll('a')

links.forEach(element => {
  // 1. mouseenter
  element.addEventListener('mouseenter', () => {
    element.style.transform = 'scale(1.5)';
    element.style.transition = 'transform 0.3'
    element.style.textDecoration = 'underline'
  })
  // 2. mouseleave
  element.addEventListener('mouseleave', () => {
    element.style.transform = 'scale(1)'
    element.style.textDecoration = 'none'
  })
});

// Adding flip  to image (stretch goal)
const introsec = document.querySelector('.intro').addEventListener("contextmenu", (event) => {
  gsap.to('.intro', {
    duration: 1,
    rotateY: 180,
    ease: "elastic(1, 0.75)"


  })
  event.stopPropagation();
}) 

// Adding resize
const viewPort = document.querySelector('body');
window.addEventListener('resize', () => {
 viewPort.style.backgroundColor = 'lightblue'
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

// Adding Dark mode with keydown
const background = document.querySelector('body');
const header = document.querySelector('.main-navigation');
const footer = document.querySelector('footer');

document.addEventListener('keydown', (event) => {
  if(background.style.backgroundColor != 'black'){
    background.style.backgroundColor = 'black';
    background.style.color = 'whitesmoke';
  }
  if(header.style.backgroundColor != 'black'){
    header.style.backgroundColor = 'black';
    header.style.color = 'whitesmoke';
  }
  if(footer.style.backgroundColor != 'black'){
    footer.style.backgroundColor = 'black';
    footer.style.color = 'whitesmoke';
  }
})

//change back to light mode with keypress
document.addEventListener('keypress', (event) => {
  if(background.style.backgroundColor != 'white'){
    background.style.backgroundColor = 'white';
    background.style.color = 'black';
  }
  if(header.style.backgroundColor != 'white'){
    header.style.backgroundColor = 'white';
    header.style.color = 'black';
  }
  if(footer.style.backgroundColor != 'white'){
    footer.style.backgroundColor = 'white';
    footer.style.color = 'black';
  }
})

window.addEventListener('wheel', () => {
  viewPort.style.backgroundColor = 'yellow'
})



