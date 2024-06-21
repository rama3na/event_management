const exp=require("express")
const eventApp=exp.Router()

//import express-async-handler
const expressAsyncHandler=require("express-async-handler")

//import multerObj
const multerObj=require("./middlewares/CloudinaryConfig")

//import //bcryptjs module
const bryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");
const verifyToken=require("./middlewares/verifyToken")

eventApp.use(exp.json())



eventApp.post('/addEvent',multerObj.single('photo'),expressAsyncHandler(async (request,response)=>{
    //get user collection
    const eventCollectionObj=request.app.get("eventCollectionObj")
   //get new user
   const newEvent=JSON.parse(request.body.event);
   //check for duplicate user by username
   let userofDB=await eventCollectionObj.findOne({EventName:newEvent.EventName})
 
   //if user already existed
   if(userofDB!=null){
    response.status(200).send({message:"event already existed"})
   }//if user not existed  
   else{
    //add CDN link of cloudinary image to user obj
    newEvent.image=request.file.path;
 
  
     await eventCollectionObj.insertOne(newEvent)
     response.status(201).send({message:"user created"});
      
   }
   
 })
 );
  


 eventApp.get("/get-events",expressAsyncHandler(async (request,response)=>{
    //get landolletionobj
    const eventCollectionObj=request.app.get("eventCollectionObj");


    //get users from db
    let eventData=await eventCollectionObj.find().toArray();
    console.log(eventData)
    response.status(200).send({message:"data details",payload:eventData})
}))


 
eventApp.delete("/delete-event/:id",expressAsyncHandler(async(request,response)=>{
    
    const eventCollectionObj=request.app.get("eventCollectionObj")
    let deleteevent=request.body;
    console.log(request.body)
    await eventCollectionObj.deleteOne(deleteevent)
    .then(()=>{
        response.status(200).send({message:"event deleted"})
    })
    .catch((err)=>{
        console.log("err is at event creation",err)
        response.send({message:"err at event creation",errMessage:err.message})
    })



}))
 


eventApp.put("/update-event",expressAsyncHandler(async (request,response)=>{
    //get eventCollectionObj
    const eventCollectionObj=request.app.get("eventCollectionObj");

    let modifiedData=request.body;

    let dbRes=await eventCollectionObj.updateOne(
        {_id:modifiedData._id},
        {$set:{...modifiedData}}

    );
  
    console.log(modifiedData)
    response.status(200).send({message:"data updated"});

}));

  






module.exports=eventApp