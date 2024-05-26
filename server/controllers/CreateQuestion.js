import { Router } from 'express'
import QuestionSchema from '../models/QuestionSchema.js';

const router = Router();

router.post('/createquestion', async (req, res) => {
    try {
        const newQuestionSet = new QuestionSchema({
            questions : req.body.questions,
            answers : req.body.answers
        });

        const savedQuestions = await newQuestionSet.save();
        res.status(201).json(savedQuestions)

    }catch( error ){
        res.status(500).json({msg : 'Error at CreateQuestion.js'})
    }
})

export default router;