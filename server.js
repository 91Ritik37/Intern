const express = require('express');
const dbConnection = require('./config/dbConnection');

const PORT = process.env.PORT | 5000;
const app = express();

dbConnection();

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));





app.listen(PORT, (req, res) => {
    console.log(`server running ${PORT}`)
})
