"use client";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'

export const ProjectCarousel = ({ imgs, desc }) => {
    return (
        <Carousel className="h-50">
            {
                imgs.map((item, index) => {
                    return (
                        <Carousel.Item interval={5000}>
                            <Image
                                src={item.img}
                                alt="alt"
                            />
                        </Carousel.Item>
                    )
                })
            }
            
        </Carousel>
    )
}