const { kStringMaxLength } = require('buffer');
const express = require('express')
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const router = require('./routes/api')

const app = express()
const PORT = process.env.PORT || 5000


mongoose.connect(
  process.env.MONGODB_URI /*|| MONGODB_URI "mongodb://localhost/testDB"*/,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on('connected',()=>{
  console.log('Mongoose connected')
})

mongoose.connection.on("error", () => {
  console.log("Mongoose error!");
});

app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
}

app.use(morgan('tiny')) // http request logger
app.use("/", router);

app.listen(PORT, console.log(`Server started at port ${PORT}`));