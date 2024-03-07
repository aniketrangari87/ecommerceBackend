const express = require("express")
const mongoose = require("mongoose")
const server_config = require("./Configs/server.config")
const database_config = require("./Configs/database.config")
const user_model = require("./models/user.model")
const userModel = require("./models/user.model")
const bcrypt = require("bcryptjs")

const app = express()





// Connection with mongodb 

mongoose.connect(database_config.DB_URL)

const db = mongoose.connection
db.on("erroe", () => {
    console.log("Erroe while connecting to the database ");
})
db.once("open", () => {
    console.log("Connected to the database ");
    init()
})


async function init() {

    try {
        user = await user_model.findOne({ userId: "admin" })

        if (user) {
            console.log("Admin already exist ")
        }
        return;
    }catch (err) {
        console.log(err);
    }

    try {
        user = await user_model.create({
            name: "Aniket",
            userId: "admin",
            userType: "ADMIN",
            email: "test@test.com",
            password: bcrypt.hashSync("test", 8),
        })
        console.log("Admin got created .", user)
    }
    catch (err) {
        console.log(err);
    }

}
app.listen(server_config.PORT, () => {
    console.log(`Server Started At Port : ${server_config.PORT}`)
})