import { Router } from "express";
import {
  getAccounts,
  createAccount,
  deleteAccount,
  updateAccount,
} from "./accounts.controllers";

const router = Router();

router.get("/", getAccounts);
router.post("/", createAccount);
router.delete("/:accountId", deleteAccount);
router.put("/:accountId", updateAccount);

export default router;
