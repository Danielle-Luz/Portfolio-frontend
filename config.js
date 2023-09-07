import { config } from "dotenv";

const isTestEnviroment = process.env.NODE_ENV === "test";
const testEnvFileName = ".env.test";
const productionEnvFileName = ".env";

const envFilePath = isTestEnviroment ? testEnvFileName : productionEnvFileName;

config({ path: envFilePath });
