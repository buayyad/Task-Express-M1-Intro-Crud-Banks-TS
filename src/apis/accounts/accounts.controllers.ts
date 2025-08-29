import { Request, Response } from "express";
import Account from "../../models/Account";

export const getAccounts = async (req: Request, res: Response) => {
  try {
    const accounts = await Account.find().select("-createdAt -updatedAt");
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const createAccount = async (req: Request, res: Response) => {
  try {
    const { username } = req.body;
    const newAccount = await Account.create({ username, funds: 0 });
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteAccount = async (req: Request, res: Response) => {
  try {
    const { accountId } = req.params;
    const account = await Account.findById(accountId);

    if (!account) {
      return res.status(404).send("Account not found");
    }

    await account.deleteOne();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const updateAccount = async (req: Request, res: Response) => {
  try {
    const { accountId } = req.params;
    const account = await Account.findById(accountId);

    if (!account) {
      return res.status(404).send("Account not found");
    }

    await account.updateOne(req.body);
    return res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
