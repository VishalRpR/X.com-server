import dotenv from "dotenv";
dotenv.config();

const DB_URI = process.env.DB_URI;
const JWT_SECRET = process.env.JWT_SECRET;

export { DB_URI, JWT_SECRET };
