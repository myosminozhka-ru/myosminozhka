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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/blocks/modules/main-cases/module.cases-filter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/main-cases/module.cases-filter.js":
/*!**************************************************************!*\
  !*** ./src/blocks/modules/main-cases/module.cases-filter.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CasesFilter = /*#__PURE__*/function () {
  function CasesFilter() {
    _classCallCheck(this, CasesFilter);
    this.btns = document.querySelectorAll('[data-cases-filter-btn]');
    this.items = document.querySelectorAll('[data-cases-filter-item]');
    this.activeId = -1;
  }
  _createClass(CasesFilter, [{
    key: "onInit",
    value: function onInit() {
      this.findActiveBtn();
      this.onClickBtn();
    }
  }, {
    key: "findActiveBtn",
    value: function findActiveBtn() {
      var _Array$from$filter$at;
      this.activeId = ((_Array$from$filter$at = Array.from(this.btns).filter(function (btn) {
        return btn.classList.contains('active');
      }).at(-1)) === null || _Array$from$filter$at === void 0 ? void 0 : _Array$from$filter$at.dataset.casesFilterBtn) || -1;
      this.onFilter();
    }
  }, {
    key: "onFilter",
    value: function onFilter() {
      var _this = this;
      if (this.activeId === -1) {
        this.items.forEach(function (item) {
          item.style.display = 'block';
        });
      } else {
        Array.from(this.items).map(function (item) {
          item.style.display = item.dataset.casesFilterItem.includes(_this.activeId) ? 'block' : 'none';
          return item;
        });
      }
    }
  }, {
    key: "onClickBtn",
    value: function onClickBtn() {
      var _this2 = this;
      this.btns.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
          var _Array$from$filter$at2, _event$target$closest;
          (_Array$from$filter$at2 = Array.from(_this2.btns).filter(function (btn) {
            return btn.classList.contains('active');
          }).at(-1)) === null || _Array$from$filter$at2 === void 0 ? void 0 : _Array$from$filter$at2.classList.remove('active');
          event.target.closest('.btn').classList.add('active');
          _this2.activeId = parseInt((_event$target$closest = event.target.closest('.btn')) === null || _event$target$closest === void 0 ? void 0 : _event$target$closest.dataset.casesFilterBtn) || -1;
          _this2.onFilter();
        });
      });
    }
  }]);
  return CasesFilter;
}();
var casesFilter = new CasesFilter();
casesFilter.onInit();

/***/ })

/******/ });
//# sourceMappingURL=cases-filter.js.map