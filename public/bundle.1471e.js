!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="mdyV")}({QP3f:function(e){e.exports=JSON.parse('{"private":true,"name":"cardgenerator","version":"3.0.0","license":"MIT","engines":{"npm":">=8.0.0 <9.0.0","node":">=16.0.0 <17.0.0"},"scripts":{"build":"preact build --no-prerender --config preact.gh.config.js","serve":"sirv build --port 8080 --cors --single","dev":"preact watch","lint":"eslint src","test":"jest","test:watch":"jest --watch","deploy":"gh-pages -b build -d build -m \\"New version deployed\\"","build:vercel":"preact build --no-prerender --config preact.config.js --dest server/public","deploy:vercel":"gh-pages -b build-vercel -d server -m \\"New version deployed on Vercel\\" --remove \\"node_modules/*\\""},"eslintConfig":{"extends":"preact","ignorePatterns":["build/"]},"devDependencies":{"enzyme":"^3.11.0","enzyme-adapter-preact-pure":"^4.0.1","eslint":"^8.29.0","eslint-config-preact":"^1.3.0","gh-pages":"^4.0.0","jest":"^27.0.6","jest-preset-preact":"^4.0.5","preact-cli":"^3.4.1","sirv-cli":"2.0.2"},"dependencies":{"preact":"^10.11.3","preact-render-to-string":"^5.2.6","preact-router":"^4.1.0"},"jest":{"preset":"jest-preset-preact","setupFiles":["<rootDir>/tests/__mocks__/browserMocks.js","<rootDir>/tests/__mocks__/setupTests.js"],"testMatch":["**/__tests__/**/*.[j]s?(x)","**/?(*.)+(spec|test).[j]s?(x)"],"collectCoverage":true,"collectCoverageFrom":["<rootDir>/src/**/*.{js,jsx}"],"coverageDirectory":"<rootDir>/tests/coverage","coverageReporters":["json","text","html","cobertura"],"coverageThreshold":{"global":{"branches":1,"functions":1,"lines":1,"statements":1}}}}')},QfWi:function(e,t,n){"use strict";function r(e,t){ee.options.__h&&ee.options.__h(X,e,te||t),te=0;var n=X.__H||(X.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:re}),n.__[e]}function o(e){return te=1,i(d,e)}function i(e,t,n){var o=r(K++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):d(void 0,t),function(e){var t=o.__N?o.__N[0]:o.__[0],n=o.t(t,e);t!==n&&(o.__N=[n,o.__[1]],o.__c.setState({}))}],o.__c=X,!X.u)){X.u=!0;var i=X.shouldComponentUpdate;X.shouldComponentUpdate=function(e,t,n){if(!o.__c.__H)return!0;var r=o.__c.__H.__.filter((function(e){return e.__c}));if(r.every((function(e){return!e.__N})))return!i||i.call(this,e,t,n);var u=!1;return r.forEach((function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(u=!0)}})),!(!u&&o.__c.props===e)&&(!i||i.call(this,e,t,n))}}return o.__N||o.__}function u(e,t){var n=r(K++,7);return f(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function c(e,t){return te=8,u((function(){return e}),t)}function l(){for(var e;e=ne.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(s),e.__H.__h.forEach(_),e.__H.__h=[]}catch(t){e.__H.__h=[],ee.options.__e(t,e.__v)}}function a(e){var t,n=function(){clearTimeout(r),se&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);se&&(t=requestAnimationFrame(n))}function s(e){var t=X,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),X=t}function _(e){var t=X;e.__c=e.__(),X=t}function f(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function d(e,t){return"function"==typeof t?t(e):t}function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function b(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===p(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===y(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){for(var n=-1,r=e.slice(0),o=g({},t),i=[],u=function(){var e=he(0,r.length-1),t=r[e];r=r.filter((function(e){return e!=t}));var n=w(o,t),u=n.extractedNumber;o=g({},n.updatedSource),i.push(u)};++n<5;)u();return{updatedSource:g({},o),row:i.slice(0).sort((function(e,t){return e-t}))}}function w(e,t){var n=e[t].slice(0),r=he(0,n.length-1),o=e[t][r];return{extractedNumber:o,updatedSource:g(g({},e),{},O({},t,n.filter((function(e){return e!=o}))))}}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],l=!0,a=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(a)throw o}}return c}}(e,t)||A(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||A(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e){return P(e)}function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=j(C(ge,e),e),r=n.row,o=n.updatedSource;return 2==t.length?{updatedSource:o,rows:[].concat(N(t),[r])}:P(o,[].concat(N(t),[r]))}function C(e,t){var n=Object.entries(t).map((function(e){var t=S(e,2);return[+t[0],t[1].length]})).sort((function(e,t){return t[1]-e[1]}));return n.at(-1)[1]>3?e.slice(0):n.filter((function(e){return 0!=e[1]})).map((function(e){return e[0]})).slice(0,5)}function T(){for(var e=[],t=ve.slice(1),n=0;n<3;n++){var r=30*n;e[n]=t.slice(r,r+30)}return e}function x(){for(var e,t=[];(e=t.length)<6;){var n=e%2==0?15*e:15*(e-1)+5,r=[ve.slice(1+n,6+n),ve.slice(11+n,16+n),ve.slice(21+n,26+n)];t.push(r)}return t}function D(e){var t=function(e){return e.flat(3).sort((function(e,t){return e-t}))};return[t([e[0],e[1]]),t([e[2],e[3]]),t([e[4],e[5]])]}function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){U(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===I(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t=[],n=structuredClone(Oe);t.length<e;){6==t.length&&(n=structuredClone(Oe));var r=E(n),o=r.rows,i=r.updatedSource;t.push(o),n=H({},i)}return t}function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function V(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){$(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===L(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],l=!0,a=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(a)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q(e,t,n){var r=-1==e?n.findIndex((function(e){return e>0})):e+t>n.length-1?e+t-n.length-1:e+t;return n.at(r)?r:Q(r,t>0?1:-1,n)}function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],l=!0,a=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(a)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.r(t);var K,X,Y,Z,ee=n("hosL"),te=0,ne=[],re=[],oe=ee.options.__b,ie=ee.options.__r,ue=ee.options.diffed,ce=ee.options.__c,le=ee.options.unmount;ee.options.__b=function(e){X=null,oe&&oe(e)},ee.options.__r=function(e){ie&&ie(e),K=0;var t=(X=e.__c).__H;t&&(Y===X?(t.__h=[],X.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=re,e.__N=e.i=void 0}))):(t.__h.forEach(s),t.__h.forEach(_),t.__h=[])),Y=X},ee.options.diffed=function(e){ue&&ue(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==ne.push(t)&&Z===ee.options.requestAnimationFrame||((Z=ee.options.requestAnimationFrame)||a)(l)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==re&&(e.__=e.__V),e.i=void 0,e.__V=re}))),Y=X=null},ee.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(s),e.__h=e.__h.filter((function(e){return!e.__||_(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],ee.options.__e(n,e.__v)}})),ce&&ce(e,t)},ee.options.unmount=function(e){le&&le(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{s(e)}catch(e){t=e}})),n.__H=void 0,t&&ee.options.__e(t,n.__v))};var ae,se="function"==typeof requestAnimationFrame,_e="RESET",fe="NEW_CARD",de="NEW_TOMBOLONE",pe="NEW_TOMBOLONE_NUMBER",be="SELECT_NUMBER",me="RESTORE_STATE",he=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)},ye=new Array(91).fill(""),ve=Object.keys(ye).map(Number),ge=[1,10,20,30,40,50,60,70,80],Oe=(b(ae={},ge[0],m(ve.slice(1,10))),b(ae,ge[1],m(ve.slice(10,20))),b(ae,ge[2],m(ve.slice(20,30))),b(ae,ge[3],m(ve.slice(30,40))),b(ae,ge[4],m(ve.slice(40,50))),b(ae,ge[5],m(ve.slice(50,60))),b(ae,ge[6],m(ve.slice(60,70))),b(ae,ge[7],m(ve.slice(70,80))),b(ae,ge[8],m(ve.slice(80,91))),ae),je={getCards:F,getTomboloneCardsV1:T,getTomboloneCardsV2:x,convertOutputGetTomboloneCardsV2ToV1:D},we="tombolata",Se=window.sessionStorage.getItem(we),Ne={cards:[],selectedNumbers:[],tomboloneFreeNumbers:[],tomboloneNewNumber:null,mode:""},Ae=Se?JSON.parse(Se):Ne;window.history.pushState(Ae,"","#"+(Ae.mode||""));var ke=["cards","tombolone"],Ee=function(e,t){var n=function(e,t){switch(t.type){case me:return t.state?B({},t.state):e;case _e:return B(B({},e),{},{selectedNumbers:[],tomboloneFreeNumbers:e.tomboloneFreeNumbers.length?[].concat(V(e.cards[0]),V(e.cards[1]),V(e.cards[2])):Ne.tomboloneFreeNumbers});case fe:return B(B({},Ne),{},{mode:ke[0],cards:je.getCards()});case de:var n=je.convertOutputGetTomboloneCardsV2ToV1(je.getTomboloneCardsV2());return B(B({},Ne),{},{mode:ke[1],cards:n,tomboloneFreeNumbers:[].concat(V(n[0]),V(n[1]),V(n[2]))});case pe:if(!e.tomboloneFreeNumbers.length)return e;var r=he(0,e.tomboloneFreeNumbers.length-1),o=e.tomboloneFreeNumbers.slice(0),i=o.splice(r,1)[0];return B(B({},e),{},{tomboloneNewNumber:i,tomboloneFreeNumbers:o,selectedNumbers:[].concat(V(e.selectedNumbers),[i])});case be:return e.mode===ke[1]?e:B(B({},e),{},{selectedNumbers:e.selectedNumbers.includes(t.number)?e.selectedNumbers.filter((function(e){return e!=t.number})):[].concat(V(e.selectedNumbers),[t.number])});default:throw new Error("Unexpected action")}}(e,t);return t.type===_e?window.sessionStorage.removeItem(we):window.sessionStorage.setItem(we,JSON.stringify(n)),window.history.pushState(n,"","#"+(n.mode||"")),n},Pe=function(e){var t=e.dispatch;return Object(ee.h)("section",{className:"card__controller"},Object(ee.h)("button",{onClick:function(){t({type:_e})}},"Reset"),Object(ee.h)("button",{onClick:function(){t({type:fe,quantity:2})}},"New Cards"),Object(ee.h)("button",{onClick:function(){t({type:de})}},"New [TOMBOLONE]"))},Ce=null,Te=function(e){var t=e.dispatch,n=e.number;return Object(ee.h)("section",{className:"card__tombolone_number"},Object(ee.h)("button",{onClick:function(){Ce||(t({type:pe}),Ce=window.setTimeout((function(){window.clearTimeout(Ce),Ce=null}),1e3))}},"New number"),Object(ee.h)("div",{id:"tombolone_number",role:"status","aria-live":n?"assertive":"off"},n||""))},xe=function(e){var t=e.dispatch,n=e.number,r=e.isSelected,o=e.setActiveDescendant;return Object(ee.h)("button",{id:n,className:"card__number".concat(r?" card__number--selected":""),onFocus:function(){o&&o("cell-".concat(n))},onClick:function(e){e.preventDefault(),e.stopPropagation(),t({type:be,number:n})},disabled:!o,tabIndex:"-1"},n)},De=function(e){var t=e.dispatch,n=e.isSelected,r=e.setActiveDescendant;return e.numbers.map((function(e,o){return Object(ee.h)("div",{key:e||Date.now()+o,role:"gridcell","aria-selected":e?n(e):void 0,"aria-disabled":!e,className:"card__box".concat(n(e)?" card__box--selected":""),id:e?"cell-".concat(e):void 0},e?Object(ee.h)(xe,{dispatch:t,number:e,isSelected:n(e),setActiveDescendant:r}):null)}))},Ie={ArrowLeft:-1,ArrowRight:1,ArrowUp:-9,ArrowDown:9},Me=function(e){var t=e.dispatch,n=e.numbers,r=e.isSelected,i=e.orderIndex,l=u((function(){var e=new Array(27).fill(0);return n.forEach((function(t,n){t.forEach((function(t){var r=9*n+(t<10?0:90==t?8:+"".concat(t)[0]);e[r]=t}))})),e}),[n]),a=q(o(void 0),2),s=a[0],_=a[1],f=c((function(e){var t=Ie[e.code];if(t){var n=Q(l.indexOf(e.target.id?+e.target.id:-1),t,l);document.getElementById("".concat(l.at(n))).focus()}}),[l]);return Object(ee.h)("div",{className:"card__container",role:"grid","aria-label":"Card num. ".concat(i+1),"aria-multiselectable":"true","aria-activedescendant":s,tabindex:"0",onKeyDown:f},Object(ee.h)("div",{className:"card"},Object(ee.h)("div",{className:"card__row",role:"row"},Object(ee.h)(De,{numbers:l.slice(0,9),dispatch:t,isSelected:r,setActiveDescendant:_})),Object(ee.h)("div",{className:"card__row",role:"row"},Object(ee.h)(De,{numbers:l.slice(9,18),dispatch:t,isSelected:r,setActiveDescendant:_})),Object(ee.h)("div",{className:"card__row",role:"row"},Object(ee.h)(De,{numbers:l.slice(18,27),dispatch:t,isSelected:r,setActiveDescendant:_}))))},He=function(e){var t=e.dispatch,n=e.numbers,r=e.isSelected;return Object(ee.h)("div",{className:"card__container card__container--tombolone",role:"grid","aria-label":"Tombolone"},Object(ee.h)("div",{className:"card card--tombolone"},Object(ee.h)("div",{className:"card__row",role:"row"},Object(ee.h)(De,{numbers:n.slice(0,10),dispatch:t,isSelected:r})),Object(ee.h)("div",{className:"card__row",role:"row"},Object(ee.h)(De,{numbers:n.slice(10,20),dispatch:t,isSelected:r})),Object(ee.h)("div",{className:"card__row",role:"row"},Object(ee.h)(De,{numbers:n.slice(20,30),dispatch:t,isSelected:r}))))},Ue=n("QP3f"),Fe=n("ibc8");t.default=function(){var e,t,n,o=J(i(Ee,Ae),2),u=o[0],l=o[1],a=c((function(e){return u.selectedNumbers.includes(e)}),[u.selectedNumbers]),s=u.mode===ke[1];return e=function(){window.onpopstate=function(e){var t=e.state;l({type:me,state:void 0===t?{}:t})}},t=[],n=r(K++,3),!ee.options.__s&&f(n.__H,t)&&(n.__=e,n.i=t,X.__H.__h.push(n)),Object(ee.h)("div",{id:"app",className:"container"},Object(ee.h)("header",null,Object(ee.h)("h1",null,"Tombolata")),Object(ee.h)("main",null,Object(ee.h)(Pe,{dispatch:l}),s?Object(ee.h)(Te,{dispatch:l,number:u.tomboloneNewNumber}):u.cards&&u.cards.length?Object(ee.h)(Fe.a,null):null,Object(ee.h)("section",{className:"card__list"},u.cards.map((function(e,t){return s?Object(ee.h)(He,{key:t,dispatch:l,isSelected:a,numbers:e}):Object(ee.h)(Me,{key:t+e[0],dispatch:l,isSelected:a,numbers:e,orderIndex:t})})))),Object(ee.h)("footer",null,"v.",Ue.version," "))}},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o,i,c={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:c[i]=t[i];if(arguments.length>2&&(c.children=arguments.length>3?x.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===c[i]&&(c[i]=e.defaultProps[i]);return u(e,c,r,o,null)}function u(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++I:o};return null==o&&null!=D.vnode&&D.vnode(i),i}function c(){return{current:null}}function l(e){return e.children}function a(e,t){this.props=e,this.context=t}function s(e,t){if(null==t)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?s(e):null}function _(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return _(e)}}function f(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!d.__r++||U!==D.debounceRendering)&&((U=D.debounceRendering)||setTimeout)(d)}function d(){for(var e;d.__r=H.length;)e=H.sort((function(e,t){return e.__v.__b-t.__v.__b})),H=[],e.some((function(e){var t,n,o,i,u,c;e.__d&&(u=(i=(t=e).__v).__e,(c=t.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,j(c,i,o,t.__n,void 0!==c.ownerSVGElement,null!=i.__h?[u]:null,n,null==u?s(i):u,i.__h),w(n,i),i.__e!=u&&_(i)))}))}function p(e,t,n,r,o,i,c,a,_,f){var d,p,m,y,v,g,O,w=r&&r.__k||V,S=w.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(y=n.__k[d]=null==(y=t[d])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?u(null,y,null,null,y):Array.isArray(y)?u(l,{children:y},null,null,null):y.__b>0?u(y.type,y.props,y.key,y.ref?y.ref:null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(m=w[d])||m&&y.key==m.key&&y.type===m.type)w[d]=void 0;else for(p=0;p<S;p++){if((m=w[p])&&y.key==m.key&&y.type===m.type){w[p]=void 0;break}m=null}j(e,y,m=m||L,o,i,c,a,_,f),v=y.__e,(p=y.ref)&&m.ref!=p&&(O||(O=[]),m.ref&&O.push(m.ref,null,y),O.push(p,y.__c||v,y)),null!=v?(null==g&&(g=v),"function"==typeof y.type&&y.__k===m.__k?y.__d=_=b(y,_,e):_=h(e,y,m,w,v,_),"function"==typeof n.type&&(n.__d=_)):_&&m.__e==_&&_.parentNode!=e&&(_=s(m))}for(n.__e=g,d=S;d--;)null!=w[d]&&A(w[d],w[d]);if(O)for(d=0;d<O.length;d++)N(O[d],O[++d],O[++d])}function b(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?b(r,t,n):h(n,r,r,o,r.__e,t));return t}function m(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){m(e,t)})):t.push(e)),t}function h(e,t,n,r,o,i){var u,c,l;if(void 0!==t.__d)u=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),u=null;else{for(c=i,l=0;(c=c.nextSibling)&&l<r.length;l+=1)if(c==o)break e;e.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function y(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||R.test(t)?n:n+"px"}function v(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||y(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||y(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?O:g,i):e.removeEventListener(t,i?O:g,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&-1==t.indexOf("-")?e.removeAttribute(t):e.setAttribute(t,n))}}function g(e){this.l[e.type+!1](D.event?D.event(e):e)}function O(e){this.l[e.type+!0](D.event?D.event(e):e)}function j(e,t,n,o,i,u,c,s,_){var f,d,b,m,h,y,v,g,O,j,w,N,A,E,P,C=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(_=n.__h,s=t.__e=n.__e,t.__h=null,u=[s]),(f=D.__b)&&f(t);try{e:if("function"==typeof C){if(g=t.props,O=(f=C.contextType)&&o[f.__c],j=f?O?O.props.value:f.__:o,n.__c?v=(d=t.__c=n.__c).__=d.__E:("prototype"in C&&C.prototype.render?t.__c=d=new C(g,j):(t.__c=d=new a(g,j),d.constructor=C,d.render=k),O&&O.sub(d),d.props=g,d.state||(d.state={}),d.context=j,d.__n=o,b=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=C.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=r({},d.__s)),r(d.__s,C.getDerivedStateFromProps(g,d.__s))),m=d.props,h=d.state,b)null==C.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==C.getDerivedStateFromProps&&g!==m&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(g,j),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(g,d.__s,j)||t.__v===n.__v){for(d.props=g,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),w=0;w<d._sb.length;w++)d.__h.push(d._sb[w]);d._sb=[],d.__h.length&&c.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(g,d.__s,j),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(m,h,y)}))}if(d.context=j,d.props=g,d.__v=t,d.__P=e,N=D.__r,A=0,"prototype"in C&&C.prototype.render){for(d.state=d.__s,d.__d=!1,N&&N(t),f=d.render(d.props,d.state,d.context),E=0;E<d._sb.length;E++)d.__h.push(d._sb[E]);d._sb=[]}else do{d.__d=!1,N&&N(t),f=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++A<25);d.state=d.__s,null!=d.getChildContext&&(o=r(r({},o),d.getChildContext())),b||null==d.getSnapshotBeforeUpdate||(y=d.getSnapshotBeforeUpdate(m,h)),P=null!=f&&f.type===l&&null==f.key?f.props.children:f,p(e,Array.isArray(P)?P:[P],t,n,o,i,u,c,s,_),d.base=t.__e,t.__h=null,d.__h.length&&c.push(d),v&&(d.__E=d.__=null),d.__e=!1}else null==u&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=S(n.__e,t,n,o,i,u,c,_);(f=D.diffed)&&f(t)}catch(e){t.__v=null,(_||null!=u)&&(t.__e=s,t.__h=!!_,u[u.indexOf(s)]=null),D.__e(e,t,n)}}function w(e,t){D.__c&&D.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){D.__e(e,t.__v)}}))}function S(e,t,n,r,i,u,c,l){var a,_,f,d=n.props,b=t.props,m=t.type,h=0;if("svg"===m&&(i=!0),null!=u)for(;h<u.length;h++)if((a=u[h])&&"setAttribute"in a==!!m&&(m?a.localName===m:3===a.nodeType)){e=a,u[h]=null;break}if(null==e){if(null===m)return document.createTextNode(b);e=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,b.is&&b),u=null,l=!1}if(null===m)d===b||l&&e.data===b||(e.data=b);else{if(u=u&&x.call(e.childNodes),_=(d=n.props||L).dangerouslySetInnerHTML,f=b.dangerouslySetInnerHTML,!l){if(null!=u)for(d={},h=0;h<e.attributes.length;h++)d[e.attributes[h].name]=e.attributes[h].value;(f||_)&&(f&&(_&&f.__html==_.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||v(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||v(e,i,t[i],n[i],r)}(e,b,d,i,l),f)t.__k=[];else if(h=t.props.children,p(e,Array.isArray(h)?h:[h],t,n,r,i&&"foreignObject"!==m,u,c,u?u[0]:n.__k&&s(n,0),l),null!=u)for(h=u.length;h--;)null!=u[h]&&o(u[h]);l||("value"in b&&void 0!==(h=b.value)&&(h!==e.value||"progress"===m&&!h||"option"===m&&h!==d.value)&&v(e,"value",h,d.value,!1),"checked"in b&&void 0!==(h=b.checked)&&h!==e.checked&&v(e,"checked",h,d.checked,!1))}return e}function N(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){D.__e(e,n)}}function A(e,t,n){var r,i;if(D.unmount&&D.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||N(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){D.__e(e,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&A(r[i],t,n||"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__=e.__e=e.__d=void 0}function k(e,t,n){return this.constructor(e,n)}function E(e,t,n){var r,o,u;D.__&&D.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,u=[],j(t,e=(!r&&n||t).__k=i(l,null,[e]),o||L,L,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?x.call(t.childNodes):null,u,!r&&n?n:o?o.__e:t.firstChild,r),w(u,e)}function P(e,t){E(e,t,P)}function C(e,t,n){var o,i,c,l=r({},e.props);for(c in t)"key"==c?o=t[c]:"ref"==c?i=t[c]:l[c]=t[c];return arguments.length>2&&(l.children=arguments.length>3?x.call(arguments,2):n),u(e.type,l,o||e.key,i||e.ref,null)}function T(e,t){var n={__c:t="__cC"+F++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(f)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"Component",(function(){return a})),n.d(t,"Fragment",(function(){return l})),n.d(t,"cloneElement",(function(){return C})),n.d(t,"createContext",(function(){return T})),n.d(t,"createElement",(function(){return i})),n.d(t,"createRef",(function(){return c})),n.d(t,"h",(function(){return i})),n.d(t,"hydrate",(function(){return P})),n.d(t,"isValidElement",(function(){return M})),n.d(t,"options",(function(){return D})),n.d(t,"render",(function(){return E})),n.d(t,"toChildArray",(function(){return m}));var x,D,I,M,H,U,F,L={},V=[],R=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;x=V.slice,D={__e:function(e,t,n,r){for(var o,i,u;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),u=o.__d),u)return o.__E=o}catch(t){e=t}throw e}},I=0,M=function(e){return null!=e&&void 0===e.constructor},a.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),f(this))},a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},a.prototype.render=l,H=[],d.__r=0,F=0},ibc8:function(e,t,n){"use strict";(function(e){function r(e){e.preventDefault();var t=new FormData(e.target).get(o);t&&(location.hash="#".concat(t))}n.d(t,"a",(function(){return i}));var o="GoToNumberCTA",i=function(){return e("section",{className:"card-cell__cta"},e("form",{role:"search",onSubmit:r},e("label",null,"Enter a number",e("input",{id:o,name:o,type:"number",inputmode:"numeric",min:"1",max:"90",step:"1",placeholder:"1 - 90",list:"defaultNumbers"})),e("datalist",{id:"defaultNumbers"},Array(90).fill(1).map((function(e,t){return t+1})).map((function(t){return e("option",{key:t,value:t},t)}))),e("button",{type:"submit"},"Go to its cell")))}}).call(this,n("hosL").h)},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL"),o=r.h,i=r.render,u=function(e){return e&&e.default?e.default:e},c=function(e){return"/"===e[e.length-1]?e:e+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(c(n.p)+"sw.js"),"function"==typeof u(n("QfWi"))){var l=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var e=u(n("QfWi")),t={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(t=JSON.parse(decodeURI(r.innerHTML)).preRenderData||t);var a={preRenderData:t};t.url&&c(t.url);i(o(e,{CLI_DATA:a}),document.body,l)}()}}});
//# sourceMappingURL=bundle.1471e.js.map