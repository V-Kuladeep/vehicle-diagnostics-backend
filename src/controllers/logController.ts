import { Request, Response } from "express";
import { isValidLogEntry, parseLogLine } from "../utils/logParser";
import { storeLogs, getFilteredLogsService } from "../services/logServices";
import { LogData } from "../models/logModel";

export const uploadLogs = async (req: Request, res: Response) => {
  const { logFile } = req.body;

  // Validate input
  if (typeof logFile !== "string") {
    return res.status(400).json({ message: "logFile must be a string." });
  }

  if (logFile.trim().length === 0) {
    return res.status(400).json({ message: "logFile cannot be empty." });
  }

  // Split the log file into lines
  const lines = logFile.split("\n");

  // Parse and validate each line
  const validEntries = lines
    .map(parseLogLine)
    .filter((entry): entry is LogData => entry !== null)
    .filter(entry => isValidLogEntry(entry));

  // If no valid entries, return an error
  if (validEntries.length === 0) {
    return res.status(400).json({ message: "No valid log entries found." });
  }

  // Save valid entries to DB
  await storeLogs(validEntries);
  res.status(201).json({ message: `${validEntries.length} logs stored.` });
};

export const getLogs = async (req: Request, res: Response) => {
  try {
    // Fetch log data based on the params in req
    const logs = await getFilteredLogsService(req.query);
    if (logs.length === 0) {
      return res.status(404).json({ message: "NOT FOUND." });
    }
    res.status(200).json({
      message: "Logs fetched successfully.",
      data: logs,
    });
  } catch (err) {
    res.status(500).json({ error: "Error fetching logs." });
  }
};
