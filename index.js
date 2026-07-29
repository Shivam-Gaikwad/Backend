



import express from "express";

const app = express()
const port = 8000
app.get("/",(req,res) => {
    res.send("Hello")
})
app.listen(port, () => {
    console.log(`server is started at ${port}`)
})














// import http, { Server } from "http";
// const port = 8000;
// const server = http.createServer((req,res) => {
//     if(req.url == "/"){
//         res.end("welcome to home page: ")
//     }else if(req.url == "/about"){
//         res.end("This is an about page")
//     }else if(req.url == "/contactUs"){
//         res.end(`
//             {
//             "name" : "Shivam",
//             "Education" : "B.E.(IT)",
//             "status" : "unemployed",
//            "contact Number" : "8669061300",
//             "emailID" : "gaikwadshivam572@gmail.com"
//             }
//             `)
//     }
//     else{
//         res.end("Welcome to MERN Stackk")
//     }
// })

// server.listen(8000,()=>{
// console.log("Server is started");
// })