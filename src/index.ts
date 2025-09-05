import express from "express";

const app = express();

app.use("/", async (req: any, res: any, next: any) => {
  res.status(202).json({ message: "no Products in inventory" });
});
app.listen(3000);
