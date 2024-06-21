import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
function LoginPage() {
let navigate=useNavigate();
let goAdmin=()=>{
    navigate('AdminLogin')
}
let goUser=()=>{
    navigate('Login')
}
  return (
    <div className='container mx-auto'>
         class
        <div>
        <h2 className='text-center'><span className="emoji">👋</span>Welcome Back to Event Manager</h2>
        <p  className='text-center'>Please log in to access your event management account. With Event Manager, you can plan, organize, and manage your events with ease.</p>

        <h3  className='text-center' ><span className="emoji">🔐</span>Log In</h3>
        <p  className='text-center'>If you already have an account, enter your email and password below to log in:</p>

        <div className="row text-center justify-content-center">
            <div className="col-3">
                 <div className="card">
                  <img src="https://t3.ftcdn.net/jpg/00/07/32/48/360_F_7324855_mx4CEBWTr81XLOrlQccCROtP2uNR7xbk.jpg" height='200px' alt="" />
                  <div className="card-body">
                        <button className="btn btn-danger" onClick={goAdmin}>Admin Login</button>
                  </div>
                 </div>
            </div>
            <div className="col-3">
                 <div className="card">
                  <img src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" height='200px' alt="" />
                  <div className="card-body">
                        <button className="btn btn-danger" onClick={goUser}>User Login</button>
                  </div>
                 </div>
            </div>
     
   
           
 
        </div>
        <p>Once logged in, you'll have access to your event dashboard, where you can create and manage events, track RSVPs, and much more.</p>

<p>If you forgot your password, don't worry! You can click on the "Forgot Password" link below the login form to reset it. We'll send you instructions on how to create a new password.</p>

<p>If you're new here, welcome! You can sign up for an account by clicking the "Sign Up" link below the login form. With Event Manager, you can simplify event planning and make your events unforgettable.</p>

<h3>Security & Privacy</h3>
<p>Your data is important to us, and we prioritize the security and privacy of your information. Rest assured that your event details and personal data are safe with us.</p>

<h3>Contact Support</h3>
<p>If you encounter any issues during the login process or have questions about our services, please don't hesitate to contact our support team. We're here to assist you.</p>
        </div>

       
    <div>
    <Outlet/>
    </div>

    </div>
  )
}

export default LoginPage