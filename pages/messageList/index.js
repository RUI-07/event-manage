require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[12],{

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapped":"wrapped___16968","header":"header___ZKew5","title":"title___16Unn","type":"type___1SnM4","profile":"profile___gEuA0","time":"time___1_i_Q"};

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"noMessage":"noMessage___3smoa"};

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(88);


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(3);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 34 modules
var esm = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/remax/index.js
var remax = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/remax/wechat.js
var wechat = __webpack_require__(2);

// EXTERNAL MODULE: ./src/pages/messageList/component/message/index.module.scss?modules
var index_modulemodules = __webpack_require__(18);
var index_modulemodules_default = /*#__PURE__*/__webpack_require__.n(index_modulemodules);

// EXTERNAL MODULE: ./node_modules/@vant/weapp/dist/tag/index.js
var tag = __webpack_require__(34);

// CONCATENATED MODULE: ./src/pages/messageList/component/message/index.js
/* harmony default export */ var component_message = (function(props){var message=props.message;var _ref=message||{},_ref$title=_ref.title,title=_ref$title===void 0?'':_ref$title,_ref$profile=_ref.profile,profile=_ref$profile===void 0?'':_ref$profile,_ref$type=_ref.type,type=_ref$type===void 0?'':_ref$type,_ref$date=_ref.date,date=_ref$date===void 0?'':_ref$date;return/*#__PURE__*/react["createElement"](wechat["View"],{className:index_modulemodules_default.a.wrapped},/*#__PURE__*/react["createElement"](wechat["View"],{className:index_modulemodules_default.a.header},/*#__PURE__*/react["createElement"](wechat["View"],{className:index_modulemodules_default.a.title},title),/*#__PURE__*/react["createElement"](wechat["View"],{className:index_modulemodules_default.a.type},/*#__PURE__*/react["createElement"](tag["a" /* default */],{round:true,color:"#f2826a"},type))),/*#__PURE__*/react["createElement"](wechat["View"],{className:index_modulemodules_default.a.profile},profile),/*#__PURE__*/react["createElement"](wechat["View"],{className:index_modulemodules_default.a.time},/*#__PURE__*/react["createElement"](wechat["Text"],null,"\u65F6\u95F4\uFF1A","".concat(date.getFullYear(),"\u5E74").concat(date.getMonth()+1,"\u6708").concat(date.getDate(),"\u65E5").concat(date.getHours(),"\u65F6").concat(date.getMinutes(),"\u5206"))));});
// EXTERNAL MODULE: ./src/pages/messageList/index.module.scss?modules
var messageList_index_modulemodules = __webpack_require__(55);
var messageList_index_modulemodules_default = /*#__PURE__*/__webpack_require__.n(messageList_index_modulemodules);

// EXTERNAL MODULE: ./src/component/link/index.js
var component_link = __webpack_require__(13);

// EXTERNAL MODULE: ./src/api/index.js + 8 modules
var api = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@vant/weapp/dist/icon/index.js
var icon = __webpack_require__(9);

// CONCATENATED MODULE: ./src/pages/messageList/index.js
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var messageList_page=function _page(props){Object(wechat["setNavigationBarTitle"])({title:'消息列表'});var _useQuery=Object(remax["a" /* useQuery */])(),id=_useQuery.id,owner=_useQuery.owner;var _React$useState=react["useState"]([]),_React$useState2=_slicedToArray(_React$useState,2),list=_React$useState2[0],setList=_React$useState2[1];Object(esm["e" /* usePageEvent */])('onshow',/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee(){var noticeList,converted;return runtime_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return api["f" /* notice */].getAll(id);case 2:_context.t0=_context.sent;if(_context.t0){_context.next=5;break;}_context.t0=[];case 5:noticeList=_context.t0;converted=noticeList.map(function(item){return{noticeId:item.noticeId,title:item.title,profile:item.cotent,date:new Date(item.publishTime),type:item.type};});converted.sort(function(a,b){return b.date-a.date;});setList(converted);case 9:case"end":return _context.stop();}}},_callee);})));return/*#__PURE__*/react["createElement"](wechat["View"],null,list.length!==0?list.map(function(item,index){return/*#__PURE__*/react["createElement"](wechat["View"],{key:index,__key:index},/*#__PURE__*/react["createElement"](component_link["a" /* default */],{to:"/pages/messageInfo/index?id=".concat(id,"&owner=").concat(owner,"&noticeId=").concat(item.noticeId)},/*#__PURE__*/react["createElement"](component_message,{message:item})));}):/*#__PURE__*/react["createElement"](wechat["View"],{className:messageList_index_modulemodules_default.a.noMessage},/*#__PURE__*/react["createElement"](icon["a" /* default */],{name:"comment-o",size:"28px"}),/*#__PURE__*/react["createElement"](wechat["Text"],null,"\u6682\u65E0\u6D88\u606F")));};/* harmony default export */ var messageList = __webpack_exports__["default"] = (Page(Object(esm["d" /* createPageConfig */])(messageList_page,"pages/messageList/index")));

/***/ })

},[[77,1,0]]]);