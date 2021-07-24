import './scss/style.scss'
import bootstrap from 'bootstrap'
import $ from 'jquery'
import Flickity from 'flickity'

console.log('working')

const mainCarousel = document.querySelector('.main-carousel')

/* CAROUSEL */
const flick = new Flickity(mainCarousel, {
  // cellAlign: 'left',
  contain: true,

  draggable: false,
  // autoPlay: true,
  prevNextButtons: false,
  pageDots: false,
  // arrowShape: {
  //   x0: 5,
  //   x1: 30, y1: 25,
  //   x2: 35, y2: 20,
  //   x3: 15
  // }
})



mainCarousel.addEventListener('click', handleClick)

function handleClick (event) {
  if (event.target.classList.contains('carousel-cell')) {
    selectImage(event)
    showImage(event)
  }
}

function selectImage (event) {
  const siblings = event.target.parentElement.childNodes

  siblings.forEach(sibling => {
    sibling.classList.remove('is-selected')
  })

  event.target.classList.add('is-selected')
}

const imagePreview = document.querySelector('.image-preview')
function showImage (event) {
  imagePreview.src = event.target.src
}
