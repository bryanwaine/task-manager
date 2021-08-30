const express = require('express')
require('./db/mongoose')
const userRouter = require('./routes/user.routes')
const taskRouter = require('./routes/task.routes')

// Create an Express app
const app = express()

// Specify port
const port = process.env.PORT

// Parse incoming requests with JSON payloads
app.use(express.json())

// User router
app.use(userRouter)

// Task router
app.use(taskRouter)

// Create Express server
app.listen(port, () => {
    console.log('Server is running on port ' + port)
})