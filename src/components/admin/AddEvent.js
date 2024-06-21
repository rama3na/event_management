import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 
function AddEvent() {
let {register,handleSubmit,formState:{errors}}=useForm()
let [err,seterror]=useState("")
let [selectedFile,setSelectedFile]=useState(null) 
let navigate=useNavigate()
let addEvent=(newEvent)=>{
  let fd=new FormData();
  //append newuser to form data
  fd.append("event",JSON.stringify(newEvent))
  //append slelected file to form data
  fd.append("photo",selectedFile)

  // console.log(newuser);
  //save user info
  axios.post("http://localhost:3500/eve-api/addEvent",fd)
  .then(response=>{ 
    console.log("response is ",response)
    if(response.status===201){
      navigate('/ViewEvent');
       
    }
    else{
      seterror(response.data.message)
    }
     
  })
  .catch((err)=>{
    console.log("err is", err);
    if(err.response){
     seterror(err.message)
    }
    else if(err.request){
      seterror(err.message)
    }
  })

}


const onFileSelect=(e)=>{
  setSelectedFile(e.target.files[0])
}

 
  return (
    <div className='addeventpage'>
     

     <div>
      <p className="display-3 text-center mb-5 mt-3">Add Event</p>
      {err.length!==0 && <p className='text-danger mx-auto text-center'>{err}</p>}
      <div className="row">
        <div className="col-sm-8 col-11 col-md-6 mx-auto border px-3 py-3 shadow bg-light">
          <form onSubmit={handleSubmit(addEvent)}>
            <label htmlFor="username">Event Name :</label>
            <input type="text"
             id='Eventname'
             placeholder='EventName'
             className='form-control  mt-3 mb-3'
             {...register("EventName",{required:'True'})}
            />
             {errors.EventName?.type==='required' && <p className='text-danger'>*this field is required</p>}
            <label htmlFor="email" className='mt-3'>Time :</label>
            <input type="time"
            id='time' 
             className='form-control mt-3 mb-3'
             {...register("time",{required:'True'})}
            />
            {errors.time?.type==='required' && <p className='text-danger'>*this field is required</p>}

           
            <label htmlFor="dateofbirth" className='mt-3'>Date of event :</label>
            <input type="date"
             id='doe'
             className='form-control mt-3'
             {...register("doe",{required:'True'})}
            />
            {errors.doe?.type==='required' && <p className='text-danger'>*this field is required</p>}
            <label htmlFor="venue" className='mt-3'>Venue :</label>
            <input type="text"
             id='venue'
             className='form-control mt-3'
             {...register("venue",{required:'True'})}
            />
            {errors.venue?.type==='required' && <p className='text-danger'>*this field is required</p>}
            <label htmlFor="name" className='mt-3'>upload pro pic :</label>
            <input type="file"
            id='image'
             placeholder='url'
             className='form-control mt-3'
             {...register("image",{required:'True'})}
             onInput={onFileSelect}
            />
            {errors.imageUrl?.type==='required' && <p className='text-danger'>*this field is required</p>}
            <button className='btn btn-danger mt-3'    type='submit'>Register</button>
             
          </form>
        </div>
      </div>
      </div>



    </div>
  )
}

export default AddEvent