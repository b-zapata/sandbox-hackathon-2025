import pool from "../lib/db"; // Ensure this matches your actual database file path

async function testConnection() {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT NOW();");
    console.log(
      "Database connection successful! Current time:",
      result.rows[0].now
    );
    client.release();
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

testConnection();
