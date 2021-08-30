const express = require("express");
const cors = require("cors");
const path = require("path");

// const apiRoutes = require("./routes/apiRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use("/api", apiRoutes);
app.use(require("./routes/apiRoutes"));

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`));
