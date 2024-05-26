import mongoose from "mongoose";
const {Schema, model} = mongoose;

const AdminSignupSchema = new Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

const AdminSignUp = model('AdminSignup', AdminSignupSchema);
export default AdminSignUp;