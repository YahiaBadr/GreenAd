import React ,{Component} from 'react';
import {DotGroup, Dot, CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
export default class ReactCarousel extends Component {

    render(){
        return(
            <CarouselProvider
        naturalSlideWidth={75}
        naturalSlideHeight={10}
        totalSlides={3}
        hasMasterSpinner='true'
        isPlaying='true'
      >
      
        <Slider classNameAnimation="ease">
          <Slide index={0}><Dot/>I am the second Slide.</Slide>
          <Slide index={1}><Image src="http://i.imgur.com/QWGYHQh.jpg"/></Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
        )
    }
}