import dotenv from "dotenv";
dotenv.config();

export const SERVER_BASE_URL = "https://localhost:7001";
// export const SERVER_BASE_URL = "https://brewman.premiersystems.com";

// ADD YOUR API TOKEN HERE
export const API_TOKEN = process.env.API_TOKEN!;

// ADD YOUR TENANT ID HERE
export const TENANT_ID = process.env.TENANT_ID!;
