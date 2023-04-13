"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcreate_wasm_app"] = self["webpackChunkcreate_wasm_app"] || []).push([["index_js"],{

/***/ "../pkg/network_lesson_util.js":
/*!*************************************!*\
  !*** ../pkg/network_lesson_util.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__wbg_set_wasm\": () => (/* reexport safe */ _network_lesson_util_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),\n/* harmony export */   \"addr_str_to_bits_str\": () => (/* reexport safe */ _network_lesson_util_bg_js__WEBPACK_IMPORTED_MODULE_0__.addr_str_to_bits_str),\n/* harmony export */   \"bits_str_to_addr_str\": () => (/* reexport safe */ _network_lesson_util_bg_js__WEBPACK_IMPORTED_MODULE_0__.bits_str_to_addr_str),\n/* harmony export */   \"cidr_str_to_bits_str\": () => (/* reexport safe */ _network_lesson_util_bg_js__WEBPACK_IMPORTED_MODULE_0__.cidr_str_to_bits_str)\n/* harmony export */ });\n/* harmony import */ var _network_lesson_util_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network_lesson_util_bg.wasm */ \"../pkg/network_lesson_util_bg.wasm\");\n/* harmony import */ var _network_lesson_util_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network_lesson_util_bg.js */ \"../pkg/network_lesson_util_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_network_lesson_util_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n_network_lesson_util_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n(0,_network_lesson_util_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_network_lesson_util_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://create-wasm-app/../pkg/network_lesson_util.js?");

/***/ }),

/***/ "../pkg/network_lesson_util_bg.js":
/*!****************************************!*\
  !*** ../pkg/network_lesson_util_bg.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__wbg_set_wasm\": () => (/* binding */ __wbg_set_wasm),\n/* harmony export */   \"addr_str_to_bits_str\": () => (/* binding */ addr_str_to_bits_str),\n/* harmony export */   \"bits_str_to_addr_str\": () => (/* binding */ bits_str_to_addr_str),\n/* harmony export */   \"cidr_str_to_bits_str\": () => (/* binding */ cidr_str_to_bits_str)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachedInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n* @param {string} addr\n* @returns {string}\n*/\nfunction addr_str_to_bits_str(addr) {\n    try {\n        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n        const ptr0 = passStringToWasm0(addr, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n        const len0 = WASM_VECTOR_LEN;\n        wasm.addr_str_to_bits_str(retptr, ptr0, len0);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        return getStringFromWasm0(r0, r1);\n    } finally {\n        wasm.__wbindgen_add_to_stack_pointer(16);\n        wasm.__wbindgen_free(r0, r1);\n    }\n}\n\n/**\n* @param {string} cidr\n* @returns {string}\n*/\nfunction cidr_str_to_bits_str(cidr) {\n    try {\n        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n        const ptr0 = passStringToWasm0(cidr, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n        const len0 = WASM_VECTOR_LEN;\n        wasm.cidr_str_to_bits_str(retptr, ptr0, len0);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        return getStringFromWasm0(r0, r1);\n    } finally {\n        wasm.__wbindgen_add_to_stack_pointer(16);\n        wasm.__wbindgen_free(r0, r1);\n    }\n}\n\n/**\n* @param {string} bits\n* @returns {string}\n*/\nfunction bits_str_to_addr_str(bits) {\n    try {\n        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n        const ptr0 = passStringToWasm0(bits, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n        const len0 = WASM_VECTOR_LEN;\n        wasm.bits_str_to_addr_str(retptr, ptr0, len0);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        return getStringFromWasm0(r0, r1);\n    } finally {\n        wasm.__wbindgen_add_to_stack_pointer(16);\n        wasm.__wbindgen_free(r0, r1);\n    }\n}\n\n\n\n//# sourceURL=webpack://create-wasm-app/../pkg/network_lesson_util_bg.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var network_lesson_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! network-lesson-util */ \"../pkg/network_lesson_util.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([network_lesson_util__WEBPACK_IMPORTED_MODULE_0__]);\nnetwork_lesson_util__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst addr_input = document.getElementById(\"addr_input\");\nconst addr_output = document.getElementById(\"addr_output\");\nconst bits_input = document.getElementById(\"bits_input\");\nconst bits_output = document.getElementById(\"bits_output\");\n\naddr_input.addEventListener(\"change\", (e) => {\n    const addr = network_lesson_util__WEBPACK_IMPORTED_MODULE_0__.addr_str_to_bits_str(e.target.value);\n    bits_output.innerHTML = addr;\n    console.log(addr);\n}, false);\n\nbits_input.addEventListener(\"change\", (e) => {\n    const addr = network_lesson_util__WEBPACK_IMPORTED_MODULE_0__.bits_str_to_addr_str(e.target.value);\n    addr_output.innerHTML = addr;\n    console.log(addr);\n}, false);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://create-wasm-app/./index.js?");

/***/ }),

/***/ "../pkg/network_lesson_util_bg.wasm":
/*!******************************************!*\
  !*** ../pkg/network_lesson_util_bg.wasm ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.v(exports, module.id, \"0aec541c6694ed549a97\");\n\n//# sourceURL=webpack://create-wasm-app/../pkg/network_lesson_util_bg.wasm?");

/***/ })

}]);