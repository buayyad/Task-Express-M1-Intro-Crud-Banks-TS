import express from "express";
import accountsRouter from "./apis/accounts/accounts.routes";
import connectDB from "./database";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/accounts", accountsRouter);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
