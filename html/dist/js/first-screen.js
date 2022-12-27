/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"first-screen": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/blocks/modules/first-screen/module.first-screen.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/first-screen/module.first-screen.js":
/*!****************************************************************!*\
  !*** ./src/blocks/modules/first-screen/module.first-screen.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_commonVue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/commonVue.js */ "./src/js/commonVue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");



window.firstScreen = new vue__WEBPACK_IMPORTED_MODULE_1___default.a({
  el: '#first-screen',
  data: function data() {
    return {
      cursorAnimationParams: {
        count: 100,
        colors: ['#FF4978', '#430A66'],
        radius: 40,
        speed: 1,
        lifetime: 150,
        element: 'cursor'
      },
      circles: [],
      isShowTentacles: false
    };
  },
  watch: {
    isShowTentacles: function isShowTentacles(newValue) {
      if (newValue) {
        this.animationTentacles();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    setTimeout(function () {
      _this.createCanvas();
      window.addEventListener('resize', function () {
        return _this.updateCanvasSize();
      });
      document.getElementById('first-screen').addEventListener('mousemove', function (event) {
        document.getElementById('cursor').style.opacity = 1;
        _this.animate({
          x: event.pageX,
          y: event.pageY
        });
      });
      document.getElementById('first-screen').addEventListener('mouseleave', function (event) {
        document.getElementById('cursor').style.opacity = 0;
        _this.animate({
          x: event.pageX,
          y: event.pageY
        });
      });
    }, 0);
  },
  destroyed: function destroyed() {
    document.getElementById('first-screen').removeEventListener('mousemove', function (event) {});
    document.getElementById('first-screen').addEventListener('mouseleave', function (event) {});
  },
  methods: {
    setCanvasSize: function setCanvasSize() {
      return this.cursorAnimationParams;
    },
    createCanvas: function createCanvas() {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        if (document.getElementById(_this2.cursorAnimationParams.element)) {
          resolve({
            canvas: _this2.canvas = document.getElementById(_this2.cursorAnimationParams.element),
            ctx: _this2.canvas ? _this2.ctx = _this2.canvas.getContext('2d') : null,
            width: _this2.width = _this2.canvas.width = document.querySelector('.first-screen').clientWidth,
            height: _this2.height = _this2.canvas.height = document.querySelector('.first-screen').clientHeight
          });
        } else {
          reject(new Error('params.element is not defined'));
        }
        _this2.gradient = _this2.ctx.createLinearGradient(0, 0, window.innerWidth, 0);
        for (var i = 0; i < _this2.cursorAnimationParams.colors.length; i++) {
          _this2.gradient.addColorStop(i, _this2.cursorAnimationParams.colors[i]);
        }
      });
    },
    updateCanvasSize: function updateCanvasSize() {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        if (_this3.canvas && _this3.ctx) {
          return resolve({
            width: _this3.width = _this3.canvas.width = document.querySelector('.first-screen').clientWidth,
            height: _this3.height = _this3.canvas.height = document.querySelector('.first-screen').clientHeight
          });
        }
      });
    },
    pushCircleObject: function pushCircleObject(x, y) {
      var circle = {
        x: x,
        y: y,
        lifetime: this.cursorAnimationParams.radius,
        radius: this.cursorAnimationParams.radius
      };
      this.circles.push(circle);
    },
    animate: function animate(_ref) {
      var x = _ref.x,
        y = _ref.y;
      if (!this.canvas) return;
      this.pushCircleObject(x, y);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = this.gradient;
      this.ctx.strokeStyle = this.gradient;
      // this.ctx.drawImage(this.cursorAnimationParams.shape, 0, 0, this.canvas.width, this.canvas.height);
      for (var i = 1; i < this.circles.length; i++) {
        this.circles[i].lifetime -= this.cursorAnimationParams.speed;
        if (this.circles[i].lifetime <= 0) {
          this.circles.splice(i, 1);
        }
        if (this.circles[i] && this.circles[i + 1]) {
          this.ctx.lineWidth = this.circles[i].radius * 2;
          this.ctx.beginPath();
          this.ctx.moveTo(this.circles[i + 1].x, this.circles[i + 1].y);
          this.ctx.lineTo(this.circles[i].x, this.circles[i].y);
          this.ctx.stroke();
          this.ctx.closePath();
          this.ctx.beginPath();
          this.ctx.arc(this.circles[i].x, this.circles[i].y, this.circles[i].radius, 0, Math.PI * 2);
          this.ctx.closePath();
          this.ctx.fill();
        }
      }
    },
    animationTentacles: function animationTentacles() {
      gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to('.first-screen__tentacles', {
        duration: 1,
        left: 0
      });
    }
  }
});

/***/ }),

/***/ "./src/js/commonVue.js":
/*!*****************************!*\
  !*** ./src/js/commonVue.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

vue__WEBPACK_IMPORTED_MODULE_0___default.a.mixin({
  data: function data() {
    return {
      window: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    };
  },
  mounted: function mounted() {
    var _this = this;
    window.addEventListener('resize', function () {
      _this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    });
  },
  destroyed: function destroyed() {
    window.addEventListener('resize', function () {});
  }
});

/***/ })

/******/ });
//# sourceMappingURL=first-screen.js.map