require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[6],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"header___ezEZ5","backBoard":"backBoard___2rIjA","backBoardCurve":"backBoardCurve___3tBx0","backBoardCircle":"backBoardCircle___1OIyd","info":"info___uAfjl","infoContent":"infoContent___3tPP8","buttons":"buttons___TsDvi","button":"button___lYJlI"};

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapped":"wrapped___3QfOB","header":"header___296jl","title":"title___1FDtz","status":"status___3Sxru","brief":"brief___3RhBO","owner":"owner___GGy6d","avatar":"avatar___3CVjo"};

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"cardList":"cardList___2Y1PK","noActivity":"noActivity___EZWIa"};

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(85);


/***/ }),

/***/ 85:
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

// EXTERNAL MODULE: ./node_modules/remax/wechat.js
var wechat = __webpack_require__(2);

// EXTERNAL MODULE: ./src/pages/index/index.module.scss?modules
var index_modulemodules = __webpack_require__(43);
var index_modulemodules_default = /*#__PURE__*/__webpack_require__.n(index_modulemodules);

// EXTERNAL MODULE: ./node_modules/@vant/weapp/dist/image/index.js
var dist_image = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/@vant/weapp/dist/tag/index.js
var tag = __webpack_require__(34);

// EXTERNAL MODULE: ./src/pages/index/component/card/index.module.scss?modules
var card_index_modulemodules = __webpack_require__(16);
var card_index_modulemodules_default = /*#__PURE__*/__webpack_require__.n(card_index_modulemodules);

// CONCATENATED MODULE: ./src/pages/index/component/card/index.js
/* harmony default export */ var card = (function(props){var activity=props.activity;var _ref=activity||{},_ref$title=_ref.title,title=_ref$title===void 0?'':_ref$title,_ref$brief=_ref.brief,brief=_ref$brief===void 0?'':_ref$brief,_ref$status=_ref.status,status=_ref$status===void 0?'':_ref$status,date=_ref.date;var dateToString=function dateToString(date){return"".concat(date.getFullYear(),"\u5E74").concat(date.getMonth()+1,"\u6708").concat(date.getDate(),"\u65E5");};return/*#__PURE__*/react["createElement"](wechat["View"],{className:card_index_modulemodules_default.a.wrapped},/*#__PURE__*/react["createElement"](wechat["View"],{className:card_index_modulemodules_default.a.header},/*#__PURE__*/react["createElement"](wechat["View"],{className:card_index_modulemodules_default.a.title},title),/*#__PURE__*/react["createElement"](wechat["View"],{className:card_index_modulemodules_default.a.status},/*#__PURE__*/react["createElement"](tag["a" /* default */],{round:true,color:status==='进行中'?'#f2826a':'#eeeeee'},status))),/*#__PURE__*/react["createElement"](wechat["View"],{className:card_index_modulemodules_default.a.brief},brief),/*#__PURE__*/react["createElement"](wechat["View"],{className:card_index_modulemodules_default.a.owner},/*#__PURE__*/react["createElement"](wechat["Text"],null,"\u521B\u5EFA\u65F6\u95F4\uFF1A",dateToString(date))));});
// EXTERNAL MODULE: ./src/component/link/index.js
var component_link = __webpack_require__(13);

// EXTERNAL MODULE: ./src/pages/index/component/header/index.module.scss?modules
var header_index_modulemodules = __webpack_require__(12);
var header_index_modulemodules_default = /*#__PURE__*/__webpack_require__.n(header_index_modulemodules);

// CONCATENATED MODULE: ./src/pages/index/component/header/index.js
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}/* harmony default export */ var header = (function(props){var now=new Date();var nowHours=now.getHours()>=10?now.getHours():'0'+now.getHours();var nowMinutes=now.getMinutes()>=10?now.getMinutes():'0'+now.getMinutes();return/*#__PURE__*/react["createElement"](wechat["View"],_extends({className:header_index_modulemodules_default.a.header},props),/*#__PURE__*/react["createElement"](wechat["View"],{className:header_index_modulemodules_default.a.backBoard},/*#__PURE__*/react["createElement"](wechat["View"],{className:header_index_modulemodules_default.a.backBoardCurve}),/*#__PURE__*/react["createElement"](wechat["View"],{className:header_index_modulemodules_default.a.backBoardCircle}),/*#__PURE__*/react["createElement"](wechat["View"],{className:header_index_modulemodules_default.a.backBoardCircle}),/*#__PURE__*/react["createElement"](wechat["View"],{className:header_index_modulemodules_default.a.backBoardCircle}),/*#__PURE__*/react["createElement"](wechat["View"],{className:header_index_modulemodules_default.a.backBoardCircle})),/*#__PURE__*/react["createElement"](wechat["View"],{className:header_index_modulemodules_default.a.info},/*#__PURE__*/react["createElement"](wechat["View"],{className:header_index_modulemodules_default.a.infoContent},/*#__PURE__*/react["createElement"](wechat["View"],null,"\u65F6\u95F4\uFF0C","".concat(nowHours,":").concat(nowMinutes)))),/*#__PURE__*/react["createElement"](wechat["View"],{className:header_index_modulemodules_default.a.buttons},/*#__PURE__*/react["createElement"](component_link["a" /* default */],{to:"/pages/join/index",className:header_index_modulemodules_default.a.button},"\u52A0\u5165\u6D3B\u52A8"),/*#__PURE__*/react["createElement"](component_link["a" /* default */],{to:"/pages/create/index",className:header_index_modulemodules_default.a.button},"\u521B\u5EFA\u6D3B\u52A8")));});
// EXTERNAL MODULE: ./src/api/index.js + 8 modules
var api = __webpack_require__(5);

// CONCATENATED MODULE: ./src/pages/index/index.js
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var index_page=function _page(){var _React$useState=react["useState"]([]),_React$useState2=_slicedToArray(_React$useState,2),activities=_React$useState2[0],setActivities=_React$useState2[1];var _getStorageSync=Object(wechat["getStorageSync"])('checked'),userId=_getStorageSync.userId;react["useEffect"](function(){Object(wechat["setEnableDebug"])({enableDebug:true});},[]);Object(esm["e" /* usePageEvent */])('onshow',function(){_asyncToGenerator(/*#__PURE__*/runtime_default.a.mark(function _callee(){var _yield$Activity$getAl,all,parsed;return runtime_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return api["a" /* activity */].getAll();case 2:_yield$Activity$getAl=_context.sent;all=_yield$Activity$getAl.all;if(!all)all=[];all.sort(function(a,b){return b.createdDate-a.createdDate;});parsed=all.map(function(item){return{id:item.id,title:item.name,brief:item.content,status:Date.now()<item.endDate?'进行中':'已结束',owner:item.createdBy==userId?1:0,date:new Date(item.createdDate)};});setActivities(parsed);case 8:case"end":return _context.stop();}}},_callee);}))();});return/*#__PURE__*/react["createElement"](wechat["View"],null,/*#__PURE__*/react["createElement"](header,null),/*#__PURE__*/react["createElement"](wechat["View"],{className:index_modulemodules_default.a.cardList},activities.length!==0?activities.map(function(item,index){return/*#__PURE__*/react["createElement"](component_link["a" /* default */],{key:index,to:"/pages/manage/index?id=".concat(item.id,"&owner=").concat(item.owner)},/*#__PURE__*/react["createElement"](card,{activity:item}));}):/*#__PURE__*/react["createElement"](wechat["View"],{className:index_modulemodules_default.a.noActivity},"\u672A\u52A0\u5165\u4EFB\u4F55\u6D3B\u52A8")));};/* harmony default export */ var pages_index = __webpack_exports__["default"] = (Page(Object(esm["d" /* createPageConfig */])(index_page,"pages/index/index")));

/***/ })

},[[66,1,0]]]);