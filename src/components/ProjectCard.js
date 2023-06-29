import { Col } from "react-bootstrap";
import Image from 'next/image'

export const ProjectCard = ({ category, title, imgUrl, what, how, why }) => {
  return (
    <Col >
      <div className='shadow-lg p-10 rounded-xl my-10 flex-1'>
              <h1>{category}</h1>
              <h2 className='text-center'>{title}</h2>
              <div className='text-center'>
                <h5>What?</h5>
                <p>{what}</p>
                <h5>How?</h5>
                <p>{how}</p>
                <h5>Why?</h5>
                <p>{why}</p>
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