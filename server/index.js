const express = require("express");
const app = express();
const api = require("./api/index.js");
const port = process.env.PORT || 4000;
const path = require("path");



app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, "..", "build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.use("/api", api);

app.listen(port, ()=>{
    console.log("server started on port " + port);
});