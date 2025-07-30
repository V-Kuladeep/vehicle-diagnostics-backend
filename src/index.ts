import express from "express";
import logRouter from "./routes/logRouter";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/logs", logRouter);
import { initDB } from "./db/db";

initDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
