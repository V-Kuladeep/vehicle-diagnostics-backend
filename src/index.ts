import express from "express";
import logRouter from "./routes/logRouter";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "./../src/swagger.json";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use("/logs", logRouter);
import { initDB } from "./db/db";

initDB();

let options = {};
app.use(
  "/swagger",
  swaggerUI.serveFiles(swaggerDocument, options),
  swaggerUI.setup(swaggerDocument)
);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger UI available at http://localhost:${PORT}/swagger`);
});
