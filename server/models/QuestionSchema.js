import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const QuestionSchema = new Schema({
    questions : {
        type : Array,
        default : []
    },
    answers : {
        type : Array,
        default : []
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

export default mongoose.model('Question', QuestionSchema);