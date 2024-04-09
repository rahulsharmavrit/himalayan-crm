import React, { PropsWithChildren } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from '../sidebar';
import Header from '../header';
import { webColors } from "../../assets/constant";


const index:React.FC<PropsWithChildren>= ({children}) => {
    return (<>
    <Container fluid className="p-0 overflow-x-hidden" style={{background : webColors['primary-light']}} >
        <Row className="">
            <Col className="px-0 bg-white overflow-hidden" lg={2} md={4}  style={{height : '100vh' , boxShadow: "0px 2px 5px 2px rgba(190, 204, 255, 0.15)"}}>
                <Sidebar />
            </Col>
            <Col className="ps-0" lg={10} md={8} style={{maxHeight : '100vh' , overflowY : 'auto'}}>
                <Row>
                    <Col xs={12} className="bg-white"><Header /></Col>
                    <Col xs={12} className="p-4">{children}</Col>
                </Row>
            </Col>

        </Row>
    </Container>
    
    </>)
  }
  
  export default index;