import express from "express";

const app = express()
const port = 8000
app.get("/",(req,res) => {
    res.send("Hello")
})
app.listen(port, () => {
    console.log(`server is started at ${port}`)
})

//  //NODE.JS SERVER CREATION

// import http from "http";
// const port = 8000;
// const server = http.createServer((req,res) => {
//     if(req.url == "/"){
//         res.end("welcome to the mern stack course: ")
//     }else if(req.url == "/about"){
//         res.end("WE provide an professional IT and Software solutions")
//     }else{
//         res.end("Error 404: Page not found")
//     }
// })

// server.listen(port, ()=>{
//     console.log("server started")
// })