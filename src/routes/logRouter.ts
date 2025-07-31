import { Router} from "express";
import { getLogs, uploadLogs } from "../controllers/logController";

const router = Router();

router.post("/upload", uploadLogs);
router.get("/", getLogs);

export default router;
