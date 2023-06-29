const express=require("express")
const app=express()
// app.use(logger)
function logger(req,res,next){
 console.log("single Action middleware started")
 next()
}
app.get("/",(req,res)=>{
    console.log("Home page")
    res.send("Home")
})
app.get("/contacts",logger,(req,res)=>{
    console.log("contacts page")
    res.end("contacts page")
})
app.get('/about',(req,res)=>{
    console.log("about pagge")
    res.send("about page")
})
app.listen(3300,()=>{
    console.log("port started")
})