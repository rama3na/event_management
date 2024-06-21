import React,{useContext} from 'react'
import {loginContext} from '../../contexts/loginContext'
function AdProfile() {
  let [currentUser]=useContext(loginContext)
  return (
    <div> 
      <h4 className='text-center mb-5 mt-3 text-danger'>😀 welcome adminid : {currentUser.adminno}</h4>
        <div className="row">
          <div className="col-sm-8 col-11 col-md-4 mx-auto border px-3 py-3 shadow bg-light">
                  <div className="card">
                    <img src={currentUser.image} alt="" />
                    <div className="card-body text-center">
                      <h5>adminid: {currentUser.adminno}</h5>
                      <p>email: {currentUser.email}</p>

                    </div>
                  </div>
          </div>
        </div>

    </div>
  )
}

export default AdProfile