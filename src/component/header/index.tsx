import { Col, Container, Row } from "react-bootstrap";
import { LightButton } from "../../utils/custom";
import Menu from "./menu"
const index = () => {
  return (<>
  
  <Container className="headerContainer" style={{height : 80 , boxShadow: "0px 2px 5px 2px rgba(190, 204, 255, 0.15)"}}>
    <Row  className="h-100">
        <Col xs={12} className="h-100 d-flex align-items-center justify-content-end">
           <div className="d-flex align-items-center">
            <LightButton className="me-3">Home</LightButton>
            <Menu />
           </div>
        </Col>
    </Row>
  </Container>
  
  </>)
}

export default index;