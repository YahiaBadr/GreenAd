// Import express
const express = require('express')
const cors = require('cors');
// Create the app
const app = express()
const sendMail = require('./mail')
const path = require("path");
// Use it with post
app.use(express.json())
app.use(cors());
// Default route (entry point)

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    //Homepage
    try{
    app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")));
    }
    catch(err){
        console.log(err)
        app.get("/", (req, res) => res.send(`${err}`));
    }
  } else {
    app.get("/", (req, res) => res.send("Homepage"));
  }
// app.get('/', (req, res) => {
    // res.send(`<h1>Welcome</h1>`)
// })

app.post('/api/sendMail',sendMail.sendMail);

// Define the port, get it from the enviroment (used in production)
// Or just use 3000
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
 