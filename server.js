const path = require('path')
const envPath = path.join(__dirname, '.env')

require('dotenv').config({path: envPath})
console.log(envPath, process.env.PORT)

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
//const bodyParser = require('body-parser')

//const authRouter = require("./routes/api/auth");
//const contactsRouter = require("./routes/api/contacts");
const app = express();
const port = process.env.PORT
const userRouter = require('./routes/users/users')
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/', userRouter)
app.use('/users', userRouter)
app.use('/register', userRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
