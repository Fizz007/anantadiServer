const express = require('express')
const cors = require("cors");
const app = express();
const videoRouter = require('./routes/videoRouter')
app.use(cors());
app.use(express.json())

app.use('/videos', videoRouter);

const PORT = 5000;
require('./config/connectDB')
app.listen(PORT,()=> console.log(`server is running at ${PORT}`))


