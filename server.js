const app = require('./express.js')

const mongoose = require("mongoose")
const uri = process.env.MONGODB_URI
console.log(uri)
const config = require("./server/config/config.js")

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Database connected Successfully"))
.catch(err => console.error(`Connection Failed: ${err.message}`))

app.listen(config.port, () => {
    console.info(`Server started on the port ${config.port}`)
})