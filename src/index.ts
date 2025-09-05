import express from "express";
import pool from "./database";
const app = express();

app.get("/", async (req: any, res: any) => {
  try {
    const [rows] = await pool.query("SELECT NOW() AS now");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});
app.listen(3000);
