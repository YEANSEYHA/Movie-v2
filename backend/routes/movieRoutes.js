import express from 'express'
const router = express.Router()
import {
    
    createMovie,

  } from '../controllers/movieController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(protect, admin, createMovie)

export default router