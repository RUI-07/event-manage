require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[4],{

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"apply":"apply___1HkGl","applyHead":"applyHead___3Dheb","avatar":"avatar___25Gbd","rightSeparate":"rightSeparate___2Jhnp","noApply":"noApply___jetOt","applyContent":"applyContent___2md6X"};

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(80);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _index_module_scss_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _index_module_scss_modules__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss_modules__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _vant_weapp_dist_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _slicedToArray2(arr,i){return _arrayWithHoles2(arr)||_iterableToArrayLimit2(arr,i)||_unsupportedIterableToArray2(arr,i)||_nonIterableRest2();}function _nonIterableRest2(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray2(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray2(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray2(o,minLen);}function _arrayLikeToArray2(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit2(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles2(arr){if(Array.isArray(arr))return arr;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function Apply(props){var nickname=props.nickname,avatarUrl=props.avatarUrl,content=props.content,onAllow=props.onAllow,onReject=props.onReject;var _React$useState=react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),_React$useState2=_slicedToArray(_React$useState,2),mode=_React$useState2[0],setMode=_React$useState2[1];var handleClick=function handleClick(){console.log('test');setMode(!mode);};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_4__["View"],{onClick:handleClick,className:_index_module_scss_modules__WEBPACK_IMPORTED_MODULE_6___default.a.apply},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_4__["View"],{className:_index_module_scss_modules__WEBPACK_IMPORTED_MODULE_6___default.a.applyHead},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_4__["Image"],{src:avatarUrl,className:_index_module_scss_modules__WEBPACK_IMPORTED_MODULE_6___default.a.avatar}),nickname,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_vant_weapp_dist_icon__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],{bindclick:function bindclick(){return onAllow&&onAllow();},className:_index_module_scss_modules__WEBPACK_IMPORTED_MODULE_6___default.a.rightSeparate,name:"success"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_vant_weapp_dist_icon__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],{bindclick:function bindclick(){return onReject&&onReject();},name:"cross"})),mode&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_4__["View"],{className:_index_module_scss_modules__WEBPACK_IMPORTED_MODULE_6___default.a.applyContent},'申请留言：'+content));}var _page=function _page(){Object(remax_wechat__WEBPACK_IMPORTED_MODULE_4__["setNavigationBarTitle"])({title:'加入申请'});var _useQuery=Object(remax__WEBPACK_IMPORTED_MODULE_3__[/* useQuery */ "a"])(),id=_useQuery.id;var _React$useState3=react__WEBPACK_IMPORTED_MODULE_2__["useState"]([]),_React$useState4=_slicedToArray2(_React$useState3,2),list=_React$useState4[0],setList=_React$useState4[1];var updateList=/*#__PURE__*/function(){var _ref=_asyncToGenerator(/*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(){var applyList;return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _api__WEBPACK_IMPORTED_MODULE_5__[/* applyHandler */ "b"].getApplyList(id);case 2:applyList=_context.sent;setList(applyList||[]);case 4:case"end":return _context.stop();}}},_callee);}));return function updateList(){return _ref.apply(this,arguments);};}();Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_1__[/* usePageEvent */ "e"])('onshow',function(){updateList();});var handleAllow=function handleAllow(applyerId){_api__WEBPACK_IMPORTED_MODULE_5__[/* applyHandler */ "b"].handleApply(applyerId,id,'pass');updateList();};var handleReject=function handleReject(applyerId){_api__WEBPACK_IMPORTED_MODULE_5__[/* applyHandler */ "b"].handleApply(applyerId,id,'fail');updateList();};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_4__["View"],null,list.length===0?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_4__["View"],{className:_index_module_scss_modules__WEBPACK_IMPORTED_MODULE_6___default.a.noApply},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_vant_weapp_dist_icon__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],{name:"friends-o",size:"28px"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_4__["Text"],null,"\u6682\u65E0\u5F85\u5904\u7406\u7533\u8BF7")):list.map(function(item){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Apply,{key:item.id,avatarUrl:item.avatarUrl,nickname:item.nickName,content:item.content,onAllow:function onAllow(){return handleAllow(item.userId);},onReject:function onReject(){return handleReject(item.userId);}});}));};/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_1__[/* createPageConfig */ "d"])(_page,"pages/apply/index")));

/***/ })

},[[79,1,0]]]);