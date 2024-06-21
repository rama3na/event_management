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
      <p className='display-4 text-danger text-end'> welcome {currentUser.username}!</p>
      <img src={currentUser.image} w='100' height='200px' alt="" />

      <ul className='nav justify-content-between'>
      <li className="nav-item">
            <NavLink className="nav-link  "   to="Products" style={({isActive})=>{
              return isActive ? activeLink :inactiveLink;
            }} >Products</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link "   to="Cart" style={({isActive})=>{
              return isActive ? activeLink :inactiveLink;
            }} >Cart</NavLink>
          </li>

      </ul>
      <Outlet/>

    </div>
  )
}

export default Userprofile