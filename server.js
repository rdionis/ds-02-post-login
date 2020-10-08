const express = require("express")
const app = express()

app.listen(5000, () => console.log("Server started at port 5000"))

let users = [ 
    {username: "User1", password: "PW1"}, 
    {username: "User2", password: "PW2"}, 
    {username: "User3", password: "PW3"}
]

// body parser middleware
app.use(express.json())

// GET serves us with either UIs or data
app.get("/login", (req, res) => {
    res.sendFile(__dirname + '/client/login.html')
})

// POST routes RECEIVE data
app.post("/login", (req, res) => {

    let dataPosted = req.body    
    console.log("[LOGIN ROUTE] Posted data:", dataPosted)
    
    // some() method is nice if we just want to check IF some entry exists in an 
    // array. It gives us back "true" if something was found, and "false" if not
    let userFound = users.some(user => {
        return user.username == dataPosted.username && user.password == dataPosted.password
    })

    // code BELOW is solves the same as above by using find: 
    // let userFound = users.find(user => {
    //     return user.username == userPOST.username && user.password == userPOST.password
    // })

    if(userFound) {
        res.send({ message: "Login succesful" })    
    }
    else {
        res.send({ message: "Login not succesful" })    
    }

})
