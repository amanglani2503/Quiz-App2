import express from 'express';
import AdminSignUp from '../models/AdminSignup.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

const JWT_SECRET = "HelloEveryOne"

router.post('/login', async (req, res) => {
    const { email, password} = req.body;
    try{
        const user = await AdminSignUp.findOne({email})
        console.log("USer searching")
        if(!user){
            return res.status(400).json({ message : 'Invalid E-mail'})
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch){
            return res.status(400).json({message: "Wrong Password"})
        }

        const token = jwt.sign({ id : user._id}, JWT_SECRET, {expiresIn: '1h'});
        res.status(201).json({token});
    }
    catch(error){
        console.error("Error Logging In:", error);
        res.status(500).json({message: "Hola ka gola. Internal server Error"});
    }
})

export default router;