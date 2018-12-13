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

module.exports = {"name":"cuj","version":"1.0.16","description":"Common Use Js","main":"./dist/CUJs.js","scripts":{"dev":"webpack --config webpack.dev.config.js","start":"webpack-dev-server --config webpack.dev.config.js --color --progress"},"repository":{"type":"git","url":"git+https://github.com/xiqe/CUJs.git"},"keywords":["es6"],"author":"JerryLiang","license":"ISC","bugs":{"url":"https://github.com/xiqe/CUJs/issues"},"homepage":"https://github.com/xiqe/CUJs#readme","devDependencies":{"babel-core":"^6.26.3","babel-loader":"^7.1.4","babel-preset-es2015":"^6.24.1","babel-preset-stage-0":"^6.24.1","webpack":"^3.12.0","webpack-dev-server":"^2.11.2"}}

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
    },

    requestGetParamFormat: function requestGetParamFormat(obj) {
        var params = '';
        Object.keys(obj).forEach(function (key, i) {
            i == 0 ? params += "?" + key + "=" + obj[key] : params += "&" + key + "=" + obj[key];
        });
        return params;
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CountDown = function () {
    function CountDown(el, options) {
        _classCallCheck(this, CountDown);

        this.el = el;
        this.countDownSeconds = 0, this.doubleDigit = true, this.secondsOnly = false, this.callback = function () {
            return false;
        };
        for (var option in options) {
            this[option] = options[option];
        }
    }

    _createClass(CountDown, [{
        key: 'init',
        value: function init() {
            var _this = this;

            this._render(this.countDownSeconds);
            if (this.countDownSeconds == 0) {
                this.callback();
            } else {
                --this.countDownSeconds;
                setTimeout(function () {
                    _this.init();
                }, 1000);
            }
        }
    }, {
        key: '_render',
        value: function _render(remainSeconds) {
            var seconds = void 0;
            if (this.secondsOnly) {
                seconds = this._zero(remainSeconds);
            } else {
                seconds = this._zero(remainSeconds % 60);
            }
            var _ref = [this._zero(Math.floor(remainSeconds / 60) % 60), this._zero(Math.floor(remainSeconds / 60 / 60) % 24), this._zero(Math.floor(remainSeconds / 60 / 60) / 24)],
                minutes = _ref[0],
                hours = _ref[1],
                days = _ref[2];

            this._display({ days: days, seconds: seconds, minutes: minutes, hours: hours });
        }
    }, {
        key: '_zero',
        value: function _zero(num) {
            var n = parseInt(num, 10);
            if (n > 0 && this.doubleDigit) {
                if (n <= 9) {
                    n = "0" + n;
                }
                return String(n);
            } else if (n >= 0 && !this.doubleDigit) {
                return String(n);
            } else {
                return '00';
            }
        }
    }, {
        key: '_display',
        value: function _display(obj) {
            var _temp = void 0;
            if (this.secondsOnly) {
                _temp = obj.seconds;
            } else {
                _temp = obj.days + ':' + obj.hours + ':' + obj.minutes + ':' + obj.seconds;
            }
            this.el.innerHTML = _temp;
        }
    }]);

    return CountDown;
}();

exports.default = CountDown;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzZkOTYwZjZiNGQ4YmQyYTdmNjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NVSnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS5qc29uIiwid2VicGFjazovLy8uL3NyYy9GdW5jL1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnVuYy9EYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9GdW5jL0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9Qcm90by9DbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRnVuYy9jb3VudERvd24uanMiXSwibmFtZXMiOlsid2luZG93IiwiQ1VKcyIsIlZlcnNpb24iLCJ2ZXJzaW9uIiwiU3RyaW5nIiwiX3N0cmluZyIsIkRhdGUiLCJfZGF0ZSIsIkFycmF5IiwiX2FycmF5IiwiQ291bnREb3duIiwiX3BhY2thZ2UiLCJnZXRRdWVyeVN0cmluZyIsIm5hbWUiLCJyZWciLCJSZWdFeHAiLCJyIiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHIiLCJtYXRjaCIsInVuZXNjYXBlIiwibGltaXRUZXh0IiwidHh0IiwibGltaXQiLCJsZW5ndGgiLCJzbGljZSIsInJlcXVlc3RHZXRQYXJhbUZvcm1hdCIsIm9iaiIsInBhcmFtcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaSIsImZvcm1hdCIsImZtdCIsImRhdGUiLCJvIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsImdldE1pbGxpc2Vjb25kcyIsInRlc3QiLCJyZXBsYWNlIiwiJDEiLCJnZXRGdWxsWWVhciIsImsiLCJ1bmlxdWUiLCJhcnIiLCJyZXMiLCJmaWx0ZXIiLCJpdGVtIiwiaW5jbHVkZXMiLCJwdXNoIiwiSFRNTEVsZW1lbnQiLCJwcm90b3R5cGUiLCJoYXNDbGFzcyIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkQ2xhc3MiLCJfYXJyIiwic3BsaXQiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRvZ2dsZUNsYXNzIiwiZW5hYmxlIiwidG9nZ2xlIiwic2hvdyIsInN0eWxlIiwiZGlzcGxheSIsImhpZGUiLCJlbCIsIm9wdGlvbnMiLCJjb3VudERvd25TZWNvbmRzIiwiZG91YmxlRGlnaXQiLCJzZWNvbmRzT25seSIsImNhbGxiYWNrIiwib3B0aW9uIiwiX3JlbmRlciIsInNldFRpbWVvdXQiLCJpbml0IiwicmVtYWluU2Vjb25kcyIsInNlY29uZHMiLCJfemVybyIsIm1pbnV0ZXMiLCJob3VycyIsImRheXMiLCJfZGlzcGxheSIsIm51bSIsIm4iLCJwYXJzZUludCIsIl90ZW1wIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztBQUVBOzs7Ozs7QUFFQUEsT0FBT0MsSUFBUCxHQUFjRCxPQUFPQyxJQUFQLElBQWUsRUFBN0I7QUFDQUEsT0FBTztBQUNIQyxhQUFTQyxpQkFETjtBQUVIQyxZQUFRQyxnQkFGTDtBQUdIQyxVQUFNQyxjQUhIO0FBSUhD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VCxnQkFBSXNFLGNBQUo7QUFDQSxnQkFBRyxLQUFLaEIsV0FBUixFQUFvQjtBQUNoQmdCLHdCQUFRdEUsSUFBSTZELE9BQVo7QUFDSCxhQUZELE1BRU87QUFDSFMsd0JBQVF0RSxJQUFJaUUsSUFBSixHQUFXLEdBQVgsR0FBaUJqRSxJQUFJZ0UsS0FBckIsR0FBNkIsR0FBN0IsR0FBbUNoRSxJQUFJK0QsT0FBdkMsR0FBaUQsR0FBakQsR0FBdUQvRCxJQUFJNkQsT0FBbkU7QUFDSDtBQUNELGlCQUFLWCxFQUFMLENBQVFxQixTQUFSLEdBQW9CRCxLQUFwQjtBQUNIOzs7Ozs7a0JBSVV4RixTIiwiZmlsZSI6IkNVSnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjNmQ5NjBmNmI0ZDhiZDJhN2Y2OCIsImltcG9ydCB2ZXJzaW9uIGZyb20gJy4vVmVyc2lvbidcblxuaW1wb3J0IF9zdHJpbmcgZnJvbSAnLi9GdW5jL1N0cmluZydcbmltcG9ydCBfZGF0ZSBmcm9tICcuL0Z1bmMvRGF0ZSdcbmltcG9ydCBfYXJyYXkgZnJvbSAnLi9GdW5jL0FycmF5J1xuXG5pbXBvcnQgJy4vUHJvdG8vQ2xhc3MnXG5pbXBvcnQgJy4vUHJvdG8vRG9tJ1xuXG5pbXBvcnQgQ291bnREb3duIGZyb20gJy4vRnVuYy9jb3VudERvd24nXG5cbndpbmRvdy5DVUpzID0gd2luZG93LkNVSnMgfHwge307XG5DVUpzID0ge1xuICAgIFZlcnNpb246IHZlcnNpb24sXG4gICAgU3RyaW5nOiBfc3RyaW5nLFxuICAgIERhdGU6IF9kYXRlLFxuICAgIEFycmF5OiBfYXJyYXksXG4gICAgQ291bnREb3duOkNvdW50RG93blxufVxuXG5leHBvcnQgZGVmYXVsdCBDVUpzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NVSnMuanMiLCJpbXBvcnQgX3BhY2thZ2UgZnJvbSBcIi4uL3BhY2thZ2UuanNvblwiXG5cbmNvbnN0IHZlcnNpb24gPSBfcGFja2FnZS52ZXJzaW9uO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJzaW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1ZlcnNpb24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcIm5hbWVcIjpcImN1alwiLFwidmVyc2lvblwiOlwiMS4wLjE2XCIsXCJkZXNjcmlwdGlvblwiOlwiQ29tbW9uIFVzZSBKc1wiLFwibWFpblwiOlwiLi9kaXN0L0NVSnMuanNcIixcInNjcmlwdHNcIjp7XCJkZXZcIjpcIndlYnBhY2sgLS1jb25maWcgd2VicGFjay5kZXYuY29uZmlnLmpzXCIsXCJzdGFydFwiOlwid2VicGFjay1kZXYtc2VydmVyIC0tY29uZmlnIHdlYnBhY2suZGV2LmNvbmZpZy5qcyAtLWNvbG9yIC0tcHJvZ3Jlc3NcIn0sXCJyZXBvc2l0b3J5XCI6e1widHlwZVwiOlwiZ2l0XCIsXCJ1cmxcIjpcImdpdCtodHRwczovL2dpdGh1Yi5jb20veGlxZS9DVUpzLmdpdFwifSxcImtleXdvcmRzXCI6W1wiZXM2XCJdLFwiYXV0aG9yXCI6XCJKZXJyeUxpYW5nXCIsXCJsaWNlbnNlXCI6XCJJU0NcIixcImJ1Z3NcIjp7XCJ1cmxcIjpcImh0dHBzOi8vZ2l0aHViLmNvbS94aXFlL0NVSnMvaXNzdWVzXCJ9LFwiaG9tZXBhZ2VcIjpcImh0dHBzOi8vZ2l0aHViLmNvbS94aXFlL0NVSnMjcmVhZG1lXCIsXCJkZXZEZXBlbmRlbmNpZXNcIjp7XCJiYWJlbC1jb3JlXCI6XCJeNi4yNi4zXCIsXCJiYWJlbC1sb2FkZXJcIjpcIl43LjEuNFwiLFwiYmFiZWwtcHJlc2V0LWVzMjAxNVwiOlwiXjYuMjQuMVwiLFwiYmFiZWwtcHJlc2V0LXN0YWdlLTBcIjpcIl42LjI0LjFcIixcIndlYnBhY2tcIjpcIl4zLjEyLjBcIixcIndlYnBhY2stZGV2LXNlcnZlclwiOlwiXjIuMTEuMlwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2UuanNvblxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfc3RyaW5nID0ge1xuICAgIGdldFF1ZXJ5U3RyaW5nOiAobmFtZSkgPT4ge1xuICAgICAgICBsZXQgcmVnID0gbmV3IFJlZ0V4cChcIihefCYpXCIrIG5hbWUgK1wiPShbXiZdKikoJnwkKVwiKTtcbiAgICAgICAgbGV0IHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKS5tYXRjaChyZWcpO1xuICAgICAgICBpZihyIT1udWxsKXJldHVybiAgdW5lc2NhcGUoclsyXSk7IHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICBsaW1pdFRleHQ6ICh0eHQsbGltaXQpPT4ge1xuICAgICAgICBpZih0eHQubGVuZ3RoID4gbGltaXQpe1xuICAgICAgICAgICAgcmV0dXJuIHR4dC5zbGljZSgwLGxpbWl0KSArICcuLi4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHR4dDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZXF1ZXN0R2V0UGFyYW1Gb3JtYXQ6IChvYmopID0+IHtcbiAgICAgICAgbGV0IHBhcmFtcyA9ICcnO1xuICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24oa2V5LGkpe1xuICAgICAgICAgICAgKGk9PTApP3BhcmFtcyArPSBgPyR7a2V5fT0ke29ialtrZXldfWA6cGFyYW1zICs9IGAmJHtrZXl9PSR7b2JqW2tleV19YDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBfc3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Z1bmMvU3RyaW5nLmpzIiwiY29uc3QgX2RhdGUgPSB7XG4gICAgZm9ybWF0OiAoZm10LGRhdGUpPT57XG4gICAgICAgIGxldCBvID0ge1xuICAgICAgICAgICAgXCJNK1wiIDogZGF0ZS5nZXRNb250aCgpKzEsXG4gICAgICAgICAgICBcImQrXCIgOiBkYXRlLmdldERhdGUoKSxcbiAgICAgICAgICAgIFwiaCtcIiA6IGRhdGUuZ2V0SG91cnMoKSxcbiAgICAgICAgICAgIFwibStcIiA6IGRhdGUuZ2V0TWludXRlcygpLFxuICAgICAgICAgICAgXCJzK1wiIDogZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICAgICAgICBcInErXCIgOiBNYXRoLmZsb29yKChkYXRlLmdldE1vbnRoKCkrMykvMyksXG4gICAgICAgICAgICBcIlNcIiAgOiBkYXRlLmdldE1pbGxpc2Vjb25kcygpXG4gICAgICAgIH07XG4gICAgICAgIGlmKC8oeSspLy50ZXN0KGZtdCkpXG4gICAgICAgICAgICBmbXQ9Zm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoZGF0ZS5nZXRGdWxsWWVhcigpK1wiXCIpLnN1YnN0cig0IC0gUmVnRXhwLiQxLmxlbmd0aCkpO1xuICAgICAgICBmb3IodmFyIGsgaW4gbylcbiAgICAgICAgICAgIGlmKG5ldyBSZWdFeHAoXCIoXCIrIGsgK1wiKVwiKS50ZXN0KGZtdCkpXG4gICAgICAgICAgICAgICAgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoUmVnRXhwLiQxLmxlbmd0aD09MSkgPyAob1trXSkgOiAoKFwiMDBcIisgb1trXSkuc3Vic3RyKChcIlwiKyBvW2tdKS5sZW5ndGgpKSk7XG4gICAgICAgIHJldHVybiBmbXQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBfZGF0ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRnVuYy9EYXRlLmpzIiwiY29uc3QgX2FycmF5ID0ge1xuICAgIHVuaXF1ZTogKGFycik9PntcbiAgICAgICAgbGV0IHJlcyA9IFtdO1xuICAgICAgICByZXMgPSBhcnIuZmlsdGVyKChpdGVtKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5pbmNsdWRlcyhpdGVtKT8nJzpyZXMucHVzaChpdGVtKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IF9hcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9GdW5jL0FycmF5LmpzIiwiSFRNTEVsZW1lbnQucHJvdG90eXBlLmhhc0NsYXNzID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG59XG5cbkhUTUxFbGVtZW50LnByb3RvdHlwZS5hZGRDbGFzcyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgIGxldCBfYXJyID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgZm9yKGxldCBpPTA7aTxfYXJyLmxlbmd0aDtpKyspe1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoX2FycltpXSk7XG4gICAgfTtcbn1cblxuSFRNTEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gICAgbGV0IF9hcnIgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICBmb3IobGV0IGk9MDtpPF9hcnIubGVuZ3RoO2krKyl7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShfYXJyW2ldKTtcbiAgICB9O1xufVxuXG5IVE1MRWxlbWVudC5wcm90b3R5cGUudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbihjbGFzc05hbWUsIGVuYWJsZSkge1xuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUsIGVuYWJsZSk7XG59XG5IVE1MRWxlbWVudC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5IVE1MRWxlbWVudC5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUHJvdG8vQ2xhc3MuanMiLCJjbGFzcyBDb3VudERvd24ge1xuICAgIGNvbnN0cnVjdG9yKGVsLG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLmNvdW50RG93blNlY29uZHMgPSAwLFxuICAgICAgICB0aGlzLmRvdWJsZURpZ2l0ID0gdHJ1ZSxcbiAgICAgICAgdGhpcy5zZWNvbmRzT25seSA9IGZhbHNlLFxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIG9wdGlvbiBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzW29wdGlvbl0gPSBvcHRpb25zW29wdGlvbl07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMuX3JlbmRlcih0aGlzLmNvdW50RG93blNlY29uZHMpO1xuICAgICAgICBpZih0aGlzLmNvdW50RG93blNlY29uZHMgPT0gMCl7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAtLXRoaXMuY291bnREb3duU2Vjb25kcztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9Pnt0aGlzLmluaXQoKX0sMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVuZGVyKHJlbWFpblNlY29uZHMpe1xuICAgICAgICBsZXQgc2Vjb25kcztcbiAgICAgICAgaWYodGhpcy5zZWNvbmRzT25seSl7XG4gICAgICAgICAgICBzZWNvbmRzID0gdGhpcy5femVybyhyZW1haW5TZWNvbmRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlY29uZHMgPSB0aGlzLl96ZXJvKHJlbWFpblNlY29uZHMgJSA2MCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IFttaW51dGVzLGhvdXJzLGRheXNdID0gW1xuICAgICAgICAgICAgdGhpcy5femVybyhNYXRoLmZsb29yKHJlbWFpblNlY29uZHMgLyA2MCkgJSA2MCksXG4gICAgICAgICAgICB0aGlzLl96ZXJvKE1hdGguZmxvb3IocmVtYWluU2Vjb25kcyAvIDYwIC8gNjApICUgMjQpLFxuICAgICAgICAgICAgdGhpcy5femVybyhNYXRoLmZsb29yKHJlbWFpblNlY29uZHMgLyA2MCAvIDYwKSAvIDI0KVxuICAgICAgICBdXG4gICAgICAgIHRoaXMuX2Rpc3BsYXkoe2RheXM6IGRheXMsIHNlY29uZHM6IHNlY29uZHMsIG1pbnV0ZXM6IG1pbnV0ZXMsIGhvdXJzOiBob3Vyc30pO1xuICAgIH1cblxuICAgIF96ZXJvKG51bSl7XG4gICAgICAgIGxldCBuID0gcGFyc2VJbnQobnVtLDEwKTtcbiAgICAgICAgaWYobj4wICYmIHRoaXMuZG91YmxlRGlnaXQpe1xuICAgICAgICAgICAgaWYgKG4gPD0gOSkge1xuICAgICAgICAgICAgICAgIG4gPSBcIjBcIiArIG47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKG4pO1xuICAgICAgICB9IGVsc2UgaWYgKG4+PTAgJiYgIXRoaXMuZG91YmxlRGlnaXQpe1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnMDAnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2Rpc3BsYXkob2JqKXtcbiAgICAgICAgbGV0IF90ZW1wO1xuICAgICAgICBpZih0aGlzLnNlY29uZHNPbmx5KXtcbiAgICAgICAgICAgIF90ZW1wID0gb2JqLnNlY29uZHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGVtcCA9IG9iai5kYXlzICsgJzonICsgb2JqLmhvdXJzICsgJzonICsgb2JqLm1pbnV0ZXMgKyAnOicgKyBvYmouc2Vjb25kcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IF90ZW1wO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudERvd25cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRnVuYy9jb3VudERvd24uanMiXSwic291cmNlUm9vdCI6IiJ9