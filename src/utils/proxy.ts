import { Request, Response } from "express";
import { createProxyMiddleware, Options } from "http-proxy-middleware";
import { ClientRequest } from "http";
import { IncomingMessage, ServerResponse } from "http";

export const proxyRequest = (target: string) => {
  console.log(`📡 Setting up proxy for: ${target}`);  return createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: { "^/api": "" },
    onProxyReq: (
      proxyReq: ClientRequest,
      req: Request,
      res: Response // ✅ Added Response type
    ) => {
      console.log("🔥 Proxying request:", req.method, req.url);
      if (req.headers.authorization) {
        proxyReq.setHeader("authorization", req.headers.authorization);
      }
    },
    onError: (
      err: Error,
      req: Request,
      res: Response
    ) => {
      console.error("❌ Proxy Error:", err.message);
      res.status(500).json({ message: "Microservice Unavailable" });
    },
    // timeout: 5000,
  } as Options<IncomingMessage, ServerResponse<IncomingMessage>>); // ✅ Explicitly specify type
};
