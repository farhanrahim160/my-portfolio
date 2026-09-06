import "dotenv/config";
import express from "express";
import cors from "cors";
import contactRoute from "./routes/contact.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

app.use("/api/contact", contactRoute);

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
