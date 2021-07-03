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
// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createMovie = asyncHandler(async (req, res) => {
    const { title, image,} = req.body
    const movie = new Movie({
      
      user: req.user._id,
      title,
      image,
    })
    const createdMovie = await movie.save()
    res.status(201).json(createdMovie)
})
export {

    createMovie,
  
  }