import { Router } from "express";
import { proxyRequest } from "../utils/proxy";
import { PRODUCT_URL } from "../config";

const router = Router();

router.use("/", proxyRequest(PRODUCT_URL));

export default router;
