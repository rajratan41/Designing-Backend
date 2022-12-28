const mongoose = require("mongoose")

const {MONGO_URL} = process.env

exports.connect = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then (console.log("Database Connection Success"))
    .catch(error => {
        console.log("Database Connection Failed")
        console.log(error)
        process.exit(1)
    })
}