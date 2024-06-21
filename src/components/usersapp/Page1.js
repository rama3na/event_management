import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
function Page1() {
let navigate=useNavigate();
let Admin=()=>{
  navigate('AdminRegister');
}
let user=()=>{
  navigate('Register');
}
 
  return (
    <div className='container'>
         

        <div>
        <h1>Welcome to our Event Management Registration Portal! 🌟</h1>

<p>Ready to take your event to the next level? You're just a few steps away from securing top-notch event management services. Here's how to get started:</p>

<ol>
    <li className='mt-2'><strong>Create Your Account:</strong> Begin by creating your personal account. It's quick and easy!</li>
    <li className='mt-2'><strong>Event Details:</strong> Provide us with essential information about your event, such as the date, location, and the type of event you're planning.</li>
    <li className='mt-2'><strong>Customize Your Package:</strong> Tailor your event management package to your specific needs. Whether it's event planning, marketing, or on-site coordination, we've got you covered.</li>
    <li className='mt-2'><strong>Payment:</strong> Select your preferred payment method and complete the registration process securely.</li>
    <li className='mt-2'><strong>Confirmation:</strong> You're all set! You'll receive a confirmation email with details about your registration and next steps.</li>
</ol>

<p>Our dedicated team is here to make your event a resounding success. Let's get started on creating unforgettable experiences! 🎉✨</p>
        </div>


        
<h2>Why Register with Us?</h2>
<p className='text-center'>🌐 <strong>Wide Range of Events:</strong> From corporate conferences to lively parties, we specialize in diverse event types. No matter the occasion, we've got you covered!</p>
<p className='text-center'>🤝 <strong>Expertise You Can Trust:</strong> Our seasoned event planners bring years of experience to the table. Rest assured, your event will be in capable hands.</p>
<p className='text-center'>🌈 <strong>Customized Experiences:</strong> We understand that every event is unique. Tailor your package to include exactly what you need for an unforgettable experience.</p>


        <div className="row text-center justify-content-center">
            <div className="col-3">
                 <div className="card">
                  <img src="https://t3.ftcdn.net/jpg/00/07/32/48/360_F_7324855_mx4CEBWTr81XLOrlQccCROtP2uNR7xbk.jpg" height='200px' alt="" />
                  <div className="card-body">
                        <button className="btn btn-danger" onClick={Admin}>Admin Registration</button>
                  </div>
                 </div>
            </div>
            <div className="col-3">
                 <div className="card">
                  <img src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" height='200px' alt="" />
                  <div className="card-body">
                        <button className="btn btn-danger" onClick={user}>User Registration</button>
                  </div>
                 </div>
            </div>
     
   
           
 
        </div>

        
    <p className='text-center mt-3'>Get ready to be a part of something extraordinary! 🚀 Our event management team is dedicated to turning your event dreams into reality. 🎉</p>

       <div>
        <Outlet/>

        </div>



    </div>
  )
}

export default Page1