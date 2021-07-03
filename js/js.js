var glide = new Glide('.glide', {
  type: 'carousel',
  autoplay: 2000, //inicia automatic en miliseg
  perView: 5,
  focusAt: 'center',
  breakpoints: {
    800: {
      perView: 2
    },
    480: {
      perView: 1
    }
  }
})
glide.mount()



