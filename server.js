//express ->for rest api
const express=require('express');
const colors=require('colors');
const dotenv=require('dotenv');
const connectDB=require("./config/db");
const morgan=require('morgan');
const userRoutes=require('./routes/userRoutes');
const cors=require('cors')
const CategoryRoutes= require('./routes/CategoryRoutes')
const productRoutes= require('./routes/productRoutes')


//configure env
dotenv.config();
connectDB();


const app=express();
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/v1/auth',userRoutes);
app.use('/api/v1/category',CategoryRoutes);
app.use('/api/v1/product',productRoutes);

//middleware

app.use(morgan('dev'))



//api call



app.get('/',(req,res)=>{
    res.send("<h1>welcome to my ecommerece app</h1>")
        // message:'welcome to e-commerce app'
        
});

const PORT=process.env.PORT||8080;

app.listen(PORT,()=>{
    console.log(
        `server running on port ${PORT}`
    );
})