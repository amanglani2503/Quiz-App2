import express from "express";
import mongoose from "mongoose";
import ResultSchema from "../models/ResultSchema.js";

const router = express.Router();

router.post("/result", async (req, res) => {
    try {
        const { username, result, attempts, points, achived } = req.body;

        const newResult = new ResultSchema({
            username,
            result,
            attempts,
            points,
            achived
        });

        const savedResult = await newResult.save();
        res.status(201).json(savedResult);
    }
    catch(error){
        console.log("Error Signing Up: ", error);
        res.status(500).json({message : "Internal Server Error"});
    }
});

export default router;