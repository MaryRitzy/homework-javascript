import Carousel from './carousel.js'

class SwipeCarousel extends Carousel {   //etend от класса carousel
    constructor(...args) {    // вызываем констуктор, не пользуемся Carousel.apply(this, arguments), а парметры получаем через оператор (...args)  
      super(...args) // аргкменты передаем вместо Carousel.apply(this, arguments) с помощью вызлва супер класса
      
      this.slidesContainer = this.slideItems[0].parentElement;
    
    }
    
    _initListerners() {
       super._initListerners();
        this.slidesContainer.addEventListener("touchstart", this._swipeStart.bind(this));
        this.slidesContainer.addEventListener("mousedown", this._swipeStart.bind(this));
        this.slidesContainer.addEventListener("mouseup", this._swipeEnd.bind(this));
        this.slidesContainer.addEventListener("touchend", this._swipeEnd.bind(this));
    }
    
    _swipeStart(e) {
        this.startPosX = e instanceof MouseEvent
            ? e.pageX
            : e.changedTouches[0].pageX;
    }
    
    _swipeEnd(e) {
            this.endPosX =
                e instanceof MouseEvent ? e.pageX : e.changedTouches[0].pageX;
    
            if (this.endPosX - this.startPosX > 100) this.prev();
            if (this.endPosX - this.startPosX < -100) this.next();
        }
    
    }
    

export default SwipeCarousel;




