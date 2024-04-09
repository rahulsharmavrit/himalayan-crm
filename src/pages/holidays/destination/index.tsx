import { Card, Col, Container, Row } from "react-bootstrap";
import { Dialog, DialogContent, DialogTitle, IconButton, MenuItem, Select, TextField } from "@mui/material";
import { Search, X } from "lucide-react";
import PageActionHead from "../../../component/pageactionhead";
import { webColors } from "../../../assets/constant";
import CustomTable from "../../../utils/table";
import { democolumns, demorows } from "../../../utils/data";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";


const index = () => {

  let [searchParams,setSearchParams] = useSearchParams();
  const [open, setOpen] = useState<boolean>(false);
    /* model action start */
    const handleClose = () => {
      setOpen(false);
      searchParams.delete("model");
      if (searchParams.get("edit")) {
        searchParams.delete("edit");
        searchParams.delete("item");
      }
      setSearchParams(searchParams);
    };


  const contentAction = ({type}:{type:any}) =>{
    switch (type) {
      case "add":
        searchParams.set("type" , 'add');
        setSearchParams(()=> searchParams);
      
        break;

        case "update":
          searchParams.set("type" , 'update');
          setSearchParams(()=> searchParams);
          break;
    
      default:
        break;
    }
  }


  return (<>
  <PageActionHead
    action={()=>{contentAction({type:'add'})}}
    description="All Holiday Destinations are listed here."
    title="Holiday Destinations"
    actionText="Add "
  />
  <ActionContent />
  {searchParams.get("type")==="add" && <CustomModel
  open={open}
  handleClose={handleClose}
  />}

  
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

const CustomModel =  ({
  open,
  handleClose,
  model_types,
  recall,
}: any) => {
  const [searchParams] = useSearchParams();
  return (
    <>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle
          style={{
            padding: "10px 20px",
            borderBottom: `1px solid ${webColors['neutral-grey-500']}`,
          }}
          className="d-flex justify-content-between align-items-center"
        >
          <p className="text-center my-0 fs-16-600">
            {/* {model_types[searchParams?.get("model") || "none"]} */}
          </p>
          <IconButton onClick={handleClose}>
            <X />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          
        </DialogContent>
      </Dialog>
    </>
  );
}