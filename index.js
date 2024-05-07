const express = require("express");
const mongoDb = require("./Config/Connection");
const User = require("./models/userSchema");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const shippingRoutes = require("./routes/shippingRoutes");

mongoDb();

const app = express();
app.use(
  cors({
    origin: "https://fliperpritam.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Reuested-With,Content-Type,Accept"
  );
  next();
});
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/shipping", shippingRoutes);

app.get("/", (req, res) => {
  console.log("hello from backend");
  res.send("hello from backend ");
});
app.listen(5000, () => {
  console.log("listing to port 5000");
});
