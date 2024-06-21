const exp=require("express")
const adminApp=exp.Router()

//import express-async-handler
const expressAsyncHandler=require("express-async-handler")

//import multerObj
const multerObj=require("./middlewares/CloudinaryConfig")

//import //bcryptjs module
const bryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");
const verifyToken=require("./middlewares/verifyToken")

adminApp.use(exp.json())


adminApp.post('/admin-register',multerObj.single('photo'),expressAsyncHandler(async (request,response)=>{
    //get user collection
    const adminsCollectionObj=request.app.get("adminsCollectionObj")
   //get new user
   const newUser=JSON.parse(request.body.user);
   //check for duplicate user by username
   let userofDB=await adminsCollectionObj.findOne({email:newUser.email})
 
   //if user already existed
   if(userofDB!=null){
    response.status(200).send({message:"user already existed"})
   }//if user not existed  
   else{
    //add CDN link of cloudinary image to user obj
    newUser.image=request.file.path;
 
 
     //hash the password
    let hashpassword=await bryptjs.hash(newUser.password,5)
     //replace plain password with hasses password
     newUser.password=hashpassword;
     //insert user
     await adminsCollectionObj.insertOne(newUser)
     response.status(201).send({message:"user created"});
      
   }
   
 })
 );


 
//user login
adminApp.post('/admin-login',expressAsyncHandler(async(request,response)=>{

    //get userCollectionObj
    const adminsCollectionObj=request.app.get("adminsCollectionObj")
 
    //get user credentials from req
    const userCredObj=request.body;
    
    //verify username
    let userOfDB=await adminsCollectionObj.findOne({email:userCredObj.email})
 
    //if username is valid
    if(userOfDB===null){
       response.status(200).send({message:"invalid email"})
 
    }
    else{
       //verify password
       let isEqual=await bryptjs.compare(userCredObj.password,userOfDB.password)
       //if password not matches
       if(isEqual===false){
          response.status(200).send({message:"invalid password"})
 
       }
       //if password is matched
       else{
         //jwt token create
         let jwtToken=jwt.sign({email:userOfDB.email},'abcdef',{expiresIn:30})
         delete userOfDB.password;
         response.status(200).send({message:"Success",token:jwtToken,user:userOfDB})
       }
    }
 }))
  
  





module.exports=adminApp