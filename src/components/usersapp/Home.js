import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import '../allcss/Home.css'
import { useForm } from 'react-hook-form';
function Home() {

    let [events,setEvents]=useState([])
    let [show,setshow]=useState(false)
    let [selectedFile,setSelectedFile]=useState(null) 
    let [dataTOEdit,setDataToEdit]=useState({})
    let [err,seterror]=useState('')
    let {register,handleSubmit,formState:{errors},setValue,getValues}=useForm()

    let showModal=()=>setshow(true)
    let closeModal=()=>setshow(false)

   

    //save data

     
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

    let registerEvent=()=>{

    }

    


    

    //delete land data
    useEffect(()=>{
    getData();
  
      
    },[])

    const onFileSelect=(e)=>{
      setSelectedFile(e.target.files[0])
    }



  return (
    <div className=' container '> 
    <h3 className='text-center mt-3 mb-5'>Join us for an unforgettable event!</h3>
   <div className="row border mb-5">
    <div className="col-6 my-auto">
    <p>Join us for an unforgettable event! 🌟 Register today to secure your spot and be a part of this exciting experience. 🎉 Don't miss out on valuable networking opportunities, insightful sessions, and much more. 🤝 Reserve your seat now and mark your calendar for [Event Date]. 🗓️ Register at [Event Website] to embark on this incredible journey with us. Hurry, limited spots available! ⏳🚀</p>
    </div>
    <div className="col-6 text-center">
      <img src="https://img.freepik.com/premium-photo/speaker-with-microphone-pointing-finger-listener-standing-stage-with-projector-background-concepts-speakers-communication-american-male-formal-suit-giving-speech_183219-8759.jpg" width='300px' alt="" />
    </div>
    </div>
<div className=" row row-cols-1 row-cols-sm-2 row-cols-md-3 shadow">
    {
      events?.map((dataObj)=> <div className='col mx-auto text-center' key={dataObj.id} >
        <div className="card mt-3 ">
          <img src={dataObj.image} alt="" height='250px' />
          <div className="card-body bg-light">
        
                <p>{dataObj.EventName}</p>
                <p>{dataObj.time}</p>
                <p>{dataObj.doe}</p>
                
                
                <button className="btn btn-primary float-start" onClick={()=>registerEvent(dataObj)}>Register</button>
                
          </div>
        </div>

      </div> )


  }
  </div>

 
      
  

    </div>
  )
}

export default Home