import dotenv from "dotenv";
import path from "path";

dotenv.config({path: path.join(__dirname, "../../.env")});

interface DB_Interface { 
    host: string;
    user: string;
    // name: string;
    password: string;
    database: string;
}

interface JWT_Interface {
    JWT_ACCESS_TOKEN_SECRET: string;
    JWT_REFRESH_TOKEN_SECRET: string;

}




// Mongo DB values
const { MONGO_DB_HOST, MONGO_DB_USER,  MONGO_DB_PASSWORD, MONGO_DB_NAME, NODE_ENV} = process.env;
if (!MONGO_DB_HOST || !MONGO_DB_USER || !MONGO_DB_PASSWORD || !MONGO_DB_NAME) {
    throw new Error("Mongo database connection values are not defined");
}

export const DB_mongo:DB_Interface = {
    host: NODE_ENV === 'production' ? "mongodb://host.docker.internal:27017": MONGO_DB_HOST,
    user:  MONGO_DB_USER,
    password: MONGO_DB_PASSWORD,
    database: MONGO_DB_NAME,

}

// JWT secrets
const {JWT_ACCESS_TOKEN_SECRET, JWT_REFRESH_TOKEN_SECRET} = process.env;
if (!JWT_ACCESS_TOKEN_SECRET || !JWT_REFRESH_TOKEN_SECRET) {
    throw new Error("JWT secrets not defined");
}

export const secrets:JWT_Interface = {
    JWT_ACCESS_TOKEN_SECRET,
    JWT_REFRESH_TOKEN_SECRET
}