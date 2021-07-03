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

import User from './models/userModel.js'
import asyncHandler from 'express-async-Handler'

const app = express()

app.use(cors())
app.use(bodyParser.json())



app.get('/dashboard', verifyToken, (req, res) => {
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
// MIDDLEWARE
function verifyToken (req, res, next) {
  const bearerHeader = req.headers['authorization']

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    res.sendStatus(401)
  }
}








/* app.post('/register', (req, res) => {
  if (req.body) {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
      // In a production app, you'll want to encrypt the password
    }

    const data = JSON.stringify(user, null, 2)
    var dbUserEmail = require('./db/user.json').email

    if (dbUserEmail === req.body.email) {
      res.sendStatus(400)
    } else {
      fs.writeFile('./db/user.json', data, err => {
        if (err) {
          console.log(err + data)
        } else {
          const token = jwt.sign({ user }, 'the_secret_key')
          // In a production app, you'll want the secret key to be an environment variable
          res.json({
            token,
            email: user.email,
            name: user.name
          })
        }
      })
    }
  } else {
    res.sendStatus(400)
  }
})
 */
app.post('/login', asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
}) ) 




// Register Routes
app.use('/api/users', userRoutes);





const PORT = process.env.PORT || 3000
app.listen(
    PORT,
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT} `)
)