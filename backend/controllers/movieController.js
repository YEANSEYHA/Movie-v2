import asyncHandler from 'express-async-handler'
import Movie from '../models/movieModel.js'

// Routes for movie
/* app.post('/uploadmovie', asyncHandler(async(req,res)=>{
    const { title, image,} = req.body
    const createdMovie = await Movie.create({
      user: req.user._id,
      title,
      image,
      
    })
    res.status(201).json(createdMovie)
  }))
   */

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find({})
  
  res.json(movies)
})



// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createMovie = asyncHandler(async (req, res) => {
    const { title, image,} = req.body
    const movie = new Movie({

      title,
      image,
      user: req.user._id,
    })
    const createdMovie = await movie.save()
    res.status(201).json(createdMovie)
})
export {
    getMovies,
    createMovie,
  
  }