"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************************************************************!*\
  !*** E:/code/TeachApp/main.js?{"page":"pages%2Fcourse%2FsubNVue%2Fvideo"} ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_course_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/course/subNVue/video.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_course_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_course_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/course/subNVue/video'\n        _pages_course_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_course_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBdUU7QUFDdkUsUUFBUSxvRkFBRztBQUNYLFFBQVEsb0ZBQUc7QUFDWCxRQUFRLG9GQUFHO0FBQ1gsZ0JBQWdCLG9GQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9jb3Vyc2Uvc3ViTlZ1ZS92aWRlby5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9jb3Vyc2Uvc3ViTlZ1ZS92aWRlbydcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************************************!*\
  !*** E:/code/TeachApp/main.js?{"type":"appStyle"} ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!****************************************************************!*\
  !*** E:/code/TeachApp/App.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/TeachApp/App.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".center": {
    "": {
      "alignItems": [
        "center",
        0,
        0,
        2
      ],
      "justifyContent": [
        "center",
        0,
        0,
        2
      ]
    }
  },
  ".row": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        3
      ]
    }
  },
  ".column": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        4
      ]
    }
  },
  ".space-between": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        5
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        5
      ]
    }
  },
  ".one": {
    "": {
      "flex": [
        1,
        0,
        0,
        6
      ]
    }
  },
  ".placeholder": {
    "": {
      "color": [
        "#999999",
        1,
        0,
        8
      ]
    }
  },
  ".text-ellipsis": {
    "": {
      "overflow": [
        "hidden",
        0,
        0,
        13
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        13
      ],
      "WebkitLineClamp": [
        2,
        0,
        0,
        13
      ],
      "WebkitBoxOrient": [
        "vertical",
        0,
        0,
        13
      ],
      "whiteSpace": [
        "normal",
        0,
        0,
        13
      ]
    }
  },
  ".mask": {
    "": {
      "zIndex": [
        99,
        0,
        0,
        15
      ],
      "position": [
        "fixed",
        0,
        0,
        15
      ],
      "top": [
        0,
        0,
        0,
        15
      ],
      "left": [
        0,
        0,
        0,
        15
      ],
      "right": [
        0,
        0,
        0,
        15
      ],
      "bottom": [
        0,
        0,
        0,
        15
      ],
      "backgroundColor": [
        "rgba(0,0,0,0.7)",
        0,
        0,
        15
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */
/*!********************************************************************!*\
  !*** E:/code/TeachApp/pages/course/subNVue/video.nvue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video_nvue_vue_type_template_id_6a50de76_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.nvue?vue&type=template&id=6a50de76&mpType=page */ 6);\n/* harmony import */ var _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 25).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 25).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _video_nvue_vue_type_template_id_6a50de76_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _video_nvue_vue_type_template_id_6a50de76_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"dff63d0e\",\n  false,\n  _video_nvue_vue_type_template_id_6a50de76_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/course/subNVue/video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQytMO0FBQy9MLGdCQUFnQix3TUFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhNTBkZTc2Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWC4zLjguNy4yMDIzMDcwM1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiZGZmNjNkMGVcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY291cnNlL3N1Yk5WdWUvdmlkZW8ubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**************************************************************************************************!*\
  !*** E:/code/TeachApp/pages/course/subNVue/video.nvue?vue&type=template&id=6a50de76&mpType=page ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_6a50de76_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=template&id=6a50de76&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_6a50de76_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_6a50de76_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_6a50de76_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_6a50de76_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/TeachApp/pages/course/subNVue/video.nvue?vue&type=template&id=6a50de76&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["video-box"] },
    [
      _c("view", { style: { height: _vm.statusBarHeight + "rpx" } }),
      _c(
        "u-video",
        {
          ref: "video",
          staticClass: ["video"],
          attrs: {
            poster: _vm.videoMedia.mainImage,
            src: _vm.videoMedia.videoUrl,
            controls: false,
            showCenterPlayBtn: false,
            showFullscreenBtn: false,
            showProgress: false,
          },
          on: { timeupdate: _vm.timeupdate, ended: _vm.nextPlay },
        },
        [
          _c(
            "u-scalable",
            {
              staticStyle: {
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
                bottom: "0",
              },
            },
            [
              _c(
                "view",
                {
                  staticClass: ["view-box"],
                  style: {
                    width: _vm.controlsWidth + "px",
                    height: "" + _vm.videoHeight,
                  },
                },
                [
                  _vm.showControls
                    ? _c(
                        "cover-view",
                        {
                          ref: "controlsTop",
                          staticClass: ["controls-top", "row"],
                          style: { width: _vm.controlsWidth + "px" },
                        },
                        [
                          _c(
                            "u-text",
                            {
                              staticClass: ["iconfont"],
                              appendAsTree: true,
                              attrs: { append: "tree" },
                              on: { click: _vm.backHandler },
                            },
                            [_vm._v("")]
                          ),
                          _c(
                            "u-text",
                            {
                              staticClass: ["title"],
                              appendAsTree: true,
                              attrs: { append: "tree" },
                            },
                            [_vm._v(_vm._s(_vm.videoMedia.title))]
                          ),
                        ]
                      )
                    : _vm._e(),
                  _c(
                    "cover-view",
                    {
                      staticClass: ["controls-center", "center"],
                      style: { width: _vm.controlsWidth + "px" },
                      on: { click: _vm.showHideControls },
                    },
                    [
                      !_vm.play && _vm.showControls
                        ? _c(
                            "u-text",
                            {
                              staticClass: ["stop", "iconfont"],
                              appendAsTree: true,
                              attrs: { append: "tree" },
                              on: { click: _vm.playVideo },
                            },
                            [_vm._v("")]
                          )
                        : _vm._e(),
                    ]
                  ),
                  _vm.showControls
                    ? _c(
                        "cover-view",
                        {
                          ref: "controlsBottom",
                          staticClass: ["controls-bottom", "row", "center"],
                          style: { width: _vm.controlsWidth + "px" },
                        },
                        [
                          _c("view", { staticClass: ["row"] }, [
                            !_vm.play
                              ? _c(
                                  "u-text",
                                  {
                                    staticClass: ["video-btn", "iconfont"],
                                    appendAsTree: true,
                                    attrs: { append: "tree" },
                                    on: { click: _vm.playVideo },
                                  },
                                  [_vm._v("")]
                                )
                              : _vm._e(),
                            _vm.play
                              ? _c(
                                  "u-text",
                                  {
                                    staticClass: ["video-btn", "iconfont"],
                                    appendAsTree: true,
                                    attrs: { append: "tree" },
                                    on: { click: _vm.playVideo },
                                  },
                                  [_vm._v("")]
                                )
                              : _vm._e(),
                            _c(
                              "u-text",
                              {
                                staticClass: ["video-btn", "iconfont"],
                                appendAsTree: true,
                                attrs: { append: "tree" },
                              },
                              [_vm._v("")]
                            ),
                          ]),
                          _c(
                            "u-text",
                            {
                              staticClass: ["time"],
                              appendAsTree: true,
                              attrs: { append: "tree" },
                            },
                            [_vm._v(_vm._s(_vm.currentStr))]
                          ),
                          _c(
                            "view",
                            { staticClass: ["bottom-slider"] },
                            [
                              _c("slider-bar", {
                                attrs: {
                                  duration: _vm.duration,
                                  current: _vm.current,
                                  sliderWidth: _vm.sliderWidth,
                                  direction: _vm.fullScreen
                                    ? "screenY"
                                    : "screenX",
                                  rate: parseFloat(_vm.currentRate),
                                },
                                on: { change: _vm.change },
                              }),
                            ],
                            1
                          ),
                          _c(
                            "u-text",
                            {
                              staticClass: ["time"],
                              appendAsTree: true,
                              attrs: { append: "tree" },
                            },
                            [_vm._v(_vm._s(_vm.durationStr))]
                          ),
                          _c("view", { staticClass: ["row"] }, [
                            _c(
                              "u-text",
                              {
                                staticClass: ["video-btn"],
                                appendAsTree: true,
                                attrs: { append: "tree" },
                                on: { click: _vm.showHideRateView },
                              },
                              [_vm._v(_vm._s(_vm.currentRate))]
                            ),
                            !_vm.fullScreen
                              ? _c(
                                  "u-text",
                                  {
                                    staticClass: ["video-btn", "iconfont"],
                                    appendAsTree: true,
                                    attrs: { append: "tree" },
                                    on: { click: _vm.fullScreenHandler },
                                  },
                                  [_vm._v("")]
                                )
                              : _vm._e(),
                            _vm.fullScreen
                              ? _c(
                                  "u-text",
                                  {
                                    staticClass: ["video-btn", "iconfont"],
                                    appendAsTree: true,
                                    attrs: { append: "tree" },
                                    on: { click: _vm.fullScreenHandler },
                                  },
                                  [_vm._v("")]
                                )
                              : _vm._e(),
                          ]),
                        ]
                      )
                    : _vm._e(),
                  _vm.rateView
                    ? _c(
                        "cover-view",
                        {
                          staticClass: ["center"],
                          class: _vm.fullScreen
                            ? "rate-list-full"
                            : "rate-list",
                          style: {
                            height: _vm.fullScreen ? _vm.controlsHeight : null,
                          },
                        },
                        _vm._l(_vm.rates, function (rate, index) {
                          return _c(
                            "u-text",
                            {
                              key: index,
                              class: {
                                "rate-item-full": _vm.fullScreen,
                                "rate-item": !_vm.fullScreen,
                                active: rate === _vm.currentRate,
                              },
                              appendAsTree: true,
                              attrs: { append: "tree" },
                              on: {
                                click: function ($event) {
                                  _vm.clickRate(rate)
                                },
                              },
                            },
                            [_vm._v(_vm._s(rate) + "x")]
                          )
                        }),
                        0
                      )
                    : _vm._e(),
                ],
                1
              ),
            ]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!********************************************************************************************!*\
  !*** E:/code/TeachApp/pages/course/subNVue/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony import */ var _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZmLENBQWdCLHNpQkFBRyxFQUFDIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4zLjguNy4yMDIzMDcwM1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxIQnVpbGRlclguMy44LjcuMjAyMzA3MDNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFEOlxcXFxIQnVpbGRlclguMy44LjcuMjAyMzA3MDNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4zLjguNy4yMDIzMDcwM1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxIQnVpbGRlclguMy44LjcuMjAyMzA3MDNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFEOlxcXFxIQnVpbGRlclguMy44LjcuMjAyMzA3MDNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/TeachApp/pages/course/subNVue/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 12);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 13));\nvar _sliderBar = _interopRequireDefault(__webpack_require__(/*! ./components/slider-bar.nvue */ 17));\nvar _methods;\n// 当前video实例\nvar videoContext = null;\n// timer定时器\nvar timer = null;\nvar _default = {\n  components: {\n    sliderBar: _sliderBar.default\n  },\n  data: function data() {\n    return {\n      rates: ['0.8', '1.0', '1.25', '1.5', '2.0'],\n      // ios不支持1.25和1.5\n      currentRate: '1.0',\n      // 当前倍速率\n      rateView: false,\n      // 是否显示倍速视图\n      videoHeight: '225px',\n      fullScreen: false,\n      // 全屏状态\n      controlsWidth: 0,\n      //全屏宽\n      controlsHeight: 0,\n      //全屏高\n      duration: 1,\n      // 视频总时长（秒），默认1秒显示进度条\n      current: 0,\n      //当前播放时长（秒）\n      statusBarHeight: 0,\n      // 状态栏高度\n      play: false,\n      //播放状态\n      showControls: true,\n      // 控制层显示隐藏\n      videoMedia: {\n        id: 1,\n        title: '01_视频组件封装',\n        videoUrl: \"https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4\",\n        mainImage: \"https://img0.baidu.com/it/u=2194549562,137574782&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500\"\n      },\n      chapterList: [],\n      //课程列表数据\n      activeObj: {} // 当前选中的课程下标\n    };\n  },\n  onLoad: function onLoad() {\n    // 获取状态栏高度\n    var systemInfo = uni.getSystemInfoSync();\n    this.statusBarHeight = Math.floor(systemInfo.statusBarHeight * (750 / systemInfo.screenWidth));\n    // 屏幕宽高\n    this.controlsHeight = systemInfo.screenHeight;\n    this.controlsWidth = systemInfo.screenWidth;\n\n    // 监听其他页面传递的数据\n    uni.$on('video', this.videoHandlerEvent);\n  },\n  beforeCreate: function beforeCreate() {\n    // nvue文件 加载图标，在style中声明 .ionfont样式\n    var domModule = __webpack_provided_uni_dot_requireNativePlugin('dom');\n    domModule.addRule('fontFace', {\n      fontFamily: 'iconfont',\n      // 推荐使用 ~@ 开头，发布时需要变成https://开头的\n      src: \"url('~@/static/icon/iconfont.ttf')\"\n    });\n  },\n  onUnload: function onUnload() {\n    // 卸载页面时，移除监听事件 \n    uni.$off('video');\n  },\n  watch: {\n    fullScreen: function fullScreen(newVal, oldVal) {\n      // 获取当前的宽度。用于交换宽高，\n      var width = this.controlsWidth;\n      this.controlsWidth = this.controlsHeight;\n      this.controlsHeight = width;\n      if (this.fullScreen) {\n        this.videoHeight = width + 'px';\n      } else {\n        this.videoHeight = 225 + 'px';\n      }\n    }\n  },\n  mounted: function mounted() {\n    // 注意，在 subNvue中要使用这种方式获取video实例\n    videoContext = this.$refs.video;\n  },\n  computed: {\n    // 总时长，分钟:秒\n    durationStr: function durationStr() {\n      return this.formatSeconds(this.duration);\n    },\n    // 当前时长 分钟:秒\n    currentStr: function currentStr() {\n      return this.formatSeconds(this.current);\n    },\n    // 进度条长度\n    sliderWidth: function sliderWidth() {\n      return this.controlsWidth - uni.upx2px(320 + 220);\n    }\n  },\n  methods: (_methods = {\n    // course-play页面会传递数据进行触发到此方法\n    videoHandlerEvent: function videoHandlerEvent(e) {\n      // console.log('接收到其他页面传递的数据', e)\n      switch (e.type) {\n        case 'init':\n          // 初始化数据\n          var course = e.params.course;\n          this.videoMidea.mainImage = course.mainImage;\n          this.videoMidea.id = course.id;\n          __f__(\"log\", 'this.videoMidea.mainImage', this.videoMidea.mainImage, \" at pages/course/subNVue/video.nvue:167\");\n          // 选中下标\n          this.activeObj = e.params.activeObj;\n          // 课程列表\n          this.chapterList = e.params.chapterList;\n          //获取第1节课\n          var chapter = this.chapterList[this.activeObj.chapterIndex];\n          var section = chapter && chapter.sectionList[this.activeObj.sectionIndex];\n          if (section) {\n            this.videoMidea.videoUrl = section.videoUrl || '';\n            this.videoMidea.title = section.name;\n          }\n          break;\n        case 'change':\n          // 当前播放的下标，为了播放下一节课\n          this.activeObj = e.params.activeObj;\n          // 播放视频\n          this.playSection(e.params.section);\n          break;\n        default:\n          break;\n      }\n    },\n    // 播放到当前视频未尾，播放下一节\n    nextPlay: function nextPlay() {\n      // 1. 获取当前章的下一节课，有一下课，则播放一下节\n      var chapter = this.chapterList[this.activeObj.chapterIndex];\n      var section = chapter && chapter.sectionList[this.activeObj.sectionIndex + 1];\n      if (section && section.videoUrl) {\n        // 播放当前章的下一节课\n        this.activeObj.sectionIndex++;\n        this.playSection(section);\n      } else {\n        // 2. 当前章没有一下节课，播放下一章第一节课\n        chapter = this.chapterList[this.activeObj.chapterIndex + 1];\n        if (chapter && chapter.sectionList && chapter.sectionList.length > 0) {\n          // 下一章第1节课\n          this.activeObj.chapterIndex++;\n          this.activeObj.sectionIndex = 0;\n          section = chapter.sectionList[this.activeObj.sectionIndex];\n          // 播放视频\n          this.playSection(section);\n        } else {\n          // 3. 没有一下章节(末尾)，暂停视频，提示：已观看最后一节课\n          videoContext.pause();\n          uni.showToast({\n            title: '已观看最后一节课',\n            icon: 'none'\n          });\n          this.play = false;\n          this.showControls = true;\n        }\n      }\n    },\n    // 播放指定视频\n    playSection: function playSection(section) {\n      var _this = this;\n      if (section && section.videoUrl) {\n        // 暂停\n        videoContext.pause();\n        // 获取新的播放地址\n        this.videoMidea.videoUrl = section.videoUrl;\n        this.videoMidea.title = section.name;\n        // 播放\n        setTimeout(function () {\n          videoContext.play();\n          _this.play = true;\n        }, 300);\n      } else {\n        uni.showToast({\n          title: '视频资源不存在',\n          icon: 'none'\n        });\n      }\n    },\n    // 显示隐藏倍速窗口\n    showHideRateView: function showHideRateView() {\n      this.rateView = !this.rateView;\n    },\n    // 倍速播放\n    clickRate: function clickRate(rate) {\n      this.currentRate = rate;\n      // 设置倍速，注意转浮点数\n      videoContext.playbackRate(parseFloat(rate));\n      // 关闭倍速选项弹层\n      this.showHideRateView();\n    },\n    // 拖动进度条结束的时候触发，返回结束的秒数\n    change: function change(currentSecond) {\n      __f__(\"log\", \"我是拖动时间currentSecond\", currentSecond, \" at pages/course/subNVue/video.nvue:255\");\n      this.current = currentSecond;\n      // 跳转到指定秒数\n      videoContext.seek(currentSecond);\n    },\n    // 点击全屏\n    fullScreenHandler: function fullScreenHandler() {\n      var _this2 = this;\n      // 强制底部控件重新定位\n      this.$nextTick(function () {\n        if (_this2.fullScreen) {\n          //退出全屏\n          videoContext.exitFullScreen();\n        } else {\n          // 进入全屏\n          videoContext.requestFullScreen();\n        }\n        // 改变状态\n        _this2.fullScreen = !_this2.fullScreen;\n      });\n    },\n    // 播放进度变化时触发，获取视频时长、当前播放时长\n    timeupdate: function timeupdate(event) {\n      this.duration = event.detail.duration;\n      this.current = event.detail.currentTime;\n    },\n    /**\n     * 格式化时间 分钟:秒\n     * @param {Object} totalSecond 总秒数\n     */\n    formatSeconds: function formatSeconds(totalSecond) {\n      var minute = parseInt(totalSecond / 60);\n      if (minute < 10) minute = \"0\" + minute;\n      var second = parseInt(totalSecond % 60);\n      if (second < 10) second = \"0\" + second;\n      var time = minute + \":\" + second;\n      if (totalSecond >= 0) {\n        return time;\n      } else {\n        return \"00:00\";\n      }\n    }\n  }, (0, _defineProperty2.default)(_methods, \"nextPlay\", function nextPlay() {}), (0, _defineProperty2.default)(_methods, \"backHandler\", function backHandler() {\n    // 点击头部后退图标\n    if (this.fullScreen) {\n      // 全屏时，回到非全屏状态，\n      this.fullScreenHandler();\n    } else {\n      // 非全屏时，返回上一页面\n      uni.navigateBack();\n    }\n  }), (0, _defineProperty2.default)(_methods, \"playVideo\", function playVideo() {\n    if (this.play) {\n      // 暂停\n      videoContext.pause();\n    } else {\n      // 播放视频\n      videoContext.play();\n      // 隐藏控制层\n      this.showHideControls();\n    }\n    this.play = !this.play;\n  }), (0, _defineProperty2.default)(_methods, \"showHideControls\", function showHideControls() {\n    var _this3 = this;\n    this.showControls = !this.showControls;\n    // 倍速视图\n    this.rateView = false;\n    // 定时隐藏控制层\n    if (this.showControls) {\n      //清除原有定时器\n      timer = timer ? clearTimeout(timer) : null;\n      // 3秒后隐藏控制层\n      timer = setTimeout(function () {\n        _this3.showControls = false;\n      }, 3000);\n    }\n  }), _methods)\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 10)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 11)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY291cnNlL3N1Yk5WdWUvdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwic2xpZGVyQmFyIiwiZGF0YSIsInJhdGVzIiwiY3VycmVudFJhdGUiLCJyYXRlVmlldyIsInZpZGVvSGVpZ2h0IiwiZnVsbFNjcmVlbiIsImNvbnRyb2xzV2lkdGgiLCJjb250cm9sc0hlaWdodCIsImR1cmF0aW9uIiwiY3VycmVudCIsInN0YXR1c0JhckhlaWdodCIsInBsYXkiLCJzaG93Q29udHJvbHMiLCJ2aWRlb01lZGlhIiwiaWQiLCJ0aXRsZSIsInZpZGVvVXJsIiwibWFpbkltYWdlIiwiY2hhcHRlckxpc3QiLCJhY3RpdmVPYmoiLCJvbkxvYWQiLCJ1bmkiLCJiZWZvcmVDcmVhdGUiLCJkb21Nb2R1bGUiLCJmb250RmFtaWx5Iiwic3JjIiwib25VbmxvYWQiLCJ3YXRjaCIsIm1vdW50ZWQiLCJ2aWRlb0NvbnRleHQiLCJjb21wdXRlZCIsImR1cmF0aW9uU3RyIiwiY3VycmVudFN0ciIsInNsaWRlcldpZHRoIiwibWV0aG9kcyIsInZpZGVvSGFuZGxlckV2ZW50IiwibmV4dFBsYXkiLCJjaGFwdGVyIiwic2VjdGlvbiIsImljb24iLCJwbGF5U2VjdGlvbiIsInNldFRpbWVvdXQiLCJzaG93SGlkZVJhdGVWaWV3IiwiY2xpY2tSYXRlIiwiY2hhbmdlIiwiZnVsbFNjcmVlbkhhbmRsZXIiLCJ0aW1ldXBkYXRlIiwiZm9ybWF0U2Vjb25kcyIsInRpbWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQXFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSxlQUNBO0VBQ0FBO0lBQ0FDO0VBQ0E7RUFDQUM7SUFDQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtNQUNBQztNQUFBO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBQztFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtJQUNBQztNQUNBQztNQUNBO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0FMO0VBQ0E7RUFDQU07SUFDQXRCO01BQUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNBO01BQ0E7UUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBdUI7SUFDQTtJQUNBQztFQUNBO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBQztNQUNBO01BQ0E7UUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1lBQ0E7WUFDQTtVQUNBO1VBQ0E7UUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7UUFDQTtVQUNBO01BQUE7SUFFQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtRQUNBO1FBQ0FDO1FBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQUM7VUFDQTtVQUNBO1FBQ0E7VUFDQTtVQUNBVDtVQUNBUjtZQUNBTjtZQUNBd0I7VUFDQTtVQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0E7UUFDQTtRQUNBWDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0FZO1VBQ0FaO1VBQ0E7UUFDQTtNQUNBO1FBQ0FSO1VBQ0FOO1VBQ0F3QjtRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FHO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBZDtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FlO01BQ0E7TUFDQTtNQUNBO01BQ0FmO0lBQ0E7SUFDQTtJQUNBZ0I7TUFBQTtNQUNBO01BQ0E7UUFDQTtVQUNBO1VBQ0FoQjtRQUNBO1VBQ0E7VUFDQUE7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQWlCO01BQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0VBQUEsMkVBRUEsbUZBRUE7SUFDQTtJQUNBO01BQ0E7TUFDQTtJQUNBO01BQ0E7TUFDQTFCO0lBQ0E7RUFDQSw4RUFFQTtJQUNBO01BQ0E7TUFDQVE7SUFDQTtNQUNBO01BQ0FBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7RUFDQSw0RkFDQTtJQUFBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtNQUNBO01BQ0FtQjtNQUNBO01BQ0FBO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7QUFFQTtBQUFBLDJCIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ2aWRlby1ib3hcIj5cclxuXHRcdDx2aWV3IDpzdHlsZT1cInsgaGVpZ2h0OiBzdGF0dXNCYXJIZWlnaHQgKyAncnB4J31cIj48L3ZpZXc+XHJcblx0XHQ8IS0tXHJcblx0XHRcdHBvc3RlciDop4bpopHlsIHpnaLnmoTlm77niYfnvZHnu5zotYTmupDlnLDlnYBcclxuXHRcdFx0c3JjIOimgeaSreaUvuinhumikeeahOi1hOa6kOWcsOWdgFxyXG5cdFx0XHRzaG93LWNlbnRlci1wbGF5LWJ0biDmmK/lkKbmmL7npLrop4bpopHkuK3pl7TnmoTmkq3mlL7mjInpkq5cclxuXHRcdFx0c2hvdy1mdWxsc2NyZWVuLWJ0biDmmK/lkKbmmL7npLrlhajlsY/mjInpkq5cclxuXHRcdFx0c2hvdy1wcm9ncmVzcyDmmK/lkKbmmL7npLrov5vluqbmnaFcclxuXHRcdFx0OmNvbnRyb2xzPVwiZmFsc2VcIiDlj5bmtojpu5jorqTmjqfliLbmjInpkq5cclxuXHRcdFx0QHRpbWV1cGRhdGUg5pKt5pS+6L+b5bqm5Y+Y5YyW5pe26Kem5Y+RXHJcblx0XHRcdEBlbmRlZCDlvZPmkq3mlL7liLDmnKvlsL7ml7bop6blj5FcclxuXHRcdC0tPlxyXG5cdFx0PHZpZGVvIHJlZj1cInZpZGVvXCIgY2xhc3M9XCJ2aWRlb1wiIDpwb3N0ZXI9XCJ2aWRlb01lZGlhLm1haW5JbWFnZVwiIDpzcmM9XCJ2aWRlb01lZGlhLnZpZGVvVXJsXCIgOmNvbnRyb2xzPVwiZmFsc2VcIlxyXG5cdFx0XHQ6c2hvdy1jZW50ZXItcGxheS1idG49XCJmYWxzZVwiIDpzaG93LWZ1bGxzY3JlZW4tYnRuPVwiZmFsc2VcIiA6c2hvdy1wcm9ncmVzcz1cImZhbHNlXCIgQHRpbWV1cGRhdGU9XCJ0aW1ldXBkYXRlXCJcclxuXHRcdFx0QGVuZGVkPVwibmV4dFBsYXlcIj5cclxuXHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidmlldy1ib3hcIiA6c3R5bGU9XCJ7d2lkdGg6IGAke2NvbnRyb2xzV2lkdGh9cHhgLGhlaWdodDpgJHt2aWRlb0hlaWdodH1gfVwiPlxyXG5cdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY29udHJvbHMtdG9wIHJvd1wiIHJlZj1cImNvbnRyb2xzVG9wXCIgdi1pZj1cInNob3dDb250cm9sc1wiXHJcblx0XHRcdFx0XHQ6c3R5bGU9XCJ7d2lkdGg6IGAke2NvbnRyb2xzV2lkdGh9cHhgfVwiPlxyXG5cdFx0XHRcdFx0PCEtLSDlpoLmnpzlm77moIfmsqHmnInmlYjmnpzvvIzliJnliKDpmaTkuobph43mlrDmt7vliqAgLS0+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250XCIgQGNsaWNrLnN0b3A9XCJiYWNrSGFuZGxlclwiPiYjeGU2Nzk7PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZVwiPnt7dmlkZW9NZWRpYS50aXRsZX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0XHQ8IS0tIOS4remXtOWMuuWfn++8jOaaguWBnOaSreaUvuaMiemSriAtLT5cclxuXHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvbnRyb2xzLWNlbnRlciBjZW50ZXJcIiBAY2xpY2s9XCJzaG93SGlkZUNvbnRyb2xzXCIgOnN0eWxlPVwie3dpZHRoOiBgJHtjb250cm9sc1dpZHRofXB4YH1cIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic3RvcCBpY29uZm9udFwiIEBjbGljay5zdG9wPVwicGxheVZpZGVvXCIgdi1pZj1cIiFwbGF5ICYmIHNob3dDb250cm9sc1wiPiYjeGU2MjU7PC90ZXh0PlxyXG5cdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0XHQ8IS0tIOW6lemDqCAtLT5cclxuXHRcdFx0XHQ8Y292ZXItdmlldyByZWY9XCJjb250cm9sc0JvdHRvbVwiIGNsYXNzPVwiY29udHJvbHMtYm90dG9tIHJvdyBjZW50ZXJcIiB2LWlmPVwic2hvd0NvbnRyb2xzXCJcclxuXHRcdFx0XHRcdDpzdHlsZT1cInt3aWR0aDogYCR7Y29udHJvbHNXaWR0aH1weGB9XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOaSreaUviAtLT5cclxuXHRcdFx0XHRcdFx0PHRleHQgQGNsaWNrPVwicGxheVZpZGVvXCIgdi1pZj1cIiFwbGF5XCIgY2xhc3M9XCJ2aWRlby1idG4gaWNvbmZvbnRcIj4mI3hlNjI1OzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PCEtLSDmmoLlgZwgLS0+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IEBjbGljaz1cInBsYXlWaWRlb1wiIHYtaWY9XCJwbGF5XCIgY2xhc3M9XCJ2aWRlby1idG4gaWNvbmZvbnRcIj4mI3hlNjJjOzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PCEtLSDkuIvkuIDpm4YgLS0+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidmlkZW8tYnRuIGljb25mb250XCI+JiN4ZTYxYjs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8IS0tIOW9k+WJjeaSreaUvuaXtumVvyAtLT5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGltZVwiPnt7Y3VycmVudFN0cn19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib3R0b20tc2xpZGVyXCI+XHJcblx0XHRcdFx0XHRcdDwhLS0g5b2T5YmN6KeC55yL5omA5Zyo5pe26ZW/IC0tPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOi/m+W6puadoSAtLT5cclxuXHRcdFx0XHRcdFx0PHNsaWRlci1iYXIgOmR1cmF0aW9uPVwiZHVyYXRpb25cIiA6Y3VycmVudD1cImN1cnJlbnRcIiA6c2xpZGVyV2lkdGg9XCJzbGlkZXJXaWR0aFwiXHJcblx0XHRcdFx0XHRcdFx0OmRpcmVjdGlvbj1cImZ1bGxTY3JlZW4gPyAnc2NyZWVuWSc6ICdzY3JlZW5YJ1wiIEBjaGFuZ2U9XCJjaGFuZ2VcIiA6cmF0ZT1cInBhcnNlRmxvYXQoY3VycmVudFJhdGUpXCIgLz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwhLS0g5oC75pe26ZW/IC0tPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0aW1lXCI+e3tkdXJhdGlvblN0cn19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0PCEtLSDlgI3pgJ8gLS0+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidmlkZW8tYnRuXCIgQGNsaWNrLnN0b3A9XCJzaG93SGlkZVJhdGVWaWV3XCI+e3tjdXJyZW50UmF0ZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOWFqOWxjyAtLT5cclxuXHRcdFx0XHRcdFx0PHRleHQgdi1pZj1cIiFmdWxsU2NyZWVuXCIgY2xhc3M9XCJ2aWRlby1idG4gaWNvbmZvbnRcIiBAY2xpY2suc3RvcD1cImZ1bGxTY3JlZW5IYW5kbGVyXCI+JiN4ZTYyMzs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IHYtaWY9XCJmdWxsU2NyZWVuXCIgY2xhc3M9XCJ2aWRlby1idG4gaWNvbmZvbnRcIiBAY2xpY2suc3RvcD1cImZ1bGxTY3JlZW5IYW5kbGVyXCI+JiN4ZTYxZTs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcdDwhLS0g5Yqg6YCf5YiX6KGoIC0tPlxyXG5cdFx0XHRcdDxjb3Zlci12aWV3IHYtaWY9XCJyYXRlVmlld1wiIGNsYXNzPVwiY2VudGVyXCIgOmNsYXNzPVwiZnVsbFNjcmVlbiA/ICdyYXRlLWxpc3QtZnVsbCc6ICdyYXRlLWxpc3QnXCJcclxuXHRcdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6IGZ1bGxTY3JlZW4gPyBjb250cm9sc0hlaWdodDogbnVsbH1cIj5cclxuXHRcdFx0XHRcdDwhLS0g5rOo5oSPYWN0aXZl5qC35byP5pS+5pyA5ZCO77yM5LiN54S25LiN55Sf5pWI77yM5Lya6KKr6KaG55uWIC0tPlxyXG5cdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwieydyYXRlLWl0ZW0tZnVsbCcgOiBmdWxsU2NyZWVuLCAncmF0ZS1pdGVtJzogIWZ1bGxTY3JlZW4sICdhY3RpdmUnOiByYXRlPT09IGN1cnJlbnRSYXRlfVwiXHJcblx0XHRcdFx0XHRcdHYtZm9yPVwiKHJhdGUsIGluZGV4KSBpbiByYXRlc1wiIDprZXk9XCJpbmRleFwiIEBjbGljay5zdG9wPVwiY2xpY2tSYXRlKHJhdGUpXCI+e3tyYXRlfX14PC90ZXh0PlxyXG5cdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWRlbz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHNsaWRlckJhciBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyLWJhci5udnVlJztcclxuXHQvLyDlvZPliY12aWRlb+WunuS+i1xyXG5cdGxldCB2aWRlb0NvbnRleHQgPSBudWxsXHJcblx0Ly8gdGltZXLlrprml7blmahcclxuXHRsZXQgdGltZXIgPSBudWxsXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRzbGlkZXJCYXJcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHJhdGVzOiBbJzAuOCcsICcxLjAnLCAnMS4yNScsICcxLjUnLCAnMi4wJ10sIC8vIGlvc+S4jeaUr+aMgTEuMjXlkowxLjVcclxuXHRcdFx0XHRjdXJyZW50UmF0ZTogJzEuMCcsIC8vIOW9k+WJjeWAjemAn+eOh1xyXG5cdFx0XHRcdHJhdGVWaWV3OiBmYWxzZSwgLy8g5piv5ZCm5pi+56S65YCN6YCf6KeG5Zu+XHJcblx0XHRcdFx0dmlkZW9IZWlnaHQ6ICcyMjVweCcsXHJcblx0XHRcdFx0ZnVsbFNjcmVlbjogZmFsc2UsIC8vIOWFqOWxj+eKtuaAgVxyXG5cdFx0XHRcdGNvbnRyb2xzV2lkdGg6IDAsIC8v5YWo5bGP5a69XHJcblx0XHRcdFx0Y29udHJvbHNIZWlnaHQ6IDAsIC8v5YWo5bGP6auYXHJcblx0XHRcdFx0ZHVyYXRpb246IDEsIC8vIOinhumikeaAu+aXtumVv++8iOenku+8ie+8jOm7mOiupDHnp5LmmL7npLrov5vluqbmnaFcclxuXHRcdFx0XHRjdXJyZW50OiAwLCAvL+W9k+WJjeaSreaUvuaXtumVv++8iOenku+8iVxyXG5cdFx0XHRcdHN0YXR1c0JhckhlaWdodDogMCwgLy8g54q25oCB5qCP6auY5bqmXHJcblx0XHRcdFx0cGxheTogZmFsc2UsIC8v5pKt5pS+54q25oCBXHJcblx0XHRcdFx0c2hvd0NvbnRyb2xzOiB0cnVlLCAvLyDmjqfliLblsYLmmL7npLrpmpDol49cclxuXHRcdFx0XHR2aWRlb01lZGlhOiB7XHJcblx0XHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRcdHRpdGxlOiAnMDFf6KeG6aKR57uE5Lu25bCB6KOFJyxcclxuXHRcdFx0XHRcdHZpZGVvVXJsOiBcImh0dHBzOi8vcWluaXUtd2ViLWFzc2V0cy5kY2xvdWQubmV0LmNuL3VuaWRvYy96aC8ybWludXRlLWRlbW8ubXA0XCIsXHJcblx0XHRcdFx0XHRtYWluSW1hZ2U6IFwiaHR0cHM6Ly9pbWcwLmJhaWR1LmNvbS9pdC91PTIxOTQ1NDk1NjIsMTM3NTc0NzgyJmZtPTI1MyZmbXQ9YXV0byZhcHA9MTIwJmY9SlBFRz93PTg4OSZoPTUwMFwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Y2hhcHRlckxpc3Q6IFtdLCAvL+ivvueoi+WIl+ihqOaVsOaNrlxyXG5cdFx0XHRcdGFjdGl2ZU9iajoge30sIC8vIOW9k+WJjemAieS4reeahOivvueoi+S4i+agh1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHQvLyDojrflj5bnirbmgIHmoI/pq5jluqZcclxuXHRcdFx0Y29uc3Qgc3lzdGVtSW5mbyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cdFx0XHR0aGlzLnN0YXR1c0JhckhlaWdodCA9IE1hdGguZmxvb3Ioc3lzdGVtSW5mby5zdGF0dXNCYXJIZWlnaHQgKiAoNzUwIC8gc3lzdGVtSW5mby5zY3JlZW5XaWR0aCkpO1xyXG5cdFx0XHQvLyDlsY/luZXlrr3pq5hcclxuXHRcdFx0dGhpcy5jb250cm9sc0hlaWdodCA9IHN5c3RlbUluZm8uc2NyZWVuSGVpZ2h0XHJcblx0XHRcdHRoaXMuY29udHJvbHNXaWR0aCA9IHN5c3RlbUluZm8uc2NyZWVuV2lkdGhcclxuXHJcblx0XHRcdC8vIOebkeWQrOWFtuS7lumhtemdouS8oOmAkueahOaVsOaNrlxyXG5cdFx0XHR1bmkuJG9uKCd2aWRlbycsIHRoaXMudmlkZW9IYW5kbGVyRXZlbnQpXHJcblx0XHR9LFxyXG5cdFx0YmVmb3JlQ3JlYXRlKCkge1xyXG5cdFx0XHQvLyBudnVl5paH5Lu2IOWKoOi9veWbvuagh++8jOWcqHN0eWxl5Lit5aOw5piOIC5pb25mb2505qC35byPXHJcblx0XHRcdGNvbnN0IGRvbU1vZHVsZSA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdkb20nKTtcclxuXHRcdFx0ZG9tTW9kdWxlLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG5cdFx0XHRcdGZvbnRGYW1pbHk6ICdpY29uZm9udCcsXHJcblx0XHRcdFx0Ly8g5o6o6I2Q5L2/55SoIH5AIOW8gOWktO+8jOWPkeW4g+aXtumcgOimgeWPmOaIkGh0dHBzOi8v5byA5aS055qEXHJcblx0XHRcdFx0c3JjOiBcInVybCgnfkAvc3RhdGljL2ljb24vaWNvbmZvbnQudHRmJylcIlxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRvblVubG9hZCgpIHtcclxuXHRcdFx0Ly8g5Y246L296aG16Z2i5pe277yM56e76Zmk55uR5ZCs5LqL5Lu2IFxyXG5cdFx0XHR1bmkuJG9mZigndmlkZW8nKVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdGZ1bGxTY3JlZW4obmV3VmFsLCBvbGRWYWwpIHsgLy8g6I635Y+W5b2T5YmN55qE5a695bqm44CC55So5LqO5Lqk5o2i5a696auY77yMXHJcblx0XHRcdFx0Y29uc3Qgd2lkdGggPSB0aGlzLmNvbnRyb2xzV2lkdGhcclxuXHRcdFx0XHR0aGlzLmNvbnRyb2xzV2lkdGggPSB0aGlzLmNvbnRyb2xzSGVpZ2h0XHJcblx0XHRcdFx0dGhpcy5jb250cm9sc0hlaWdodCA9IHdpZHRoXHJcblx0XHRcdFx0aWYgKHRoaXMuZnVsbFNjcmVlbikge1xyXG5cdFx0XHRcdFx0dGhpcy52aWRlb0hlaWdodCA9IHdpZHRoICsgJ3B4J1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvSGVpZ2h0ID0gMjI1ICsgJ3B4J1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHQvLyDms6jmhI/vvIzlnKggc3ViTnZ1ZeS4reimgeS9v+eUqOi/meenjeaWueW8j+iOt+WPlnZpZGVv5a6e5L6LXHJcblx0XHRcdHZpZGVvQ29udGV4dCA9IHRoaXMuJHJlZnMudmlkZW9cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHQvLyDmgLvml7bplb/vvIzliIbpkp8656eSXHJcblx0XHRcdGR1cmF0aW9uU3RyKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdFNlY29uZHModGhpcy5kdXJhdGlvbilcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5b2T5YmN5pe26ZW/IOWIhumSnzrnp5JcclxuXHRcdFx0Y3VycmVudFN0cigpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXRTZWNvbmRzKHRoaXMuY3VycmVudClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6L+b5bqm5p2h6ZW/5bqmXHJcblx0XHRcdHNsaWRlcldpZHRoKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnRyb2xzV2lkdGggLSB1bmkudXB4MnB4KDMyMCArIDIyMClcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8gY291cnNlLXBsYXnpobXpnaLkvJrkvKDpgJLmlbDmja7ov5vooYzop6blj5HliLDmraTmlrnms5VcclxuXHRcdFx0dmlkZW9IYW5kbGVyRXZlbnQoZSkge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCfmjqXmlLbliLDlhbbku5bpobXpnaLkvKDpgJLnmoTmlbDmja4nLCBlKVxyXG5cdFx0XHRcdHN3aXRjaCAoZS50eXBlKSB7XHJcblx0XHRcdFx0XHRjYXNlICdpbml0JzpcclxuXHRcdFx0XHRcdFx0Ly8g5Yid5aeL5YyW5pWw5o2uXHJcblx0XHRcdFx0XHRcdGNvbnN0IGNvdXJzZSA9IGUucGFyYW1zLmNvdXJzZVxyXG5cdFx0XHRcdFx0XHR0aGlzLnZpZGVvTWlkZWEubWFpbkltYWdlID0gY291cnNlLm1haW5JbWFnZVxyXG5cdFx0XHRcdFx0XHR0aGlzLnZpZGVvTWlkZWEuaWQgPSBjb3Vyc2UuaWRcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMudmlkZW9NaWRlYS5tYWluSW1hZ2UnLCB0aGlzLnZpZGVvTWlkZWEubWFpbkltYWdlKVxyXG5cdFx0XHRcdFx0XHQvLyDpgInkuK3kuIvmoIdcclxuXHRcdFx0XHRcdFx0dGhpcy5hY3RpdmVPYmogPSBlLnBhcmFtcy5hY3RpdmVPYmpcclxuXHRcdFx0XHRcdFx0Ly8g6K++56iL5YiX6KGoXHJcblx0XHRcdFx0XHRcdHRoaXMuY2hhcHRlckxpc3QgPSBlLnBhcmFtcy5jaGFwdGVyTGlzdFxyXG5cdFx0XHRcdFx0XHQvL+iOt+WPluesrDHoioLor75cclxuXHRcdFx0XHRcdFx0Y29uc3QgY2hhcHRlciA9IHRoaXMuY2hhcHRlckxpc3RbdGhpcy5hY3RpdmVPYmouY2hhcHRlckluZGV4XVxyXG5cdFx0XHRcdFx0XHRjb25zdCBzZWN0aW9uID0gY2hhcHRlciAmJiBjaGFwdGVyLnNlY3Rpb25MaXN0W3RoaXMuYWN0aXZlT2JqLnNlY3Rpb25JbmRleF1cclxuXHRcdFx0XHRcdFx0aWYgKHNlY3Rpb24pIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnZpZGVvTWlkZWEudmlkZW9VcmwgPSBzZWN0aW9uLnZpZGVvVXJsIHx8ICcnXHJcblx0XHRcdFx0XHRcdFx0dGhpcy52aWRlb01pZGVhLnRpdGxlID0gc2VjdGlvbi5uYW1lXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdjaGFuZ2UnOlxyXG5cdFx0XHRcdFx0XHQvLyDlvZPliY3mkq3mlL7nmoTkuIvmoIfvvIzkuLrkuobmkq3mlL7kuIvkuIDoioLor75cclxuXHRcdFx0XHRcdFx0dGhpcy5hY3RpdmVPYmogPSBlLnBhcmFtcy5hY3RpdmVPYmpcclxuXHRcdFx0XHRcdFx0Ly8g5pKt5pS+6KeG6aKRXHJcblx0XHRcdFx0XHRcdHRoaXMucGxheVNlY3Rpb24oZS5wYXJhbXMuc2VjdGlvbilcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaSreaUvuWIsOW9k+WJjeinhumikeacquWwvu+8jOaSreaUvuS4i+S4gOiKglxyXG5cdFx0XHRuZXh0UGxheSgpIHtcclxuXHRcdFx0XHQvLyAxLiDojrflj5blvZPliY3nq6DnmoTkuIvkuIDoioLor77vvIzmnInkuIDkuIvor77vvIzliJnmkq3mlL7kuIDkuIvoioJcclxuXHRcdFx0XHRsZXQgY2hhcHRlciA9IHRoaXMuY2hhcHRlckxpc3RbdGhpcy5hY3RpdmVPYmouY2hhcHRlckluZGV4XVxyXG5cdFx0XHRcdGxldCBzZWN0aW9uID0gY2hhcHRlciAmJiBjaGFwdGVyLnNlY3Rpb25MaXN0W3RoaXMuYWN0aXZlT2JqLnNlY3Rpb25JbmRleCArIDFdXHJcblx0XHRcdFx0aWYgKHNlY3Rpb24gJiYgc2VjdGlvbi52aWRlb1VybCkge1xyXG5cdFx0XHRcdFx0Ly8g5pKt5pS+5b2T5YmN56ug55qE5LiL5LiA6IqC6K++XHJcblx0XHRcdFx0XHR0aGlzLmFjdGl2ZU9iai5zZWN0aW9uSW5kZXgrK1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5U2VjdGlvbihzZWN0aW9uKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyAyLiDlvZPliY3nq6DmsqHmnInkuIDkuIvoioLor77vvIzmkq3mlL7kuIvkuIDnq6DnrKzkuIDoioLor75cclxuXHRcdFx0XHRcdGNoYXB0ZXIgPSB0aGlzLmNoYXB0ZXJMaXN0W3RoaXMuYWN0aXZlT2JqLmNoYXB0ZXJJbmRleCArIDFdXHJcblx0XHRcdFx0XHRpZiAoY2hhcHRlciAmJiBjaGFwdGVyLnNlY3Rpb25MaXN0ICYmIGNoYXB0ZXIuc2VjdGlvbkxpc3QubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHQvLyDkuIvkuIDnq6DnrKwx6IqC6K++XHJcblx0XHRcdFx0XHRcdHRoaXMuYWN0aXZlT2JqLmNoYXB0ZXJJbmRleCsrXHJcblx0XHRcdFx0XHRcdHRoaXMuYWN0aXZlT2JqLnNlY3Rpb25JbmRleCA9IDBcclxuXHRcdFx0XHRcdFx0c2VjdGlvbiA9IGNoYXB0ZXIuc2VjdGlvbkxpc3RbdGhpcy5hY3RpdmVPYmouc2VjdGlvbkluZGV4XVxyXG5cdFx0XHRcdFx0XHQvLyDmkq3mlL7op4bpopFcclxuXHRcdFx0XHRcdFx0dGhpcy5wbGF5U2VjdGlvbihzZWN0aW9uKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8gMy4g5rKh5pyJ5LiA5LiL56ug6IqCKOacq+WwvinvvIzmmoLlgZzop4bpopHvvIzmj5DnpLrvvJrlt7Lop4LnnIvmnIDlkI7kuIDoioLor75cclxuXHRcdFx0XHRcdFx0dmlkZW9Db250ZXh0LnBhdXNlKClcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICflt7Lop4LnnIvmnIDlkI7kuIDoioLor74nLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYXkgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHR0aGlzLnNob3dDb250cm9scyA9IHRydWVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaSreaUvuaMh+WumuinhumikVxyXG5cdFx0XHRwbGF5U2VjdGlvbihzZWN0aW9uKSB7XHJcblx0XHRcdFx0aWYgKHNlY3Rpb24gJiYgc2VjdGlvbi52aWRlb1VybCkge1xyXG5cdFx0XHRcdFx0Ly8g5pqC5YGcXHJcblx0XHRcdFx0XHR2aWRlb0NvbnRleHQucGF1c2UoKVxyXG5cdFx0XHRcdFx0Ly8g6I635Y+W5paw55qE5pKt5pS+5Zyw5Z2AXHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvTWlkZWEudmlkZW9VcmwgPSBzZWN0aW9uLnZpZGVvVXJsXHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvTWlkZWEudGl0bGUgPSBzZWN0aW9uLm5hbWVcclxuXHRcdFx0XHRcdC8vIOaSreaUvlxyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHZpZGVvQ29udGV4dC5wbGF5KClcclxuXHRcdFx0XHRcdFx0dGhpcy5wbGF5ID0gdHJ1ZVxyXG5cdFx0XHRcdFx0fSwgMzAwKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfop4bpopHotYTmupDkuI3lrZjlnKgnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmL7npLrpmpDol4/lgI3pgJ/nqpflj6NcclxuXHRcdFx0c2hvd0hpZGVSYXRlVmlldygpIHtcclxuXHRcdFx0XHR0aGlzLnJhdGVWaWV3ID0gIXRoaXMucmF0ZVZpZXdcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5YCN6YCf5pKt5pS+XHJcblx0XHRcdGNsaWNrUmF0ZShyYXRlKSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50UmF0ZSA9IHJhdGVcclxuXHRcdFx0XHQvLyDorr7nva7lgI3pgJ/vvIzms6jmhI/ovazmta7ngrnmlbBcclxuXHRcdFx0XHR2aWRlb0NvbnRleHQucGxheWJhY2tSYXRlKHBhcnNlRmxvYXQocmF0ZSkpXHJcblx0XHRcdFx0Ly8g5YWz6Zet5YCN6YCf6YCJ6aG55by55bGCXHJcblx0XHRcdFx0dGhpcy5zaG93SGlkZVJhdGVWaWV3KClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5ouW5Yqo6L+b5bqm5p2h57uT5p2f55qE5pe25YCZ6Kem5Y+R77yM6L+U5Zue57uT5p2f55qE56eS5pWwXHJcblx0XHRcdGNoYW5nZShjdXJyZW50U2Vjb25kKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCLmiJHmmK/mi5bliqjml7bpl7RjdXJyZW50U2Vjb25kXCIsIGN1cnJlbnRTZWNvbmQpXHJcblx0XHRcdFx0dGhpcy5jdXJyZW50ID0gY3VycmVudFNlY29uZFxyXG5cdFx0XHRcdC8vIOi3s+i9rOWIsOaMh+WumuenkuaVsFxyXG5cdFx0XHRcdHZpZGVvQ29udGV4dC5zZWVrKGN1cnJlbnRTZWNvbmQpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOeCueWHu+WFqOWxj1xyXG5cdFx0XHRmdWxsU2NyZWVuSGFuZGxlcigpIHtcclxuXHRcdFx0XHQvLyDlvLrliLblupXpg6jmjqfku7bph43mlrDlrprkvY1cclxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5mdWxsU2NyZWVuKSB7XHJcblx0XHRcdFx0XHRcdC8v6YCA5Ye65YWo5bGPXHJcblx0XHRcdFx0XHRcdHZpZGVvQ29udGV4dC5leGl0RnVsbFNjcmVlbigpXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQvLyDov5vlhaXlhajlsY9cclxuXHRcdFx0XHRcdFx0dmlkZW9Db250ZXh0LnJlcXVlc3RGdWxsU2NyZWVuKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIOaUueWPmOeKtuaAgVxyXG5cdFx0XHRcdFx0dGhpcy5mdWxsU2NyZWVuID0gIXRoaXMuZnVsbFNjcmVlblxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmkq3mlL7ov5vluqblj5jljJbml7bop6blj5HvvIzojrflj5bop4bpopHml7bplb/jgIHlvZPliY3mkq3mlL7ml7bplb9cclxuXHRcdFx0dGltZXVwZGF0ZShldmVudCkge1xyXG5cdFx0XHRcdHRoaXMuZHVyYXRpb24gPSBldmVudC5kZXRhaWwuZHVyYXRpb25cclxuXHRcdFx0XHR0aGlzLmN1cnJlbnQgPSBldmVudC5kZXRhaWwuY3VycmVudFRpbWVcclxuXHRcdFx0fSxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIOagvOW8j+WMluaXtumXtCDliIbpkp8656eSXHJcblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSB0b3RhbFNlY29uZCDmgLvnp5LmlbBcclxuXHRcdFx0ICovXHJcblx0XHRcdGZvcm1hdFNlY29uZHModG90YWxTZWNvbmQpIHtcclxuXHRcdFx0XHRsZXQgbWludXRlID0gcGFyc2VJbnQodG90YWxTZWNvbmQgLyA2MCk7XHJcblx0XHRcdFx0aWYgKG1pbnV0ZSA8IDEwKSBtaW51dGUgPSBcIjBcIiArIG1pbnV0ZTtcclxuXHRcdFx0XHRsZXQgc2Vjb25kID0gcGFyc2VJbnQodG90YWxTZWNvbmQgJSA2MCk7XHJcblx0XHRcdFx0aWYgKHNlY29uZCA8IDEwKSBzZWNvbmQgPSBcIjBcIiArIHNlY29uZDtcclxuXHRcdFx0XHRsZXQgdGltZSA9IG1pbnV0ZSArIFwiOlwiICsgc2Vjb25kO1xyXG5cdFx0XHRcdGlmICh0b3RhbFNlY29uZCA+PSAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGltZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIFwiMDA6MDBcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaSreaUvuWIsOacq+Wwvu+8jOWIh+aNouS4i+S4gOiKglxyXG5cdFx0XHRuZXh0UGxheSgpIHt9LFxyXG5cdFx0XHQvLyDngrnlh7vlkI7pgIDmjInpkq5cclxuXHRcdFx0YmFja0hhbmRsZXIoKSB7XHJcblx0XHRcdFx0Ly8g54K55Ye75aS06YOo5ZCO6YCA5Zu+5qCHXHJcblx0XHRcdFx0aWYgKHRoaXMuZnVsbFNjcmVlbikge1xyXG5cdFx0XHRcdFx0Ly8g5YWo5bGP5pe277yM5Zue5Yiw6Z2e5YWo5bGP54q25oCB77yMXHJcblx0XHRcdFx0XHR0aGlzLmZ1bGxTY3JlZW5IYW5kbGVyKClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8g6Z2e5YWo5bGP5pe277yM6L+U5Zue5LiK5LiA6aG16Z2iXHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaSreaUvuinhumikVxyXG5cdFx0XHRwbGF5VmlkZW8oKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMucGxheSkge1xyXG5cdFx0XHRcdFx0Ly8g5pqC5YGcXHJcblx0XHRcdFx0XHR2aWRlb0NvbnRleHQucGF1c2UoKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyDmkq3mlL7op4bpopFcclxuXHRcdFx0XHRcdHZpZGVvQ29udGV4dC5wbGF5KClcclxuXHRcdFx0XHRcdC8vIOmakOiXj+aOp+WItuWxglxyXG5cdFx0XHRcdFx0dGhpcy5zaG93SGlkZUNvbnRyb2xzKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5wbGF5ID0gIXRoaXMucGxheVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93SGlkZUNvbnRyb2xzKCkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd0NvbnRyb2xzID0gIXRoaXMuc2hvd0NvbnRyb2xzXHJcblx0XHRcdFx0Ly8g5YCN6YCf6KeG5Zu+XHJcblx0XHRcdFx0dGhpcy5yYXRlVmlldyA9IGZhbHNlXHJcblx0XHRcdFx0Ly8g5a6a5pe26ZqQ6JeP5o6n5Yi25bGCXHJcblx0XHRcdFx0aWYgKHRoaXMuc2hvd0NvbnRyb2xzKSB7XHJcblx0XHRcdFx0XHQvL+a4hemZpOWOn+acieWumuaXtuWZqFxyXG5cdFx0XHRcdFx0dGltZXIgPSB0aW1lciA/IGNsZWFyVGltZW91dCh0aW1lcikgOiBudWxsXHJcblx0XHRcdFx0XHQvLyAz56eS5ZCO6ZqQ6JeP5o6n5Yi25bGCXHJcblx0XHRcdFx0XHR0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNob3dDb250cm9scyA9IGZhbHNlXHJcblx0XHRcdFx0XHR9LCAzMDAwKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuXHQudmlldy1ib3gge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0Lmljb25mb250IHtcclxuXHRcdGZvbnQtZmFtaWx5OiBpY29uZm9udDtcclxuXHRcdC8qIGljb25mb250IOWvueW6lOS4iumdoiBmb250RmFtaWx5IOeahOWAvCwgKi9cclxuXHRcdGZvbnQtc2l6ZTogNTBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC52aWRlbyB7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0LyogaGVpZ2h0OiAyMjVweDsgKi9cclxuXHR9XHJcblxyXG5cdC8qIOWktOmDqOaOp+WItuWxgiAqL1xyXG5cdC5jb250cm9scy10b3Age1xyXG5cdFx0aGVpZ2h0OiA5MHJweDtcclxuXHRcdHBhZGRpbmc6IDAgMTVycHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjgpKTtcclxuXHR9XHJcblxyXG5cdC50aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHR3aWR0aDogNTAwcnB4O1xyXG5cdFx0LypudnVlIOaWh+S7tuS4re+8jOaWh+acrOa6ouWHuuaYvuekuuecgeeVpeWPtyovXHJcblx0XHRsaW5lczogMTtcclxuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdH1cclxuXHJcblx0Lyog5Lit6Ze05Yy65Z+fICovXHJcblx0LmNvbnRyb2xzLWNlbnRlciB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDkwcnB4O1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0Ym90dG9tOiA5MHJweDtcclxuXHRcdC8qIOmAj+aYjuiDjOaZr+WNoOS9je+8jOmYsuatomlvc+a4kOWPmOaciemXrumimCAqL1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuXHR9XHJcblxyXG5cdC5zdG9wIHtcclxuXHRcdHBhZGRpbmc6IDIwcnB4IDM1cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHR9XHJcblxyXG5cdC8qIOW6lemDqOaOp+WItiAqL1xyXG5cdC5jb250cm9scy1ib3R0b20ge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGhlaWdodDogOTBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuOCkpO1xyXG5cdH1cclxuXHJcblx0LnZpZGVvLWJ0biB7XHJcblx0XHR3aWR0aDogODBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogOTBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0fVxyXG5cclxuXHQuYm90dG9tLXNsaWRlciB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGhlaWdodDogOTBycHg7XHJcblx0XHQvKiDlt6blj7Plm7rlrprkuoblrr3luqbvvIzkuK3pl7TljaDmu6HliankvZnlrr3luqYgKi9cclxuXHRcdGZsZXg6IDE7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudGltZSB7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHR3aWR0aDogMTEwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0Lyog6Z2e5YWo5bGP5YCN6YCf5qC35byPICovXHJcblx0LnJhdGUtbGlzdCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDcwcnB4O1xyXG5cdFx0cmlnaHQ6IDY1cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG5cdFx0d2lkdGg6IDExMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdH1cclxuXHJcblx0LnJhdGUtaXRlbSB7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMzVycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNjBycHg7XHJcblx0fVxyXG5cclxuXHQuYWN0aXZlIHtcclxuXHRcdGNvbG9yOiAjMzQ1ZGMyO1xyXG5cdH1cclxuXHJcblx0Lyog5YWo5bGP5YCN6YCf5qC35byPICovXHJcblx0LnJhdGUtbGlzdC1mdWxsIHtcclxuXHRcdHdpZHRoOiA0MDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHR9XHJcblxyXG5cdC5yYXRlLWl0ZW0tZnVsbCB7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogNTBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTMwcnB4O1xyXG5cdH1cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requireNativePlugin;
function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 11 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLog;
exports.log = log;
function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}
function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;
  }
}
function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}
function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();
    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  console[type](msg);
}

/***/ }),
/* 12 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 13 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 14);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 14 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 15)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 16);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 15 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 16 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 15)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 17 */
/*!************************************************************************!*\
  !*** E:/code/TeachApp/pages/course/subNVue/components/slider-bar.nvue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_bar_nvue_vue_type_template_id_438818d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider-bar.nvue?vue&type=template&id=438818d0& */ 18);\n/* harmony import */ var _slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider-bar.nvue?vue&type=script&lang=js& */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./slider-bar.nvue?vue&type=style&index=0&lang=css& */ 22).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./slider-bar.nvue?vue&type=style&index=0&lang=css& */ 22).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _slider_bar_nvue_vue_type_template_id_438818d0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _slider_bar_nvue_vue_type_template_id_438818d0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"7bcc2092\",\n  false,\n  _slider_bar_nvue_vue_type_template_id_438818d0___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/course/subNVue/components/slider-bar.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0g7QUFDeEg7QUFDK0Q7QUFDTDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDREQUFvRDtBQUN4RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNERBQW9EO0FBQzdHOztBQUVBOztBQUVBO0FBQytMO0FBQy9MLGdCQUFnQix3TUFBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxzRkFBTTtBQUNSLEVBQUUsK0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vc2xpZGVyLWJhci5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQzODgxOGQwJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2xpZGVyLWJhci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zbGlkZXItYmFyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9zbGlkZXItYmFyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vc2xpZGVyLWJhci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclguMy44LjcuMjAyMzA3MDNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjdiY2MyMDkyXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2NvdXJzZS9zdWJOVnVlL2NvbXBvbmVudHMvc2xpZGVyLWJhci5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*******************************************************************************************************!*\
  !*** E:/code/TeachApp/pages/course/subNVue/components/slider-bar.nvue?vue&type=template&id=438818d0& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_template_id_438818d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./slider-bar.nvue?vue&type=template&id=438818d0& */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_template_id_438818d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_template_id_438818d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_template_id_438818d0___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_template_id_438818d0___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/TeachApp/pages/course/subNVue/components/slider-bar.nvue?vue&type=template&id=438818d0& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "view",
      {
        staticClass: ["slider", "row", "center"],
        style: { width: _vm.sliderWidth + "px" },
        on: {
          touchstart: _vm.blockTouchStart,
          touchend: _vm.blockTouchEnd,
          touchmove: _vm.blockTouchMove,
        },
      },
      [
        _c("view", {
          staticClass: ["slider-left"],
          style: { width: _vm.leftWidth + "px" },
        }),
        _c("view", {
          staticClass: ["slider-right"],
          style: { width: _vm.sliderWidth - _vm.leftWidth + "px" },
        }),
        _c("view", {
          staticClass: ["block-inner"],
          style: { left: _vm.leftWidth - 5 + "px" },
        }),
      ]
    ),
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/*!*************************************************************************************************!*\
  !*** E:/code/TeachApp/pages/course/subNVue/components/slider-bar.nvue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./slider-bar.nvue?vue&type=script&lang=js& */ 21);\n/* harmony import */ var _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVmLENBQWdCLGdpQkFBRyxFQUFDIiwiZmlsZSI6IjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMy44LjcuMjAyMzA3MDNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcSEJ1aWxkZXJYLjMuOC43LjIwMjMwNzAzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcSEJ1aWxkZXJYLjMuOC43LjIwMjMwNzAzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NsaWRlci1iYXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMy44LjcuMjAyMzA3MDNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcSEJ1aWxkZXJYLjMuOC43LjIwMjMwNzAzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcSEJ1aWxkZXJYLjMuOC43LjIwMjMwNzAzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NsaWRlci1iYXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/TeachApp/pages/course/subNVue/components/slider-bar.nvue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  props: {\n    duration: {\n      //总时长\n      type: Number,\n      default: 60\n    },\n    current: {\n      // 当前播放时长\n      type: Number,\n      default: 0\n    },\n    sliderWidth: {\n      //进度条宽度\n      type: Number,\n      default: 100\n    },\n    rate: {\n      //倍速\n      type: Number,\n      default: 1\n    },\n    direction: {\n      //判断屏幕方向，非全屏screenX，全屏screenY，用于计算滑动长度\n      type: String,\n      default: 'screenX'\n    }\n  },\n  data: function data() {\n    return {\n      oldToucesX: 0,\n      leftWidth: 0,\n      oldLeftWidth: 0,\n      touch: false\n    };\n  },\n  methods: {\n    // 触摸开始，记录原坐标\n    blockTouchStart: function blockTouchStart(e) {\n      this.touch = true;\n      this.oldLeftWidth = this.leftWidth;\n      // screenX 点击点相对于屏幕左侧边缘的 X 轴坐标, screenY 点击点相对于屏幕顶部边缘的 Y 轴坐标\n      this.oldToucesX = e.changedTouches[0][this.direction];\n    },\n    // 计算方向\n    blockTouchMove: function blockTouchMove(e) {\n      var newToucesX = e.changedTouches[0][this.direction];\n      this.leftWidth = (newToucesX - this.oldToucesX) * this.rate + this.oldLeftWidth;\n      // 起出宽度，则移动进度条到右边缘，\n      this.leftWidth = this.leftWidth > this.sliderWidth ? this.sliderWidth : this.leftWidth;\n      // 小于0，则移动进度条到左边缘，\n      this.leftWidth = this.leftWidth < 0 ? 0 : this.leftWidth;\n    },\n    // 结束触摸\n    blockTouchEnd: function blockTouchEnd(e) {\n      // 计算结束点，触发父组件，进行结束点位置播放\n      var currentSecond = this.leftWidth / this.sliderWidth * this.duration;\n      this.$emit('change', currentSecond);\n      this.touch = false;\n    }\n  },\n  watch: {\n    // 监听播放时间变化，移动滚动点\n    current: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n        if (this.touch) return;\n        this.leftWidth = newVal / this.duration * this.sliderWidth;\n        this.leftWidth = this.leftWidth > this.sliderWidth ? this.sliderWidth : this.leftWidth;\n      }\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY291cnNlL3N1Yk5WdWUvY29tcG9uZW50cy9zbGlkZXItYmFyLm52dWUiXSwibmFtZXMiOlsicHJvcHMiLCJkdXJhdGlvbiIsInR5cGUiLCJkZWZhdWx0IiwiY3VycmVudCIsInNsaWRlcldpZHRoIiwicmF0ZSIsImRpcmVjdGlvbiIsImRhdGEiLCJvbGRUb3VjZXNYIiwibGVmdFdpZHRoIiwib2xkTGVmdFdpZHRoIiwidG91Y2giLCJtZXRob2RzIiwiYmxvY2tUb3VjaFN0YXJ0IiwiYmxvY2tUb3VjaE1vdmUiLCJibG9ja1RvdWNoRW5kIiwid2F0Y2giLCJpbW1lZGlhdGUiLCJoYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFnQkE7RUFDQUE7SUFDQUM7TUFBQTtNQUNBQztNQUNBQztJQUNBO0lBRUFDO01BQUE7TUFDQUY7TUFDQUM7SUFDQTtJQUVBRTtNQUFBO01BQ0FIO01BQ0FDO0lBQ0E7SUFFQUc7TUFBQTtNQUNBSjtNQUNBQztJQUNBO0lBRUFJO01BQUE7TUFDQUw7TUFDQUM7SUFDQTtFQUVBO0VBRUFLO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUVBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtFQUNBO0VBRUFDO0lBQ0E7SUFDQWI7TUFDQWM7TUFDQUM7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJzbGlkZXIgcm93IGNlbnRlclwiIDpzdHlsZT1cInsgd2lkdGg6IGAke3NsaWRlcldpZHRofXB4YH1cIlxyXG5cdFx0XHRAdG91Y2hzdGFydD1cImJsb2NrVG91Y2hTdGFydFwiIEB0b3VjaGVuZD1cImJsb2NrVG91Y2hFbmRcIiAgQHRvdWNobW92ZS5zdG9wPVwiYmxvY2tUb3VjaE1vdmVcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8IS0tIOWchueCueW3puS+p+W3suaSreaUvui/m+W6puadoSAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzbGlkZXItbGVmdFwiIDpzdHlsZT1cInsgd2lkdGg6IGAke2xlZnRXaWR0aH1weGAgfVwiID48L3ZpZXc+XHJcblx0XHRcdDwhLS0g5ZyG54K55Y+z5L6n5pyq5pKt5pS+6L+b5bqm5p2hIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInNsaWRlci1yaWdodFwiIDpzdHlsZT1cInsgd2lkdGg6IGAke3NsaWRlcldpZHRoLWxlZnRXaWR0aH1weGAgfVwiPjwvdmlldz5cclxuXHRcdFx0PCEtLSDlnIbngrkgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmxvY2staW5uZXJcIiA6c3R5bGU9XCJ7bGVmdDogYCR7bGVmdFdpZHRoLTV9cHhgfVwiPjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHR7XHJcblx0XHRwcm9wczp7XHJcblx0XHRcdGR1cmF0aW9uOnsgLy/mgLvml7bplb9cclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogNjBcclxuXHRcdFx0fSxcblx0XHRcdFxyXG5cdFx0XHRjdXJyZW50OiB7IC8vIOW9k+WJjeaSreaUvuaXtumVv1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDBcclxuXHRcdFx0fSxcblx0XHRcdFxyXG5cdFx0XHRzbGlkZXJXaWR0aDogeyAvL+i/m+W6puadoeWuveW6plxyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDEwMFxyXG5cdFx0XHR9LFxuXHRcdFx0XHJcblx0XHRcdHJhdGU6IHsgLy/lgI3pgJ9cclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMVxyXG5cdFx0XHR9LFxuXHRcdFx0XHJcblx0XHRcdGRpcmVjdGlvbjp7IC8v5Yik5pat5bGP5bmV5pa55ZCR77yM6Z2e5YWo5bGPc2NyZWVuWO+8jOWFqOWxj3NjcmVlblnvvIznlKjkuo7orqHnrpfmu5Hliqjplb/luqZcclxuXHRcdFx0XHR0eXBlOlN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnc2NyZWVuWCdcclxuXHRcdFx0fSxcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0ZGF0YSgpe1xyXG5cdFx0XHRyZXR1cm57XHJcblx0XHRcdFx0b2xkVG91Y2VzWDogMCxcclxuXHRcdFx0XHRsZWZ0V2lkdGg6IDAsXHJcblx0XHRcdFx0b2xkTGVmdFdpZHRoOiAwLFxyXG5cdFx0XHRcdHRvdWNoOiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczp7XHJcblx0XHRcdC8vIOinpuaRuOW8gOWni++8jOiusOW9leWOn+WdkOagh1xyXG5cdFx0XHRibG9ja1RvdWNoU3RhcnQoZSkge1xuXHRcdFx0XHR0aGlzLnRvdWNoID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMub2xkTGVmdFdpZHRoID0gdGhpcy5sZWZ0V2lkdGhcblx0XHRcdFx0Ly8gc2NyZWVuWCDngrnlh7vngrnnm7jlr7nkuo7lsY/luZXlt6bkvqfovrnnvJjnmoQgWCDovbTlnZDmoIcsIHNjcmVlblkg54K55Ye754K555u45a+55LqO5bGP5bmV6aG26YOo6L6557yY55qEIFkg6L205Z2Q5qCHXHJcblx0XHRcdFx0dGhpcy5vbGRUb3VjZXNYID0gZS5jaGFuZ2VkVG91Y2hlc1swXVt0aGlzLmRpcmVjdGlvbl07XG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDorqHnrpfmlrnlkJFcclxuXHRcdFx0YmxvY2tUb3VjaE1vdmUoZSkge1xuXHRcdFx0XHRsZXQgbmV3VG91Y2VzWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF1bdGhpcy5kaXJlY3Rpb25dO1xyXG5cdFx0XHRcdHRoaXMubGVmdFdpZHRoID0gKG5ld1RvdWNlc1ggLSB0aGlzLm9sZFRvdWNlc1gpICogdGhpcy5yYXRlICsgdGhpcy5vbGRMZWZ0V2lkdGhcblx0XHRcdFx0Ly8g6LW35Ye65a695bqm77yM5YiZ56e75Yqo6L+b5bqm5p2h5Yiw5Y+z6L6557yY77yMXHJcblx0XHRcdFx0dGhpcy5sZWZ0V2lkdGggPSB0aGlzLmxlZnRXaWR0aCA+IHRoaXMuc2xpZGVyV2lkdGggPyB0aGlzLnNsaWRlcldpZHRoIDogdGhpcy5sZWZ0V2lkdGhcblx0XHRcdFx0Ly8g5bCP5LqOMO+8jOWImeenu+WKqOi/m+W6puadoeWIsOW3pui+uee8mO+8jFxyXG5cdFx0XHRcdHRoaXMubGVmdFdpZHRoID0gdGhpcy5sZWZ0V2lkdGggPCAwID8gMCA6IHRoaXMubGVmdFdpZHRoXHJcblx0XHRcdH0sXG5cdFx0XHRcclxuXHRcdFx0Ly8g57uT5p2f6Kem5pG4XHJcblx0XHRcdGJsb2NrVG91Y2hFbmQoZSkge1xuXHRcdFx0XHQvLyDorqHnrpfnu5PmnZ/ngrnvvIzop6blj5HniLbnu4Tku7bvvIzov5vooYznu5PmnZ/ngrnkvY3nva7mkq3mlL5cblx0XHRcdFx0bGV0IGN1cnJlbnRTZWNvbmQgPSB0aGlzLmxlZnRXaWR0aCAvIHRoaXMuc2xpZGVyV2lkdGggKiB0aGlzLmR1cmF0aW9uXHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywgY3VycmVudFNlY29uZClcclxuXHRcdFx0XHR0aGlzLnRvdWNoID0gZmFsc2VcclxuXHRcdFx0fSxcblx0XHR9LFxyXG5cdFx0XHJcblx0XHR3YXRjaDp7XG5cdFx0XHQvLyDnm5HlkKzmkq3mlL7ml7bpl7Tlj5jljJbvvIznp7vliqjmu5rliqjngrlcclxuXHRcdFx0Y3VycmVudDp7XHJcblx0XHRcdFx0aW1tZWRpYXRlOnRydWUsXHJcblx0XHRcdFx0aGFuZGxlcihuZXdWYWwsIG9sZFZhbCl7XHJcblx0XHRcdFx0XHRpZih0aGlzLnRvdWNoKSByZXR1cm5cclxuXHRcdFx0XHRcdHRoaXMubGVmdFdpZHRoID0gbmV3VmFsL3RoaXMuZHVyYXRpb24gKiB0aGlzLnNsaWRlcldpZHRoXHJcblx0XHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IHRoaXMubGVmdFdpZHRoID4gdGhpcy5zbGlkZXJXaWR0aD8gdGhpcy5zbGlkZXJXaWR0aCA6IHRoaXMubGVmdFdpZHRoXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSA+XHJcblx0LnNsaWRlciB7XG5cdFx0aGVpZ2h0OiA5MHJweDtcclxuXHR9XG5cdC5zbGlkZXItbGVmdHtcclxuXHRcdC8qIGZsZXg6IDE7ICovXHJcblx0XHRoZWlnaHQ6IDNweDtcblx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ1ZGMyO1xuXHR9XHJcblx0LnNsaWRlci1yaWdodHtcclxuXHRcdGhlaWdodDogM3B4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzUsIDE3NSwgMTc1LCAxKTtcblx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHR9XHJcblxyXG5cdC5ibG9jay1pbm5lcntcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRoZWlnaHQ6IDIwcnB4O1xyXG5cdFx0d2lkdGg6IDIwcnB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cdFx0ei1pbmRleDogMTA7XG5cdH1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!*********************************************************************************************************!*\
  !*** E:/code/TeachApp/pages/course/subNVue/components/slider-bar.nvue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./slider-bar.nvue?vue&type=style&index=0&lang=css& */ 23);
/* harmony import */ var _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_slider_bar_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/TeachApp/pages/course/subNVue/components/slider-bar.nvue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".slider": {
    "": {
      "height": [
        "90rpx",
        0,
        0,
        0
      ]
    }
  },
  ".slider-left": {
    "": {
      "height": [
        "3",
        0,
        0,
        1
      ],
      "borderRadius": [
        "10rpx",
        0,
        0,
        1
      ],
      "backgroundColor": [
        "#345dc2",
        0,
        0,
        1
      ]
    }
  },
  ".slider-right": {
    "": {
      "height": [
        "3",
        0,
        0,
        2
      ],
      "backgroundColor": [
        "rgba(175,175,175,1)",
        0,
        0,
        2
      ],
      "borderRadius": [
        "10rpx",
        0,
        0,
        2
      ]
    }
  },
  ".block-inner": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        3
      ],
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        3
      ],
      "height": [
        "20rpx",
        0,
        0,
        3
      ],
      "width": [
        "20rpx",
        0,
        0,
        3
      ],
      "borderRadius": [
        100,
        0,
        0,
        3
      ],
      "zIndex": [
        10,
        0,
        0,
        3
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 24 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 25 */
/*!****************************************************************************************************!*\
  !*** E:/code/TeachApp/pages/course/subNVue/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 26);
/* harmony import */ var _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/code/TeachApp/pages/course/subNVue/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".view-box": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        0
      ],
      "top": [
        0,
        0,
        0,
        0
      ],
      "left": [
        0,
        0,
        0,
        0
      ],
      "right": [
        0,
        0,
        0,
        0
      ],
      "bottom": [
        0,
        0,
        0,
        0
      ]
    }
  },
  ".iconfont": {
    "": {
      "fontFamily": [
        "iconfont",
        0,
        0,
        1
      ],
      "fontSize": [
        "50rpx",
        0,
        0,
        1
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        1
      ]
    }
  },
  ".video": {
    "": {
      "width": [
        "750rpx",
        0,
        0,
        2
      ]
    }
  },
  ".controls-top": {
    "": {
      "height": [
        "90rpx",
        0,
        0,
        4
      ],
      "paddingTop": [
        0,
        0,
        0,
        4
      ],
      "paddingRight": [
        "15rpx",
        0,
        0,
        4
      ],
      "paddingBottom": [
        0,
        0,
        0,
        4
      ],
      "paddingLeft": [
        "15rpx",
        0,
        0,
        4
      ],
      "alignItems": [
        "center",
        0,
        0,
        4
      ],
      "backgroundImage": [
        "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))",
        0,
        0,
        4
      ]
    }
  },
  ".title": {
    "": {
      "fontSize": [
        "30rpx",
        0,
        0,
        5
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        5
      ],
      "width": [
        "500rpx",
        0,
        0,
        5
      ],
      "lines": [
        1,
        0,
        0,
        5
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        5
      ]
    }
  },
  ".controls-center": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        7
      ],
      "top": [
        "90rpx",
        0,
        0,
        7
      ],
      "left": [
        0,
        0,
        0,
        7
      ],
      "right": [
        0,
        0,
        0,
        7
      ],
      "bottom": [
        "90rpx",
        0,
        0,
        7
      ],
      "backgroundColor": [
        "rgba(0,0,0,0)",
        0,
        0,
        7
      ]
    }
  },
  ".stop": {
    "": {
      "paddingTop": [
        "20rpx",
        0,
        0,
        8
      ],
      "paddingRight": [
        "35rpx",
        0,
        0,
        8
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        8
      ],
      "paddingLeft": [
        "35rpx",
        0,
        0,
        8
      ],
      "backgroundColor": [
        "rgba(0,0,0,0.6)",
        0,
        0,
        8
      ],
      "borderRadius": [
        "10",
        0,
        0,
        8
      ]
    }
  },
  ".controls-bottom": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        10
      ],
      "bottom": [
        0,
        0,
        0,
        10
      ],
      "width": [
        "750rpx",
        0,
        0,
        10
      ],
      "height": [
        "90rpx",
        0,
        0,
        10
      ],
      "backgroundImage": [
        "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))",
        0,
        0,
        10
      ]
    }
  },
  ".video-btn": {
    "": {
      "width": [
        "80rpx",
        0,
        0,
        11
      ],
      "lineHeight": [
        "90rpx",
        0,
        0,
        11
      ],
      "textAlign": [
        "center",
        0,
        0,
        11
      ],
      "color": [
        "#ffffff",
        0,
        0,
        11
      ],
      "fontSize": [
        "30rpx",
        0,
        0,
        11
      ]
    }
  },
  ".bottom-slider": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        12
      ],
      "alignItems": [
        "center",
        0,
        0,
        12
      ],
      "height": [
        "90rpx",
        0,
        0,
        12
      ],
      "flex": [
        1,
        0,
        0,
        12
      ],
      "textAlign": [
        "center",
        0,
        0,
        12
      ]
    }
  },
  ".time": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        13
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        13
      ],
      "width": [
        "110rpx",
        0,
        0,
        13
      ],
      "textAlign": [
        "center",
        0,
        0,
        13
      ]
    }
  },
  ".rate-list": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        15
      ],
      "bottom": [
        "70rpx",
        0,
        0,
        15
      ],
      "right": [
        "65rpx",
        0,
        0,
        15
      ],
      "backgroundColor": [
        "rgba(0,0,0,0.7)",
        0,
        0,
        15
      ],
      "width": [
        "110rpx",
        0,
        0,
        15
      ],
      "borderRadius": [
        "10rpx",
        0,
        0,
        15
      ]
    }
  },
  ".rate-item": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        16
      ],
      "fontSize": [
        "35rpx",
        0,
        0,
        16
      ],
      "lineHeight": [
        "60rpx",
        0,
        0,
        16
      ]
    }
  },
  ".active": {
    "": {
      "color": [
        "#345dc2",
        0,
        0,
        17
      ]
    }
  },
  ".rate-list-full": {
    "": {
      "width": [
        "400rpx",
        0,
        0,
        19
      ],
      "backgroundColor": [
        "rgba(0,0,0,0.7)",
        0,
        0,
        19
      ],
      "position": [
        "absolute",
        0,
        0,
        19
      ],
      "right": [
        0,
        0,
        0,
        19
      ],
      "top": [
        0,
        0,
        0,
        19
      ],
      "bottom": [
        0,
        0,
        0,
        19
      ]
    }
  },
  ".rate-item-full": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        20
      ],
      "fontSize": [
        "50rpx",
        0,
        0,
        20
      ],
      "lineHeight": [
        "130rpx",
        0,
        0,
        20
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);