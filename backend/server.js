const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleWare");

const app = express();
app.use(express.json());

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API active");
});

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

// Error handlers
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("App running on port : ", PORT));
