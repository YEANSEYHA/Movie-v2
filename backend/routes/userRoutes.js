import express from 'express'
const router = express.Router()
import {
    registerUser,
  

} from '../controller/userController.js'




router.route('/').post(registerUser)



export default router