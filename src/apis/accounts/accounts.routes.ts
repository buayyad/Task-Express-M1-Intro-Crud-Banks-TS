import { Router } from "express";
import { accounts } from "../../accounts";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json(accounts);
});

router.post("/", (req, res) => {
  const { username } = req.body;
  const newAccount = {
    id: Date.now(),
    username,
    funds: 0,
  };
  accounts.push(newAccount);
  return res.status(201).json(newAccount);
});

router.delete("/:accountId", (req, res) => {
  const accountId = Number(req.params.accountId);
  const index = accounts.findIndex((acc) => acc.id === accountId);

  if (index === -1) {
    return res.status(404).send("Account not found");
  }

  accounts.splice(index, 1);
  return res.status(204).send();
});

router.put("/:accountId", (req, res) => {
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

export default router;
