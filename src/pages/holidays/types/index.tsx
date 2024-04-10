import { Card, Col, Container, Row } from "react-bootstrap";
import { Dialog, DialogContent, DialogTitle, IconButton, MenuItem, Select, TextField, Tooltip } from "@mui/material";
import { Pencil, Search, Trash2, X } from "lucide-react";
import PageActionHead from "../../../component/pageactionhead";
import { webColors } from "../../../assets/constant";
import CustomTable from "../../../utils/table";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HolidayTypeForm } from "./form";
import { GridColDef } from "@mui/x-data-grid";



const index = () => {

  let [searchParams,setSearchParams] = useSearchParams();
  const [open, setOpen] = useState<boolean>(false);
    /* model action start */
    const handleClose = () => {
      setOpen(false);
      searchParams.delete("model");
      if (searchParams.get("update")) {
        searchParams.delete("update");
        searchParams.delete("item");
      }
      setSearchParams(searchParams);
    };


  const contentAction = ({type,item}:{type:any,item?:string}) =>{
    switch (type) {
      case "add":
        setOpen(true);
        searchParams.set("model" , 'destination');
        setSearchParams(()=> searchParams);
       
        break;

        case "update":
          searchParams.set("model" , 'destination');
          searchParams.set("update" , 'true');
          searchParams.set("item" , `${item}`);

          setSearchParams(()=> searchParams);
          break;
    
    
      default:
        break;
    }
  }

  useEffect(() => {
    if (
      searchParams.get("model") === "hoildaytype" ||
      searchParams.get("model") === "destination"
    ) {
      setOpen(true);
    }
  }, [searchParams.get("model")]);

  return (<>
  <PageActionHead
    action={()=>{contentAction({type:'add'})}}
    description="All Holiday Type are listed here."
    title="Holiday Type"
    actionText="Add "
  />
  <ActionContent contentAction={contentAction} />

  <CustomModel
    open={open}
    handleClose={handleClose}
  />

  
  </>)
}

export default index;

const ActionContent =  ({contentAction}:{contentAction: any}) =>{

  const democolumns: GridColDef<(typeof demorows)[number]>[] = [
      { field: 'id', headerName: 'ID', width: 90 },
      {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
      },
      {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
      },
      {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
      },
      {
        field: 'action',
        headerName: 'Action',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        // valueGetter: (value, row) => (`${row.firstName || ''} ${row.lastName || ''}`),
        renderCell : (params:any) =>(
          <div style={{border : `2px solid ${webColors['neutral-grey-200']}`,width : 'fit-content' , height : 40}} className="px-2 my-auto mt-2 rounded-2 d-flex align-items-center">
          <Tooltip title={"edit"}><Pencil onClick={()=>{contentAction({type:'update',item : '1'});}} className="cursor-pointer me-2" style={{color : webColors['neutral-grey-500']}} /></Tooltip> |   <Tooltip title={"delete"}><Trash2 className="cursor-pointer ms-2" style={{color : webColors['neutral-grey-500']}} /></Tooltip> 
         </div>)
      },
    ];
  
  const demorows = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    

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
          <p className="text-center my-0 fs-16-600" style={{fontSize : 18, fontWeight : 600}}>
          {searchParams.get('update')  ? "Edit" : "Add"} Holiday Type
          </p>
          <IconButton onClick={handleClose}>
            <X />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <HolidayTypeForm />
        </DialogContent>
      </Dialog>
    </>
  );
}