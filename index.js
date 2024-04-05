import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.json" assert { type: "json" };

import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import configuration from './configs/index.js';
import mongoose from 'mongoose';
import cors from 'cors';
import contactRouter from './routes/contact.routes.js';
import notFound from './middlewares/notFound.js';

app.use(express.json());
app.use(cors());
app.use('/contact',contactRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Use swaggerDocument instead of swagger

// app.use(notFound);
mongoose.connect(configuration.mongoURI)
.then(() => {
    app.listen(configuration.port, ()=> {
        console.log("listening on port "+configuration.port);
    });
})
.catch(err => {
    console.log(err);
});
app.use("/",(req,res)=>{
    res.send("welcome");
})