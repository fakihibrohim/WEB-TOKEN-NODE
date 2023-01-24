import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import Router from "./Routes/index.js";

dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log("Database connented..");
} catch (error) {
    console.error(error);
}

app.use(cookieParser);
app.use(express.json());
app.use(Router);

app.listen(4000, () => console.log('Server running at port 4000'));