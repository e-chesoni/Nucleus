import { Col } from "react-bootstrap";
import Image from 'next/image'

export const ProjectCard = ({ category, title, imgUrl, tagline, what, how, why }) => {
  return (
    <Col>
      <div className='rounded-xl my-10 flex-1'>
              <div className='text-center'>
              </div>
              <div>
                <div>
                  <div className="z-10 pt-10 position-absolute">
                    <h2>{title}</h2>
                    <p>{tagline}</p>
                  </div>

                  <div className="pl-16">
                    <Image 
                      className="card-img"
                      height={500}
                      width={500}
                      src={imgUrl} 
                      alt={''}/>
                  </div>
                  
                </div>
              </div>
        </div>
    </Col>
  )
}