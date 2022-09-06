
const  express = require('express');
require('dotenv').config();
const connectDB= require('./config/db.js')
const router =require('./routes/travelRoutes')

//connect to database
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use('/api/travel', router)


const port= process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});