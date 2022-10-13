const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const cors = require("cors");

const app = express();
dotenv.config();
let port;
if (process.env.NODE_ENV === "development") {
  port = process.env.PORT;
} else {
  port = 8800;
}

// middlewares
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((error) => {
    console.log(error);
  });

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", productRoutes);

app.listen(port, console.log(`Server running on port ${port}`));
