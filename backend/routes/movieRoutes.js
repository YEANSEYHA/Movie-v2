import express from 'express'
const router = express.Router()
import {
    getMovies,
    createMovie,

  } from '../controllers/movieController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getMovies).post(protect, admin, createMovie)

export default router