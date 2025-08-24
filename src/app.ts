import express from "express";
import { accounts } from "./accounts";

const app = express();
const PORT = 200;

app.get("/accounts", (req, res) => {
  res.status(PORT).json(accounts);
});

app.listen(PORT, () => {});
