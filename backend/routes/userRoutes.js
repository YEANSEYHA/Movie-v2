import express from 'express'
import jwt from 'jsonwebtoken'
const router = express.Router()
import cors from 'cors'
import bodyParser from 'body-parser'
import fs from 'fs'

router.get('/', (req, res) => {
    res.json({
      message: 'Welcome to the API.'
    })
  })

router.post('/register', (req, res) => {
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




export default router