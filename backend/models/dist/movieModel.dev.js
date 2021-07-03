"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var movieSchema = _mongoose["default"].Schema({
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    require: true,
    ref: 'User'
  },
  title: {
    type: String
  },
  image: {
    type: String
  }
}, {
  timestamps: true
});

var Movie = _mongoose["default"].model('Movie', movieSchema);

var _default = Movie;
exports["default"] = _default;