import { Col } from "react-bootstrap";
import Image from 'next/image'

export const ProjectCard = ({ category, title, imgUrl, tagline, what, how, why }) => {
  return (
    <Col>
      <div className='p-10 rounded-xl my-10 flex-1'>
              <h2 className='text-center'>{title}</h2>
              <div className='text-center'>
                <p>{tagline}</p>
              </div>
              <div>
                <Image 
                  className="rounded-lg object-cover"
                  height={500}
                  width={500}
                  src={imgUrl} 
                  alt={''}/>
              </div>
              </div>
    </Col>
  )
}