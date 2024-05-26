import mongoose from "mongoose";
const {Schema, model} = mongoose;

const StudentSignupSchema = new Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

const StudentSignUp = model('StudentSignup', StudentSignupSchema);
export default StudentSignUp;