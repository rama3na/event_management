import React,{useState} from 'react'
import '../allcss/AddUser.css'
import {useForm} from 'react-hook-form'
import {  useNavigate} from 'react-router-dom'
import axios from 'axios' 
function Adregister() {
   let [go,setgo]=useState(false)
  let {register,handleSubmit,formState:{errors}}=useForm()
  let navigate=useNavigate()
  let [err,seterror]=useState("")
  let [selectedFile,setSelectedFile]=useState(null) 
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    //setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };



let addnewuser=(newuser)=>{

  if(passwordMatch){
    newuser.password=password;
  console.log(newuser)
  }

  //make http post req to save newuser to localapi
  let fd=new FormData();
  //append newuser to form data
  fd.append("user",JSON.stringify(newuser))
  //append slelected file to form data
  fd.append("photo",selectedFile)

  // console.log(newuser);
  //save user info
  axios.post("http://localhost:3500/admin-api/admin-register",fd)
  .then(response=>{

    console.log("response is ",response)
    if(response.status===201){
      //navigate('/Users');
      navigate('/')
    }
    else{
      seterror(response.data.message)
    }
     
  })
  .catch((err)=>{
    console.log("err is", err);
    if(err.response){
     seterror(err.message)
    }
    else if(err.request){
      seterror(err.message)
    }
  })

}

    //on file selelct
    const onFileSelect=(e)=>{
      setSelectedFile(e.target.files[0])
    }

  return (
    <div> 
         
      <p className="display-4 text-center mb-3">Admin registration</p>
      {err.length!==0 && <p className='text-danger'>{err}</p>}
      <div className="row">
        <div className="col-sm-8 col-12 col-md-4 mx-auto border px-3 py-3 shadow bg-light">
          <form onSubmit={handleSubmit(addnewuser)}>

          <label htmlFor="adminid" className='fw-bold'>admin id :</label>
            <input type="text"
            id='empno'
            
             className='form-control mt-3 mb-3'
             {...register("adminno",{required:'True'})}
            />
            {errors.adminno?.type==='required' && <p className='text-danger'>*this field is required</p>}


            <label htmlFor="email" className='fw-bold'>email :</label>
            <input type="email"
            id='email'
             placeholder='@gmail.com'
             className='form-control mt-3 mb-3'
             {...register("email",{required:'True'})}
            />
            {errors.email?.type==='required' && <p className='text-danger'>*this field is required</p>}

          
            <div>
          <label className='fw-bold mt-2 mb-2 me-2'>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label  className='fw-bold mt-2 mb-2 me-2' >Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
           
          />
        </div>
        {!passwordMatch && (
          <p style={{ color: 'red' }}>Passwords do not match.</p>
        )}
             
            <label htmlFor="name" className='mt-3 fw-bold'>profile pic :</label>
            <input type="file"
            id='image'
             placeholder='url'
             className='form-control mt-3'
             {...register("image",{required:'True'})}
             onInput={onFileSelect}
            />
            {errors.imageUrl?.type==='required' && <p className='text-danger'>*this field is required</p>}
            <button className='btn btn-danger mt-3'  type='submit'>Register</button>
             
          </form>
        </div>
      </div>
    </div>
  )
}

export default Adregister