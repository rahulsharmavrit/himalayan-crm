import { ArrowRight } from 'lucide-react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { webColors } from '../../../assets/constant';
import { statsCard } from '../../../interface/interface.index';
import { useState } from 'react';

const index = ({title,count,link,icon}:statsCard) => {
    const [isHovered,setisHovered] = useState<boolean>(false);
  return (<>
  <Card className='border-0' onMouseEnter={()=>{setisHovered(true)}} onMouseLeave={()=>{setisHovered(false)}} style={{boxShadow: "0px 2px 8px 0px rgba(142, 142, 142, 0.25)" , backgroundColor : isHovered ? "#C3C4C5" : ""}}>
    <Card.Body>
        <div className="count d-flex justify-content-center align-items-center rounded-1" style={{background : webColors['color-light-success'] , width : 40 , fontSize : 14 , fontWeight : 600 }}>{count}</div>
        <p style={{fontSize : 18}} className='mt-2'>{title}</p>
        <div className="icon mb-3">{icon}</div>
        <div className="detail-box">
            <NavLink to={link} className={`text-decoration-none`} style={{color : isHovered ? webColors['primary'] :  webColors['neutral-grey-500'] , fontWeight : 500}}> <div className="w-100 d-flex justify-content-between"> <span>Details</span> <span><ArrowRight /></span> </div> </NavLink>
        </div>
    </Card.Body>
  </Card>
  </>)
}

export default index