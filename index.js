const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const EndpointAsh = require('./ashRoutes/AshtonRoutes')

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
const url = 'mongodb+srv://ashtonmapunga0912:7lWtdJlgUzpF65wB@clusterhvjhgvjh.44w6jcf.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url, {})

const Con = mongoose.connection
Con.on('open', () => {
    console.log('The database has been connected')
})






const PORT = 4545
app.use('/', EndpointAsh)



app.listen(PORT, () => console.log(`The server is running on port ${PORT}`))