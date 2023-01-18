import SwipeCarousel from './carousel-costructor.js'
const carosuel = new SwipeCarousel({   //создаем обтект
    //containerID: '#myslider', 
    slideID: '.item',
    interval: 1000,
    isPlaying: false
 })


carosuel.initApp();

