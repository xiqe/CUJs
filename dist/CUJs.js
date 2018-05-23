/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Version = __webpack_require__(2);

var _Version2 = _interopRequireDefault(_Version);

var _String = __webpack_require__(4);

var _String2 = _interopRequireDefault(_String);

var _Date = __webpack_require__(5);

var _Date2 = _interopRequireDefault(_Date);

var _Array = __webpack_require__(6);

var _Array2 = _interopRequireDefault(_Array);

__webpack_require__(7);

__webpack_require__(8);

var _countDown = __webpack_require__(9);

var _countDown2 = _interopRequireDefault(_countDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.CUJs = window.CUJs || {};
var _ref = [_Version2.default, {
    String: _String2.default,
    Date: _Date2.default,
    Array: _Array2.default,
    CountDown: _countDown2.default
}];
CUJs.Version = _ref[0];
CUJs.Func = _ref[1];
CUJs.Proto = _ref[2];
exports.default = CUJs;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _package = __webpack_require__(3);

var version = _package.version;

exports.default = version;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {"name":"cuj","version":"1.0.14","description":"Common Use Js","main":"./dist/CUJs.js","scripts":{"dev":"webpack --config webpack.dev.config.js","start":"webpack-dev-server --config webpack.dev.config.js --color --progress"},"repository":{"type":"git","url":"git+https://github.com/xiqe/CUJs.git"},"keywords":["es6"],"author":"JerryLiang","license":"ISC","bugs":{"url":"https://github.com/xiqe/CUJs/issues"},"homepage":"https://github.com/xiqe/CUJs#readme","devDependencies":{"babel-core":"^6.26.3","babel-loader":"^7.1.4","babel-preset-es2015":"^6.24.1","babel-preset-stage-0":"^6.24.1","webpack":"^3.12.0","webpack-dev-server":"^2.11.2"}}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _string = {
    getQueryString: function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);return null;
    },

    limitText: function limitText(txt, limit) {
        if (txt.length > limit) {
            return txt.slice(0, limit) + '...';
        } else {
            return txt;
        }
    }
};

exports.default = _string;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _date = {
    format: function format(fmt, date) {
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }return fmt;
    }
};

exports.default = _date;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _array = {};

exports.default = _array;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


HTMLElement.prototype.hasClass = function (className) {
    return this.classList.contains(className);
};

HTMLElement.prototype.addClass = function (className) {
    var _arr = className.split(' ');
    for (var i = 0; i < _arr.length; i++) {
        this.classList.add(_arr[i]);
    };
};

HTMLElement.prototype.removeClass = function (className) {
    var _arr = className.split(' ');
    for (var i = 0; i < _arr.length; i++) {
        this.classList.remove(_arr[i]);
    };
};

HTMLElement.prototype.toggleClass = function (className, enable) {
    this.classList.toggle(className, enable);
};
HTMLElement.prototype.show = function () {
    this.style.display = 'block';
};
HTMLElement.prototype.hide = function () {
    this.style.display = 'none';
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CountDown = function CountDown() {
    _classCallCheck(this, CountDown);
};

exports.default = CountDown;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODM5ZDc3MjBlYmE4NDMxMmQzOWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NVSnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS5qc29uIiwid2VicGFjazovLy8uL3NyYy9GdW5jL1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnVuYy9EYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9GdW5jL0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9Qcm90by9DbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnVuYy9jb3VudERvd24uanMiXSwibmFtZXMiOlsid2luZG93IiwiQ1VKcyIsInZlcnNpb24iLCJTdHJpbmciLCJfc3RyaW5nIiwiRGF0ZSIsIl9kYXRlIiwiQXJyYXkiLCJfYXJyYXkiLCJDb3VudERvd24iLCJWZXJzaW9uIiwiRnVuYyIsIlByb3RvIiwiX3BhY2thZ2UiLCJyZXF1aXJlIiwiZ2V0UXVlcnlTdHJpbmciLCJuYW1lIiwicmVnIiwiUmVnRXhwIiwiciIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyIiwibWF0Y2giLCJ1bmVzY2FwZSIsImxpbWl0VGV4dCIsInR4dCIsImxpbWl0IiwibGVuZ3RoIiwic2xpY2UiLCJmb3JtYXQiLCJmbXQiLCJkYXRlIiwibyIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJnZXRNaWxsaXNlY29uZHMiLCJ0ZXN0IiwicmVwbGFjZSIsIiQxIiwiZ2V0RnVsbFllYXIiLCJrIiwiSFRNTEVsZW1lbnQiLCJwcm90b3R5cGUiLCJoYXNDbGFzcyIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkQ2xhc3MiLCJfYXJyIiwic3BsaXQiLCJpIiwiYWRkIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmUiLCJ0b2dnbGVDbGFzcyIsImVuYWJsZSIsInRvZ2dsZSIsInNob3ciLCJzdHlsZSIsImRpc3BsYXkiLCJoaWRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztBQUVBOzs7Ozs7QUFFQUEsT0FBT0MsSUFBUCxHQUFjRCxPQUFPQyxJQUFQLElBQWUsRUFBN0I7V0FDc0MsQ0FDbENDLGlCQURrQyxFQUVsQztBQUNJQyxZQUFRQyxnQkFEWjtBQUVJQyxVQUFNQyxjQUZWO0FBR0lDLFdBQU9DLGVBSFg7QUFJSUMsZUFBVUE7QUFKZCxDQUZrQyxDO0FBQXJDUixLQUFLUyxPO0FBQVFULEtBQUtVLEk7QUFBS1YsS0FBS1csSztrQkFVZFgsSTs7Ozs7Ozs7Ozs7O0FDdEJmLElBQUlZLFdBQVcsbUJBQUFDLENBQVEsQ0FBUixDQUFmOztBQUVBLElBQU1aLFVBQVVXLFNBQVNYLE9BQXpCOztrQkFFZUEsTzs7Ozs7O0FDSmYsa0JBQWtCLGlHQUFpRyw4SEFBOEgsZUFBZSwwREFBMEQsa0VBQWtFLDRDQUE0QyxxRUFBcUUsb0s7Ozs7Ozs7Ozs7OztBQ0E3ZSxJQUFNRSxVQUFVO0FBQ1pXLG9CQUFnQix3QkFBQ0MsSUFBRCxFQUFVO0FBQ3RCLFlBQUlDLE1BQU0sSUFBSUMs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QVYsQ0FBZ0IsR0FBaEIsQ0FBWDtBQUNBLFNBQUksSUFBSUMsSUFBRSxDQUFWLEVBQVlBLElBQUVGLEtBQUsxQixNQUFuQixFQUEwQjRCLEdBQTFCLEVBQThCO0FBQzFCLGFBQUtMLFNBQUwsQ0FBZVEsTUFBZixDQUFzQkwsS0FBS0UsQ0FBTCxDQUF0QjtBQUNIO0FBQ0osQ0FMRDs7QUFPQVQsWUFBWUMsU0FBWixDQUFzQlksV0FBdEIsR0FBb0MsVUFBU1YsU0FBVCxFQUFvQlcsTUFBcEIsRUFBNEI7QUFDNUQsU0FBS1YsU0FBTCxDQUFlVyxNQUFmLENBQXNCWixTQUF0QixFQUFpQ1csTUFBakM7QUFDSCxDQUZEO0FBR0FkLFlBQVlDLFNBQVosQ0FBc0JlLElBQXRCLEdBQTZCLFlBQVc7QUFDcEMsU0FBS0MsS0FBTCxDQUFXQyxPQUFYLEdBQXFCLE9BQXJCO0FBQ0gsQ0FGRDtBQUdBbEIsWUFBWUMsU0FBWixDQUFzQmtCLElBQXRCLEdBQTZCLFlBQVc7QUFDcEMsU0FBS0YsS0FBTCxDQUFXQyxPQUFYLEdBQXFCLE1BQXJCO0FBQ0gsQ0FGRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDeEJNeEQsUyxHQUNGLHFCQUFhO0FBQUE7QUFFWixDOztrQkFLVUEsUyIsImZpbGUiOiJDVUpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODM5ZDc3MjBlYmE4NDMxMmQzOWMiLCJpbXBvcnQgdmVyc2lvbiBmcm9tICcuL1ZlcnNpb24nXG5cbmltcG9ydCBfc3RyaW5nIGZyb20gJy4vRnVuYy9TdHJpbmcnXG5pbXBvcnQgX2RhdGUgZnJvbSAnLi9GdW5jL0RhdGUnXG5pbXBvcnQgX2FycmF5IGZyb20gJy4vRnVuYy9BcnJheSdcblxuaW1wb3J0ICcuL1Byb3RvL0NsYXNzJ1xuaW1wb3J0ICcuL1Byb3RvL0RvbSdcblxuaW1wb3J0IENvdW50RG93biBmcm9tICcuL0Z1bmMvY291bnREb3duJ1xuXG53aW5kb3cuQ1VKcyA9IHdpbmRvdy5DVUpzIHx8IHt9O1xuW0NVSnMuVmVyc2lvbixDVUpzLkZ1bmMsQ1VKcy5Qcm90b10gPSBbXG4gICAgdmVyc2lvbixcbiAgICB7XG4gICAgICAgIFN0cmluZzogX3N0cmluZyxcbiAgICAgICAgRGF0ZTogX2RhdGUsXG4gICAgICAgIEFycmF5OiBfYXJyYXksXG4gICAgICAgIENvdW50RG93bjpDb3VudERvd25cbiAgICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IENVSnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ1VKcy5qcyIsImxldCBfcGFja2FnZSA9IHJlcXVpcmUoXCIuLi9wYWNrYWdlLmpzb25cIik7XG5cbmNvbnN0IHZlcnNpb24gPSBfcGFja2FnZS52ZXJzaW9uO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJzaW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1ZlcnNpb24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcIm5hbWVcIjpcImN1alwiLFwidmVyc2lvblwiOlwiMS4wLjE0XCIsXCJkZXNjcmlwdGlvblwiOlwiQ29tbW9uIFVzZSBKc1wiLFwibWFpblwiOlwiLi9kaXN0L0NVSnMuanNcIixcInNjcmlwdHNcIjp7XCJkZXZcIjpcIndlYnBhY2sgLS1jb25maWcgd2VicGFjay5kZXYuY29uZmlnLmpzXCIsXCJzdGFydFwiOlwid2VicGFjay1kZXYtc2VydmVyIC0tY29uZmlnIHdlYnBhY2suZGV2LmNvbmZpZy5qcyAtLWNvbG9yIC0tcHJvZ3Jlc3NcIn0sXCJyZXBvc2l0b3J5XCI6e1widHlwZVwiOlwiZ2l0XCIsXCJ1cmxcIjpcImdpdCtodHRwczovL2dpdGh1Yi5jb20veGlxZS9DVUpzLmdpdFwifSxcImtleXdvcmRzXCI6W1wiZXM2XCJdLFwiYXV0aG9yXCI6XCJKZXJyeUxpYW5nXCIsXCJsaWNlbnNlXCI6XCJJU0NcIixcImJ1Z3NcIjp7XCJ1cmxcIjpcImh0dHBzOi8vZ2l0aHViLmNvbS94aXFlL0NVSnMvaXNzdWVzXCJ9LFwiaG9tZXBhZ2VcIjpcImh0dHBzOi8vZ2l0aHViLmNvbS94aXFlL0NVSnMjcmVhZG1lXCIsXCJkZXZEZXBlbmRlbmNpZXNcIjp7XCJiYWJlbC1jb3JlXCI6XCJeNi4yNi4zXCIsXCJiYWJlbC1sb2FkZXJcIjpcIl43LjEuNFwiLFwiYmFiZWwtcHJlc2V0LWVzMjAxNVwiOlwiXjYuMjQuMVwiLFwiYmFiZWwtcHJlc2V0LXN0YWdlLTBcIjpcIl42LjI0LjFcIixcIndlYnBhY2tcIjpcIl4zLjEyLjBcIixcIndlYnBhY2stZGV2LXNlcnZlclwiOlwiXjIuMTEuMlwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2UuanNvblxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfc3RyaW5nID0ge1xuICAgIGdldFF1ZXJ5U3RyaW5nOiAobmFtZSkgPT4ge1xuICAgICAgICBsZXQgcmVnID0gbmV3IFJlZ0V4cChcIihefCYpXCIrIG5hbWUgK1wiPShbXiZdKikoJnwkKVwiKTtcbiAgICAgICAgbGV0IHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKS5tYXRjaChyZWcpO1xuICAgICAgICBpZihyIT1udWxsKXJldHVybiAgdW5lc2NhcGUoclsyXSk7IHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICBsaW1pdFRleHQ6ICh0eHQsbGltaXQpPT4ge1xuICAgICAgICBpZih0eHQubGVuZ3RoID4gbGltaXQpe1xuICAgICAgICAgICAgcmV0dXJuIHR4dC5zbGljZSgwLGxpbWl0KSArICcuLi4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHR4dDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgX3N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9GdW5jL1N0cmluZy5qcyIsImNvbnN0IF9kYXRlID0ge1xuICAgIGZvcm1hdDogKGZtdCxkYXRlKT0+e1xuICAgICAgICBsZXQgbyA9IHtcbiAgICAgICAgICAgIFwiTStcIiA6IGRhdGUuZ2V0TW9udGgoKSsxLFxuICAgICAgICAgICAgXCJkK1wiIDogZGF0ZS5nZXREYXRlKCksXG4gICAgICAgICAgICBcImgrXCIgOiBkYXRlLmdldEhvdXJzKCksXG4gICAgICAgICAgICBcIm0rXCIgOiBkYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICAgIFwicytcIiA6IGRhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgICAgICAgXCJxK1wiIDogTWF0aC5mbG9vcigoZGF0ZS5nZXRNb250aCgpKzMpLzMpLFxuICAgICAgICAgICAgXCJTXCIgIDogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKVxuICAgICAgICB9O1xuICAgICAgICBpZigvKHkrKS8udGVzdChmbXQpKVxuICAgICAgICAgICAgZm10PWZtdC5yZXBsYWNlKFJlZ0V4cC4kMSwgKGRhdGUuZ2V0RnVsbFllYXIoKStcIlwiKS5zdWJzdHIoNCAtIFJlZ0V4cC4kMS5sZW5ndGgpKTtcbiAgICAgICAgZm9yKHZhciBrIGluIG8pXG4gICAgICAgICAgICBpZihuZXcgUmVnRXhwKFwiKFwiKyBrICtcIilcIikudGVzdChmbXQpKVxuICAgICAgICAgICAgICAgIGZtdCA9IGZtdC5yZXBsYWNlKFJlZ0V4cC4kMSwgKFJlZ0V4cC4kMS5sZW5ndGg9PTEpID8gKG9ba10pIDogKChcIjAwXCIrIG9ba10pLnN1YnN0cigoXCJcIisgb1trXSkubGVuZ3RoKSkpO1xuICAgICAgICByZXR1cm4gZm10O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgX2RhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRnVuYy9EYXRlLmpzIiwiY29uc3QgX2FycmF5ID0ge1xufVxuXG5leHBvcnQgZGVmYXVsdCBfYXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRnVuYy9BcnJheS5qcyIsIkhUTUxFbGVtZW50LnByb3RvdHlwZS5oYXNDbGFzcyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xufVxuXG5IVE1MRWxlbWVudC5wcm90b3R5cGUuYWRkQ2xhc3MgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICBsZXQgX2FyciA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgIGZvcihsZXQgaT0wO2k8X2Fyci5sZW5ndGg7aSsrKXtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKF9hcnJbaV0pO1xuICAgIH07XG59XG5cbkhUTUxFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgIGxldCBfYXJyID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgZm9yKGxldCBpPTA7aTxfYXJyLmxlbmd0aDtpKyspe1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoX2FycltpXSk7XG4gICAgfTtcbn1cblxuSFRNTEVsZW1lbnQucHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBlbmFibGUpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lLCBlbmFibGUpO1xufVxuSFRNTEVsZW1lbnQucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuSFRNTEVsZW1lbnQucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Byb3RvL0NsYXNzLmpzIiwiY2xhc3MgQ291bnREb3duIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnREb3duXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Z1bmMvY291bnREb3duLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==