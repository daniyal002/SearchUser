const express = require('express')
const router = require("./routes/route");
const cors = require("cors")

const PORT = 3000;

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)
app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }

    console.log(`Сервер запущен на ${PORT} порту`)
})