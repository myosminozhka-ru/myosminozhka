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
/******/ 		"main": 0
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
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/application-form/application-form.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/application-form/application-form.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var applicationForm = /*#__PURE__*/function () {
  function ApplicationForm() {
    _classCallCheck(this, ApplicationForm);
  }

  _createClass(ApplicationForm, [{
    key: "openForm",
    value: function openForm() {
      document.querySelector('.application-form').classList.add('isOpened');
    }
  }, {
    key: "closeForm",
    value: function closeForm() {
      document.querySelector('.application-form').classList.remove('isOpened');
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      if (!document.querySelector('.application-form') || !document.querySelector('.call-to-action-button a.button') && !document.querySelector('.web-slider-button button.button')) return;

      if (window.innerWidth > 1023) {
        document.querySelector('.call-to-action-button a.button').addEventListener('click', function (event) {
          event.preventDefault();

          _this.openForm();
        });
      } else {
        document.querySelectorAll('.web-slider-button button.button').forEach(function (item) {
          item.addEventListener('click', function (event) {
            event.preventDefault();

            _this.openForm();
          });
        });
      }

      document.querySelector('.application-form__form-closer').addEventListener('click', function (event) {
        event.preventDefault();

        _this.closeForm();
      });
    }
  }]);

  return ApplicationForm;
}();

/* harmony default export */ __webpack_exports__["default"] = (applicationForm);

/***/ }),

/***/ "./src/blocks/modules/career-blocks/career-blocks.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/career-blocks/career-blocks.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);

var careerBlocks = /*#__PURE__*/function () {
  function careerBlocks() {
    _classCallCheck(this, careerBlocks);
  }

  _createClass(careerBlocks, [{
    key: "animateItems",
    value: function animateItems() {
      if (!document.querySelector('.career-blocks-item')) return;
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"].matchMedia({
        "(min-width: 1024px)": function minWidth1024px() {
          gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].utils.toArray(".career-blocks-item").forEach(function (item, i) {
            gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"].create({
              trigger: item,
              start: "top top",
              pin: true,
              pinSpacing: false
            });
          });
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.animateItems();
      console.log('career blocks inited');
    }
  }]);

  return careerBlocks;
}();

/* harmony default export */ __webpack_exports__["default"] = (careerBlocks);

/***/ }),

/***/ "./src/blocks/modules/career-blog/career-blog.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/career-blog/career-blog.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var careerBlog = /*#__PURE__*/function () {
  function careerBlog(sliderClass) {
    _classCallCheck(this, careerBlog);

    this.sliderClass = sliderClass;
  }

  _createClass(careerBlog, [{
    key: "init",
    value: function init() {
      if (!document.querySelector('.career-blog-items')) return;

      if (window.innerWidth > 1023) {
        new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.career-blog-items', {
          startAt: 0,
          perView: 3,
          gap: 130,
          type: 'carousel'
        }).mount();
      }
    }
  }]);

  return careerBlog;
}();

/* harmony default export */ __webpack_exports__["default"] = (careerBlog);

/***/ }),

/***/ "./src/blocks/modules/company-about/company-about.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/company-about/company-about.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var companyAbout = /*#__PURE__*/function () {
  function CompanyAbout(_ref) {
    var selector = _ref.selector;

    _classCallCheck(this, CompanyAbout);

    this.selector = selector;
  }

  _createClass(CompanyAbout, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (!document.querySelector('.company-about__wrap')) return;
      document.querySelector('.company-about__wrap').addEventListener('mousemove', function (e) {
        document.querySelector(_this.selector).style.clipPath = "circle(".concat(200 * 100 / window.innerWidth, "vw at ").concat(e.pageX, "px ").concat(e.pageY, "px)");
      });
      document.querySelector(this.selector).addEventListener('mouseleave', function (e) {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(_this.selector, 1, {
          clipPath: "circle(".concat(window.innerWidth, "px at ").concat(e.pageX, "px ").concat(e.pageY, "px)")
        });
      });
    }
  }]);

  return CompanyAbout;
}();

/* harmony default export */ __webpack_exports__["default"] = (companyAbout);

/***/ }),

/***/ "./src/blocks/modules/company-partners/company-partners.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/company-partners/company-partners.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var companyPartners = /*#__PURE__*/function () {
  function companyPartners(sliderClass) {
    _classCallCheck(this, companyPartners);

    this.sliderClass = sliderClass;
  }

  _createClass(companyPartners, [{
    key: "init",
    value: function init() {
      if (!document.querySelector('.company-partners-slider')) return;
      new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.company-partners-slider', {
        startAt: 0,
        bound: 'Boolean',
        perView: 2,
        breakpoints: {
          1023: {
            perView: 1
          }
        }
      }).mount();
    }
  }]);

  return companyPartners;
}();

/* harmony default export */ __webpack_exports__["default"] = (companyPartners);

/***/ }),

/***/ "./src/blocks/modules/company-principles/company-principles.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/modules/company-principles/company-principles.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);

var companyPrinciples = /*#__PURE__*/function () {
  function CompanyPrinciples() {
    _classCallCheck(this, CompanyPrinciples);
  }

  _createClass(CompanyPrinciples, [{
    key: "init",
    value: function init() {
      if (document.querySelector('.company-principles')) {
        gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.company-principles-circle', {
          scrollTrigger: {
            trigger: '.company-principles',
            start: 'top center',
            end: 'bottom bottom',
            scrub: 1 // markers: true

          },
          width: function width() {
            return 7200 * 100 / window.innerWidth + 'vw';
          },
          height: function height() {
            return 4900 * 100 / window.innerWidth + 'vw';
          }
        });
      }

      var carousel = document.querySelector('.company-principles-carousel');
      if (!carousel) return;
      var cells = carousel.querySelectorAll('.company-principles-cell');
      var cellCount; // cellCount set from cells-range input value

      var selectedIndex = 0;
      var cellWidth = carousel.offsetWidth;
      var cellHeight = carousel.offsetHeight;
      var isHorizontal = true;
      var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
      var radius, theta;

      function rotateCarousel() {
        var angle = theta * selectedIndex * -1;
        carousel.style.transform = 'translateZ(' + -radius + 'px) ' + rotateFn + '(' + angle + 'deg)';

        if (document.querySelector(".company-principles-text.isActive")) {
          document.querySelector(".company-principles-text.isActive").classList.remove('isActive');
        }

        document.querySelector("[data-text-index=\"".concat(selectedIndex + 1, "\"]")).classList.add('isActive');
      }

      var prevButton = document.querySelector('.previous-button');
      prevButton.addEventListener('click', function () {
        selectedIndex--;
        rotateCarousel();
      });
      var nextButton = document.querySelector('.next-button');
      nextButton.addEventListener('click', function () {
        selectedIndex++;
        rotateCarousel();
      });
      var cellsRange = document.querySelector('.cells-range');
      cellsRange.addEventListener('change', changeCarousel);
      cellsRange.addEventListener('input', changeCarousel);

      function changeCarousel() {
        cellCount = cellsRange.value;
        theta = 360 / cellCount;
        var cellSize = isHorizontal ? cellWidth : cellHeight;
        radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));

        for (var i = 0; i < cells.length; i++) {
          var cell = cells[i];

          if (i < cellCount) {
            // visible cell
            cell.style.opacity = 1;
            var cellAngle = theta * i;
            cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
          } else {
            // hidden cell
            cell.style.opacity = 0;
            cell.style.transform = 'none';
          }
        }

        rotateCarousel();
      }

      var orientationRadios = document.querySelectorAll('input[name="orientation"]');

      (function () {
        for (var i = 0; i < orientationRadios.length; i++) {
          var radio = orientationRadios[i];
          radio.addEventListener('change', onOrientationChange);
        }
      })();

      function onOrientationChange() {
        var checkedRadio = document.querySelector('input[name="orientation"]:checked');
        isHorizontal = checkedRadio.value == 'horizontal';
        rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
        changeCarousel();
      }

      function chooseElem(index) {
        selectedIndex = index;
        rotateCarousel();
      }

      document.addEventListener('click', function (event) {
        if (event.target.dataset.cellIndex) {
          chooseElem(event.target.dataset.cellIndex - 1);
        }

        if (event.target.dataset.textIndex) {
          chooseElem(event.target.dataset.textIndex - 1);
        }
      }); // set initials

      onOrientationChange();
      setInterval(function () {
        if (!document.querySelector(".company-principles-text[data-text-index=\"".concat(selectedIndex + 2, "\"]"))) {
          selectedIndex = -1;
        }

        chooseElem(++selectedIndex);
      }, 5000);
    }
  }]);

  return CompanyPrinciples;
}();

/* harmony default export */ __webpack_exports__["default"] = (companyPrinciples);

/***/ }),

/***/ "./src/blocks/modules/company-raiting/company-raiting.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/company-raiting/company-raiting.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);

var companyRaiting = /*#__PURE__*/function () {
  function companyRaiting(sliderClass) {
    _classCallCheck(this, companyRaiting);

    if (document.querySelector('.company-raiting-slider')) {
      this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"]('.company-raiting-slider', {
        startAt: 0,
        perView: 1,
        gap: 0
      });
    }
  }

  _createClass(companyRaiting, [{
    key: "scrollTriggers",
    value: function scrollTriggers() {
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"].matchMedia({
        "(min-width: 1024px)": function minWidth1024px() {
          if (!document.querySelector('.company-raiting-items')) return;
          var triggersWrap = document.querySelector('.company-raiting-items');
          document.querySelector('.company-raiting').addEventListener('mousemove', function (event) {
            triggersWrap.scroll({
              top: 0,
              left: event.clientX
            });
          });
        }
      });
    }
  }, {
    key: "changeSlide",
    value: function changeSlide(item) {
      this.slider.go("=".concat(item.dataset.itemId));
      document.querySelectorAll('.company-raiting-item').forEach(function (trigger) {
        trigger.classList.remove('isActive');
      });
      item.classList.add('isActive');
    }
  }, {
    key: "onSliderInit",
    value: function onSliderInit() {
      var _this = this;

      document.querySelector(".company-raiting-item[data-item-id=\"".concat(this.slider.index, "\"]")).classList.add('isActive');
      this.slider.on('run.after', function (item) {
        document.querySelectorAll('.company-raiting-item').forEach(function (trigger) {
          trigger.classList.remove('isActive');
        });
        document.querySelector(".company-raiting-item[data-item-id=\"".concat(_this.slider.index, "\"]")).classList.add('isActive');
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      if (this.slider) {
        this.slider.mount();
      }

      ;

      if (document.querySelector('.company-raiting-item') && this.slider) {
        this.onSliderInit();
        this.scrollTriggers();
        document.querySelectorAll('.company-raiting-item').forEach(function (item) {
          item.addEventListener('click', function () {
            return _this2.changeSlide(item);
          });
        });
      }
    }
  }]);

  return companyRaiting;
}();

/* harmony default export */ __webpack_exports__["default"] = (companyRaiting);

/***/ }),

/***/ "./src/blocks/modules/company-reviews/company-reviews.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/company-reviews/company-reviews.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var companyReviews = /*#__PURE__*/function () {
  function companyReviews(sliderClass) {
    _classCallCheck(this, companyReviews);

    this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.company-reviews-slider', {
      type: 'carousel',
      focusAt: 'center',
      startAt: 1,
      perView: 2,
      gap: 100,
      breakpoints: {
        1023: {
          perView: 1
        }
      }
    });
    this.translate = 0;
    this.index = 0;
    this.elementWidth = 0;
    this.allElementsWidth = 0;
  }

  _createClass(companyReviews, [{
    key: "countElementWidth",
    value: function countElementWidth() {
      this.elementWidth = document.querySelector('.company-reviews-item:not(glide__slide--active)').offsetWidth + 100;
    }
  }, {
    key: "init",
    value: function init() {
      if (!document.querySelector('.company-reviews-slider')) return;
      var self = this;

      var FixBoundPeek = function FixBoundPeek(Glide, Components, Events) {
        return {
          modify: function modify(translate) {
            if (self.index < self.slider.index && self.slider.index != 0 && self.slider.index != 1) {
              self.translate += self.elementWidth;
            } else if (self.index > self.slider.index && self.slider.index != 0 && self.slider.index != 1) {
              self.translate -= self.elementWidth;
            } else if (self.slider.index == 0 || self.slider.index == 1) {
              self.translate = 0;
            }

            if (self.slider.index - self.index > 1) {
              self.allElementsWidth = 0;
              self.translate = 0;
              document.querySelectorAll('.company-reviews-item').forEach(function (item) {
                if (!item.className.includes('glide__slide--active')) {
                  self.allElementsWidth += item.offsetWidth + 100;
                }
              });
              self.translate += self.allElementsWidth - self.elementWidth * 2;
            }

            self.index = self.slider.index;
            return self.translate;
          }
        };
      };

      if (window.innerWidth > 1023) {
        // this.slider.mutate([FixBoundPeek]).mount();
        this.slider.mount();
        this.index = this.slider.index;
        this.countElementWidth();
      } else {
        this.slider.mount();
      }
    }
  }]);

  return companyReviews;
}();

/* harmony default export */ __webpack_exports__["default"] = (companyReviews);

/***/ }),

/***/ "./src/blocks/modules/company-team/company-team.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/company-team/company-team.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var companytTeam = /*#__PURE__*/function () {
  function companytTeam() {
    _classCallCheck(this, companytTeam);
  }

  _createClass(companytTeam, [{
    key: "init",
    value: function init() {
      if (document.querySelector('.company-team-item')) gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toArray(".company-team-item").forEach(function (item, i) {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top-=800 top',
            end: 'bottom-=400 top',
            scrub: 1 //markers: true

          },
          scale: 1
        });
      });
    }
  }]);

  return companytTeam;
}();

/* harmony default export */ __webpack_exports__["default"] = (companytTeam);

/***/ }),

/***/ "./src/blocks/modules/company-video/company-video.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/company-video/company-video.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! video.js */ "./node_modules/video.js/dist/video.es.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var companyVideo = /*#__PURE__*/function () {
  function companyVideo() {
    _classCallCheck(this, companyVideo);

    this.player;
  }

  _createClass(companyVideo, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (!document.getElementById('player')) return;
      setTimeout(function () {
        _this.player = document.getElementById('player');
        Object(video_js__WEBPACK_IMPORTED_MODULE_0__["default"])('player', {
          fluid: true,
          controls: false,
          autoplay: true,
          aspectRatio: '16:9',
          muted: true,
          poster: 'img/video_preview.png',
          sources: [{
            src: 'videos/pv.mp4',
            type: 'video/mp4'
          }]
        });
      }, 300);
    }
  }]);

  return companyVideo;
}();

/* harmony default export */ __webpack_exports__["default"] = (companyVideo);

/***/ }),

/***/ "./src/blocks/modules/cookie-form/cookie-form.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/cookie-form/cookie-form.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var cookiesForm = /*#__PURE__*/function () {
  function cookiesForm() {
    _classCallCheck(this, cookiesForm);

    this.isClosedOnce = false;
  }

  _createClass(cookiesForm, [{
    key: "checkIfFormClosedOnce",
    value: function checkIfFormClosedOnce() {
      if (localStorage.getItem('cookiesFormOnceClosed') == 'true') {
        this.isClosedOnce = true;
      }
    }
  }, {
    key: "closeForm",
    value: function closeForm() {
      localStorage.setItem('cookiesFormOnceClosed', true);
      this.checkIfFormClosedOnce();
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      // localStorage.setItem('cookiesFormOnceClosed', false);
      this.checkIfFormClosedOnce();
      document.querySelector('.cookie-form__button').addEventListener('click', function () {
        _this.closeForm();
      });
    }
  }]);

  return cookiesForm;
}();

/* harmony default export */ __webpack_exports__["default"] = (cookiesForm);

/***/ }),

/***/ "./src/blocks/modules/cursor-animation/cursor-animation.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/cursor-animation/cursor-animation.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var cursorAnimation = /*#__PURE__*/function () {
  function CursorAnimation() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      count: 100,
      colors: ['#FF4978', '#430A66'],
      radius: 40,
      speed: 1,
      lifetime: 150,
      element: 'cursor'
    };

    _classCallCheck(this, CursorAnimation);

    this.params = params;
    this.circles = [];
  }

  _createClass(CursorAnimation, [{
    key: "setCanvasSize",
    value: function setCanvasSize() {
      return this.params;
    }
  }, {
    key: "createCanvas",
    value: function createCanvas() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (document.getElementById(_this.params.element)) {
          resolve({
            canvas: _this.canvas = document.getElementById(_this.params.element),
            ctx: _this.canvas ? _this.ctx = _this.canvas.getContext('2d') : null,
            width: _this.width = _this.canvas.width = document.querySelector('.first-frame').clientWidth,
            height: _this.height = _this.canvas.height = document.querySelector('.first-frame').clientHeight
          });
        } else {
          reject(new Error('params.element is not defined'));
        }

        _this.gradient = _this.ctx.createLinearGradient(0, 0, window.innerWidth, 0);

        for (var i = 0; i < _this.params.colors.length; i++) {
          _this.gradient.addColorStop(i, _this.params.colors[i]);
        }
      });
    }
  }, {
    key: "updateCanvasSize",
    value: function updateCanvasSize() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (_this2.canvas && _this2.ctx) {
          return resolve({
            width: _this2.width = _this2.canvas.width = document.querySelector('.first-frame').clientWidth,
            height: _this2.height = _this2.canvas.height = document.querySelector('.first-frame').clientHeight
          });
        }
      });
    }
  }, {
    key: "pushCircleObject",
    value: function pushCircleObject(x, y) {
      var circle = {
        x: x,
        y: y,
        lifetime: this.params.radius,
        radius: this.params.radius
      };
      this.circles.push(circle);
    }
  }, {
    key: "animate",
    value: function animate(_ref) {
      var x = _ref.x,
          y = _ref.y;
      if (!this.canvas) return;
      this.pushCircleObject(x, y);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = this.gradient;
      this.ctx.strokeStyle = this.gradient; // this.ctx.drawImage(this.params.shape, 0, 0, this.canvas.width, this.canvas.height);

      for (var i = 1; i < this.circles.length; i++) {
        this.circles[i].lifetime -= this.params.speed;

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

      this.onAnimate();
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      this.createCanvas().then(function () {
        _this3.onInit();
      })["catch"](function (error) {// console.warn(error)
      });
    }
  }, {
    key: "onInit",
    value: function onInit() {}
  }, {
    key: "onAnimate",
    value: function onAnimate() {}
  }]);

  return CursorAnimation;
}();

/* harmony default export */ __webpack_exports__["default"] = (cursorAnimation);

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var footer = /*#__PURE__*/function () {
  function Footer() {
    _classCallCheck(this, Footer);
  }

  _createClass(Footer, [{
    key: "copyText",
    value: function copyText(_ref) {
      var text = _ref.text;
      navigator.clipboard.writeText(text);
    }
  }]);

  return Footer;
}();

/* harmony default export */ __webpack_exports__["default"] = (footer);

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);

    this.countedWidth = 0;
    this.self = this;
    this.isOpened = false;
    this.isPhonesOpened = false; // this.setHeaderWavePositionOnLoad();
  }

  _createClass(Header, [{
    key: "openMobileHeader",
    value: function openMobileHeader() {
      this.isOpened = !this.isOpened;
    }
  }, {
    key: "openPhonesModal",
    value: function openPhonesModal() {
      this.isPhonesOpened = !this.isPhonesOpened;
    }
  }, {
    key: "closePhonesModal",
    value: function closePhonesModal() {
      this.isPhonesOpened = false;
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.header-logo', {
        scrollTrigger: {
          trigger: '.wrapper',
          start: 'top top',
          end: 'top+=400 top',
          scrub: 1 // markers: true,

        },
        width: function width() {
          return 200 * 100 / window.innerWidth + 'vw';
        },
        onComplete: function onComplete() {
          _this.logoAnimationComplete();
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.header-in', {
        scrollTrigger: {
          trigger: '.wrapper',
          start: 'top top',
          end: 'top+=400 top',
          scrub: 0 // markers: true,

        },
        paddingTop: function paddingTop() {
          //return 10 * 100 / window.innerWidth + 'vw'
          return 1 * 100 / window.innerWidth + 'vw';
        },
        paddingBottom: function paddingBottom() {
          //return 10 * 100 / window.innerWidth + 'vw'
          return 1 * 100 / window.innerWidth + 'vw';
        },
        onComplete: function onComplete() {
          _this.headerInAnimationComplete();
        }
      });
      this.setHeaderWavePositionOnLoad();
      this.onInit();

      if (document.querySelector('.header-phone_opener')) {
        document.querySelector('.header-phone_opener').addEventListener('click', function () {
          _this.openPhonesModal();
        });
        document.querySelector('.header-phone_modal_closer').addEventListener('click', function (event) {
          event.stopPropagation();

          _this.closePhonesModal();
        });
        document.addEventListener('click', function (event) {
          console.log(event.target.closest('.header-phone_opener'));

          if (!event.target.closest('.header-phone_opener')) {
            _this.closePhonesModal();
          }
        });
      }
    }
  }, {
    key: "onInit",
    value: function onInit() {}
  }, {
    key: "logoAnimationComplete",
    value: function logoAnimationComplete() {}
  }, {
    key: "headerInAnimationComplete",
    value: function headerInAnimationComplete() {}
  }, {
    key: "setHeaderWavePositionOnLoad",
    value: function setHeaderWavePositionOnLoad() {
      if (document.querySelector('.header-menu li.isActive')) {
        var active_menu = document.querySelector('.header-menu li.isActive');
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.header-menu-border', {
          left: active_menu.offsetLeft,
          width: active_menu.offsetWidth,
          right: 'auto'
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.header-menu-wave', {
          left: active_menu.offsetLeft + active_menu.offsetWidth / 2
        });
      }
    }
  }, {
    key: "setHeaderWavePosition",
    value: function setHeaderWavePosition() {
      // gsap.to('.header-menu-wave', {
      //     left: event.target.offsetLeft + event.target.offsetWidth / 2
      // })
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.header-menu-border', {
        left: event.target.offsetLeft,
        width: event.target.offsetWidth,
        right: 'auto'
      });
    }
  }]);

  return Header;
}();

/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./src/blocks/modules/job-info/job-info.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/job-info/job-info.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var jobInfo = /*#__PURE__*/function () {
  function jobInfo() {
    _classCallCheck(this, jobInfo);

    this.index = 0;
  }

  _createClass(jobInfo, [{
    key: "changeSlide",
    value: function changeSlide(index) {
      document.querySelectorAll('.job-info-title').forEach(function (item) {
        item.classList.remove('isActive');
      });
      document.querySelectorAll('.job-info-item').forEach(function (item) {
        item.classList.remove('isActive');
      });
      document.querySelector('.job-info-right').style.height = document.querySelector(".job-info-item[data-target-id=\"".concat(index, "\"]")).offsetHeight + 'px';
      document.querySelector(".job-info-title[data-item-id=\"".concat(index, "\"]")).classList.add('isActive');
      document.querySelector(".job-info-item[data-target-id=\"".concat(index, "\"]")).classList.add('isActive');
    }
  }, {
    key: "changeIndex",
    value: function changeIndex(event) {
      if (event.target.className != 'job-info-title') return;
      this.changeSlide(event.target.dataset.itemId);
    }
  }, {
    key: "sliderInterval",
    value: function sliderInterval() {
      var _this = this;

      setInterval(function () {
        var index = _this.index++;

        if (!document.querySelector(".job-info-title[data-item-id=\"".concat(++index, "\"]")) && !document.querySelector(".job-info-item[data-target-id=\"".concat(++index, "\"]"))) {
          _this.index = 0;
        }

        _this.changeSlide(_this.index);
      }, 5000);
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      if (!document.querySelector('.job-info')) return;
      this.changeSlide(this.index);
      this.sliderInterval();
      document.addEventListener('click', function (event) {
        return _this2.changeIndex(event);
      });
    }
  }]);

  return jobInfo;
}();

/* harmony default export */ __webpack_exports__["default"] = (jobInfo);

/***/ }),

/***/ "./src/blocks/modules/job-stages/job-stages.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/job-stages/job-stages.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! accordion-js */ "./node_modules/accordion-js/dist/accordion.min.js");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(accordion_js__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var jobStages = /*#__PURE__*/function () {
  function jobStages(sliderClass) {
    _classCallCheck(this, jobStages);

    this.sliderClass = sliderClass;
    this.accorderon;
    this.currentTab = 0;

    if (document.querySelector('.job-stages-support')) {
      this.supportSlider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.job-stages-support-slides', {
        startAt: 0,
        perView: 1,
        gap: 0,
        type: 'slider'
      });

      if (document.querySelector('.job-stages-support-right')) {
        this.supportImagesSlider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.job-stages-support-right', {
          startAt: 0,
          perView: 1,
          gap: 0,
          type: 'carousel',
          transitionType: 'fade'
        });
      }
    }
  }

  _createClass(jobStages, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (document.querySelector('.job-stages-tabs')) {
        this.accorderon = new accordion_js__WEBPACK_IMPORTED_MODULE_1___default.a('.job-stages-tabs', {
          duration: 400,
          showMultiple: true,
          elementClass: 'job-stages-slides',
          triggerClass: 'job-stages-trig',
          panelClass: 'job-stages-slide',
          openOnInit: [0],
          beforeOpen: function beforeOpen(currentElement) {//   gsap.to(currentElement.querySelector('.vacancies-tabs-item-body'), 1, {
            //     heigth: currentElement.querySelector('.vacancies-tabs-item-body').offsetHeight
            //   })
          }
        });
        document.querySelectorAll('.job-stages-trigger[data-tab-id]').forEach(function (item) {
          item.addEventListener('click', function (e) {
            e.preventDefault();
            if (_this.currentTab == +item.dataset.tabId) return;
            document.querySelectorAll('.job-stages-trigger[data-tab-id]').forEach(function (item) {
              item.classList.remove('isActive');
            });
            item.classList.add('isActive');

            _this.accorderon.close(_this.currentTab);

            _this.accorderon.open(+item.dataset.tabId);

            _this.currentTab = +item.dataset.tabId;
          });
        });
      }

      ;

      if (document.querySelector('.job-stages-slides--analitics')) {
        new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.job-stages-slides--analitics', {
          startAt: 0,
          perView: 2,
          gap: 120,
          type: 'carousel',
          breakpoints: {
            800: {
              perView: 1
            }
          }
        }).mount();
      }

      ;

      if (document.querySelector('.job-stages-slides--projecting')) {
        new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.job-stages-slides--projecting', {
          startAt: 0,
          perView: 2,
          gap: 120,
          type: 'carousel',
          breakpoints: {
            800: {
              perView: 1
            }
          }
        }).mount();
      }

      ;

      if (document.querySelector('.job-stages-slides--design')) {
        new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.job-stages-slides--design', {
          startAt: 0,
          perView: 1,
          gap: 0,
          type: 'carousel'
        }).mount();
      }

      ;

      if (document.querySelector('.job-stages-slides--development')) {
        new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.job-stages-slides--development', {
          startAt: 0,
          perView: 1,
          gap: 0,
          type: 'carousel'
        }).mount();
      }

      ;

      if (document.querySelector('.job-stages-support')) {
        this.supportSlider.mount();

        if (document.querySelector('.job-stages-support-right')) {
          this.supportImagesSlider.mount();
          this.supportSlider.on(['move.after'], function () {
            _this.supportImagesSlider.go("=".concat(_this.supportSlider.index));
          });
        }
      }

      ;

      if (document.querySelector('.job-stages-title-triggers')) {
        document.querySelectorAll('.job-stages-title-triggers').forEach(function (wrap) {
          wrap.querySelectorAll('.job-stages-title-trigger').forEach(function (item) {
            item.addEventListener('click', function () {
              wrap.querySelectorAll('.job-stages-title-trigger').forEach(function (trigger) {
                trigger.classList.remove('isActive');
              });
              item.classList.add('isActive');
            });
          });
        });
      }
    }
  }]);

  return jobStages;
}();

/* harmony default export */ __webpack_exports__["default"] = (jobStages);

/***/ }),

/***/ "./src/blocks/modules/job-team/job-team.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/job-team/job-team.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);

var jobTeam = /*#__PURE__*/function () {
  function jobTeam() {
    _classCallCheck(this, jobTeam);
  }

  _createClass(jobTeam, [{
    key: "init",
    value: function init() {
      if (!document.querySelector(".job_tree_item")) return;
      gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].utils.toArray(".job_tree_item").forEach(function (item, i) {
        gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to(item, {
          scrollTrigger: {
            trigger: item,
            start: "bottom-=50 bottom-=50",
            end: 'bottom-=50 bottom-=50' // markers: true,

          },
          fillOpacity: 1,
          strokeOpacity: 1
        });
      }); // Array.from(document.querySelectorAll('.job_tree_item')).map(item => {
      //     gsap.to(item, {
      //         scrollTrigger: {
      //             trigger: item,
      //             start: "center center", 
      //             end: 'center center',
      //             markers: true,
      //         },
      //         fillOpacity: 1
      //     })
      // })

      gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.job-team-title', {
        scrollTrigger: {
          trigger: '.job-info',
          start: 'center center',
          end: 'bottom+=1000 center',
          scrub: 1
        },
        color: '#4f4f4f'
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.job-team-circle', {
        scrollTrigger: {
          trigger: '.job-info',
          start: 'center center',
          end: 'bottom+=1000 center',
          scrub: 1 // onUpdate: (item) => {
          //     if (window.innerWidth < 1023) {
          //         if (item.progress > 0.11) {
          //             document.querySelector('.job-team-title').classList.add('colorChanged');
          //         } else {
          //             document.querySelector('.job-team-title').classList.remove('colorChanged');
          //         }
          //     } else {
          //         document.querySelector('.job-team-title').classList.remove('colorChanged');
          //     }
          // },
          // markers: true

        },
        width: function width() {
          return 6200 * 100 / window.innerWidth + 'vw';
        },
        height: function height() {
          return 4900 * 100 / window.innerWidth + 'vw';
        }
      });
    }
  }]);

  return jobTeam;
}();

/* harmony default export */ __webpack_exports__["default"] = (jobTeam);

/***/ }),

/***/ "./src/blocks/modules/main-about/main-about.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/main-about/main-about.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! video.js */ "./node_modules/video.js/dist/video.es.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);

var mainAbout = /*#__PURE__*/function () {
  function MainAbout() {
    _classCallCheck(this, MainAbout);

    this.player;
  }

  _createClass(MainAbout, [{
    key: "openVideoModal",
    value: function openVideoModal() {
      document.querySelector('.video-modal').classList.add('isOpened');
      this.player.play();
    }
  }, {
    key: "closeVideoModal",
    value: function closeVideoModal() {
      document.querySelector('.video-modal').classList.remove('isOpened');
      this.player.pause();
    }
  }, {
    key: "initVideoOpening",
    value: function initVideoOpening() {
      var _this = this;

      if (!document.querySelector('.main-about-play')) return;
      document.querySelector('.main-about-play').addEventListener('click', function () {
        _this.openVideoModal();
      });
      document.querySelector('.video-modal').addEventListener('click', function () {
        _this.closeVideoModal();
      });
      this.player = document.getElementById('player_modal');
      Object(video_js__WEBPACK_IMPORTED_MODULE_2__["default"])('player_modal', {
        fluid: true,
        controls: false,
        // autoplay: true,
        aspectRatio: '16:7',
        // muted: true,
        poster: 'img/video_preview.png',
        sources: [{
          src: 'videos/pv.mp4',
          type: 'video/mp4'
        }]
      });
    }
  }, {
    key: "onCircleAnimationEnd",
    value: function onCircleAnimationEnd() {}
  }, {
    key: "animateCircle",
    value: function animateCircle() {
      if (!document.querySelector('.main-about')) return;
      var self = this;

      if (window.innerWidth > 1023) {
        gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.main-about-circle', {
          scrollTrigger: {
            trigger: '.trigger-wrapper-about',
            start: 'top top',
            end: 'top+=400 top',
            scrub: 1 // markers: true

          },
          width: function width() {
            return 7200 * 100 / window.innerWidth + 'vw';
          },
          height: function height() {
            return 4900 * 100 / window.innerWidth + 'vw';
          },
          onComplete: function onComplete() {
            self.onCircleAnimationEnd();
          }
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.main-about-title', {
          scrollTrigger: {
            trigger: '.trigger-wrapper-about',
            start: 'top+=600 top',
            end: 'top+=1000 top',
            scrub: 1
          },
          y: function y() {
            return -100 * 100 / window.innerWidth + 'vw';
          },
          color: '#afa3a3'
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.main-about-name', {
          scrollTrigger: {
            trigger: '.trigger-wrapper-about',
            start: 'top+=500 top',
            end: 'top+=900 top',
            scrub: 1
          },
          y: function y() {
            return -350 * 100 / window.innerWidth + 'vw';
          }
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.main-about-text', {
          scrollTrigger: {
            trigger: '.trigger-wrapper-about',
            start: 'top+=530 top',
            end: 'top+=930 top',
            scrub: 1
          },
          y: function y() {
            return -350 * 100 / window.innerWidth + 'vw';
          }
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.main-about-video-shadow', {
          scrollTrigger: {
            trigger: '.trigger-wrapper-about',
            start: 'top+=530 top',
            end: 'top+=930 top',
            scrub: 1
          },
          left: 0,
          top: 0
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.main-about-video', {
          scrollTrigger: {
            trigger: '.trigger-wrapper-about',
            start: 'top+=560 top',
            end: 'top+=960 top',
            scrub: 1
          },
          y: function y() {
            return -350 * 100 / window.innerWidth + 'vw';
          }
        });
        gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.main-about-advantages', {
          scrollTrigger: {
            trigger: '.trigger-wrapper-about',
            start: 'top top',
            end: 'bottom center',
            scrub: 1,
            // markers: true,
            pin: true // pinSpacing: false

          },
          right: '100%'
        });
      }
    }
  }]);

  return MainAbout;
}();

/* harmony default export */ __webpack_exports__["default"] = (mainAbout);

/***/ }),

/***/ "./src/blocks/modules/main-carousel/main-carousel.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/main-carousel/main-carousel.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! interactjs */ "./node_modules/interactjs/dist/interact.min.js");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var mainCarousel = /*#__PURE__*/function () {
  function MainCarousel() {
    _classCallCheck(this, MainCarousel);
  }

  _createClass(MainCarousel, [{
    key: "onCarouselChange",
    value: function onCarouselChange() {}
  }, {
    key: "init",
    value: function init() {
      var self = this;
      var carousel = document.querySelector('.main-carousel-carousel');
      if (!carousel) return;
      var cells = carousel.querySelectorAll('.main-carousel-cell');
      var cellCount; // cellCount set from cells-range input value

      var selectedIndex = 0;
      var cellWidth = carousel.offsetWidth;
      var cellHeight = carousel.offsetHeight;
      var isHorizontal = true;
      var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
      var radius, theta;

      function rotateCarousel() {
        self.onCarouselChange();
        var angle = theta * selectedIndex * -1;
        carousel.style.transform = 'translateZ(' + -radius + 'px) ' + rotateFn + '(' + angle + 'deg)';
        var cells = carousel.querySelectorAll('.main-carousel-cell');
        document.querySelectorAll(".main-carousel__text-item_titles .title").forEach(function (item) {
          item.classList.remove('isActive');
        });
        document.querySelector(".main-carousel__text-item_titles .title[data-title-id=\"".concat((selectedIndex + 1) % +cellCount, "\"]")).classList.add('isActive');
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelectorAll(".main-carousel__text-item_titles"), {
          height: document.querySelector(".main-carousel__text-item_titles .title[data-title-id=\"".concat((selectedIndex + 1) % +cellCount, "\"]")).clientHeight
        });
        document.querySelectorAll(".main-carousel__text-item_texts .text").forEach(function (item) {
          item.classList.remove('isActive');
        });
        document.querySelector(".main-carousel__text-item_texts .text[data-text-id=\"".concat((selectedIndex + 1) % +cellCount, "\"]")).classList.add('isActive');
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(document.querySelectorAll(".main-carousel__text-item_texts"), {
          height: document.querySelector(".main-carousel__text-item_texts .text[data-text-id=\"".concat((selectedIndex + 1) % +cellCount, "\"]")).clientHeight
        }); // document.querySelector(`.main-carousel__text-item_titles .title[data-title-id="${selectedIndex}"]`).classList.add('isActive');
      }

      var prevButton = document.querySelector('.previous-button');
      prevButton.addEventListener('click', function () {
        selectedIndex--;
        rotateCarousel();
      });
      var nextButton = document.querySelector('.next-button');
      nextButton.addEventListener('click', function () {
        selectedIndex++;
        rotateCarousel();
      });
      var cellsRange = document.querySelector('.cells-range');
      cellsRange.addEventListener('change', changeCarousel);
      cellsRange.addEventListener('input', changeCarousel);

      function changeCarousel() {
        cellCount = cellsRange.value;
        theta = 360 / cellCount;
        var cellSize = isHorizontal ? cellWidth : cellHeight;
        radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));

        for (var i = 0; i < cells.length; i++) {
          var cell = cells[i];

          if (i < cellCount) {
            // visible cell
            cell.style.opacity = 1;
            var cellAngle = theta * i;
            cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
          } else {
            // hidden cell
            cell.style.opacity = 0;
            cell.style.transform = 'none';
          }
        }

        rotateCarousel();
      }

      var orientationRadios = document.querySelectorAll('input[name="orientation"]');

      (function () {
        for (var i = 0; i < orientationRadios.length; i++) {
          var radio = orientationRadios[i];
          radio.addEventListener('change', onOrientationChange);
        }
      })();

      function onOrientationChange() {
        var checkedRadio = document.querySelector('input[name="orientation"]:checked');
        isHorizontal = checkedRadio.value == 'horizontal';
        rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
        changeCarousel();
      }

      function chooseElem(index) {
        selectedIndex = index;
        rotateCarousel();
      }

      document.addEventListener('click', function (event) {
        if (event.target.dataset.cellIndex) {
          chooseElem(event.target.dataset.cellIndex - 1);
        }
      });
      var interval = setInterval(function () {
        selectedIndex++;
        rotateCarousel();
      }, 5000); // set initials

      onOrientationChange();
      var starCoord = 0;

      if (window.innerWidth <= 1023) {
        interactjs__WEBPACK_IMPORTED_MODULE_1___default()('.main-carousel').draggable({
          origin: 'self',
          inertia: true,
          listeners: {
            move: function move(event) {}
          }
        }).on('dragstart', function (event) {
          starCoord = event.clientX;
        }).on('dragend', function (event) {
          if (starCoord > event.clientX) {
            selectedIndex++;
            rotateCarousel();
          } else {
            selectedIndex--;
            rotateCarousel();
          }
        });
      }
    }
  }]);

  return MainCarousel;
}();

/* harmony default export */ __webpack_exports__["default"] = (mainCarousel);

/***/ }),

/***/ "./src/blocks/modules/main-cases/main-cases.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/main-cases/main-cases.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);

var mainCases = /*#__PURE__*/function () {
  function MainCases(_ref) {
    var itemsClass = _ref.itemsClass;

    _classCallCheck(this, MainCases);

    this.itemsClass = itemsClass;
    this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"]('.main-cases-slider', {
      type: 'carousel',
      startAt: 1,
      perView: 1,
      gap: 0
    });
  }

  _createClass(MainCases, [{
    key: "initMobileSlider",
    value: function initMobileSlider() {
      if (!document.querySelector('.main-cases-slider')) return;
      this.slider.mount();
    }
  }, {
    key: "destroyMobileSlider",
    value: function destroyMobileSlider() {
      if (!document.querySelector('.main-cases-slider')) return;
      this.slider.destroy();
    }
  }, {
    key: "onInit",
    value: function onInit() {}
  }, {
    key: "onAnimationStart",
    value: function onAnimationStart() {}
  }, {
    key: "onAnimationEnd",
    value: function onAnimationEnd() {}
  }, {
    key: "init",
    value: function init() {
      if (!document.querySelector('.main-cases')) return;
      var self = this;
      this.onInit();

      if (window.innerWidth < 1023) {
        this.initMobileSlider();
      } else {
        this.destroyMobileSlider();
      }

      if (window.innerWidth <= 1366 && window.innerWidth > 1023 || window.innerWidth > 1440) {
        setTimeout(function () {
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.main-cases-items-in', {
            scrollTrigger: {
              trigger: '.main-cases',
              start: 'top top',
              end: 'bottom bottom-=200',
              scrub: 2,
              // markers: true,
              onUpdate: function onUpdate(item) {
                if (item.progress > 0.05 && item.progress < 0.65) {
                  document.querySelector('.main-cases-items-in').classList.add('isInViewport');
                } else {
                  document.querySelector('.main-cases-items-in').classList.remove('isInViewport');
                }
              }
            },
            x: '-100%'
          });
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.main-cases', {
            scrollTrigger: {
              trigger: '.main-cases',
              start: 'top top-=350',
              end: 'bottom bottom',
              pin: true,
              scrub: 2,
              pinSpacing: false // markers: true

            },
            x: 0,
            onStart: function onStart() {
              self.onAnimationStart();
            },
            onComplete: function onComplete() {
              self.onAnimationEnd();
            }
          });
        }, 1000);
      } else if (window.innerWidth <= 1440 && window.innerWidth > 1366) {
        setTimeout(function () {
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.main-cases-items-in', {
            scrollTrigger: {
              trigger: '.main-cases',
              start: 'top top',
              end: 'bottom bottom-=200',
              scrub: 2,
              // markers: true,
              onUpdate: function onUpdate(item) {
                if (item.progress > 0.05 && item.progress < 0.65) {
                  document.querySelector('.main-cases-items-in').classList.add('isInViewport');
                } else {
                  document.querySelector('.main-cases-items-in').classList.remove('isInViewport');
                }
              }
            },
            x: '-100%'
          });
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.main-cases', {
            scrollTrigger: {
              trigger: '.main-cases',
              start: 'top top-=200',
              end: 'bottom bottom',
              pin: true,
              scrub: 2,
              pinSpacing: false // markers: true

            },
            x: 0,
            onStart: function onStart() {
              self.onAnimationStart();
            },
            onComplete: function onComplete() {
              self.onAnimationEnd();
            }
          });
        }, 1000);
      } // else if (window.innerWidth <= 1023) {
      //     console.log('это мобилка')
      //     setTimeout(() => {
      //         gsap.to('.main-cases-items-in', {
      //             scrollTrigger: {
      //                 trigger: '.main-cases',
      //                 start: 'top top',
      //                 end: 'bottom bottom',
      //                 scrub: 3,
      //                 // markers: true,
      //                 onUpdate: (item) => {
      //                     if (item.progress > 0.05 && item.progress < 0.65) {
      //                         document.querySelector('.main-cases-items-in').classList.add('isInViewport');
      //                     } else {
      //                         document.querySelector('.main-cases-items-in').classList.remove('isInViewport');
      //                     }
      //                 }
      //             },
      //             x: '-100%',
      //         });
      //         gsap.to('.main-cases', {
      //             scrollTrigger: {
      //                 trigger: '.main-cases',
      //                 start: 'top top-=100',
      //                 end: 'bottom bottom',
      //                 pin: true,
      //                 pinSpacing: false,
      //                 // markers: true
      //             },
      //             x: 0,
      //         });
      //     }, 1000);
      // }

    }
  }]);

  return MainCases;
}();

/* harmony default export */ __webpack_exports__["default"] = (mainCases);

/***/ }),

/***/ "./src/blocks/modules/main-news-and-trends/main-news-and-trends.js":
/*!*************************************************************************!*\
  !*** ./src/blocks/modules/main-news-and-trends/main-news-and-trends.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);

var newsAndTrends = /*#__PURE__*/function () {
  function NewsAndTrends(_ref) {
    var itemsSelector = _ref.itemsSelector;

    _classCallCheck(this, NewsAndTrends);

    this.slider;
    this.sliderItems;
  }

  _createClass(NewsAndTrends, [{
    key: "initSlider",
    value: function initSlider() {
      this.sliderItems = document.querySelectorAll('.news-and-trends-item');
      this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"]('.news-and-trends-right-slider', {
        type: 'carousel',
        startAt: 0,
        perView: 5,
        breakpoints: {
          800: {
            perView: 2
          },
          600: {
            perView: 1
          }
        }
      }).mount();
    }
  }, {
    key: "onInit",
    value: function onInit() {}
  }, {
    key: "init",
    value: function init() {
      if (!document.querySelector('.news-and-trends')) return;
      this.initSlider();
      this.onInit();
    }
  }]);

  return NewsAndTrends;
}();

/* harmony default export */ __webpack_exports__["default"] = (newsAndTrends);

/***/ }),

/***/ "./src/blocks/modules/main-question/main-question.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/main-question/main-question.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mainQuestionForm = /*#__PURE__*/function () {
  function mainQuestionForm(_ref) {
    var inputSelector = _ref.inputSelector;

    _classCallCheck(this, mainQuestionForm);

    this.inputSelector = inputSelector;
    this.file = '';
    this.hasFile = false;
  }

  _createClass(mainQuestionForm, [{
    key: "onInputChange",
    value: function onInputChange(event) {
      if (!event.target.files.length) {
        this.hasFile = false;
        this.file = null;
        return;
      }

      ;
      this.hasFile = true;
      this.file = _objectSpread({}, event.target.files)[0];
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      if (!document.querySelector(this.inputSelector)) return;
      var fileInput = document.querySelector(this.inputSelector);
      fileInput.addEventListener('change', function () {
        return _this.onInputChange(event);
      });
    }
  }]);

  return mainQuestionForm;
}();

/* harmony default export */ __webpack_exports__["default"] = (mainQuestionForm);

/***/ }),

/***/ "./src/blocks/modules/main-web/main-web.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/main-web/main-web.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);

var mainWeb = /*#__PURE__*/function () {
  function Mainweb(_ref) {
    var element = _ref.element,
        trigger = _ref.trigger;

    _classCallCheck(this, Mainweb);

    this.element = element;
    this.trigger = trigger;

    if (document.querySelector('.web-slider')) {
      this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__["default"]('.web-slider', {
        type: 'carousel',
        startAt: 1,
        perView: 1,
        gap: 0
      });
    }
  }

  _createClass(Mainweb, [{
    key: "mobileSlider",
    value: function mobileSlider() {
      if (!this.slider) return;

      if (window.innerWidth < 1023) {
        this.slider.mount();
      } else {
        this.slider.destroy();
      }
    }
  }, {
    key: "animateElement",
    value: function animateElement() {
      this.mobileSlider();
      if (!document.querySelector('.web-right-image')) return;
      gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].utils.toArray(".web-right-image").forEach(function (item, i) {
        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"].create({
          trigger: item,
          start: "top center",
          end: 'bottom bottom',
          // scrub: 4,
          // markers: true,
          // pin: true, 
          // pinSpacing: false,
          // snap: 1,
          onUpdate: function onUpdate(item) {
            if (item.progress > 0) {
              // console.log(item.trigger.dataset.itemId)
              if (document.querySelector(".web-subtitles")) {
                document.querySelectorAll(".web-subtitle").forEach(function (item) {
                  item.classList.remove('isActive');
                });
                document.querySelector(".web-subtitle[data-item-id=\"".concat(item.trigger.dataset.itemId, "\"]")).classList.add('isActive');
              }

              if (document.querySelector(".web-titles")) {
                document.querySelectorAll(".web-title").forEach(function (item) {
                  item.classList.remove('isActive');
                });
                document.querySelector(".web-title[data-item-id=\"".concat(item.trigger.dataset.itemId, "\"]")).classList.add('isActive');
              }

              if (document.querySelector(".web-texts")) {
                document.querySelectorAll(".web-text").forEach(function (item) {
                  item.classList.remove('isActive');
                });
                document.querySelector(".web-text[data-item-id=\"".concat(item.trigger.dataset.itemId, "\"]")).classList.add('isActive');
              }

              if (document.querySelector(".web-buttons")) {
                document.querySelectorAll(".web-button").forEach(function (item) {
                  item.classList.remove('isActive');
                });
                document.querySelector(".web-button[data-item-id=\"".concat(item.trigger.dataset.itemId, "\"]")).classList.add('isActive');
              }
            }
          }
        });
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["gsap"].to('.web-data-in', {
        scrollTrigger: {
          trigger: '.web-data',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: true,
          pinSpacing: false // markers: true

        },
        x: 0
      });
    }
  }]);

  return Mainweb;
}();

/* harmony default export */ __webpack_exports__["default"] = (mainWeb);

/***/ }),

/***/ "./src/blocks/modules/main-words/main-words.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/main-words/main-words.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var mainWords = /*#__PURE__*/function () {
  function MainWords(_ref) {
    var delay = _ref.delay,
        element = _ref.element;

    _classCallCheck(this, MainWords);

    this.x = {
      coordinate: 0,
      position: 'left'
    };
    this.y = {
      coordinate: 0,
      position: 'top'
    };
    this.isAnimated = false;
    this.delay = delay;
    this.element = element;
    this.countPosition();
    this.onInit();
  }

  _createClass(MainWords, [{
    key: "countPosition",
    value: function countPosition() {
      var _this = this;

      if (!document.querySelector(this.element)) return;
      setTimeout(function () {
        document.addEventListener('mousemove', function (event) {
          _this.x.coordinate = event.clientX;
          _this.y.coordinate = event.clientY;

          if (_this.x.coordinate < window.innerWidth / 2) {
            _this.x.position = 'left';
          } else {
            _this.x.position = 'right';
          }

          if (_this.y.coordinate < window.innerheight / 2) {
            _this.y.position = 'top';
          } else {
            _this.y.position = 'bottom';
          }

          _this.animateElem();
        });
      }, this.delay * 1000);
    }
  }, {
    key: "animateElem",
    value: function animateElem() {
      if (!document.querySelector(this.element)) return;
      gsap__WEBPACK_IMPORTED_MODULE_0__["TweenMax"].to(this.element, 1, {
        translateX: -this.x.coordinate + window.innerWidth / 2,
        ease: gsap__WEBPACK_IMPORTED_MODULE_0__["Power1"].Circ
      });
    }
  }, {
    key: "onInit",
    value: function onInit() {}
  }]);

  return MainWords;
}();

/* harmony default export */ __webpack_exports__["default"] = (mainWords);

/***/ }),

/***/ "./src/blocks/modules/vacancies-tabs/vacancies-tabs.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/vacancies-tabs/vacancies-tabs.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! accordion-js */ "./node_modules/accordion-js/dist/accordion.min.js");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(accordion_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var vacanciesTabs = /*#__PURE__*/function () {
  function vacanciesTabs() {
    _classCallCheck(this, vacanciesTabs);
  }

  _createClass(vacanciesTabs, [{
    key: "init",
    value: function init() {
      if (!document.querySelector('.vacancies-tabs-items')) return;
      new accordion_js__WEBPACK_IMPORTED_MODULE_0___default.a('.vacancies-tabs-items', {
        duration: 400,
        showMultiple: true,
        elementClass: 'vacancies-tabs-item',
        triggerClass: 'vacancies-tabs-item-title',
        panelClass: 'vacancies-tabs-item-body',
        // openOnInit: [0],
        beforeOpen: function beforeOpen(currentElement) {
          gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(currentElement.querySelector('.vacancies-tabs-item-body'), 1, {
            heigth: currentElement.querySelector('.vacancies-tabs-item-body').offsetHeight
          });
        }
      });
    }
  }]);

  return vacanciesTabs;
}();

/* harmony default export */ __webpack_exports__["default"] = (vacanciesTabs);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_main_words_main_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/main-words/main-words */ "./src/blocks/modules/main-words/main-words.js");
/* harmony import */ var _modules_main_web_main_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/main-web/main-web */ "./src/blocks/modules/main-web/main-web.js");
/* harmony import */ var _modules_main_about_main_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/main-about/main-about */ "./src/blocks/modules/main-about/main-about.js");
/* harmony import */ var _modules_main_carousel_main_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/main-carousel/main-carousel */ "./src/blocks/modules/main-carousel/main-carousel.js");
/* harmony import */ var _modules_main_news_and_trends_main_news_and_trends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/main-news-and-trends/main-news-and-trends */ "./src/blocks/modules/main-news-and-trends/main-news-and-trends.js");
/* harmony import */ var _modules_main_cases_main_cases__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/main-cases/main-cases */ "./src/blocks/modules/main-cases/main-cases.js");
/* harmony import */ var _modules_cursor_animation_cursor_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/cursor-animation/cursor-animation */ "./src/blocks/modules/cursor-animation/cursor-animation.js");
/* harmony import */ var _modules_company_video_company_video__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/company-video/company-video */ "./src/blocks/modules/company-video/company-video.js");
/* harmony import */ var _modules_company_principles_company_principles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/company-principles/company-principles */ "./src/blocks/modules/company-principles/company-principles.js");
/* harmony import */ var _modules_company_partners_company_partners__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/company-partners/company-partners */ "./src/blocks/modules/company-partners/company-partners.js");
/* harmony import */ var _modules_company_reviews_company_reviews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/company-reviews/company-reviews */ "./src/blocks/modules/company-reviews/company-reviews.js");
/* harmony import */ var _modules_company_team_company_team__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/company-team/company-team */ "./src/blocks/modules/company-team/company-team.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_main_question_main_question__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/main-question/main-question */ "./src/blocks/modules/main-question/main-question.js");
/* harmony import */ var _modules_company_about_company_about__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/company-about/company-about */ "./src/blocks/modules/company-about/company-about.js");
/* harmony import */ var _modules_company_raiting_company_raiting__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/company-raiting/company-raiting */ "./src/blocks/modules/company-raiting/company-raiting.js");
/* harmony import */ var _modules_career_blocks_career_blocks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/career-blocks/career-blocks */ "./src/blocks/modules/career-blocks/career-blocks.js");
/* harmony import */ var _modules_career_blog_career_blog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/career-blog/career-blog */ "./src/blocks/modules/career-blog/career-blog.js");
/* harmony import */ var _modules_vacancies_tabs_vacancies_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! %modules%/vacancies-tabs/vacancies-tabs */ "./src/blocks/modules/vacancies-tabs/vacancies-tabs.js");
/* harmony import */ var _modules_job_info_job_info__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! %modules%/job-info/job-info */ "./src/blocks/modules/job-info/job-info.js");
/* harmony import */ var _modules_job_team_job_team__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! %modules%/job-team/job-team */ "./src/blocks/modules/job-team/job-team.js");
/* harmony import */ var _modules_job_stages_job_stages__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! %modules%/job-stages/job-stages */ "./src/blocks/modules/job-stages/job-stages.js");
/* harmony import */ var _modules_application_form_application_form__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! %modules%/application-form/application-form */ "./src/blocks/modules/application-form/application-form.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_cookie_form_cookie_form__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! %modules%/cookie-form/cookie-form */ "./src/blocks/modules/cookie-form/cookie-form.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");























 // import postInfo from "%modules%/posts-info/posts-info";
// import postBlog from "%modules%/posts-blog/posts-blog";





gsap__WEBPACK_IMPORTED_MODULE_26__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_27__["ScrollTrigger"]);
window.app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#app',
  data: function data() {
    return {
      mainWeb: new _modules_main_web_main_web__WEBPACK_IMPORTED_MODULE_2__["default"]({
        element: '.web-tentacle',
        trigger: '.first-frame'
      }),
      mainCases: new _modules_main_cases_main_cases__WEBPACK_IMPORTED_MODULE_6__["default"]({
        itemsClass: '.main-cases-item'
      }),
      mainQuestionForm: new _modules_main_question_main_question__WEBPACK_IMPORTED_MODULE_14__["default"]({
        inputSelector: '.main-question-form-item [type="file"]',
        textSelector: '.main-question-form-item span'
      }),
      companyPrinciples: new _modules_company_principles_company_principles__WEBPACK_IMPORTED_MODULE_9__["default"](),
      companyVideo: new _modules_company_video_company_video__WEBPACK_IMPORTED_MODULE_8__["default"](),
      companyPartners: new _modules_company_partners_company_partners__WEBPACK_IMPORTED_MODULE_10__["default"](),
      companyTeam: new _modules_company_team_company_team__WEBPACK_IMPORTED_MODULE_12__["default"](),
      careerBlog: new _modules_career_blog_career_blog__WEBPACK_IMPORTED_MODULE_18__["default"](),
      companyReviews: new _modules_company_reviews_company_reviews__WEBPACK_IMPORTED_MODULE_11__["default"](),
      header: new _modules_header_header__WEBPACK_IMPORTED_MODULE_13__["default"](),
      companyAbout: new _modules_company_about_company_about__WEBPACK_IMPORTED_MODULE_15__["default"]({
        selector: '.company-about:not(.company-about__title)'
      }),
      companyRaiting: new _modules_company_raiting_company_raiting__WEBPACK_IMPORTED_MODULE_16__["default"](),
      vacanciesTabs: new _modules_vacancies_tabs_vacancies_tabs__WEBPACK_IMPORTED_MODULE_19__["default"](),
      careerBlocks: new _modules_career_blocks_career_blocks__WEBPACK_IMPORTED_MODULE_17__["default"](),
      jobInfo: new _modules_job_info_job_info__WEBPACK_IMPORTED_MODULE_20__["default"](),
      jobTeam: new _modules_job_team_job_team__WEBPACK_IMPORTED_MODULE_21__["default"](),
      jobStages: new _modules_job_stages_job_stages__WEBPACK_IMPORTED_MODULE_22__["default"](),
      footer: new _modules_footer_footer__WEBPACK_IMPORTED_MODULE_24__["default"](),
      cookiesForm: new _modules_cookie_form_cookie_form__WEBPACK_IMPORTED_MODULE_25__["default"](),
      isMounted: false,
      isPreloaderHidden: false,
      sizes: {
        window: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      },
      isSafary: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    var preloader = document.querySelector('.preloader svg animateTransform');
    preloader.addEventListener('endEvent', function () {
      _this.isPreloaderHidden = true;
    });
    setTimeout(function () {
      _this.isMounted = true;

      _this.mainCases.init(); // this.mainWords.countPosition();


      _this.mainWeb.animateElement(); // this.mainAbout.animateCircle();
      // this.mainAbout.initVideoOpening();
      // this.cursorAnimation.init();
      // this.mainCarousel.init();
      // this.newsAndTrends.init();


      _this.header.init();

      _this.companyVideo.init();

      _this.companyPrinciples.init();

      _this.companyPartners.init({
        sliderClass: '.glide'
      });

      _this.companyReviews.init({
        sliderClass: '.glide'
      });

      _this.companyRaiting.init();

      _this.companyTeam.init();

      _this.mainQuestionForm.init();

      _this.companyAbout.init();

      _this.careerBlocks.init();

      _this.careerBlog.init();

      _this.vacanciesTabs.init();

      _this.jobInfo.init();

      _this.jobTeam.init();

      _this.jobStages.init();

      _this.cookiesForm.init(); // this.applicationForm.init();


      window.addEventListener('resize', function () {
        _this.window = {
          width: window.innerWidth,
          height: window.innerHeight
        };
      }); // window.addEventListener('resize', () => this.cursorAnimation.updateCanvasSize());
      // document.addEventListener('mousemove', (event) => {
      //     this.cursorAnimation.animate({
      //         x: event.pageX,
      //         y: event.pageY,
      //     })
      // });

      window.addEventListener("orientationchange", function (event) {
        location.reload();
      });
      document.querySelector('.footer-bank .copy').addEventListener('click', function () {
        return _this.footer.copyText({
          text: 'ИНН/КПП: 6317139806/631701001 Банк: АО "Тинькофф Банк" БИК: 044525974 Р/С: 40702810010000559615 Р/С: 40702810010000559615'
        });
      });
      _this.isSafary = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }, 250);
    setTimeout(this.animateTitles(), 500);
  },
  computed: {
    window: {
      get: function get() {
        return {
          width: this.sizes.window.width,
          height: this.sizes.window.height
        };
      },
      set: function set(newValue) {
        this.sizes.window = newValue;
      }
    }
  },
  methods: {
    buttonMouseEnter: function buttonMouseEnter(event) {
      var x = event.offsetX;
      var y = event.offsetY;
      var circle = document.createElement("div");
      circle.classList.add('button-circle');
      event.target.appendChild(circle);
      event.target.children[1].style.left = x + 'px';
      event.target.children[1].style.top = y + 'px';
      gsap__WEBPACK_IMPORTED_MODULE_26__["default"].to(event.target.children[1], 0.5, {
        width: 800,
        height: 800,
        x: -400,
        y: -400
      });
    },
    buttonMouseLeave: function buttonMouseLeave(event) {
      var x = event.offsetX;
      var y = event.offsetY;
      event.target.children[1].style.left = x + 'px';
      event.target.children[1].style.top = y + 'px';
      gsap__WEBPACK_IMPORTED_MODULE_26__["default"].to(event.target.children[1], 0.3, {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        onComplete: function onComplete() {
          event.target.removeChild(event.target.children[1]);
        }
      });
    },
    animateTitles: function animateTitles() {
      if (document.querySelectorAll(".animated-title")) {
        document.querySelectorAll(".animated-title").forEach(function (item, i) {
          gsap__WEBPACK_IMPORTED_MODULE_26__["default"].to(item, {
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: "bottom+=".concat(window.innerHeight, " bottom"),
              // end: `top-=${window.innerHeight} top-=${window.innerHeight}`,
              // markers: true,
              onUpdate: function onUpdate(item) {
                if (item.progress > 0.1) {
                  gsap__WEBPACK_IMPORTED_MODULE_26__["default"].to(item.trigger, 2.5, {
                    transform: "translateX(".concat(-item.progress * 200 + 100, "%)")
                  });
                } else {
                  gsap__WEBPACK_IMPORTED_MODULE_26__["default"].to(item.trigger, 2.5, {
                    transform: "translateX(120%)"
                  });
                }
              }
            },
            opacity: '1' // x: '-100%'

          });
        });
      }

      if (document.querySelectorAll(".animated-title-top")) {
        document.querySelectorAll(".animated-title-top").forEach(function (item, i) {
          if (window.innerWidth > 1023) {
            gsap__WEBPACK_IMPORTED_MODULE_26__["default"].to(item, {
              scrollTrigger: {
                trigger: item,
                start: 'top center+=100',
                end: "bottom+=".concat(window.innerHeight, " bottom"),
                // end: `top-=${window.innerHeight} top-=${window.innerHeight}`,
                // markers: true,
                onUpdate: function onUpdate(item) {
                  if (item.progress > 0.1) {
                    gsap__WEBPACK_IMPORTED_MODULE_26__["default"].to(item.trigger, 2.5, {
                      transform: "translateX(".concat(-item.progress * 200 + 100, "%)")
                    });
                  } else {
                    gsap__WEBPACK_IMPORTED_MODULE_26__["default"].to(item.trigger, 2.5, {
                      transform: "translateX(120%)"
                    });
                  }
                }
              },
              opacity: '1' // x: '-100%'

            });
          } else {
            gsap__WEBPACK_IMPORTED_MODULE_26__["default"].to(item, {
              scrollTrigger: {
                trigger: item,
                start: 'top top+=325',
                end: "bottom+=400 top+=325",
                // end: `top-=${window.innerHeight} top-=${window.innerHeight}`,
                // markers: true,
                onUpdate: function onUpdate(item) {
                  if (item.progress > 0.1) {
                    gsap__WEBPACK_IMPORTED_MODULE_26__["default"].to(item.trigger, 2.5, {
                      transform: "translateX(".concat(-item.progress * 200 + 100, "%)")
                    });
                  } else {
                    gsap__WEBPACK_IMPORTED_MODULE_26__["default"].to(item.trigger, 2.5, {
                      transform: "translateX(120%)"
                    });
                  }
                }
              },
              opacity: '1' // x: '-100%'

            });
          }
        });
      }

      setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
      }, 500);
    }
  }
});

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=main.js.map