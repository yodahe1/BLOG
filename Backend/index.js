import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

async function main() {
    await mongoose.connect(process.env.MONGO);

    
}
main().then(()=>console.log("mongodb is connected")).catch(err => console.log(err));



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})