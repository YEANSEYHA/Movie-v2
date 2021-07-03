"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _movieController = require("../controllers/movieController.js");

var _authMiddleware = require("../middleware/authMiddleware.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route('/').get(_movieController.getMovies).post(_authMiddleware.protect, _authMiddleware.admin, _movieController.createMovie);
var _default = router;
exports["default"] = _default;