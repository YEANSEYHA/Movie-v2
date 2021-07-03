import mongoose from 'mongoose'


const movieSchema = mongoose.Schema(
    {
    user:{
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: 'User',
    },
    title:{
        type: String
    },
    image:{
        type: String
    }
},{
    timestamps: true,
}
)

const Movie = mongoose.model('Movie', movieSchema)
export default Movie