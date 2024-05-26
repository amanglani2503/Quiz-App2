import express from "express";
import mongoose from "mongoose";
import {body, validationResult} from 'express-validator';
import bcrypt from 'bcrypt';
import StudentSignUp from "../models/StudentSignUp.js";

const router = express.Router();

router.post("/signup", [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 8 }),
    body('cnfPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Passwords do not match');
        }
        return true;
    })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new StudentSignUp({
            email : req.body.email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch(error){
        console.log("Error Signing Up: ", error);
        res.status(500).json({message : "Internal Server Error"});
    }
});

export default router;