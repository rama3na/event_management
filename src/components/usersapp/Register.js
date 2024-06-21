import React,{useState} from 'react'
import '../allcss/AddUser.css'
import {useForm} from 'react-hook-form'
import {  useNavigate} from 'react-router-dom'
import axios from 'axios'
function Register() {
  
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
  axios.post("http://localhost:3500/user-api/register",fd)
  .then(response=>{ 
    console.log("response is ",response)
    if(response.status===201){
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
      
      <div>
      <p className="display-3 text-center mt-3 mb-3">Add user</p>
      {/*err.length!==0 && <p className='text-danger'>{err}</p>*/}
      <div className="row">
        <div className="col-sm-8 col-12 col-md-4 mx-auto border px-3 py-3 shadow bg-light">
          <form onSubmit={handleSubmit(addnewuser)}>
            <label htmlFor="username">username</label>
            <input type="text"
             id='username'
             placeholder='username'
             className='form-control  mt-3 mb-3'
             {...register("username",{required:'True'})}
            />
             {errors.username?.type==='required' && <p className='text-danger'>*this field is required</p>}
            <label htmlFor="email">email</label>
            <input type="email"
            id='email'
             placeholder='@gmail.com'
             className='form-control mt-3 mb-3'
             {...register("email",{required:'True'})}
            />
            {errors.username?.type==='required' && <p className='text-danger'>*this field is required</p>}

            <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
           
          />
        </div>
        {!passwordMatch && (
          <p style={{ color: 'red' }}>Passwords do not match.</p>
        )}
            <label htmlFor="dateofbirth">date of Birth</label>
            <input type="date"
             id='dob'
             className='form-control mt-3'
             {...register("dateofbirth",{required:'True'})}
            />
            {errors.dateofbirth?.type==='required' && <p className='text-danger'>*this field is required</p>}
            <label htmlFor="name">upload pro pic</label>
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
 
    </div>
  )
}

export default Register