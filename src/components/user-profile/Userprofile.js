import React,{useContext} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {loginContext} from '../../contexts/loginContext'
import './Userprofile.css'

function Userprofile() {
   let [currentUser]=useContext(loginContext)

   const activeLink={
    color:"black",
    fontSize:"1.2rem",
    fontWeight:'bold'
  };

  const inactiveLink={
    color:"black",
    fontSize:"1.2rem"
  };


  return (
    <div> 
           <h4 className='text-center mb-5 mt-3 text-danger'>😀 welcome : {currentUser.username}</h4>
        <div className="row">
          <div className="col-sm-8 col-11 col-md-4 mx-auto border px-3 py-3 shadow bg-light">
                  <div className="card">
                    <img src={currentUser.image} alt=""   className='w-100' />
                    <div className="card-body text-center">
                        <p>email: {currentUser.email}</p> 
                      <h5>username: {currentUser.username}</h5>
                      <h5>DOB: {currentUser.dateofbirth}</h5>
                      
                    </div>
                  </div>
          </div>
        </div>

    </div>
  )
}

export default Userprofile