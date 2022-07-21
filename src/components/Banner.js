import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../assets/images/banner/rainier.JPG';
import banner2 from '../assets/images/banner/roman-forum.jpg';
import banner3 from '../assets/images/banner/temple-of-apollo.JPG';
import banner4 from '../assets/images/banner/eminence-fireline.jpg';
import banner5 from '../assets/images/banner/crater-lake.jpg'

function Banner() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-60 mx-auto"
                    src={banner1}
                    alt="Mt. Rainier in Washington"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-60 mx-auto"
                    src={banner2}
                    alt="Roman Forum in Rome, Italy"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-60 mx-auto"
                    src={banner3}
                    alt="Temple of Apollo in Souniou, Greece"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-60 mx-auto"
                    src={banner4}
                    alt="Prescribed Burn in Eminence, Missouri"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-60 mx-auto"
                    src={banner5}
                    alt="Crater Lake in Oregon"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner;