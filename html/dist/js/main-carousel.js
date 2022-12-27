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
/******/ 		"main-carousel": 0
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
/******/ 	deferredModules.push(["./src/blocks/modules/main-carousel/module.main-carousel.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/main-carousel/module.main-carousel.js":
/*!******************************************************************!*\
  !*** ./src/blocks/modules/main-carousel/module.main-carousel.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_commonVue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/commonVue.js */ "./src/js/commonVue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! interactjs */ "./node_modules/interactjs/dist/interact.min.js");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





window.mainCarousel = new vue__WEBPACK_IMPORTED_MODULE_1___default.a({
  el: '#main-carousel',
  data: function data() {
    return {
      carousel: null,
      prevButton: null,
      nextButton: null,
      selectedIndex: 0,
      isHorizontal: true,
      rotateFn: '',
      cells: null,
      cellCount: 0,
      cellWidth: 0,
      cellHeight: 0,
      maxTitlesHeight: 0,
      maxTextsHeight: 0,
      cellsRange: null,
      theta: 1,
      cellSize: 0,
      radius: 0,
      interval: null,
      starCoord: 0
    };
  },
  mounted: function mounted() {
    var _this = this;
    setTimeout(function () {
      _this.carousel = document.querySelector('.main-carousel-carousel');
      _this.maxTitlesHeight = Math.max.apply(null, jquery__WEBPACK_IMPORTED_MODULE_4___default()(".main-carousel__text-item_titles .title").map(function () {
        return jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).height();
      }).get());
      _this.maxTextsHeight = Math.max.apply(null, jquery__WEBPACK_IMPORTED_MODULE_4___default()(".main-carousel__text-item_texts .text").map(function () {
        return jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).height();
      }).get());
      _this.cellWidth = _this.carousel.offsetWidth;
      _this.cellHeight = _this.carousel.offsetHeight;
      _this.prevButton = document.querySelector('.previous-button');
      _this.nextButton = document.querySelector('.next-button');
      _this.cells = _this.carousel.querySelectorAll('.main-carousel-cell');
      _this.cellsRange = document.querySelector('.cells-range');
      _this.rotateFn = _this.isHorizontal ? 'rotateY' : 'rotateX';
      if (window.innerWidth <= 1023) {
        interactjs__WEBPACK_IMPORTED_MODULE_3___default()('.main-carousel').draggable({
          origin: 'self',
          inertia: true,
          listeners: {
            move: function move(event) {}
          }
        }).on('dragstart', function (event) {
          _this.starCoord = event.clientX;
        }).on('dragend', function (event) {
          if (_this.starCoord > event.clientX) {
            _this.selectedIndex = _this.selectedIndex++;
            _this.rotateCarousel();
            clearInterval(_this.interval);
          } else {
            _this.selectedIndex = _this.selectedIndex--;
            _this.rotateCarousel();
            clearInterval(_this.interval);
          }
        });
      }
      _this.interval = setInterval(function () {
        _this.selectedIndex = _this.selectedIndex + 1;
        _this.rotateCarousel();
      }, 5000);
      _this.onInit();
    }, 0);
  },
  methods: {
    onClickPrevent: function onClickPrevent() {
      this.selectedIndex = this.selectedIndex - 1;
      this.rotateCarousel();
      clearInterval(this.interval);
    },
    onClickNext: function onClickNext() {
      this.selectedIndex++;
      this.rotateCarousel();
      clearInterval(this.interval);
    },
    rotateCarousel: function rotateCarousel() {
      var angle = this.theta * this.selectedIndex * -1;
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(".main-carousel__text-item_gifts .badge").css({
        'transform': "translateY(-50%) translateX(50%) rotate(".concat(angle, "deg)")
      });
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(".main-carousel__text-item_gifts .badge").text(Math.round(360 / this.cellCount * (this.selectedIndex % this.cellCount)));
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(".main-carousel__grades .from").text(Math.round(360 / this.cellCount * (this.selectedIndex % this.cellCount)));
      if (Math.round(360 / this.cellCount * (this.selectedIndex % this.cellCount)) < 0) {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()(".main-carousel__grades .from").text(Math.round(360 / this.cellCount * (this.selectedIndex % this.cellCount)) * -1);
      }
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(".main-carousel__text-item_gifts .left__in").css({
        'transform': "rotate(".concat(angle * -1, "deg)")
      });
      this.carousel.style.transform = 'translateZ(' + -this.radius + 'px) ' + this.rotateFn + '(' + angle + 'deg)';
      document.querySelectorAll(".main-carousel__text-item_titles .title").forEach(function (item) {
        item.classList.remove('isActive');
      });
      if (document.querySelector(".main-carousel__text-item_titles .title[data-title-id=\"".concat(this.selectedIndex % this.cellCount + 1, "\"]"))) {
        document.querySelector(".main-carousel__text-item_titles .title[data-title-id=\"".concat(this.selectedIndex % this.cellCount + 1, "\"]")).classList.add('isActive');
      }
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(document.querySelectorAll(".main-carousel__text-item_titles"), {
        height: this.maxTitlesHeight
      });
      document.querySelectorAll(".main-carousel__text-item_texts .text").forEach(function (item) {
        item.classList.remove('isActive');
      });
      if (document.querySelector(".main-carousel__text-item_texts .text[data-text-id=\"".concat(this.selectedIndex % this.cellCount + 1, "\"]"))) {
        document.querySelector(".main-carousel__text-item_texts .text[data-text-id=\"".concat(this.selectedIndex % this.cellCount + 1, "\"]")).classList.add('isActive');
      }
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(document.querySelectorAll(".main-carousel__text-item_texts"), {
        height: this.maxTextsHeight
      });
    },
    changeCarousel: function changeCarousel() {
      this.cellCount = this.cellsRange.value;
      this.theta = 360 / this.cellCount;
      this.cellSize = this.isHorizontal ? this.cellWidth : this.cellHeight;
      this.radius = Math.round(this.cellSize / 2 / Math.tan(Math.PI / this.cellCount));
      for (var i = 0; i < this.cells.length; i++) {
        var cell = this.cells[i];
        if (i < this.cellCount) {
          // visible cell
          cell.style.opacity = 1;
          var cellAngle = this.theta * i;
          cell.style.transform = this.rotateFn + '(' + cellAngle + 'deg) translateZ(' + this.radius + 'px)';
        } else {
          // hidden cell
          cell.style.opacity = 0;
          cell.style.transform = 'none';
        }
      }
      this.rotateCarousel();
    },
    onOrientationChange: function onOrientationChange() {
      var checkedRadio = document.querySelector('input[name="orientation"]:checked');
      this.isHorizontal = checkedRadio.value == 'horizontal';
      this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
      this.changeCarousel();
    },
    chooseElem: function chooseElem(index) {
      if (this.selectedIndex == index) return;
      this.selectedIndex = index;
      this.rotateCarousel();
    },
    onInit: function onInit() {
      if (!this.carousel) return;
      var self = this;
      (function () {
        var orientationRadios = document.querySelectorAll('input[name="orientation"]');
        for (var i = 0; i < orientationRadios.length; i++) {
          var radio = orientationRadios[i];
          radio.addEventListener('change', self.onOrientationChange());
        }
      })();
      document.addEventListener('click', function (event) {
        if (event.target.dataset.cellIndex) {
          self.chooseElem(event.target.dataset.cellIndex - 1);
          clearInterval(self.interval);
        }
      });

      // set initials
      this.onOrientationChange();
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
//# sourceMappingURL=main-carousel.js.map