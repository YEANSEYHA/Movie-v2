import asyncHandler from 'express-async-handler'
import { protect, admin } from '../middleware/authMiddleware.js'
import {getMovies, getMovieById, createMovie} from '../controller/movieController.js'

import Movie from '../models/movieModel.js'

import path from 'path'
import express from 'express'
import multer from 'multer'

import fs from 'fs'
const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

const __dirname = path.resolve()
var upload = multer({ storage: storage });
router.post('/', upload.single('image'), asyncHandler(async (req, res) => {
    

    const { title, genre, image} = req.body
    
    const createdMovie = await Movie.create({
        title,
        genre,
        image: {
          
			    data: fs.readFileSync(path.join(__dirname + /uploads/+ req.file.filename)),
			    contentType: 'image/png'
		}
      })
  
    
    res.status(201).json(createdMovie)
  })


)


router.route('/').get(getMovies)

router.route('/:id').get(getMovieById)




export default router