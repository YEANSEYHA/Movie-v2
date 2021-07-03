import dotenv from 'dotenv'
import express from 'express'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import bodyParser from 'body-parser'
import generateToken from './utils/generateToken.js'
import connectDB from './config/db.js'
dotenv.config()
connectDB()
import userRoutes from './routes/userRoutes.js'
import movieRoutes from './routes/movieRoutes.js'

import User from './models/userModel.js'
import Movie from './models/movieModel.js'
import asyncHandler from 'express-async-Handler'

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false}));





/* app.get('/dashboard', verifyToken, (req, res) => {
  jwt.verify(req.token, 'abc@123', err => {
    if (err) {
      res.sendStatus(401)
    } else {
      res.json({
        'message': 'Welcome to the the dashboard.'
      })
    }
  })
})
 */

 


// Register Routes for users
app.use('/api/users', userRoutes)
app.use('/api/movies', movieRoutes)










const PORT = process.env.PORT || 3000
app.listen(
    PORT,
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT} `)
)