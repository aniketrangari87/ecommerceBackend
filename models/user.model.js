const mongoose = require("mongoose")


const userSchema = new mongoose.Schema(
    {
        name : {
            type : String ,
            required : true ,

        } , 
        userId :{
            type : String ,
            required : true ,
            unique  : true 
        },
         password : {
            type:String ,
            required : true
         } , 
         email:{
            type: String ,
            required : true ,
            unique : true ,
            lowercase : true ,
            minLength : 10 
         },
         userType : {
            type : String ,
            enum : ["CUSTOMER" , "ADMIN"],
         }
    }, {timestamps: true , versionKey : false }
)

module.exports = mongoose.model("User" , userSchema);