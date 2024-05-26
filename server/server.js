// Importing Modules
import express from 'express'
import cors from "cors"

// Importing Database function
import mongoDB from './database/Database.js'
import adminSignUpRoute from './controllers/AdminSignUpRoute.js'
import adminLoginRoute from './controllers/AdminLoginRoute.js'
import adminCreateQuestion from './controllers/CreateQuestion.js'
import studentSignUpRoute from './controllers/StudentSignUpRoute.js'
import studentLoginRoute from './controllers/StudentLoginRoute.js'
import fetchQuestions from './controllers/FetchQuestionsBackend.js'
import postResult from './controllers/ResultRoute.js'

const app = express();

app.use(cors());
app.use(express.json());

//  Admin Related requests
app.use('/admin', adminSignUpRoute)
app.use('/admin', adminLoginRoute)
app.use('/admin', adminCreateQuestion)

// Student Related Requests
app.use('/student', studentSignUpRoute)
app.use('/student', studentLoginRoute)

// Other Requests
app.use('/quiz', fetchQuestions)
app.use('/quiz', postResult)

mongoDB();

app.listen(5000, ()=>{
    console.log("Listening on port 5000")
})