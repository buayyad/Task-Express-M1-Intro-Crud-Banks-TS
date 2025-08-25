import express from "express";
import { accounts } from "./accounts";

const app = express();
const PORT = 8000;
app.use(express.json());

app.get("/accounts", (req, res) => {
  res.status(200).json(accounts);
});

app.post("/accounts", (req, res) => {
  const { username } = req.body;

  const newAccount = {
    id: Date.now(),
    username,
    funds: 0,
  };

  accounts.push(newAccount);
  return res.status(201).json(newAccount);
});
app.delete("/accounts/:accountId", (req, res) => {
  const accountId = Number(req.params.accountId);
  const index = accounts.findIndex((acc) => acc.id === accountId);

  if (index === -1) {
    return res.status(404).send("Account not found");
  }

  accounts.splice(index, 1);
  return res.status(204).send();
});
app.put("/accounts/:accountId", (req, res) => {
  const accountId = Number(req.params.accountId);
  const index = accounts.findIndex((acc) => acc.id === accountId);

  if (index === -1) {
    return res.status(404).send("Account not found");
  }

  const { username, funds } = req.body;

  accounts[index] = {
    id: accountId,
    username,
    funds,
  };

  return res.status(200).json(accounts[index]);
});
app.listen(PORT, () => {
  console.log("Server is running");
});
