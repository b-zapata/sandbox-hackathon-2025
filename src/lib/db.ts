import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg; // Destructure Pool from the default import

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;

/*
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;
*/
