import { Tab, Tabs, TextField } from '@mui/material';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { PrimaryButton } from '../../../../utils/custom';
import { useForm } from 'react-hook-form';
import { holidayTypeProp } from '../../../../interface/interface.index';
import Message from '../../../../component/message';
import { webColors } from '../../../../assets/constant';
import { useSearchParams } from 'react-router-dom';
import PageActionHead from '../../../../component/pageactionhead';
import DNDUpload, { DNDGallery } from '../../../../component/dndupload';
import { useState } from 'react';
import Tabpanel from '../../../../component/tab/panel';
import { BarChart2, Bed, ChevronDown, ClockIcon, Cloud, CookingPot, Map, MountainSnow, Pyramid, Split, Tent, TentTree, User } from 'lucide-react';
import Editor from '../../../../utils/editor';

export const HolidayDestinationsForm = () => {

  let [searchParams] = useSearchParams();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<holidayTypeProp>();

      const onSubmit = async () =>{
        try{

        }
        catch(err:any){

        }
      }

      let [uploadedImage,setUploadedImage] = useState<any>();
      let [images,setImages] = useState<any[]>([]);


        /* tags collection */
  const [value, setValue] = useState(0);
  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
  };


  return (<>
  
  <Form className='my-3' onSubmit={handleSubmit(onSubmit)}>

    <Form.Group>
    <PageActionHead
    action={()=>{console.log({type:'add'})}}
    description="All Holiday destinations are listed here."
    title="Add Holiday Destinations"
    actionText="Add "
  />
    </Form.Group>


    <Container>

    <Card className='my-4'>
      <Card.Header style={{background : 'transparent'}} className='fs-18-600 p-3' >Holiday Destination Information</Card.Header>
      <Card.Body>
        <Row>
          <Col xs={12}>
          <Form.Group className='mb-3'>
            <Form.Label style={{fontWeight: 500}} className='my-0'> Destination Title <span style={{color : webColors['error-500']}} >*</span> </Form.Label>
           <TextField error={errors.title ? true : false} {...register("title" , {required : true , minLength : 2})} className='w-100' size='small' placeholder='Everest Base Camp Kala Pattar/ Lodge-Trek etc ' />
           {errors.title && <Message props={{style : {color : webColors['error-500'] } , className : 'my-0'}} title={"title is required*"} />}
        </Form.Group>
          </Col>
          <Col xs={6}>
          <Form.Group className='mb-3'>
            <Form.Label style={{fontWeight: 500}} className='my-0'> Holiday Type <span style={{color : webColors['error-500']}} >*</span> </Form.Label>
           <TextField error={errors.title ? true : false} {...register("title" , {required : true , minLength : 2})} className='w-100' size='small' placeholder='Choose Holiday Type' />
           {errors.title && <Message props={{style : {color : webColors['error-500'] } , className : 'my-0'}} title={"title is required*"} />}
        </Form.Group>  
        </Col>
        <Col xs={6}>
        <Form.Group className='mb-3'>
            <Form.Label style={{fontWeight: 500}} className='my-0'> Price <span style={{color : webColors['error-500']}} >*</span> </Form.Label>
           <TextField error={errors.title ? true : false} {...register("title" , {required : true , minLength : 2})} className='w-100' size='small' placeholder='Add pricing' />
           {errors.title && <Message props={{style : {color : webColors['error-500'] } , className : 'my-0'}} title={"title is required*"} />}
        </Form.Group>
        </Col>


        </Row>
   

       
      </Card.Body>
    </Card>

    <Card className='my-4'>
      <Card.Header style={{background : 'transparent'}} className='fs-18-600 p-3' >Upload Images</Card.Header>
      <Card.Body>
        <Row>
    
          <Col xs={5}>
          <Form.Group>
          <Form.Label style={{fontWeight: 500}} className='my-0'> Featured image</Form.Label>
            <DNDUpload
              defaultData={""}
              uploadedImage={uploadedImage}
              setUploadedImage={setUploadedImage}
            />
          </Form.Group>

        </Col>
        <Col xs={5}>
        <Form.Group className='mb-3'>
            <Form.Label style={{fontWeight: 500}} className='my-0'> Gallery Image </Form.Label>
            <DNDGallery
            defaultData={""}
            images={images}
            setImages={setImages}
            />
           </Form.Group>
        </Col>


        </Row>
   

       
      </Card.Body>
    </Card>
    <Card className='my-4'>
      <Card.Body>
        <Row>
        <Col xs={12}>
            <div style={{ background: "white" }} >
              <Tabs value={value} onChange={handleChange} variant="fullWidth">
                <Tab label={`Detailed Description`} style={{ borderBottom: `1px solid ${webColors['neutral-grey-500']}` }} />
                <Tab label={`Brief Overview`} style={{ borderBottom: `1px solid ${webColors['neutral-grey-500']}` }} />
              </Tabs>

              <Tabpanel value={value} index={0}>
                <TripDetailCard />
                <AtGlance />
              </Tabpanel>
              <Tabpanel value={value} index={1}>
                lorem 1
              </Tabpanel>
              
            </div>
          </Col>


        </Row>
       
      </Card.Body>
    </Card>

      
    
        <Form.Group>
          <PrimaryButton type='submit'>{searchParams.get('update')  ? "SAVE" : "Add Holiday Destinations"} </PrimaryButton>
        </Form.Group>   
    </Container>
  </Form>
  
  
  </>)
};


const TripDetailCard = () =>{

  let [open,setOpen] = useState<boolean>(false)
  return(<>
      <Card  className='mt-3 border'>
        <Card.Header className='cursor-pointer border-bottom border-0 bg-transparent d-flex justify-content-between align-content-center rounded-2  py-3' onClick={ ()=> setOpen((prev:any)=> !prev) } >
          <div className="fs-18-500">Add Trip Details</div>
          <div className="" >Expand <ChevronDown style={{rotate : open ? '180deg' : "", transition : '.3s ease-in-out'}} /> </div>
        </Card.Header>
        {
          open &&
          
          <Card.Body className='p-3'>

            <Form.Group className='mb-4'>
              <Form.Label className="fs-16-500">Overview</Form.Label>
              <Editor  height={150} placeholder={'Overview description  goes here...'} />
            </Form.Group>

            <Form.Group className='mb-4'>
              <Form.Label className="fs-16-500"> Itinerary  </Form.Label>
              <Editor  height={150} placeholder={'Itinerary description goes here...'} />
            </Form.Group>

            <Form.Group className='mb-4'>
              <Form.Label className="fs-16-500"> Trip Information  </Form.Label>
              <Editor  height={150} placeholder={'Trip Information goes here...'} />
            </Form.Group>

            <Form.Group className='mb-4'>
              <Form.Label className="fs-16-500">  Weather  </Form.Label>
              <Editor  height={150} placeholder={' Weather Information goes here...'} />
            </Form.Group>

            <Form.Group className='mb-4'>
              <Form.Label className="fs-16-500">  Weather  </Form.Label>
              <Editor  height={150} placeholder={' Weather Information goes here...'} />
            </Form.Group>

            <Form.Group className='mb-4'>
              <Form.Label className="fs-16-500">  Equipment  </Form.Label>
              <Editor  height={150} placeholder={'  Weather Information goes here...'} />
            </Form.Group>

            <Form.Group className='mb-4'>
              <Form.Label className="fs-16-500">  Useful Information  </Form.Label>
              <Editor  height={150} placeholder={'  Useful Information Information goes here...'} />
            </Form.Group>

            <Form.Group className='mb-4'>
              <Form.Label className="fs-16-500">  Others  </Form.Label>
              <Editor  height={150} placeholder={'Others Information Information goes here...'} />
            </Form.Group>

          </Card.Body>
        }
      </Card>
  </>)
}

const AtGlance = () => {
  return(<>
      <Row className='my-5'>
      <Col xs={12}>
        <Form.Group>
        <p className="fs-16-500">At a Glance</p>
      </Form.Group>
      </Col>

      <Col xs={6} className={'mb-lg-3 mb-2'}>
      <Form.Group>
        <Form.Label className="fs-16-500 my-0">Duration</Form.Label>
        <TextField InputProps={{
        startAdornment: (
          <ClockIcon className='me-2' style={{color : webColors['neutral-grey-500']}} />
        ),
      }} className='w-100' size='small' placeholder='4 hours, etc' />
      </Form.Group>
      </Col>

      <Col xs={6} className={'mb-lg-3 mb-2'}>
      <Form.Group>
        <Form.Label className="fs-16-500 my-0">Day Stay</Form.Label>
        <TextField InputProps={{
        startAdornment: (
          <Tent className='me-2' style={{color : webColors['neutral-grey-500']}} />
        ),
      }} className='w-100' size='small' placeholder='10 days, etc' />
      </Form.Group>
      </Col>

      <Col xs={6} className={'mb-lg-3 mb-2'}>
      <Form.Group>
        <Form.Label className="fs-16-500 my-0">Best Season</Form.Label>
        <TextField InputProps={{
        startAdornment: (
          <Cloud className='me-2' style={{color : webColors['neutral-grey-500']}} />
        ),
      }} className='w-100' size='small' placeholder='Mar-Jul, Sep-Dec etc' />
      </Form.Group>
      </Col>

      <Col xs={6} className={'mb-lg-3 mb-2'}>
      <Form.Group>
        <Form.Label className="fs-16-500 my-0">Meals</Form.Label>
        <TextField InputProps={{
        startAdornment: (
          <CookingPot className='me-2' style={{color : webColors['neutral-grey-500']}} />
        ),
      }} className='w-100' size='small' placeholder='Add meals provided; B, L, D during Trek etc' />
      </Form.Group>
      </Col>

      <Col xs={6} className={'mb-lg-3 mb-2'}>
      <Form.Group>
        <Form.Label className="fs-16-500 my-0">Night Stay</Form.Label>
        <TextField InputProps={{
        startAdornment: (
          <TentTree className='me-2' style={{color : webColors['neutral-grey-500']}} />
        ),
      }} className='w-100' size='small' placeholder='Write number of days for night stay' />
      </Form.Group>
      </Col>

      <Col xs={6} className={'mb-lg-3 mb-2'}>
      <Form.Group>
        <Form.Label className="fs-16-500 my-0">Person</Form.Label>
        <TextField InputProps={{
        startAdornment: (
          <User className='me-2' style={{color : webColors['neutral-grey-500']}} />
        ),
      }} className='w-100' size='small' placeholder='Number of travelers allowed' />
      </Form.Group>
      </Col>


      <Col xs={6} className={'mb-lg-3 mb-2'}>
      <Form.Group>
        <Form.Label className="fs-16-500 my-0">Max Altitude</Form.Label>
        <TextField InputProps={{
        startAdornment: (
          <MountainSnow  className='me-2' style={{color : webColors['neutral-grey-500']}} />
        ),
      }} className='w-100' size='small' placeholder='5460m Khyangjang valley, etc
      ' />
      </Form.Group>
      </Col>

      <Col xs={6} className={'mb-lg-3 mb-2'}>
      <Form.Group>
        <Form.Label className="fs-16-500 my-0">Trip Grade</Form.Label>
        <TextField InputProps={{
        startAdornment: (
          <BarChart2 className='me-2' style={{color : webColors['neutral-grey-500']}} />
        ),
      }} className='w-100' size='small' placeholder='Easy, medium, hard etc' />
      </Form.Group>
      </Col>


      <Col xs={6} className={'mb-lg-3 mb-2'}>
      <Form.Group>
        <Form.Label className="fs-16-500 my-0">Nature of Trip</Form.Label>
        <TextField InputProps={{
        startAdornment: (
          <Split className='me-2' style={{color : webColors['neutral-grey-500']}} />
        ),
      }} className='w-100' size='small' placeholder='Mountain,  Skiing Tour etc' />
      </Form.Group>
      </Col>

      <Col xs={6} className={'mb-lg-3 mb-2'}>
      <Form.Group>
        <Form.Label className="fs-16-500 my-0">Others</Form.Label>
        <TextField InputProps={{
        startAdornment: (
          <Pyramid className='me-2' style={{color : webColors['neutral-grey-500']}} />
        ),
      }} className='w-100' size='small' placeholder='Add others' />
      </Form.Group>
      </Col>

      <Col xs={6} className={'mb-lg-3 mb-2'}>
      <Form.Group>
        <Form.Label className="fs-16-500 my-0">Accomodation</Form.Label>
        <TextField InputProps={{
        startAdornment: (
          <Bed className='me-2' style={{color : webColors['neutral-grey-500']}} />
        ),
      }} className='w-100' size='small' placeholder='Hotel, Resort etc' />
      </Form.Group>
      </Col>

      <Col xs={12} className={'mb-lg-3 mb-2'}>
      <Form.Group>
        <Form.Label className="fs-16-500 my-0">Accomodation</Form.Label>
        <TextField InputProps={{
        startAdornment: (
          <Map className='me-2' style={{color : webColors['neutral-grey-500']}} />
        ),
      }} className='w-100' size='small' placeholder='Enter map URL' />
      </Form.Group>
      </Col>

      </Row>
  </>)
}