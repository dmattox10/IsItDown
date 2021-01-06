const express = require("express")
const connectDB = require("./config/db")
const cors = require('cors')
const helmet = require('helmet')
const CronJob = require('cron').CronJob

const runner = require('./tools/runner')
const statsRouter = require('./routes/stats')
const subRouter = require('./routes/submissions')

const app = express()
connectDB()

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use('/stats', statsRouter)
app.use('/v1/submit', subRouter)

app.get('/', (req, res) => {
    res.send('<h2>“The code is more what you’d call ‘guidelines’ than actual rules.” – Hector Barbossa</h2>')
})

// Every hour on the hour
new CronJob('0 0 * * * *', () => {
    runner.testEntries()
}, null, true, 'America/New_York')

const PORT = 5757 || process.env.PORT
app.listen(PORT, () => console.log(`'Ello ${PORT}.`))