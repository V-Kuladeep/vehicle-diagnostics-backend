# Vehicle Diagnostics Backend

This is a Node.js + TypeScript backend application that parses and stores vehicle diagnostic logs. It provides RESTful APIs to query logs based on filters such as vehicle ID, error code, and date range.

---

## Tech Stack

- **Node.js + Express**
- **TypeScript**
- **LowDB** (file-based database)
- **MVC Architecture**
- **Swagger (Open API)**

---

## Project Structure

├── src/
│ ├── controllers/ # Handles HTTP logic
│ ├── models/ # TypeScript interfaces
│ ├── services/ # Business logic
│ ├── routes/ # API route definitions
│ ├── utils/ # Helpers like parsers/validators
│ ├── db/ # LowDB config
│ └── index.ts # Entry point
├── db.json # Local DB file
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

---

## Install Dependencies

npm i

# to save types also to declaration error after installation

npm i --save-dev @types/lirbrayname

# Start the serve

npm start

# Serve default URL

http://localhost:3000

# API END POINTS & LOGS

# Upload

# Post method

**/logs/upload**

# Sample body

{
"logFile": "[2025-07-24 14:21:08] [VEHICLE_ID:1234] [ERROR] [CODE:U0420] [Steering angle sensor malfunction]"
}

# Get Method

**/logs/**

# Optional Query Parameters

- **vehicle :filter by vehicle no**
- **code :filter by code**
- **from :filter by timestamp**
- **to :filter by timestamp**

# Sample Body

# GET (query parameters are optional you ned to provide atleast one parameter to get Data)

/logs?vehicle=1234&code=U0420&from=2025-07-01T00:00:00&to=2025-07-30T23:59:59

# License

**This project is licensed under the MIT License**

# Clone the Repo

```bash
git clone https://github.com/your-username/vehicle-diagnostics-backend.git
cd vehicle-diagnostics-backend
```
