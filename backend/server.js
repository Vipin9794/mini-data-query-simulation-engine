const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const queryRoutes = require("./routes/queryRoutes");
//const db = require("../config/database"); 

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/auth", authRoutes);
app.use("/ai", queryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//   {
  //  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2aXBpbkBleGFtcGxlLmNvbSIsImlhdCI6MTc0MzM0MjA4MCwiZXhwIjoxNzQzMzQ1NjgwfQ.Tw_EsdA2c38LhE4ZqIAwj48m57d-Q5cTGkXCJnZZM60"
//}