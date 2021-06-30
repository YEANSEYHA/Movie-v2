import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const movieSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
    
      ref: 'User',
    },
    title: {
      type: String,
   
    },
    genre: {
      type: String,
      
    },
      
    description:{
      type: String,
     
    },
    image:{
      type: String,
    }
    
   
  },
  {
    timestamps: true,
  }
)

const Movie = mongoose.model('Movie', movieSchema)

export default Movie