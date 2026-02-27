import express from "express";
import cors from "cors";
import routes from "./src/routes/index.js";

const app = express();

// CORS configuration
app.use(
    cors({
        origin: "https://gurujihomes.vercel.app",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        allowedHeaders: "Content-Type,Authorization",
        credentials: true,
    })
)

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// All routes
app.use("/api/v1", routes);

export default app;