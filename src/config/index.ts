import dotenv from "dotenv";
dotenv.config();


const { PORT, AUTH_SERVICE_URL, PRODUCT_SERVICE_URL, CHANNEL_SERVICE_URL } = process.env

const AUTH_URL = AUTH_SERVICE_URL || ""
const PRODUCT_URL = PRODUCT_SERVICE_URL || ""
const CHANNEL_URL = CHANNEL_SERVICE_URL || ""
export { PORT, AUTH_URL, PRODUCT_URL, CHANNEL_URL }