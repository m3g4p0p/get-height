(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["getHeight"] = factory();
	else
		root["getHeight"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: getHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeight", function() { return getHeight; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.ts");

const getHeight = (element, includeMargins = true) => {
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isHidden"])(element)) {
        return Promise.resolve(Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOuterHeight"])(element, includeMargins));
    }
    const wrapper = document.createElement('div');
    const { hidden, style: { display } } = element;
    Object.assign(wrapper.style, {
        height: 0,
        margin: 0,
        padding: 0,
        overflow: 'hidden'
    });
    return Object(_util__WEBPACK_IMPORTED_MODULE_0__["nextFrame"])(() => {
        wrapper.appendChild(Object(_util__WEBPACK_IMPORTED_MODULE_0__["replaceWith"])(element, wrapper));
        element.style.display = 'block';
        element.hidden = false;
    }).then(() => Object(_util__WEBPACK_IMPORTED_MODULE_0__["nextFrame"])(() => {
        const height = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOuterHeight"])(element, includeMargins);
        element.style.display = display;
        element.hidden = hidden;
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["replaceWith"])(wrapper, element);
        return height;
    }));
};


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! exports provided: nextFrame, replaceWith, isHidden, addFloat, getOuterHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextFrame", function() { return nextFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceWith", function() { return replaceWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHidden", function() { return isHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFloat", function() { return addFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOuterHeight", function() { return getOuterHeight; });
const nextFrame = (callback) => new Promise(resolve => window.requestAnimationFrame(now => resolve(callback ? callback(now) : now)));
const replaceWith = (oldChild, newChild) => {
    const { parentNode } = oldChild;
    if (!parentNode) {
        throw new ReferenceError('The old child has no parent node!');
    }
    parentNode.insertBefore(newChild, oldChild);
    parentNode.removeChild(oldChild);
    return oldChild;
};
const isHidden = (element) => element.hidden || window.getComputedStyle(element).display === 'none';
const addFloat = (...values) => values.reduce((sum, value) => sum + parseFloat(value), 0);
const getOuterHeight = (element, includeMargins) => {
    const { height, marginTop, marginBottom, paddingTop, paddingBottom, boxSizing } = window.getComputedStyle(element);
    const values = [height];
    if (includeMargins) {
        values.push(marginTop, marginBottom);
    }
    if (boxSizing !== 'border-box') {
        values.push(paddingTop, paddingBottom);
    }
    return addFloat(...values);
};


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZXRIZWlnaHQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2dldEhlaWdodC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nZXRIZWlnaHQvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ2V0SGVpZ2h0Ly4vc3JjL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRnlFO0FBRWxFLE1BQU0sU0FBUyxHQUFHLENBQUMsT0FBb0IsRUFBRSxpQkFBMEIsSUFBSSxFQUFtQixFQUFFO0lBQ2pHLElBQUksQ0FBQyxzREFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ3RCLE9BQU8sT0FBTyxDQUFD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UyxLQUFLLFlBQVksRUFBRTtRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUM7S0FDdkM7SUFFRCxPQUFPLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUM1QixDQUFDIiwiZmlsZSI6ImdldC1oZWlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJnZXRIZWlnaHRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZ2V0SGVpZ2h0XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IG5leHRGcmFtZSwgcmVwbGFjZVdpdGgsIGdldE91dGVySGVpZ2h0LCBpc0hpZGRlbiB9IGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IGNvbnN0IGdldEhlaWdodCA9IChlbGVtZW50OiBIVE1MRWxlbWVudCwgaW5jbHVkZU1hcmdpbnM6IGJvb2xlYW4gPSB0cnVlKTogUHJvbWlzZTxudW1iZXI+ID0+IHtcbiAgaWYgKCFpc0hpZGRlbihlbGVtZW50KSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZ2V0T3V0ZXJIZWlnaHQoZWxlbWVudCwgaW5jbHVkZU1hcmdpbnMpKVxuICB9XG5cbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHsgaGlkZGVuLCBzdHlsZTogeyBkaXNwbGF5IH0gfSA9IGVsZW1lbnRcblxuICBPYmplY3QuYXNzaWduKHdyYXBwZXIuc3R5bGUsIHtcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0pXG5cbiAgcmV0dXJuIG5leHRGcmFtZSgoKSA9PiB7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChyZXBsYWNlV2l0aChlbGVtZW50LCB3cmFwcGVyKSlcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgZWxlbWVudC5oaWRkZW4gPSBmYWxzZVxuICB9KS50aGVuKCgpID0+IG5leHRGcmFtZSgoKSA9PiB7XG4gICAgY29uc3QgaGVpZ2h0ID0gZ2V0T3V0ZXJIZWlnaHQoZWxlbWVudCwgaW5jbHVkZU1hcmdpbnMpXG5cbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgZWxlbWVudC5oaWRkZW4gPSBoaWRkZW5cbiAgICByZXBsYWNlV2l0aCh3cmFwcGVyLCBlbGVtZW50KVxuXG4gICAgcmV0dXJuIGhlaWdodFxuICB9KSlcbn1cbiIsImV4cG9ydCBjb25zdCBuZXh0RnJhbWUgPSAoY2FsbGJhY2s6IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+ID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShub3cgPT5cbiAgICByZXNvbHZlKGNhbGxiYWNrID8gY2FsbGJhY2sobm93KSA6IG5vdykpKVxuXG5leHBvcnQgY29uc3QgcmVwbGFjZVdpdGggPSAob2xkQ2hpbGQ6IE5vZGUsIG5ld0NoaWxkOiBOb2RlKTogTm9kZSA9PiB7XG4gIGNvbnN0IHsgcGFyZW50Tm9kZSB9ID0gb2xkQ2hpbGRcblxuICBpZiAoIXBhcmVudE5vZGUpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoJ1RoZSBvbGQgY2hpbGQgaGFzIG5vIHBhcmVudCBub2RlIScpXG4gIH1cblxuICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdDaGlsZCwgb2xkQ2hpbGQpXG4gIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob2xkQ2hpbGQpXG5cbiAgcmV0dXJuIG9sZENoaWxkXG59XG5cbmV4cG9ydCBjb25zdCBpc0hpZGRlbiA9IChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4gPT5cbiAgZWxlbWVudC5oaWRkZW4gfHwgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSA9PT0gJ25vbmUnXG5cbmV4cG9ydCBjb25zdCBhZGRGbG9hdCA9ICguLi52YWx1ZXM6IHN0cmluZ1tdKTogbnVtYmVyID0+XG4gIHZhbHVlcy5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArIHBhcnNlRmxvYXQodmFsdWUpLCAwKVxuXG5leHBvcnQgY29uc3QgZ2V0T3V0ZXJIZWlnaHQgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIGluY2x1ZGVNYXJnaW5zOiBib29sZWFuKTogbnVtYmVyID0+IHtcbiAgY29uc3Qge1xuICAgIGhlaWdodCxcbiAgICBtYXJnaW5Ub3AsXG4gICAgbWFyZ2luQm90dG9tLFxuICAgIHBhZGRpbmdUb3AsXG4gICAgcGFkZGluZ0JvdHRvbSxcbiAgICBib3hTaXppbmdcbiAgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG5cbiAgY29uc3QgdmFsdWVzID0gW2hlaWdodF1cblxuICBpZiAoaW5jbHVkZU1hcmdpbnMpIHtcbiAgICB2YWx1ZXMucHVzaChtYXJnaW5Ub3AsIG1hcmdpbkJvdHRvbSlcbiAgfVxuXG4gIGlmIChib3hTaXppbmcgIT09ICdib3JkZXItYm94Jykge1xuICAgIHZhbHVlcy5wdXNoKHBhZGRpbmdUb3AsIHBhZGRpbmdCb3R0b20pXG4gIH1cblxuICByZXR1cm4gYWRkRmxvYXQoLi4udmFsdWVzKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==