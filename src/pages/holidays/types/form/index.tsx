import { TextField } from '@mui/material'
import { Form } from 'react-bootstrap'
import { PrimaryButton } from '../../../../utils/custom'
import { useForm } from 'react-hook-form'
import { holidayTypeProp } from '../../../../interface/interface.index'
import Message from '../../../../component/message'
import { webColors } from '../../../../assets/constant'
import { useSearchParams } from 'react-router-dom'

export const HolidayTypeForm = () => {
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

  return (<>
  
  <Form className='my-3' onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className='mb-3'>
            <Form.Label style={{fontWeight: 500}} className='my-0'>Holiday Destinations</Form.Label>
           <TextField error={errors.title ? true : false} {...register("title" , {required : true , minLength : 2})} className='w-100' size='small' placeholder=' Trekking,   Mountaineering etc ' />
           {errors.title && <Message props={{style : {color : webColors['error-500'] } , className : 'my-0'}} title={"title is required*"} />}
        </Form.Group>   
        <Form.Group>
    
          <PrimaryButton type='submit'>{searchParams.get('update')  ? "SAVE" : "Add Holiday Type"} </PrimaryButton>

        </Form.Group>   
  </Form>
  
  
  </>)
};