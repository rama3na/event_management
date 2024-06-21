const exp=require("express")
const proApp=exp.Router()

 
proApp.use(exp.json())


proApp.get("/get-products",(request,response)=>{
    
    const productsCollectionObj=request.app.get("productsCollectionObj")
    productsCollectionObj.find().toArray()
    .then((prolist)=>{
        response.status(200).send({message:"pro List",payload:prolist})
    })
    .catch((err)=>{
        console.log("err is at get users",err)
        response.send({message:"ERROR",errMessage:err.message})
    })


})



proApp.post("/create-products",(request,response)=>{
    const productsCollectionObj=request.app.get("productsCollectionObj")

    const newUser=request.body;
    productsCollectionObj.insertOne(newUser)
    .then((dbRes)=>{
         console.log(dbRes)
         response.status(201).send({message:"user created"})
    })
    .catch((err)=>{
        console.log("err is at user creation",err)
        response.send({message:"err at user creation",errMessage:err.message})
    })
})

proApp.delete("/delete-products/:id",(request,response)=>{
    
    const productsCollectionObj=request.app.get("productsCollectionObj")
    let proId=(+request.params.id)
    productsCollectionObj.deleteOne({id:proId})
    .then(()=>{
        response.status(200).send({message:"pro deleted"})
    })
    .catch((err)=>{
        console.log("err is at pro creation",err)
        response.send({message:"err at user creation",errMessage:err.message})
    })



})

module.exports=proApp;