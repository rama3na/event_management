import React from 'react'
import '../allcss/Users.css'
import { useState,useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
 import {loginContext} from '../../contexts/loginContext'
import { useForm } from 'react-hook-form';
 
function Login() {

  let [currentUser,loginErr,userLoginStatus,AdminLoginStatus,loginUser,loginAdminUser,logoutUser]=useContext(loginContext)
   
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
    <div> 
      <h3 className='text-center'>Login</h3>
      {loginErr?.length !==0 && (<p className='text-danger text-center justify-content-center'>{loginErr}</p>) }
      <div className="row">
        <div className="col-sm-8 col-12 col-md-4 mx-auto border px-3 py-3 shadow bg-light ">
          <form onSubmit={handleSubmit(handleSubmitUser)} >
            <label htmlFor="username">email</label>
            <input
             type="text"
             id='email' 
             placeholder='username'
             className='form-control mt-3 mb-3'
             {...register("email",{required:"True"})}
            />
            {errors.email?.type==='required' && <p className="text-danger ">*this field is required</p> }
            <label htmlFor="password">Password</label>
            <input type="password" 
            id='password'
             placeholder='password'
             className='form-control mt-3 mb-3'
             {...register("password",{required:"True"})}
            />
            {errors.password?.type==='required' &&<p className="text-danger">*this field is required</p> }
            <button type='submit'  className='btn btn-danger   text-white'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login