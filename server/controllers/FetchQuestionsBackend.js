import express from 'express';
const router = express.Router();
import QuestionSchema from '../models/QuestionSchema.js';

// Route to fetch questions
router.get('/questions', async (req, res) => {
  try {

    const questionsData = await QuestionSchema.find();
    const [{questions, answers}] = questionsData;
    res.json({questions, answers}); 

  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ message: 'Internal server error' }); // Send an error response if something goes wrong
  }
});

export default router;
