"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMovie = exports.getMovies = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _movieModel = _interopRequireDefault(require("../models/movieModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
var getMovies = (0, _expressAsyncHandler["default"])(function _callee(req, res) {
  var movies;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_movieModel["default"].find({}));

        case 2:
          movies = _context.sent;
          res.json(movies);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}); // @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin

exports.getMovies = getMovies;
var createMovie = (0, _expressAsyncHandler["default"])(function _callee2(req, res) {
  var _req$body, title, image, movie, createdMovie;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, title = _req$body.title, image = _req$body.image;
          movie = new _movieModel["default"]({
            title: title,
            image: image,
            user: req.user._id
          });
          _context2.next = 4;
          return regeneratorRuntime.awrap(movie.save());

        case 4:
          createdMovie = _context2.sent;
          res.status(201).json(createdMovie);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});
exports.createMovie = createMovie;