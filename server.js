const express = require ('express');
const app = express();
const  mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors');


require('dotenv').config();

mongoose.set("strictQuery", false);

const PORT = 4000 || process.env.port

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_LINK)
.then(()=> console.log('connected to MONGODB'))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () =>{
    console.log(`port ${PORT} is working`)
})

//olessyamv
//pass: ysknEZFrhgmX8g8f
//ip:99.233.132.39

//mongodb+srv://olessyamv:ysknEZFrhgmX8g8f@cluster0.tpifcdz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//Replace <password> with the password for the olessyamv user. Ensure any option params are URL encoded.