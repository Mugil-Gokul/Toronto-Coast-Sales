const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const truckRoutes = require("./routes/truck.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const settingsRoutes = require("./routes/settings.routes");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://toronto-coast-sales.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/trucks", truckRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/settings", settingsRoutes);

module.exports = app;
