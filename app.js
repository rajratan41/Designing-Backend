require("dotenv").config()
const express = require("express");
const { get } = require("http");
const { send } = require("process");
const User = require("./model/user")

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello Homepage</h1>")
})

app.post("/signup", async (req, res) => {
    
    // for mandatory field
    const {firstname, lastname, email, password} = req.body
    if ( !(firstname && lastname && email && password) ) {
        res.status(400).send("All Fields are Required")
    }
    
    // unique email
    const existingUser = await User.findOne(email)
    if (existingUser) {
        res.status(400).send("User is Already Exists")
    }

    // Password

})

module.exports = app;