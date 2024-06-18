require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.API_PORT || 3050;

app.use(
  bodyParser.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.listen(port, () => {
  console.log(`[Express] C.H.O.A.M. Terminal listening on port ${port}`);
});
