import app from "./app";
import { PORT } from "./config";

app.listen(PORT, () => {
  console.log(`🚀 API Gateway is running on http://localhost:${PORT}`);
});

app.use((req, res, next) => {
  console.log(`📩 Incoming request: ${req.method} ${req.originalUrl}`);
  next();
});
