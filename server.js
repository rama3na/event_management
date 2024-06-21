const exp=require("express")
const app=exp();

let cors=require('cors')
app.use(cors())

app.listen(3500,()=>console.log("web server listening port ......"));

//set path
const path=require("path")

//connect react build
app.use(exp.static(path.join(__dirname,'./build')))

//get mongo client
const mclient=require("mongodb").MongoClient;

//connect to db server using mongo client
mclient.connect('mongodb://127.0.0.1:27017')
.then((dbRef)=>{
    //connect to a database
    const dbObj=dbRef.db("b1db")
    //connect to collections of the databases
    const userCollectionObj=dbObj.collection("userCollections")
    const productsCollectionObj=dbObj.collection("productsCollection")
    const eventCollectionObj=dbObj.collection("eventCollections")
    const adminsCollectionObj=dbObj.collection("adminsCollection")

    //share collections to APIs
    app.set("userCollectionObj",userCollectionObj)
    app.set("productsCollectionObj",productsCollectionObj)
    app.set("eventCollectionObj",eventCollectionObj)
    app.set("adminsCollectionObj",adminsCollectionObj)
    console.log("Db connection success")

})
.catch((err)=>console.log("database connect error",err))



//import user api
const userApp=require("./APIs/usersApi")
const proApp=require('./APIs/productApi')
const eventApp=require("./APIs/eventsApi")
const adminApp=require('./APIs/adminsApi')

//execute user api when pathn/user-api
app.use('/user-api',userApp)

//execute user api when pathn/pro-api
app.use('/pro-api',proApp)

app.use('/eve-api',eventApp)

app.use('/admin-api',adminApp)


//page refresh
app.use('/*',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./build/index.html'),err=>{
        if(err){
            next(err)
        }
    })
})

const InvalidPathmiddleware=(request,response,next)=>{
    response.send({message:"invalid path"})

}
app.use("*",InvalidPathmiddleware)

const errorHandlingMiddleware=(error,request,response,next)=>{
    response.send({message:error.message});
}
app.use(errorHandlingMiddleware)