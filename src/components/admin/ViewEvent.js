import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import { ModalTitle } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './ViewEvent.css'
import {BiTime} from 'react-icons/bi'
import {BsCalendar2Date} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
function ViewEvent() {

    let [events,setEvents]=useState([])
    let [show,setshow]=useState(false)
    let [selectedFile,setSelectedFile]=useState(null) 
    let [dataTOEdit,setDataToEdit]=useState({})
    let [err,seterror]=useState('')
    let {register,handleSubmit,formState:{errors},setValue,getValues}=useForm()

    let showModal=()=>setshow(true)
    let closeModal=()=>setshow(false)

    let editdata=(dataObjToBeEdited)=>{
      showModal();
      setDataToEdit(dataObjToBeEdited)
      //fill input details with user data
      setValue("EventName",dataObjToBeEdited.EventName);
      setValue("time",dataObjToBeEdited.time);
      setValue("doe",dataObjToBeEdited.doe);
      setValue("image",dataObjToBeEdited.image);
      setValue("venue",dataObjToBeEdited.venue);
      
     
    }

    //save data

     let saveEvent=()=>{
      closeModal();
      let modifiedData=getValues()
      
      //set id
      modifiedData._id=dataTOEdit._id;
      console.log(modifiedData)
      axios.put('http://localhost:3500/eve-api/update-event',modifiedData)
      .then(res=>{
        if(res.status===200){
          getData()
        }
      })
      .catch(err=>{
        console.log("err is",err);
        if(err.response){
          seterror(err.message)
        }
        else if(err.request){
          seterror(err.message)
        }
      })
    }

    let getData=()=>{
      axios.get("http://localhost:3500/eve-api/get-events")
      .then((response)=>{
        if(response.status==200){
          setEvents(response.data.payload)
          console.log(response.data.payload)
        }
      })
      .catch((err)=>{
        console.log("err is at getdata dashboard",err)
        if(err.response){
          seterror(err.message)
        }
        else if(err.request){
          seterror(err.message)
        }
      })
    }


    const deletedata=(event)=>{
      
        
              axios.delete(`http://localhost:3500/eve-api/delete-event/${event.id}`)
              .then((res)=>{
               if(res.status===200){
                 getData();
               }
              })
              seterror(" ")
 
}


    

    //delete land data
    useEffect(()=>{
    getData();
  
      
    },[])

    const onFileSelect=(e)=>{
      setSelectedFile(e.target.files[0])
    }



  return (
    <div className='ViewEventPage container mt-5'> 
    <h2 className='text-center mt-3 mb-3 text' >Add/Edit the events</h2>

<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
    {
      events?.map((dataObj)=> <div className='col mx-auto text-center' key={dataObj.id} >
        <div className="card shadow border-bold mt-4">
          <img src={dataObj.image} alt="" height='250px' />
          <div className="card-body bg-light border">
        
                <h5>{dataObj.EventName}</h5>
                <p><BiTime/> {dataObj.time}</p>
                <p><BsCalendar2Date/>  {dataObj.doe}</p>
                <p><GoLocation/> {dataObj.venue}</p>
               
                
                <button className="btn btn-primary float-start" onClick={()=>editdata(dataObj)}>Edit</button>
                <button className="btn btn-danger float-end" onClick={()=>deletedata(dataObj)}>delete</button>
                
          </div>
        </div>

      </div> )


  }
  </div>


        {/*modal */}
  
      <Modal show={show}
       onHide={closeModal}
       backdrop='static'
       >
        <Modal.Header>
         <Modal.Title>
          edit
         </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {/*form to edit */}

         <form>
            <label htmlFor="username">Event Name</label>
            <input type="text"
             id='Eventname'
             placeholder='EventName'
             className='form-control  mt-3 mb-3'
             {...register("EventName",{required:'True'})}
            />
          
            <label htmlFor="email">Time</label>
            <input type="time"
            id='time' 
             className='form-control mt-3 mb-3'
             {...register("time",{required:'True'})}
            />
            

           
            <label htmlFor="dateofbirth">Date of event</label>
            <input type="date"
             id='doe'
             className='form-control mt-3'
             {...register("doe",{required:'True'})}
            />
            
            <label htmlFor="venue">venue</label>
            <input type="text"
             id='venue'
             className='form-control mt-3'
             {...register("venue",{required:'True'})}
            />
            

            <label htmlFor="name">upload pro pic</label>
            <input type="file"
            id='image'
             placeholder='url'
             className='form-control mt-3'
             {...register("image",{required:'True'})}
             onInput={onFileSelect}
            />
        
             
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-primary' onClick={saveEvent} >Save</button>
        </Modal.Footer>
      </Modal>
  

    </div>
  )
}

export default ViewEvent