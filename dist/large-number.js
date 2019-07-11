(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["largeNumber"] = factory();
	else
		root["largeNumber"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/** 
  * 大数据求和：
  * 按位相加，至到结束。即个位相加、十位相加、百位相加....
  * num1         String
  * num2         String
  * return       String
**/
function add(strNum1, strNum2) {
  // 1. 检查是否是字段串。
  // 2. 获取两个字符串的位数(num1Len, num2Len)，以较长的作为循环次数，开始循环：
  //   1. 截取较长字符串的每一位，转为数值型num1。
  //   2. 截取较短字符串的每一位，转为数值型num2。截取不到，则为0。
  //   3. 截取的两数相加，存入数组sum中。
  // 3. 循环sum中每一项，转换为数值类型(total)，并返回。
  if (!checkIsString([strNum1, strNum2])) {
    throw new Error('parameters must be String');
  }

  const num1Len = strNum1.length;
  const num2Len = strNum2.length;
  const loop = num1Len > num2Len ? num1Len : num2Len;

  let sum = '';
  let carry = 0;
  for (let i = 0; i < loop; i++) {
    // 问题：更好的方式是使用while循环，通过下标取每个字符串的值。
    const strNum1Item = strNum1.slice(i, i + 1) || 0;
    const strNum2Item = strNum2.slice(i, i + 1) || 0;
    // 问题：也可以通过字符串减0（'2' - 0），隐式类型转换为数值类型。
    const num1Item = parseInt(strNum1Item);
    const num2Item = parseInt(strNum2Item);

    let sumItem = num1Item + num2Item + carry;

    // 处理大于9的情况，进位问题。
    if (sumItem > 9) {
      sumItem = sumItem - 10; // 问题：这里不需要取余，直接减10就可以。
      carry = 1;
    }

    sum += sumItem; // 问题：这里不需要toString()，因为sum初始化时就是String
  }

  if (carry) {
    sum = carry + sum;
  }

  return sum;
}

function checkIsString(arrNum) {
  return arrNum.every(num => typeof num === 'string');
}

/***/ })
/******/ ]);
});