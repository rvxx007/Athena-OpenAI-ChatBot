import dotenv from "dotenv";
dotenv.config({path:".env"});
const envObj = {
    port: process.env.PORT
}

export default Object.freeze(envObj);