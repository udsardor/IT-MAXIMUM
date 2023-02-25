require('dotenv').config()

const path = require('path')
const cors = require('cors')
const express = require('express')

const mailer = require('./mailer')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({limit: '50mb', extended: true}))
app.use(express.static(path.resolve(__dirname, 'frontend')));
app.use(cors())

app.use('/api/mail', require('./routes/mail.routes'))

app.use('*', async (req, res) => {
    try {
        return res.sendFile(path.join(__dirname, 'frontend', 'index.html'), (err) => {
            console.log(err)
        })
    }catch (e) {
        console.log(e)
    }
})

async function start () {
    try {

        app.listen(PORT, () => {
            console.log(`Server has been started in port ${PORT}`)
        })

    }catch (e) {
      console.log(e)
      process.exit(0)
    }
}

start()