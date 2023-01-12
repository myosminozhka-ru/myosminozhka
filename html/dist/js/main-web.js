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
/******/ 		"main-web": 0
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
/******/ 	deferredModules.push(["./src/blocks/modules/main-web/module.main-web.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/main-web/module.main-web.js":
/*!********************************************************!*\
  !*** ./src/blocks/modules/main-web/module.main-web.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_commonVue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/commonVue.js */ "./src/js/commonVue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["ScrollTrigger"]);
window.mainWeb = new vue__WEBPACK_IMPORTED_MODULE_1___default.a({
  el: '#main-web',
  data: function data() {
    return {
      // element: '.web-tentacle',
      // trigger: '.first-frame',
      // slider: null,
      isSafary: null
    };
  },
  mounted: function mounted() {
    var _this = this;
    setTimeout(function () {
      _this.isSafary = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

      // this.onInit()

      // window.addEventListener('resize', () => this.onInit())           
    }, 0);
  },
  methods: {
    // onInit() {
    //     // if (document.querySelector('.web-slider')) {
    //     //     this.slider = new Glide('.web-slider', {
    //     //         type: 'carousel',
    //     //         startAt: 1,
    //     //         perView: 1,
    //     //         gap: 0,
    //     //     });
    //     // }

    //     // this.animateElement()
    // },

    // mobileSlider() {
    //     if (!this.slider) return;
    //     if (window.innerWidth < 1023) {
    //         this.slider.mount();
    //     } else {
    //         this.slider.destroy();
    //     }
    // },

    // animateElement() {
    //     this.mobileSlider();
    //     if (!document.querySelector('.web-right-image')) return;
    //     gsap.utils.toArray(".web-right-image").forEach((item, i) => {
    //         ScrollTrigger.create({
    //             trigger: item,
    //             start: "top center", 
    //             end: 'bottom bottom',
    //             // scrub: 4,
    //             // markers: true,
    //             // pin: true, 
    //             // pinSpacing: false,
    //             // snap: 1,
    //             onUpdate: (item) => {
    //                 if (item.progress > 0) {
    //                     if (document.querySelector(`.web-subtitles`)) {
    //                         document.querySelectorAll(`.web-subtitle`).forEach(item => {
    //                             item.classList.remove('isActive');
    //                         })
    //                         document.querySelector(`.web-subtitle[data-item-id="${item.trigger.dataset.itemId}"]`).classList.add('isActive');
    //                     }
    //                     if (document.querySelector(`.web-titles`)) {
    //                         document.querySelectorAll(`.web-title`).forEach(item => {
    //                             item.classList.remove('isActive');
    //                         })
    //                         document.querySelector(`.web-title[data-item-id="${item.trigger.dataset.itemId}"]`).classList.add('isActive');
    //                     }
    //                     if (document.querySelector(`.web-texts`)) {
    //                         document.querySelectorAll(`.web-text`).forEach(item => {
    //                             item.classList.remove('isActive');
    //                         })
    //                         document.querySelector(`.web-text[data-item-id="${item.trigger.dataset.itemId}"]`).classList.add('isActive');
    //                     }
    //                     if (document.querySelector(`.web-buttons`)) {
    //                         document.querySelectorAll(`.web-button`).forEach(item => {
    //                             item.classList.remove('isActive');
    //                         })
    //                         document.querySelector(`.web-button[data-item-id="${item.trigger.dataset.itemId}"]`).classList.add('isActive');
    //                     }
    //                 }
    //             }
    //         });
    //     });
    //     gsap.to('.web-data-in', {
    //         scrollTrigger: {
    //             trigger: '.web-data',
    //             start: 'top top',
    //             end: 'bottom bottom',
    //             scrub: 1,
    //             pin: true,
    //             pinSpacing: false
    //             // markers: true
    //         },
    //         x: 0,
    //     })
    // }
  }
});
var MainWeb = /*#__PURE__*/function () {
  function MainWeb() {
    _classCallCheck(this, MainWeb);
    this.slider;
    this.element = '.web-tentacle';
    this.trigger = '.first-frame';
  }
  _createClass(MainWeb, [{
    key: "onInit",
    value: function onInit() {
      this.onInitSlider();
      this.animateElement();
    }

    /**
     * Инициализация слайдера
     */
  }, {
    key: "onInitSlider",
    value: function onInitSlider() {
      if (!document.querySelector('.web-slider')) return;
      this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__["default"]('.web-slider', {
        type: 'carousel',
        startAt: 1,
        perView: 1,
        gap: 0
      });
      if (window.innerWidth < 1023) {
        this.slider.mount();
      }
    }

    /**
     * Анимация колонок
     */
  }, {
    key: "animateElement",
    value: function animateElement() {
      if (!document.querySelector('.web-right-image') || window.innerWidth < 1023) return;
      gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].utils.toArray(".web-right-image").forEach(function (item, i) {
        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["ScrollTrigger"].create({
          trigger: item,
          start: "top center",
          end: 'bottom bottom',
          onUpdate: function onUpdate(item) {
            if (item.progress > 0) {
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
      gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to('.web-data-in', {
        scrollTrigger: {
          trigger: '.web-data',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: true,
          pinSpacing: false
          // markers: true
        },

        x: 0
      });
    }
  }]);
  return MainWeb;
}();
var mainWebClass = new MainWeb();
mainWebClass.onInit();

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
//# sourceMappingURL=main-web.js.map