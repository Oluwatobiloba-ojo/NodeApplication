require('dotenv').config();
const Connectdb = require('./features/db/connectDB');
const express = require('express');
const port = process.env.PORT;
const app = express();
const cors = require("cors");
const database_Url = process.env.MONGO_URI;
const router = require('./features/router/router');
const notFound = require('./features/middleware/NotFound')

// use is a function use to interact with your middleware(function).
app.use(cors());
app.use(express.json());
app.use('/api/user', router);
app.use(notFound);


Connectdb(database_Url)
    .then(()=>{
        app.listen(port, ()=>{
            console.log(`app listening at port ${port}`);
        })
    }).catch((error)=>{
        console.log(error);
    })

