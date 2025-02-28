import { Router } from "express";
import { proxyRequest } from "../utils/proxy";
import { AUTH_URL } from "../config";

const router = Router();

router.use("/", proxyRequest(AUTH_URL));

export default router;
