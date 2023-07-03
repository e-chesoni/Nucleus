import { Col, Carousel } from "react-bootstrap";
import Image from 'next/image'

import magneto from "../assets/img/magneto.jpeg";
import magneto1 from "../assets/img/magneto1.svg";
import magneto_helment from "../assets/img/magneto_helment.svg";
import car from "../assets/img/car.svg";
import bemo from "../assets/img/bemo.jpeg";

export const ProjectCarousel = ({group, projects}) => {

  return (
    <Carousel>
      {
          projects.map((project, index) => {
            return (
              <Carousel.Item interval={1000}>
                <Image
                    className="d-block w-100"
                    src={project.imgUrl}
                    alt="First slide"
                    height={500}
                    width={500}
                />
                <Carousel.Caption>
                  <h3>{project.title}</h3>
                  <p>{project.tagline}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })
      }
    </Carousel>
  )

}