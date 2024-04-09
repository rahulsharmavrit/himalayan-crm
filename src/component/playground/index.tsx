import React, { PropsWithChildren } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from '../sidebar'

const index:React.FC<PropsWithChildren>= ({children}) => {
    return (<>
    <Container>
        <Row>
            <Col lg={3} md={4}>
                <Sidebar />
            </Col>
        {children}
        </Row>
    </Container>
    
    </>)
  }
  
  export default index;