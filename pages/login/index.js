require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[8],{

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"opening":"opening___2Hgij","shadow":"shadow___nN4EZ","loginBtn":"loginBtn___1FRY6"};

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(65);


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _index_module_scss_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _index_module_scss_modules__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss_modules__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wxApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
function _asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator2(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}var LoginButton=function LoginButton(props){var onLogin=props.onLogin;var handleGetUserInfo=/*#__PURE__*/function(){var _ref=_asyncToGenerator(/*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(){var _yield$wxLogin,code,_yield$wxGetUserInfo,iv,encryptedData;return regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return Object(_wxApi__WEBPACK_IMPORTED_MODULE_5__[/* wxLogin */ "f"])();case 2:_yield$wxLogin=_context.sent;code=_yield$wxLogin.code;_context.next=6;return Object(_wxApi__WEBPACK_IMPORTED_MODULE_5__[/* wxGetUserInfo */ "e"])();case 6:_yield$wxGetUserInfo=_context.sent;iv=_yield$wxGetUserInfo.iv;encryptedData=_yield$wxGetUserInfo.encryptedData;Object(_api__WEBPACK_IMPORTED_MODULE_6__[/* login */ "d"])({code:code,iv:iv,encryptedData:encryptedData});onLogin&&onLogin();case 11:case"end":return _context.stop();}}},_callee);}));return function handleGetUserInfo(){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["Button"],{className:_index_module_scss_modules__WEBPACK_IMPORTED_MODULE_4___default.a.loginBtn,openType:"getUserInfo",onGetUserInfo:handleGetUserInfo},"\u5FAE\u4FE1\u767B\u5165");};var _page=function _page(){react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function(){_asyncToGenerator2(/*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(){var loginStatus;return regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return Object(_api__WEBPACK_IMPORTED_MODULE_6__[/* autoLogin */ "c"])();case 2:loginStatus=_context2.sent;if(loginStatus){Object(remax_wechat__WEBPACK_IMPORTED_MODULE_3__["redirectTo"])({url:'/pages/index/index'});}case 4:case"end":return _context2.stop();}}},_callee2);}))();},[]);var handleLogin=function handleLogin(){// change style
Object(remax_wechat__WEBPACK_IMPORTED_MODULE_3__["redirectTo"])({url:'/pages/index/index'});};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["View"],{className:_index_module_scss_modules__WEBPACK_IMPORTED_MODULE_4___default.a.opening},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_3__["View"],{className:_index_module_scss_modules__WEBPACK_IMPORTED_MODULE_4___default.a.shadow}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](LoginButton,{onLogin:handleLogin}));};/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__[/* createPageConfig */ "d"])(_page,"pages/login/index")));

/***/ })

},[[64,1,0]]]);