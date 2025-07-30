import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { join } from "path";
import { LogData } from "../models/logModel";

type Schema = { logs: LogData[] };

const file = join(__dirname, "../../db.json");
const adapter = new JSONFile<Schema>(file);
const db = new Low<Schema>(adapter,{ logs: [] });

export const initDB = async () => {
  await db.read();
  db.data ||= { logs: [] };
  await db.write();
};

export default db;
