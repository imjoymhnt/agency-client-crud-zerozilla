require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  process.env.DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("DB Connected")
);

const AgencyRoute = require("./routes/Agency");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    status: "Alive",
  });
});

app.use("/", AgencyRoute);

app.listen(process.env.PORT || 4000, () => console.log("App is running.."));
