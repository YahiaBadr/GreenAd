// Import express
const express = require('express')
const nodemailer = require("nodemailer");
const cors = require('cors');
// Create the app
const app = express()
const sendMail = require('./mail')
// Use it with post
app.use(express.json())
app.use(cors());
// Default route (entry point)
app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

app.post('/sendMail',sendMail.sendMail);

// Define the port, get it from the enviroment (used in production)
// Or just use 3000
const port = process.env.PORT | 5000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
 