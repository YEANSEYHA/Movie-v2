import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import movieRoutes from './routes/movieRoutes.js'
import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import {notFound , errorHandler} from './middleware/errorMiddleware.js'
import cors from 'cors';
import path from 'path'
dotenv.config()
connectDB()

const app = express()
app.use(cors());
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('API is running')
})

app.use('/api/movies', movieRoutes)
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoutes);

const __dirname = path.resolve()
/* app.use('/uploads', express.static(path.join(__dirname,'/uploads'))) */

app.use('/api/movies', express.static(path.join(__dirname,'/api/movies')))



//Middleware
app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 3000
app.listen(
    PORT,
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT} `)
)