import { LogData } from './../models/logModel';

const regex =
  /^\[(.*?)\] \[VEHICLE_ID:(\d+)\] \[(.*?)\] \[CODE:(.*?)\] \[(.*?)\]$/;

export const parseLogLine = (line: string): LogData | null => {
  const match = line.match(regex);
  if (!match) return null;

  const [, timestamp, vehicleId, level, code, message] = match;
  return { timestamp, vehicleId, level, code, message };
};
export const isValidLogEntry = (entry: LogData): boolean => {
  return (
    typeof entry.timestamp === "string" &&
    typeof entry.vehicleId === "string" &&
    typeof entry.level === "string" &&
    typeof entry.code === "string" &&
    typeof entry.message === "string"
  );
};