import app from "./app.js";
import { connectDB } from "./src/connection/db.connection.js"
import 'dotenv/config';

const serverPort = process.env.PORT;

const serverInit = () => {
    connectDB();
    app.listen(serverPort);
    console.log('Server is running on %d', serverPort);
};

serverInit();