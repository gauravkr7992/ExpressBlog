import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import blogRoute from "./routes/blog.route.js";

import cors from "cors";
const app = express();
dotenv.config();

const port = process.env.PORT;
const MONOGO_URL = process.env.MONOG_URI;

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
// const allowedOrigins = ['http://localhost:5173', 'http://another-origin.com'];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true,
// }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// DB Code
try {
  mongoose.connect(MONOGO_URL);
  console.log("Conntected to MonogDB");
} catch (error) {
  console.log(error);
}

// defining routes
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);
// Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
