"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _vuex = require("vuex");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Create vuex store
var store = (0, _vuex.createStore)({
  state: {
    uploadingStatus: 'notLoading',
    user: null
  },
  mutations: {
    SET_USER_DATA: function SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem('user', JSON.stringify(userData));
      _axios["default"].defaults.headers.common['Authorization'] = "Bearer ".concat(userData.token);
    },
    CLEAR_USER_DATA: function CLEAR_USER_DATA() {
      localStorage.removeItem('user');
      location.reload();
    },
    SET_MOVIE_DATA: function SET_MOVIE_DATA(state, movieData) {
      state.movieData = movieData;
    }
  },
  actions: {
    register: function register(_ref, credentials) {
      var commit = _ref.commit;
      return _axios["default"].post('http://localhost:3000/api/users', credentials).then(function (_ref2) {
        var data = _ref2.data;
        commit('SET_USER_DATA', data);
        console.log('user data is: ', data);
      });
    },
    login: function login(_ref3, credentials) {
      var commit = _ref3.commit;
      return _axios["default"].post('http://localhost:3000/api/users/login', credentials).then(function (_ref4) {
        var data = _ref4.data;
        commit('SET_USER_DATA', data);
        console.log('user data is: ', data);
      });
    },
    logout: function logout(_ref5) {
      var commit = _ref5.commit;
      commit('CLEAR_USER_DATA');
    },
    uploadMovie: function uploadMovie(_ref6, movieData) {
      var commit = _ref6.commit;
      return _axios["default"].post('http://localhost:3000/api/movies', movieData).then(function (_ref7) {
        var movieData = _ref7.movieData;
        commit('SET_MOVIE_DATA', movieData);
        console.log('Movie data is: ', movieData);
      });
    }
  },
  getters: {
    // use to hide login nav
    loggedIn: function loggedIn(state) {
      return !!state.user;
    }
  }
});
var app = (0, _vue.createApp)(_App["default"]);
app.use(_router["default"]);
app.use(store);
app.mount('#app');
/* createApp(App).use(router).mount('#app') */