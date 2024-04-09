
import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { pageActionHead } from "../../interface/interface.index"
import { PrimaryButton } from "../../utils/custom"
import { webColors } from "../../assets/constant"


const PageActionHead:React.FC<pageActionHead> = ({title,description,actionText,action}) => {
  return (<>
  
  <Container>
    <Row>
        <Col lg={6}>
            <h1  className="my-0"  style={{
                fontSize: 24 ,
                fontStyle: "normal" ,
                fontWeight: 700 
            }}>{title}</h1>
            <p className="my-0" style={{color : webColors['neutral-grey-500']}}>{description}</p>
        </Col>
        <Col lg={6} className="d-flex justify-content-end align-items-center">
           <PrimaryButton onClick={action}>{actionText}</PrimaryButton>
        </Col>
    </Row>
  </Container>
  
  </>)
}

export default PageActionHead