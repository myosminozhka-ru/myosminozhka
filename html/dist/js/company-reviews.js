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
/******/ 		"company-reviews": 0
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
/******/ 	deferredModules.push(["./src/blocks/modules/company-reviews/module.company-reviews.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/company-reviews/module.company-reviews.js":
/*!**********************************************************************!*\
  !*** ./src/blocks/modules/company-reviews/module.company-reviews.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var CompanyReviews = /*#__PURE__*/function () {
  function CompanyReviews() {
    var _this$companyReviewsM, _this$companyReviewsM2, _this$companyReviewsM3;
    _classCallCheck(this, CompanyReviews);
    this.slider;
    this.translate = 0;
    this.index = 0;
    this.elementWidth = 0;
    this.allElementsWidth = 0;
    this.className = 'company-reviews-item-stage-2';
    this.companyReviewsItems = document.querySelectorAll(".".concat(this.className));
    this.companyReviewsModal = document.querySelector('.company-reviews-item-modal');
    this.companyReviewsModalClose = (_this$companyReviewsM = this.companyReviewsModal) === null || _this$companyReviewsM === void 0 ? void 0 : _this$companyReviewsM.querySelector('.company-reviews-item-modal__close');
    this.companyReviewsModalName = (_this$companyReviewsM2 = this.companyReviewsModal) === null || _this$companyReviewsM2 === void 0 ? void 0 : _this$companyReviewsM2.querySelector('.company-reviews-item-modal__name');
    this.companyReviewsModalText = (_this$companyReviewsM3 = this.companyReviewsModal) === null || _this$companyReviewsM3 === void 0 ? void 0 : _this$companyReviewsM3.querySelector('.company-reviews-item-modal__text');
  }
  _createClass(CompanyReviews, [{
    key: "onInit",
    value: function onInit() {
      this.onInitSlider();
      this.onClickShowMore();
      this.onClickCloseModal();
      this.onClickCompanyReviewsModal();
    }

    /**
     * Ширина слайда
     */
  }, {
    key: "countElementWidth",
    value: function countElementWidth() {
      this.elementWidth = document.querySelector(".".concat(this.className, ":not(glide__slide--active)")).offsetWidth + 100;
    }

    /**
     * Инициализация слайдера
     */
  }, {
    key: "onInitSlider",
    value: function onInitSlider() {
      if (!document.querySelector('.company-reviews__slider')) return;
      this.slider = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"]('.company-reviews__slider', {
        type: 'carousel',
        startAt: 1,
        perView: 1.5,
        gap: 100,
        breakpoints: {
          1023: {
            perView: 1
          }
        }
      });
      if (window.innerWidth > 1023) {
        this.slider.mount();
        this.index = this.slider.index;
        this.countElementWidth();
      } else {
        this.slider.mount();
      }
    }

    /**
     * Действия при клике на кнопку "Показать полностью"
     */
  }, {
    key: "onClickShowMore",
    value: function onClickShowMore() {
      var self = this;
      this.companyReviewsItems.forEach(function (item) {
        var showMore = item.querySelector(".".concat(self.className, "__show-more"));
        showMore.addEventListener('click', function () {
          var name = this.closest(".".concat(self.className)).querySelector(".".concat(self.className, "__name")).innerHTML;
          var text = this.closest(".".concat(self.className)).querySelector(".".concat(self.className, "__text")).innerHTML;
          if (self.companyReviewsModal) {
            self.companyReviewsModalName.innerHTML = name;
            self.companyReviewsModalText.innerHTML = text;
            self.companyReviewsModal.classList.add('company-reviews-item-modal--is-active');
            document.querySelector('body').style.overflow = 'hidden';
          }
        });
      });
    }

    /**
     * Действия при закрытии модально окна
     */
  }, {
    key: "onCloseModal",
    value: function onCloseModal() {
      this.companyReviewsModal.classList.remove('company-reviews-item-modal--is-active');
      document.querySelector('body').style.overflow = '';
      this.companyReviewsModalName.innerHTML = '';
      this.companyReviewsModalText.innerHTML = '';
    }

    /**
     * Действие при клике по кнопке закрыть модальное окно
     */
  }, {
    key: "onClickCloseModal",
    value: function onClickCloseModal() {
      var self = this;
      self.companyReviewsModalClose.addEventListener('click', function () {
        self.onCloseModal();
      });
    }

    /**
     * Клик вне белого модального окна
     */
  }, {
    key: "onClickCompanyReviewsModal",
    value: function onClickCompanyReviewsModal() {
      var self = this;
      document.addEventListener('click', function (e) {
        var openCompanyReviewsItemModal = this.querySelector('.company-reviews-item-modal--is-active');
        if (openCompanyReviewsItemModal && !e.target.classList.contains("".concat(self.className, "__show-more")) && !e.target.classList.contains('company-reviews-item-modal__content') && !e.target.closest('.company-reviews-item-modal__content')) {
          self.onCloseModal();
        }
      });
    }
  }]);
  return CompanyReviews;
}();
var companyReviews = new CompanyReviews();
companyReviews.onInit();

/***/ })

/******/ });
//# sourceMappingURL=company-reviews.js.map