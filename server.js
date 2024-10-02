const express = require("express");
const path = require("path");
const app = express();

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:<${process.env.DB_PASSWORD}>@cluster0.cpmud.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.APP_NAME}`

app.use("/", express.static(path.join(__dirname, "public")))

/* app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "index.html"));
}) */

app.get("/", (req, res) => {
    res.json({"message": "Welcome to DressStore application."})
})

app.listen(8080, () => {})