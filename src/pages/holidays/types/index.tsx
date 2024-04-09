import { Card, Col, Container, Row } from "react-bootstrap";
import { MenuItem, Select, TextField } from "@mui/material";
import { Search } from "lucide-react";
import PageActionHead from "../../../component/pageactionhead";
import { webColors } from "../../../assets/constant";
import CustomTable from "../../../utils/table";
import { democolumns, demorows } from "../../../utils/data";


const index = () => {
  return (<>
  <PageActionHead
    action={()=>console.log('ok')}
    description="All Holiday types  are listed here."
    title="Holiday Type"
    actionText="Add "
  />
  <ActionContent />


  
  </>)
}

export default index;

const ActionContent =  () =>{
  return <Container className="mt-5">
    <Row>
      <Col xs={12}>
      <Card className="bg-white border-0">
    <Card.Header className="bg-white border-0 d-flex align-items-center justify-content-between p-3  flex-wrap">
      <div className="d-flex align-items-center  mb-sm-auto mb-3">
        <span>Show</span>
        <TextField size="small" placeholder="10" style={{width : 50}} className="mx-2" />
        <span>per page</span>
      </div>

      <div className="d-flex align-items-center">
      <TextField size="small" placeholder="Search..."  InputProps={{
        startAdornment: (
          <Search style={{color : webColors['neutral-grey-500']}} />
        ),
      }} className="mx-2" style={{width : 150}} />

<Select size="small" placeholder="Services" style={{width : 150}} >
    <MenuItem value="" disabled>
        <em>Services</em>
      </MenuItem>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>

      </div>

    </Card.Header>
    <Card.Body>
    <CustomTable 
    rows={demorows}
    columns={democolumns}
    />
      </Card.Body> 
    <Card.Footer className="bg-white border-0"></Card.Footer>
  </Card>
      </Col>
    </Row>
  </Container> 
}