const cookieParser = require("cookie-parser")
const compress = require('compression')
const cors = require("cors")
const helmet = require("helmet")
const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const userRoutes = require("./server/routes/User.js")
const contactRoutes = require("./server/routes/Contact.js")

app.get("/", (req, res) => {
    res.json({"message": "Welcome to DressStore application."})
})

app.get('/api/v1', (req, res) => {
    res.json({
        project: "Assignment 2",
        from: "COMP229"
    })
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

app.use("/", userRoutes)
app.use("/", contactRoutes)

module.exports = app;