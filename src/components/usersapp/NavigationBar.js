import React,{useContext} from 'react'
import '../allcss/NavigationBar.css'
import { NavLink } from 'react-router-dom'
import { loginContext } from '../../contexts/loginContext';
function NavigationBar() {
   
  let [currentUser,loginErr,userLoginStatus, loginUser, logoutUser]=useContext(loginContext)



  const activeLink={
    color:"#ffaa00",
    fontSize:"1.2rem",
    fontWeight:'bold'
  };

  const inactiveLink={
    color:"#EEF02",
    fontSize:"1.2rem"
  };




  return (
    <nav className="navbar navbar-expand-sm bg-black ">
    <div className="container-fluid">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe4_x6nO6mw__gV7kVCiUtWf3XIGvadFw91w&usqp=CAU" width="40px"   className='border' alt="" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse  " id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
          {
            currentUser.userType=='admin'  ?

            <div className='d-flex flex-row'>
           

            <div>
            <li className="nav-item  ">
              <NavLink className="nav-link text-white "   to="/AddEvent"  style={({isActive})=>{
                return isActive ? activeLink :inactiveLink;
              }}  >Add Event</NavLink>
            </li>
            </div>
             
             <div>
   
            <li className="nav-item">
               <NavLink className="nav-link text-white  "   to="/ViewEvent"  style={({isActive})=>{
                 return isActive ? activeLink :inactiveLink;
               }}  >Edit/Delete Event</NavLink>
             </li>
   
             </div>
   
               <div>
   
             <li className="nav-item">
               <NavLink className="nav-link text-white  "   to="/UserProfile"  style={({isActive})=>{
                 return isActive ? activeLink :inactiveLink;
               }}  > Profile</NavLink>
             </li>
   
             </div>
   
             <div>
              <li className="nav-item  ">
              <NavLink className="nav-link text-white" to='/' style={({isActive})=>{
                return isActive ? activeLink :inactiveLink;
              }}  
              onClick={logoutUser}
              >LogOut</NavLink>
            </li>
            </div>
   
            </div>
   


            :
            currentUser.userType=='user' ?


            <div className='d-flex flex-row'>
            
            <div>
            <li className="nav-item  ">
              <NavLink className="nav-link text-light  "   to="/Home"  style={({isActive})=>{
                return isActive ? activeLink :inactiveLink;
              }}  >Home</NavLink>
            </li>
            </div>
   
            <div>
            <li className="nav-item  ">
              <NavLink className="nav-link text-light "   to="/AboutUs"  style={({isActive})=>{
                return isActive ? activeLink :inactiveLink;
              }}  >About Us</NavLink>
            </li>
            </div>
   
           
             
             <div>
   
            <li className="nav-item">
               <NavLink className="nav-link text-white  "   to="/UserProfile"  style={({isActive})=>{
                 return isActive ? activeLink :inactiveLink;
               }}  >Profile</NavLink>
             </li>
   
             </div>
   
             <div>
              <li className="nav-item  ">
              <NavLink className="nav-link text-light "   to="/"  style={({isActive})=>{
                return isActive ? activeLink :inactiveLink;
              }}  
              onClick={logoutUser}
              >LogOut</NavLink>
            </li>
            </div>
   
            </div>







            :



            <div className='d-flex flex-row'>
            <div>
             
            <li className="nav-item">
                <NavLink className="nav-link text-white "   to="/Register" style={({isActive})=>{
                  return isActive ? activeLink :inactiveLink;
                }} >Register</NavLink>
              </li>
    
              </div>
    
              
              <div>
              <li className="nav-item">
                <NavLink className="nav-link text-white "   to="/Login" style={({isActive})=>{
                  return isActive ? activeLink :inactiveLink;
                }} >Login</NavLink>
              </li>
    
              </div>
     
     
              </div>









          }
        </ul>
        
      </div>
    </div>
  </nav>
  )
}

export default NavigationBar