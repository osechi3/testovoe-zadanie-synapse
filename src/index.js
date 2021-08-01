import './scss/style.scss'
import bootstrap from 'bootstrap'
import $ from 'jquery'
import Flickity from 'flickity'
import imagesLoaded from 'flickity-imagesloaded'
import BeerSlider from 'beerslider'

console.log('working')

/* SLIDER */
const slider = new BeerSlider(document.getElementById('beer-slider'))

/* CAROUSEL */
const mainCarousel = document.querySelector('.main-carousel')
const flick = new Flickity(mainCarousel, {
  // cellAlign: 'left',
  contain: true,
  imagesLoaded: true,

  draggable: false,
  // autoPlay: true,
  prevNextButtons: true,
  pageDots: false,
  arrowShape: {
    x0: 5,
    x1: 30, y1: 25,
    x2: 35, y2: 20,
    x3: 15
  }
})

/* Displaying selected image */
const imagePreview = document.querySelector('.image-preview')
flick.on('select', (index) => {
  imagePreview.src = flick.selectedElement.src
})

flick.on('staticClick', (e, pointer, cellElement, cellIndex) => {
  flick.select(cellIndex, false, false)
})

/* NAVBAR BUTTON */
$('.navbar__menu-button').on('click', expandNav)

function expandNav () {
  $('.navbar').toggleClass('navbar_expanded')
  $('.navbar__menu-title').toggleClass('d-lg-inline')
  $('.navbar__menu-button').toggleClass([
    // remove
    'order-lg-2',
    'px-lg-2',

    // add
    'order-lg-0',
    'px-lg-1',
    'align-self-lg-end'
  ])

  $('.navbar-collapse>ul').toggleClass([
    'text-lg-start',
    'px-lg-2'
  ])

  $('.address-info').toggleClass('pb-lg-1')
  $('.address-info__number').toggleClass('pb-lg-0')
}
