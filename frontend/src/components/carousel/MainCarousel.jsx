import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './carousel1.jpg';
import image2 from './carousel2.jpg';
import image3 from './carousel3.jpg';

class MainCarousel extends Component {
    render() {
        return (<div>
        <Carousel>
        <Carousel.Item>
            <img  alt="900x500" src={image2} />
            <Carousel.Caption>
            <h3>Professional tuba player</h3>
            <p>Over 15 years experience, including UK and international events and performances</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img  alt="900x500" src={image3} />
            <Carousel.Caption>
            <h3>Attentive</h3>
            <p>Friendly but professional approach to teaching and tutoring</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img  alt="900x500" src={image1} />
            <Carousel.Caption>
            <h3>Brass specialist</h3>
            <p>Specialise in brass instruments but also glad to offer tutoring over a wide range of instruments and across all levels.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>)

    }

}

export default MainCarousel