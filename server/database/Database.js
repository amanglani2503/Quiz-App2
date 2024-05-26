import mongoose from "mongoose";
const mongoURI = "mongodb+srv://ambermanglani143143:AmberMang8871@cluster0.usb08sy.mongodb.net/Quiz?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(mongoURI); 

        mongoose.connection.on('connected', async () => {
            console.log('Mongoose connected to MongoDB');

            try {
                console.log("Connected");
                resolve();
            } catch (error) {
                console.error('Error fetching food items:', error);
                reject(error);
            }
        });
    });
};


export default mongoDB;