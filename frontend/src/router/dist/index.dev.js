"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _Movies = _interopRequireDefault(require("../views/Movies.vue"));

var _UserProfile = _interopRequireDefault(require("../views/UserProfile.vue"));

var _Dashboard = _interopRequireDefault(require("../views/Dashboard.vue"));

var _Login = _interopRequireDefault(require("../views/Auth/Login.vue"));

var _Signup = _interopRequireDefault(require("../views/Auth/Signup.vue"));

var _UploadMovie = _interopRequireDefault(require("../views/UploadMovie.vue"));

var _MovieDetail = _interopRequireDefault(require("../views/MovieDetail.vue"));

var _ListMovies = _interopRequireDefault(require("../views/ListMovies.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  name: 'Movies',
  component: _Movies["default"]
}, {
  path: '/login',
  name: 'Login',
  component: _Login["default"]
}, {
  path: '/signup',
  name: 'Signup',
  component: _Signup["default"]
}, {
  path: '/user',
  name: 'User',
  component: _UserProfile["default"]
}, {
  path: '/dashboard',
  name: 'Dashboard',
  component: _Dashboard["default"],
  meta: {
    requiresAuth: true
  }
}, {
  path: '/uploadmovie',
  name: 'UploadMovie',
  component: _UploadMovie["default"]
}, {
  path: '/moviedetail',
  name: 'MovieDetail',
  component: _MovieDetail["default"]
}, {
  path: '/listmovies',
  name: 'ListMovies',
  component: _ListMovies["default"]
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(process.env.BASE_URL),
  routes: routes
});
router.beforeEach(function (to, from, next) {
  var loggedIn = localStorage.getItem('user');

  if (to.matched.some(function (record) {
    return record.meta.requiresAuth;
  }) && !loggedIn) {
    next('/');
  }

  next();
});
var _default = router;
exports["default"] = _default;