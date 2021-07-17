const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require("cookie-parser")
const cors = require("cors")

dotenv.config()

// set up server
const app = express()
const PORT = process.env.PORT || 5000

// middleware
app.use(express.json({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000"
    ],
    credentials: true,
  })
)

// connect to mongoDB
mongoose.connect(process.env.MDB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (err) => {
      if (err) return console.error(err)
      console.log("Connected to MongoDB")
    }   
  )
  // set up routes
app.use("/auth", require("./routes/auth.router"))
app.use("/links", require("./routes/analytics.router"))
app.use("/create", require("./routes/link.router"))
app.use('/', require('./routes/redirect.router'))


app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));