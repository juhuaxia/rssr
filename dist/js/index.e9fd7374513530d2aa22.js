!function(e){function t(t){for(var r,a,l=t[0],c=t[1],i=t[2],s=0,d=[];s<l.length;s++)a=l[s],u[a]&&d.push(u[a][0]),u[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);d.length;)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==u[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},u={1:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="./";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var f=c;o.push([547,0]),n()}({153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.TODO_ADD="ADD",t.TODO_FILTER="TODO_FILTER",t.TODO_GETLIST="TODO_GETLIST"},209:function(e,t){},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(153)),o=n(105),a=n(88);(r=a)&&r.__esModule;function l(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var c={swiperBanner:[],nav:[],topicList:[],productList:[]};var i=(0,o.combineReducers)({swiperBanner:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.swiperBanner,t=arguments[1];switch(e=(0,a.List)(e),console.log("redux state",e),t.type){case u.TODO_ADD:return e.push({picture:"http://mall-file.putaocdn.com/file/4e123e4f1e884c832e2e27bd8af32e0b48c1686c.jpg"});default:return e}},nav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case u.TODO_GETLIST:return[].concat(l(e));case u.TODO_ADD:return e=[].concat(l(e),[{text:t.text}]);case u.TODO_FILTER:return e=e.filter(function(e,n){return e.text===t.text});default:return e}},topicList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case u.TODO_GETLIST:return[].concat(l(e));case u.TODO_ADD:return e=[].concat(l(e),[{text:t.text}]);case u.TODO_FILTER:return e=e.filter(function(e,n){return e.text===t.text});default:return e}},productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case u.TODO_GETLIST:return[].concat(l(e));case u.TODO_ADD:return e=[].concat(l(e),[{text:t.text}]);case u.TODO_FILTER:return e=e.filter(function(e,n){return e.text===t.text});default:return e}}});t.default=i},212:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(5),a=(r=o)&&r.__esModule?r:{default:r};var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),u(t,[{key:"render",value:function(){return a.default.createElement("div",null,"this is shopcartpage")}}]),t}();t.default=l},213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(5),a=(r=o)&&r.__esModule?r:{default:r};var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),u(t,[{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){return a.default.createElement("div",null,"this is personpage")}}]),t}();t.default=l},214:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatePrice=function(e){return e.toString().indexOf(".")>0?e:e+".00"}},215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(5),o=(r=u)&&r.__esModule?r:{default:r},a=n(214);t.default=function(e){return o.default.createElement("div",{className:"scrollBox"},o.default.createElement("div",{className:"scroll"},o.default.createElement("div",{className:"scroll_1"},o.default.createElement("ul",null,e.product_list.map(function(e){var t=e.id,n=e.title,r=e.image,u=(e.product_id,e.price);return o.default.createElement("li",{key:t},o.default.createElement("img",{src:r}),o.default.createElement("dl",null,o.default.createElement("dt",null,n),o.default.createElement("dd",null,(0,a.formatePrice)(u))))})))))}},216:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(5)),u=o(n(215));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement("div",null,r.default.createElement("h3",{className:"p-newIndex-t"},"主题推荐"),r.default.createElement("div",{className:"p-newIndex-theme"},e.topics.map(function(e){var t=e.id,n=e.picture_cover,o=e.product_list;return r.default.createElement("div",{key:t},r.default.createElement("img",{className:"banner",src:n}),r.default.createElement(u.default,{product_list:o}))})))}},217:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(5),o=(r=u)&&r.__esModule?r:{default:r};t.default=function(e){return o.default.createElement("li",null,o.default.createElement("img",{src:e.picture}),o.default.createElement("p",null,e.title))}},277:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addTodo=function(e){return{type:r.TODO_ADD,text:e}},t.filterTodo=function(e){return{type:r.TODO_FILTER,text:e}},t.getList=function(){return{type:r.TODO_GETLIST}};var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(153))},278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(5),o=s(u),a=n(162),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(277)),c=s(n(276)),i=(s(n(88)),s(n(217))),f=s(n(216));function s(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.__id=0,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),r(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"clickhandle",value:function(){this.props.addTodo()}},{key:"render",value:function(){var e=this,t=this.props,n=t.swiperBanner,r=t.nav,u=t.topicList;t.productList;return o.default.createElement("div",null,o.default.createElement("div",{className:"banner"},o.default.createElement(c.default,null,n.map(function(t,n){var r=t.picture,u=t.id;return o.default.createElement("img",{src:r,key:u||e.__id++})}))),o.default.createElement("div",{className:"p-newIndex-line"}),o.default.createElement("div",{className:"p-newIndex-menu"},r.map(function(t,n){var r=t.picture,u=t.id,a=t.title;return o.default.createElement(i.default,{key:u||e.__id++,picture:r,title:a})})),o.default.createElement(f.default,{topics:u.data||[]}))}}]),t}(),p=l;t.default=(0,a.connect)(function(e){return{swiperBanner:e.swiperBanner,nav:e.nav,topicList:e.topicList,productList:e.productList}},p)(d)},279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a(n(5));var r=a(n(278)),u=a(n(213)),o=a(n(212));function a(e){return e&&e.__esModule?e:{default:e}}var l=[{path:"/",exact:!0,component:r.default},{path:"/shopcart",component:o.default},{path:"/person",component:u.default}];t.default=l},280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(5),o=(r=u)&&r.__esModule?r:{default:r};t.default=function(e){var t=e.title;return e.isHome?o.default.createElement("header",null," ",o.default.createElement("p",null,t)," ",o.default.createElement("i",{className:"iconfont more"})," "):o.default.createElement("header",null,o.default.createElement("i",{className:"iconfont backBtn"}),o.default.createElement("p",null,t)," ",o.default.createElement("i",{className:"iconfont more"})," ")}},281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=c(n(5)),o=n(171),a=c(n(280)),l=c(n(279));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return u.default.createElement("div",{className:"app"},u.default.createElement(a.default,null),l.default.map(function(e,t){return u.default.createElement(o.Route,r({key:t},e))}))}},332:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(5)),u=n(171),o=n(162),a=f(n(281)),l=f(n(211)),c=n(105),i=f(n(210));f(n(88));function f(e){return e&&e.__esModule?e:{default:e}}var s=window.__initReduxState__||null,d=(0,c.createStore)(l.default,s,(0,c.applyMiddleware)(i.default));console.log(d.getState());t.default=function(){return r.default.createElement(u.BrowserRouter,null,r.default.createElement(o.Provider,{store:d},r.default.createElement(a.default,null)))}},344:function(e,t,n){"use strict";var r=a(n(5)),u=n(342),o=a(n(332));function a(e){return e&&e.__esModule?e:{default:e}}n(209),(0,u.render)(r.default.createElement(o.default,null),document.getElementById("app"))},547:function(e,t,n){n(546),e.exports=n(344)}});