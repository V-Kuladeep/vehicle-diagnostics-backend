import db from "../db/db";
import { LogData } from "../models/logModel";

export const storeLogs = async (entries: LogData[]) => {
  await db.read();
  db.data!.logs.push(...entries);
  await db.write();
};

export const getFilteredLogsService = async (
  query: any
): Promise<LogData[]> => {
  await db.read();
  const { vehicle, code, from, to } = query;

  return db.data!.logs.filter(entry => {
    const matchesVehicle = !vehicle || entry.vehicleId === vehicle;
    const matchesCode = !code || entry.code === code;
    const matchesFrom = !from || new Date(entry.timestamp) >= new Date(from);
    const matchesTo = !to || new Date(entry.timestamp) <= new Date(to);

    return matchesVehicle && matchesCode && matchesFrom && matchesTo;
  });
};
