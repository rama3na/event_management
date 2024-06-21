import React from 'react'
import '../allcss/Users.css'
import { useState,useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
 import {loginContext} from '../../contexts/loginContext'
import { useForm } from 'react-hook-form';
import loginimage from  '../Screensots/login.jpeg'
 
function Login() {

  let [currentUser,loginErr,userLoginStatus,loginUser,logoutUser]=useContext(loginContext)
   
let [error,setError]=useState('')

//navigate
const navigate=useNavigate();
let {register,handleSubmit,formState:{errors}}=useForm()
  //adding new user
  let handleSubmitUser=(usercreObj)=>{
    loginUser(usercreObj);
  }
useEffect(()=>{
  if(userLoginStatus==true){
    
    navigate("/UserProfile")
  }
},[userLoginStatus])

  return (
    <div className='back bg-dark p-5'> 
       
      {loginErr?.length !==0 && (<p className='text-danger text-center justify-content-center'>{loginErr}</p>) }
      <div className="row justify-content-center">
  <div className="col-lg-6 col-md-8 col-sm-12  ">
    <div className="row">
      <div className="col-sm-12 col-md-6 mx-auto text-white px-3 py-3 shadow" style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <form onSubmit={handleSubmit(handleSubmitUser)}>
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            className="form-control mt-3 mb-3"
            {...register("email", { required: "True" })}
          />
          {errors.email?.type === "required" && (
            <p className="text-danger">*This field is required</p>
          )}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="form-control mt-3 mb-3"
            {...register("password", { required: "True" })}
          />
          {errors.password?.type === "required" && (
            <p className="text-danger">*This field is required</p>
          )}
          <button type="submit" className="btn btn-danger text-white" style={{ backgroundColor: '#dc3545', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Login
          </button>
        </form>
      </div>
      <div className="col-sm-12 col-md-6 mx-auto my-auto text-center">
        <img src={loginimage} className="w-100" alt="" style={{ borderRadius: '8px' }} />
      </div>
    </div>
  </div>
</div>



     
    </div>
  )
}

export default Login