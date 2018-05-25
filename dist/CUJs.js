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
CUJs = {
    Version: _Version2.default,
    String: _String2.default,
    Date: _Date2.default,
    Array: _Array2.default,
    CountDown: _countDown2.default
};

exports.default = CUJs;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _package2 = __webpack_require__(3);

var _package3 = _interopRequireDefault(_package2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = _package3.default.version;

exports.default = version;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {"name":"cuj","version":"1.0.15","description":"Common Use Js","main":"./dist/CUJs.js","scripts":{"dev":"webpack --config webpack.dev.config.js","start":"webpack-dev-server --config webpack.dev.config.js --color --progress"},"repository":{"type":"git","url":"git+https://github.com/xiqe/CUJs.git"},"keywords":["es6"],"author":"JerryLiang","license":"ISC","bugs":{"url":"https://github.com/xiqe/CUJs/issues"},"homepage":"https://github.com/xiqe/CUJs#readme","devDependencies":{"babel-core":"^6.26.3","babel-loader":"^7.1.4","babel-preset-es2015":"^6.24.1","babel-preset-stage-0":"^6.24.1","webpack":"^3.12.0","webpack-dev-server":"^2.11.2"}}

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
var _array = {
    unique: function unique(arr) {
        var res = [];
        res = arr.filter(function (item) {
            return res.includes(item) ? '' : res.push(item);
        });
        return res;
    }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGFkOTNmNjk3ODE3NDc1ZTlmYTciLCJ3ZWJwYWNrOi8vLy4vc3JjL0NVSnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS5qc29uIiwid2VicGFjazovLy8uL3NyYy9GdW5jL1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnVuYy9EYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9GdW5jL0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9Qcm90by9DbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnVuYy9jb3VudERvd24uanMiXSwibmFtZXMiOlsid2luZG93IiwiQ1VKcyIsIlZlcnNpb24iLCJ2ZXJzaW9uIiwiU3RyaW5nIiwiX3N0cmluZyIsIkRhdGUiLCJfZGF0ZSIsIkFycmF5IiwiX2FycmF5IiwiQ291bnREb3duIiwiX3BhY2thZ2UiLCJnZXRRdWVyeVN0cmluZyIsIm5hbWUiLCJyZWciLCJSZWdFeHAiLCJyIiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHIiLCJtYXRjaCIsInVuZXNjYXBlIiwibGltaXRUZXh0IiwidHh0IiwibGltaXQiLCJsZW5ndGgiLCJzbGljZSIsImZvcm1hdCIsImZtdCIsImRhdGUiLCJvIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsImdldE1pbGxpc2Vjb25kcyIsInRlc3QiLCJyZXBsYWNlIiwiJDEiLCJnZXRGdWxsWWVhciIsImsiLCJ1bmlxdWUiLCJhcnIiLCJyZXMiLCJmaWx0ZXIiLCJpdGVtIiwiaW5jbHVkZXMiLCJwdXNoIiwiSFRNTEVsZW1lbnQiLCJwcm90b3R5cGUiLCJoYXNDbGFzcyIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkQ2xhc3MiLCJfYXJyIiwic3BsaXQiLCJpIiwiYWRkIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmUiLCJ0b2dnbGVDbGFzcyIsImVuYWJsZSIsInRvZ2dsZSIsInNob3ciLCJzdHlsZSIsImRpc3BsYXkiLCJoaWRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztBQUVBOzs7Ozs7QUFFQUEsT0FBT0MsSUFBUCxHQUFjRCxPQUFPQyxJQUFQLElBQWUsRUFBN0I7QUFDQUEsT0FBTztBQUNIQyxhQUFTQyxpQkFETjtBQUVIQyxZQUFRQyxnQkFGTDtBQUdIQyxVQUFNQyxjQUhIO0FBSUhDLFdBQU9DLGVBSko7QUFLSEMsZUFBVUE7QUFMUCxDQUFQOztrQkFRZVQsSTs7Ozs7Ozs7Ozs7OztBQ3BCZjs7Ozs7O0FBRUEsSUFBTUUsVUFBVVEsa0JBQVNSLE9BQXpCOztrQkFFZUEsTzs7Ozs7O0FDSmYsa0JBQWtCLGlHQUFpRyw4SEFBOEgsZUFBZSwwREFBMEQsa0VBQWtFLDRDQUE0QyxxRUFBcUUsb0s7Ozs7Ozs7Ozs7OztBQ0E3ZSxJQUFNRSxVQUFVO0FBQ1pPLG9CQUFnQix3QkFBQ0MsSUFBRCxFQUFVO0FBQ3RCLFlBQUlDLE1BQU0sSUFBSUMsTUFBSixDQUFXLFVBQVNGLElBQVQsR0FBZSxlQUExQixDQUFWO0FB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QUFLakMsTUFBbkIsRUFBMEJtQyxHQUExQixFQUE4QjtBQUMxQixhQUFLTCxTQUFMLENBQWVNLEdBQWYsQ0FBbUJILEtBQUtFLENBQUwsQ0FBbkI7QUFDSDtBQUNKLENBTEQ7O0FBT0FULFlBQVlDLFNBQVosQ0FBc0JVLFdBQXRCLEdBQW9DLFVBQVNSLFNBQVQsRUFBb0I7QUFDcEQsUUFBSUksT0FBT0osVUFBVUssS0FBVixDQUFnQixHQUFoQixDQUFYO0FBQ0EsU0FBSSxJQUFJQyxJQUFFLENBQVYsRUFBWUEsSUFBRUYsS0FBS2pDLE1BQW5CLEVBQTBCbUMsR0FBMUIsRUFBOEI7QUFDMUIsYUFBS0wsU0FBTCxDQUFlUSxNQUFmLENBQXNCTCxLQUFLRSxDQUFMLENBQXRCO0FBQ0g7QUFDSixDQUxEOztBQU9BVCxZQUFZQyxTQUFaLENBQXNCWSxXQUF0QixHQUFvQyxVQUFTVixTQUFULEVBQW9CVyxNQUFwQixFQUE0QjtBQUM1RCxTQUFLVixTQUFMLENBQWVXLE1BQWYsQ0FBc0JaLFNBQXRCLEVBQWlDVyxNQUFqQztBQUNILENBRkQ7QUFHQWQsWUFBWUMsU0FBWixDQUFzQmUsSUFBdEIsR0FBNkIsWUFBVztBQUNwQyxTQUFLQyxLQUFMLENBQVdDLE9BQVgsR0FBcUIsT0FBckI7QUFDSCxDQUZEO0FBR0FsQixZQUFZQyxTQUFaLENBQXNCa0IsSUFBdEIsR0FBNkIsWUFBVztBQUNwQyxTQUFLRixLQUFMLENBQVdDLE9BQVgsR0FBcUIsTUFBckI7QUFDSCxDQUZELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN4Qk0zRCxTLEdBQ0YscUJBQWE7QUFBQTtBQUVaLEM7O2tCQUtVQSxTIiwiZmlsZSI6IkNVSnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwYWQ5M2Y2OTc4MTc0NzVlOWZhNyIsImltcG9ydCB2ZXJzaW9uIGZyb20gJy4vVmVyc2lvbidcblxuaW1wb3J0IF9zdHJpbmcgZnJvbSAnLi9GdW5jL1N0cmluZydcbmltcG9ydCBfZGF0ZSBmcm9tICcuL0Z1bmMvRGF0ZSdcbmltcG9ydCBfYXJyYXkgZnJvbSAnLi9GdW5jL0FycmF5J1xuXG5pbXBvcnQgJy4vUHJvdG8vQ2xhc3MnXG5pbXBvcnQgJy4vUHJvdG8vRG9tJ1xuXG5pbXBvcnQgQ291bnREb3duIGZyb20gJy4vRnVuYy9jb3VudERvd24nXG5cbndpbmRvdy5DVUpzID0gd2luZG93LkNVSnMgfHwge307XG5DVUpzID0ge1xuICAgIFZlcnNpb246IHZlcnNpb24sXG4gICAgU3RyaW5nOiBfc3RyaW5nLFxuICAgIERhdGU6IF9kYXRlLFxuICAgIEFycmF5OiBfYXJyYXksXG4gICAgQ291bnREb3duOkNvdW50RG93blxufVxuXG5leHBvcnQgZGVmYXVsdCBDVUpzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NVSnMuanMiLCJpbXBvcnQgX3BhY2thZ2UgZnJvbSBcIi4uL3BhY2thZ2UuanNvblwiXG5cbmNvbnN0IHZlcnNpb24gPSBfcGFja2FnZS52ZXJzaW9uO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJzaW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1ZlcnNpb24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcIm5hbWVcIjpcImN1alwiLFwidmVyc2lvblwiOlwiMS4wLjE1XCIsXCJkZXNjcmlwdGlvblwiOlwiQ29tbW9uIFVzZSBKc1wiLFwibWFpblwiOlwiLi9kaXN0L0NVSnMuanNcIixcInNjcmlwdHNcIjp7XCJkZXZcIjpcIndlYnBhY2sgLS1jb25maWcgd2VicGFjay5kZXYuY29uZmlnLmpzXCIsXCJzdGFydFwiOlwid2VicGFjay1kZXYtc2VydmVyIC0tY29uZmlnIHdlYnBhY2suZGV2LmNvbmZpZy5qcyAtLWNvbG9yIC0tcHJvZ3Jlc3NcIn0sXCJyZXBvc2l0b3J5XCI6e1widHlwZVwiOlwiZ2l0XCIsXCJ1cmxcIjpcImdpdCtodHRwczovL2dpdGh1Yi5jb20veGlxZS9DVUpzLmdpdFwifSxcImtleXdvcmRzXCI6W1wiZXM2XCJdLFwiYXV0aG9yXCI6XCJKZXJyeUxpYW5nXCIsXCJsaWNlbnNlXCI6XCJJU0NcIixcImJ1Z3NcIjp7XCJ1cmxcIjpcImh0dHBzOi8vZ2l0aHViLmNvbS94aXFlL0NVSnMvaXNzdWVzXCJ9LFwiaG9tZXBhZ2VcIjpcImh0dHBzOi8vZ2l0aHViLmNvbS94aXFlL0NVSnMjcmVhZG1lXCIsXCJkZXZEZXBlbmRlbmNpZXNcIjp7XCJiYWJlbC1jb3JlXCI6XCJeNi4yNi4zXCIsXCJiYWJlbC1sb2FkZXJcIjpcIl43LjEuNFwiLFwiYmFiZWwtcHJlc2V0LWVzMjAxNVwiOlwiXjYuMjQuMVwiLFwiYmFiZWwtcHJlc2V0LXN0YWdlLTBcIjpcIl42LjI0LjFcIixcIndlYnBhY2tcIjpcIl4zLjEyLjBcIixcIndlYnBhY2stZGV2LXNlcnZlclwiOlwiXjIuMTEuMlwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2UuanNvblxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfc3RyaW5nID0ge1xuICAgIGdldFF1ZXJ5U3RyaW5nOiAobmFtZSkgPT4ge1xuICAgICAgICBsZXQgcmVnID0gbmV3IFJlZ0V4cChcIihefCYpXCIrIG5hbWUgK1wiPShbXiZdKikoJnwkKVwiKTtcbiAgICAgICAgbGV0IHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKS5tYXRjaChyZWcpO1xuICAgICAgICBpZihyIT1udWxsKXJldHVybiAgdW5lc2NhcGUoclsyXSk7IHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICBsaW1pdFRleHQ6ICh0eHQsbGltaXQpPT4ge1xuICAgICAgICBpZih0eHQubGVuZ3RoID4gbGltaXQpe1xuICAgICAgICAgICAgcmV0dXJuIHR4dC5zbGljZSgwLGxpbWl0KSArICcuLi4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHR4dDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgX3N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9GdW5jL1N0cmluZy5qcyIsImNvbnN0IF9kYXRlID0ge1xuICAgIGZvcm1hdDogKGZtdCxkYXRlKT0+e1xuICAgICAgICBsZXQgbyA9IHtcbiAgICAgICAgICAgIFwiTStcIiA6IGRhdGUuZ2V0TW9udGgoKSsxLFxuICAgICAgICAgICAgXCJkK1wiIDogZGF0ZS5nZXREYXRlKCksXG4gICAgICAgICAgICBcImgrXCIgOiBkYXRlLmdldEhvdXJzKCksXG4gICAgICAgICAgICBcIm0rXCIgOiBkYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICAgIFwicytcIiA6IGRhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgICAgICAgXCJxK1wiIDogTWF0aC5mbG9vcigoZGF0ZS5nZXRNb250aCgpKzMpLzMpLFxuICAgICAgICAgICAgXCJTXCIgIDogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKVxuICAgICAgICB9O1xuICAgICAgICBpZigvKHkrKS8udGVzdChmbXQpKVxuICAgICAgICAgICAgZm10PWZtdC5yZXBsYWNlKFJlZ0V4cC4kMSwgKGRhdGUuZ2V0RnVsbFllYXIoKStcIlwiKS5zdWJzdHIoNCAtIFJlZ0V4cC4kMS5sZW5ndGgpKTtcbiAgICAgICAgZm9yKHZhciBrIGluIG8pXG4gICAgICAgICAgICBpZihuZXcgUmVnRXhwKFwiKFwiKyBrICtcIilcIikudGVzdChmbXQpKVxuICAgICAgICAgICAgICAgIGZtdCA9IGZtdC5yZXBsYWNlKFJlZ0V4cC4kMSwgKFJlZ0V4cC4kMS5sZW5ndGg9PTEpID8gKG9ba10pIDogKChcIjAwXCIrIG9ba10pLnN1YnN0cigoXCJcIisgb1trXSkubGVuZ3RoKSkpO1xuICAgICAgICByZXR1cm4gZm10O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgX2RhdGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Z1bmMvRGF0ZS5qcyIsImNvbnN0IF9hcnJheSA9IHtcbiAgICB1bmlxdWU6IChhcnIpPT57XG4gICAgICAgIGxldCByZXMgPSBbXTtcbiAgICAgICAgcmVzID0gYXJyLmZpbHRlcigoaXRlbSk9PntcbiAgICAgICAgICAgIHJldHVybiByZXMuaW5jbHVkZXMoaXRlbSk/Jyc6cmVzLnB1c2goaXRlbSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBfYXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRnVuYy9BcnJheS5qcyIsIkhUTUxFbGVtZW50LnByb3RvdHlwZS5oYXNDbGFzcyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xufVxuXG5IVE1MRWxlbWVudC5wcm90b3R5cGUuYWRkQ2xhc3MgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICBsZXQgX2FyciA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgIGZvcihsZXQgaT0wO2k8X2Fyci5sZW5ndGg7aSsrKXtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKF9hcnJbaV0pO1xuICAgIH07XG59XG5cbkhUTUxFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgIGxldCBfYXJyID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgZm9yKGxldCBpPTA7aTxfYXJyLmxlbmd0aDtpKyspe1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoX2FycltpXSk7XG4gICAgfTtcbn1cblxuSFRNTEVsZW1lbnQucHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBlbmFibGUpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lLCBlbmFibGUpO1xufVxuSFRNTEVsZW1lbnQucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuSFRNTEVsZW1lbnQucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Byb3RvL0NsYXNzLmpzIiwiY2xhc3MgQ291bnREb3duIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnREb3duXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Z1bmMvY291bnREb3duLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==