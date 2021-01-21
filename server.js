 console.log("im here")
const express = require("express");
const cors = require('cors');


const app = express();
app.use(cors())
// Bodyparser middleware
const fileuploader = require("./routes/api/fileuploader");
 app.use("/api", fileuploader.router);    


// DB Config

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

// Routes

