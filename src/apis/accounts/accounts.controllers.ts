import { Request, Response } from "express";
import { accounts } from "../../accounts";

export const getAccounts = (req: Request, res: Response) => {
  res.status(200).json(accounts);
};

export const createAccount = (req: Request, res: Response) => {
  const { username } = req.body;
  const newAccount = {
    id: Date.now(),
    username,
    funds: 0,
  };
  accounts.push(newAccount);
  res.status(201).json(newAccount);
};

export const deleteAccount = (req: Request, res: Response) => {
  const accountId = Number(req.params.accountId);
  const index = accounts.findIndex((acc) => acc.id === accountId);

  if (index === -1) {
    return res.status(404).send("Account not found");
  }

  accounts.splice(index, 1);
  res.status(204).send();
};

export const updateAccount = (req: Request, res: Response) => {
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

  res.status(200).json(accounts[index]);
};
