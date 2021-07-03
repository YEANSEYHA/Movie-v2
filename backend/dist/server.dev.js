"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _generateToken = _interopRequireDefault(require("./utils/generateToken.js"));

var _db = _interopRequireDefault(require("./config/db.js"));

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes.js"));

var _movieRoutes = _interopRequireDefault(require("./routes/movieRoutes.js"));

var _userModel = _interopRequireDefault(require("./models/userModel.js"));

var _movieModel = _interopRequireDefault(require("./models/movieModel.js"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-Handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

_dotenv["default"].config();

(0, _db["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
/* app.get('/dashboard', verifyToken, (req, res) => {
  jwt.verify(req.token, 'abc@123', err => {
    if (err) {
      res.sendStatus(401)
    } else {
      res.json({
        'message': 'Welcome to the the dashboard.'
      })
    }
  })
})
 */

app.use('/api/movies', _movieRoutes["default"]); // Register Routes for users

app.use('/api/users', _userRoutes["default"]);
var PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Server Running in ".concat(process.env.NODE_ENV, " mode on port ").concat(PORT, " ")));