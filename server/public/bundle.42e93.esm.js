!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="mdyV")}({"0iWG":function(e,t,n){"use strict";(function(e){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=n("hosL"),u=n("QRet"),l=n("b1lf"),s=n("gELI");const _=({dispatch:e})=>Object(c.h)("section",{className:"card__controller"},Object(c.h)("button",{onClick:()=>{e({type:l.d})}},"Reset"),Object(c.h)("button",{onClick:()=>{e({type:l.a,quantity:2})}},"New Cards"),Object(c.h)("button",{onClick:()=>{e({type:l.b})}},"New [TOMBOLONE]")),a="session_id",f=({inSession:e,tomboloneNumber:t,tomboloneSelected:n,dispatch:r})=>{const i=!n&&!!t;return Object(c.h)("section",{className:"session-controller"+(i?" session-controller--number":"")},e?i?Object(c.h)("div",{className:"session-tnumber"},Object(c.h)("span",null,"Latest Tombolone Number: "),Object(c.h)("a",{href:`#${t}`},t)):null:Object(c.h)("form",{onSubmit:function(e){e.preventDefault();(function(e){return window.fetch("/api/auth",{method:"POST",mode:"cors",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:e})})})(new FormData(e.target).get(a)).then((e=>e.json())).then((e=>{!function(e,t){if(e.output){window.tombolataInSession=!0;const n=new window.Pusher(e.pusherJs.apiKey,{cluster:e.pusherJs.cluster}).subscribe(e.pusherJs.channelName);t({type:l.g,payload:o({},e.pusherJs)}),n.bind("tombolone-active-status",(({message:e})=>{t({type:l.i,payload:e})})),n.bind("tombolone-new-number",(({message:e})=>{t({type:l.j,payload:e})}))}else console.error("session auth - wrong code")}(e,r)})).catch((e=>{console.error("session auth",e)}))}},Object(c.h)("label",null,"Type in the session ID",Object(c.h)("input",{id:a,name:a,type:"text"})),Object(c.h)("button",{type:"submit"},"Enter")))};t.a=({dispatch:t,tomboloneSelected:n})=>{const[r,o]=Object(u.d)(s.a,s.b),i=!!Object.keys(r.pusherSettings).length,l=!i||!r.isTomboloneButtonEnabled;return Object(c.h)(e,null,Object(c.h)(_,{dispatch:t,isNewTomboloneButtonEnabled:l}),Object(c.h)(f,{dispatch:o,inSession:i,tomboloneNumber:r.tomboloneLatestNumber,tomboloneSelected:n}))}}).call(this,n("hosL").Fragment)},QP3f:function(e){e.exports=JSON.parse('{"private":true,"name":"cardgenerator","version":"3.0.0","license":"MIT","engines":{"npm":">=8.0.0 <9.0.0","node":">=16.0.0 <17.0.0"},"scripts":{"build":"preact build --no-prerender --config preact.gh.config.js","serve":"sirv build --port 8080 --cors --single","dev":"preact watch","lint":"eslint src","test":"jest","test:watch":"jest --watch","deploy":"gh-pages -b build -d build -m \\"New version deployed\\"","build:vercel":"preact build --no-prerender --config preact.config.js --dest server/public"},"eslintConfig":{"extends":"preact","ignorePatterns":["build/"]},"devDependencies":{"enzyme":"^3.11.0","enzyme-adapter-preact-pure":"^4.0.1","eslint":"^8.29.0","eslint-config-preact":"^1.3.0","gh-pages":"^4.0.0","jest":"^27.0.6","jest-preset-preact":"^4.0.5","preact-cli":"^3.4.1","sirv-cli":"2.0.2"},"dependencies":{"preact":"^10.11.3","preact-render-to-string":"^5.2.6","preact-router":"^4.1.0"},"jest":{"preset":"jest-preset-preact","setupFiles":["<rootDir>/tests/__mocks__/browserMocks.js","<rootDir>/tests/__mocks__/setupTests.js"],"testMatch":["**/__tests__/**/*.[j]s?(x)","**/?(*.)+(spec|test).[j]s?(x)"],"collectCoverage":true,"collectCoverageFrom":["<rootDir>/src/**/*.{js,jsx}"],"coverageDirectory":"<rootDir>/tests/coverage","coverageReporters":["json","text","html","cobertura"],"coverageThreshold":{"global":{"branches":1,"functions":1,"lines":1,"statements":1}}}}')},QRet:function(e,t,n){"use strict";function r(e,t){y.options.__h&&y.options.__h(h,e,g||t),g=0;var n=h.__H||(h.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:j}),n.__[e]}function o(e){return g=1,i(p,e)}function i(e,t,n){var o=r(b++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):p(void 0,t),function(e){var t=o.__N?o.__N[0]:o.__[0],n=o.t(t,e);t!==n&&(o.__N=[n,o.__[1]],o.__c.setState({}))}],o.__c=h,!h.u)){h.u=!0;var i=h.shouldComponentUpdate;h.shouldComponentUpdate=function(e,t,n){if(!o.__c.__H)return!0;var r=o.__c.__H.__.filter((function(e){return e.__c}));if(r.every((function(e){return!e.__N})))return!i||i.call(this,e,t,n);var c=!1;return r.forEach((function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(c=!0)}})),!(!c&&o.__c.props===e)&&(!i||i.call(this,e,t,n))}}return o.__N||o.__}function c(e,t){var n=r(b++,3);!y.options.__s&&d(n.__H,t)&&(n.__=e,n.i=t,h.__H.__h.push(n))}function u(e,t){var n=r(b++,7);return d(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function l(e,t){return g=8,u((function(){return e}),t)}function s(){for(var e;e=O.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(a),e.__H.__h.forEach(f),e.__H.__h=[]}catch(t){e.__H.__h=[],y.options.__e(t,e.__v)}}function _(e){var t,n=function(){clearTimeout(r),T&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);T&&(t=requestAnimationFrame(n))}function a(e){var t=h,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),h=t}function f(e){var t=h;e.__c=e.__(),h=t}function d(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function p(e,t){return"function"==typeof t?t(e):t}n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return o}));var b,h,m,v,y=n("hosL"),g=0,O=[],j=[],w=y.options.__b,S=y.options.__r,N=y.options.diffed,P=y.options.__c,E=y.options.unmount;y.options.__b=function(e){h=null,w&&w(e)},y.options.__r=function(e){S&&S(e),b=0;var t=(h=e.__c).__H;t&&(m===h?(t.__h=[],h.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=j,e.__N=e.i=void 0}))):(t.__h.forEach(a),t.__h.forEach(f),t.__h=[])),m=h},y.options.diffed=function(e){N&&N(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==O.push(t)&&v===y.options.requestAnimationFrame||((v=y.options.requestAnimationFrame)||_)(s)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==j&&(e.__=e.__V),e.i=void 0,e.__V=j}))),m=h=null},y.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(a),e.__h=e.__h.filter((function(e){return!e.__||f(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],y.options.__e(n,e.__v)}})),P&&P(e,t)},y.options.unmount=function(e){E&&E(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{a(e)}catch(e){t=e}})),n.__H=void 0,t&&y.options.__e(t,n.__v))};var T="function"==typeof requestAnimationFrame},QfWi:function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){let n=-1,r=e.slice(0),i=o({},t),c=[];for(;++n<5;){const e=r[P(0,r.length-1)];r=r.filter((t=>t!=e));const{extractedNumber:t,updatedSource:n}=u(i,e);i=o({},n),c.push(t)}return{updatedSource:o({},i),row:c.slice(0).sort(((e,t)=>e-t))}}function u(e,t){const n=e[t].slice(0),r=P(0,n.length-1),i=e[t][r];return{extractedNumber:i,updatedSource:o(o({},e),{},{[t]:n.filter((e=>e!=i))})}}function l(e){return s(e)}function s(e,t=[]){const{row:n,updatedSource:r}=c(_(k,e),e);return 2==t.length?{updatedSource:r,rows:[...t,n]}:s(r,[...t,n])}function _(e,t){const n=Object.entries(t).map((([e,t])=>[+e,t.length])).sort(((e,t)=>t[1]-e[1]));if(n.at(-1)[1]>3)return e.slice(0);return n.filter((e=>0!=e[1])).map((e=>e[0])).slice(0,5)}function a(){const e=[],t=T.slice(1);for(let n=0;n<3;n++){const r=30*n;e[n]=t.slice(r,r+30)}return e}function f(){const e=[];let t;for(;(t=e.length)<6;){const n=t%2==0?15*t:15*(t-1)+5,r=[T.slice(1+n,6+n),T.slice(11+n,16+n),T.slice(21+n,26+n)];e.push(r)}return e}function d(e){const t=function(e){return e.flat(3).sort(((e,t)=>e-t))};return[t([e[0],e[1]]),t([e[2],e[3]]),t([e[4],e[5]])]}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e=6){let t=[],n=structuredClone(D);for(;t.length<e;){6==t.length&&(n=structuredClone(D));const{rows:e,updatedSource:r}=l(n);t.push(e),n=b({},r)}return t}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){window.tombolataInSession&&window.fetch(`${e}?${new URLSearchParams({value:t})}`,{method:"GET",mode:"cors",credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((t=>{t.output||console.error("send udpate",e,"wrong value")})).catch((t=>{console.error("send update",e,t)}))}function j(e,t,n){const r=-1==e?n.findIndex((e=>e>0)):e+t>n.length-1?e+t-n.length-1:e+t;return n.at(r)?r:j(r,t>0?1:-1,n)}n.r(t);var w=n("hosL"),S=n("QRet"),N=n("b1lf");const P=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)),E=new Array(91).fill(""),T=Object.keys(E).map(Number),k=[1,10,20,30,40,50,60,70,80],D={[k[0]]:[...T.slice(1,10)],[k[1]]:[...T.slice(10,20)],[k[2]]:[...T.slice(20,30)],[k[3]]:[...T.slice(30,40)],[k[4]]:[...T.slice(40,50)],[k[5]]:[...T.slice(50,60)],[k[6]]:[...T.slice(60,70)],[k[7]]:[...T.slice(70,80)],[k[8]]:[...T.slice(80,91)]};var C={getCards:m,getTomboloneCardsV1:a,getTomboloneCardsV2:f,convertOutputGetTomboloneCardsV2ToV1:d};const x="tombolata",A=window.sessionStorage.getItem(x),L={cards:[],selectedNumbers:[],tomboloneFreeNumbers:[],tomboloneNewNumber:null,mode:""},U=A?JSON.parse(A):L;window.history.pushState(U,"","#"+(U.mode||""));const M=["cards","tombolone"];var H=(e,t)=>{const n=((e,t)=>{switch(t.type){case N.e:return t.state?y({},t.state):e;case N.d:return y(y({},e),{},{selectedNumbers:[],tomboloneFreeNumbers:e.tomboloneFreeNumbers.length?[...e.cards[0],...e.cards[1],...e.cards[2]]:L.tomboloneFreeNumbers});case N.a:return e.mode===M[1]&&O("/api/tombolone/active",1),y(y({},L),{},{mode:M[0],cards:C.getCards()});case N.b:{const e=C.convertOutputGetTomboloneCardsV2ToV1(C.getTomboloneCardsV2());return O("/api/tombolone/active",1),y(y({},L),{},{mode:M[1],cards:e,tomboloneFreeNumbers:[...e[0],...e[1],...e[2]]})}case N.c:{if(!e.tomboloneFreeNumbers.length)return e;const t=P(0,e.tomboloneFreeNumbers.length-1),n=e.tomboloneFreeNumbers.slice(0),r=n.splice(t,1)[0];return O("/api/tombolone/number",r),y(y({},e),{},{tomboloneNewNumber:r,tomboloneFreeNumbers:n,selectedNumbers:[...e.selectedNumbers,r]})}case N.f:return e.mode===M[1]?e:y(y({},e),{},{selectedNumbers:e.selectedNumbers.includes(t.number)?e.selectedNumbers.filter((e=>e!=t.number)):[...e.selectedNumbers,t.number]});default:throw new Error("Unexpected action")}})(e,t);return t.type===N.d?window.sessionStorage.removeItem(x):window.sessionStorage.setItem(x,JSON.stringify(n)),window.history.pushState(n,"","#"+(n.mode||"")),n},F=n("0iWG");let R=null;var I=({dispatch:e,number:t})=>Object(w.h)("section",{className:"card__tombolone_number"},Object(w.h)("button",{onClick:()=>{R||(e({type:N.c}),R=window.setTimeout((()=>{window.clearTimeout(R),R=null}),1e3))}},"New number"),Object(w.h)("div",{id:"tombolone_number",role:"status","aria-live":t?"assertive":"off"},t||""));const W=({dispatch:e,number:t,isSelected:n,setActiveDescendant:r})=>Object(w.h)("button",{id:t,className:"card__number"+(n?" card__number--selected":""),onFocus:()=>{r&&r(`cell-${t}`)},onClick:function(n){n.preventDefault(),n.stopPropagation(),e({type:N.f,number:t})},disabled:!r,tabIndex:"-1"},t);var V=({numbers:e,dispatch:t,isSelected:n,setActiveDescendant:r})=>e.map(((e,o)=>Object(w.h)("div",{key:e||Date.now()+o,role:"gridcell","aria-selected":e?n(e):void 0,"aria-disabled":!e,className:"card__box"+(n(e)?" card__box--selected":""),id:e?`cell-${e}`:void 0},e?Object(w.h)(W,{dispatch:t,number:e,isSelected:n(e),setActiveDescendant:r}):null)));const B={ArrowLeft:-1,ArrowRight:1,ArrowUp:-9,ArrowDown:9};var $=({dispatch:e,numbers:t,isSelected:n,orderIndex:r})=>{const o=Object(S.c)((()=>{const e=new Array(27).fill(0);return t.forEach(((t,n)=>{t.forEach((t=>{e[9*n+(t<10?0:90==t?8:+`${t}`[0])]=t}))})),e}),[t]),[i,c]=Object(S.e)(void 0),u=Object(S.a)((e=>{const t=B[e.code];if(!t)return;const n=j(o.indexOf(e.target.id?+e.target.id:-1),t,o);document.getElementById(`${o.at(n)}`).focus()}),[o]);return Object(w.h)("div",{className:"card__container",role:"grid","aria-label":`Card num. ${r+1}`,"aria-multiselectable":"true","aria-activedescendant":i,tabindex:"0",onKeyDown:u},Object(w.h)("div",{className:"card"},Object(w.h)("div",{className:"card__row",role:"row"},Object(w.h)(V,{numbers:o.slice(0,9),dispatch:e,isSelected:n,setActiveDescendant:c})),Object(w.h)("div",{className:"card__row",role:"row"},Object(w.h)(V,{numbers:o.slice(9,18),dispatch:e,isSelected:n,setActiveDescendant:c})),Object(w.h)("div",{className:"card__row",role:"row"},Object(w.h)(V,{numbers:o.slice(18,27),dispatch:e,isSelected:n,setActiveDescendant:c}))))},G=({dispatch:e,numbers:t,isSelected:n})=>Object(w.h)("div",{className:"card__container card__container--tombolone",role:"grid","aria-label":"Tombolone"},Object(w.h)("div",{className:"card card--tombolone"},Object(w.h)("div",{className:"card__row",role:"row"},Object(w.h)(V,{numbers:t.slice(0,10),dispatch:e,isSelected:n})),Object(w.h)("div",{className:"card__row",role:"row"},Object(w.h)(V,{numbers:t.slice(10,20),dispatch:e,isSelected:n})),Object(w.h)("div",{className:"card__row",role:"row"},Object(w.h)(V,{numbers:t.slice(20,30),dispatch:e,isSelected:n})))),J=n("QP3f"),Q=n("ibc8");t.default=()=>{const[e,t]=Object(S.d)(H,U),n=Object(S.a)((t=>e.selectedNumbers.includes(t)),[e.selectedNumbers]),r=e.mode===M[1];return Object(S.b)((()=>{window.onpopstate=function({state:e={}}){t({type:N.e,state:e})}}),[]),Object(w.h)("div",{id:"app",className:"container"},Object(w.h)("header",null,Object(w.h)("h1",null,"Tombolata")),Object(w.h)("main",null,Object(w.h)(F.a,{dispatch:t,tomboloneSelected:r}),r?Object(w.h)(I,{dispatch:t,number:e.tomboloneNewNumber}):e.cards&&e.cards.length?Object(w.h)(Q.a,null):null,Object(w.h)("section",{className:"card__list"},e.cards.map(((e,o)=>r?Object(w.h)(G,{key:o,dispatch:t,isSelected:n,numbers:e}):Object(w.h)($,{key:o+e[0],dispatch:t,isSelected:n,numbers:e,orderIndex:o}))))),Object(w.h)("footer",null,"v.",J.version," "))}},b1lf:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return _})),n.d(t,"j",(function(){return a})),n.d(t,"g",(function(){return f}));const r="RESET",o="NEW_CARD",i="NEW_TOMBOLONE",c="NEW_TOMBOLONE_NUMBER",u="SELECT_NUMBER",l="RESTORE_STATE",s="UPDATE_SESSION_CONTROLLER_STATUS",_="UPDATE_TOMBOLONE_BUTTON_STATUS",a="UPDATE_TOMBOLONE_NUMBER",f="SET_PUSHER_API_SETTINGS"},gELI:function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t,n){return o(o({},e),{},{[n]:t.payload})}n.d(t,"b",(function(){return s}));var u=n("b1lf");const l={0:"unchecked",1:"checked",2:"disabled"},s={sessionControllerStatus:function(e){const t=Object.values(l).indexOf(e);return-1!=t?Object.keys(l)[t]:null}("unchecked"),isTomboloneButtonEnabled:!0,tomboloneLatestNumber:void 0,pusherSettings:{}};t.a=function(e,t){const n={[u.h]:()=>c(e,t,"sessionControllerStatus"),[u.i]:()=>c(e,t,"isTomboloneButtonEnabled"),[u.j]:()=>c(e,t,"tomboloneLatestNumber"),[u.g]:()=>c(e,t,"pusherSettings")};return n[t.type]?n[t.type]():e}},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o,i,u={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:u[i]=t[i];if(arguments.length>2&&(u.children=arguments.length>3?x.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===u[i]&&(u[i]=e.defaultProps[i]);return c(e,u,r,o,null)}function c(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++L:o};return null==o&&null!=A.vnode&&A.vnode(i),i}function u(){return{current:null}}function l(e){return e.children}function s(e,t){this.props=e,this.context=t}function _(e,t){if(null==t)return e.__?_(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?_(e):null}function a(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return a(e)}}function f(e){(!e.__d&&(e.__d=!0)&&M.push(e)&&!d.__r++||H!==A.debounceRendering)&&((H=A.debounceRendering)||setTimeout)(d)}function d(){for(var e;d.__r=M.length;)e=M.sort((function(e,t){return e.__v.__b-t.__v.__b})),M=[],e.some((function(e){var t,n,o,i,c,u;e.__d&&(c=(i=(t=e).__v).__e,(u=t.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,j(u,i,o,t.__n,void 0!==u.ownerSVGElement,null!=i.__h?[c]:null,n,null==c?_(i):c,i.__h),w(n,i),i.__e!=c&&a(i)))}))}function p(e,t,n,r,o,i,u,s,a,f){var d,p,h,v,y,g,O,w=r&&r.__k||I,S=w.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(v=n.__k[d]=null==(v=t[d])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v||"bigint"==typeof v?c(null,v,null,null,v):Array.isArray(v)?c(l,{children:v},null,null,null):v.__b>0?c(v.type,v.props,v.key,v.ref?v.ref:null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(h=w[d])||h&&v.key==h.key&&v.type===h.type)w[d]=void 0;else for(p=0;p<S;p++){if((h=w[p])&&v.key==h.key&&v.type===h.type){w[p]=void 0;break}h=null}j(e,v,h=h||R,o,i,u,s,a,f),y=v.__e,(p=v.ref)&&h.ref!=p&&(O||(O=[]),h.ref&&O.push(h.ref,null,v),O.push(p,v.__c||y,v)),null!=y?(null==g&&(g=y),"function"==typeof v.type&&v.__k===h.__k?v.__d=a=b(v,a,e):a=m(e,v,h,w,y,a),"function"==typeof n.type&&(n.__d=a)):a&&h.__e==a&&a.parentNode!=e&&(a=_(h))}for(n.__e=g,d=S;d--;)null!=w[d]&&P(w[d],w[d]);if(O)for(d=0;d<O.length;d++)N(O[d],O[++d],O[++d])}function b(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?b(r,t,n):m(n,r,r,o,r.__e,t));return t}function h(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){h(e,t)})):t.push(e)),t}function m(e,t,n,r,o,i){var c,u,l;if(void 0!==t.__d)c=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),c=null;else{for(u=i,l=0;(u=u.nextSibling)&&l<r.length;l+=1)if(u==o)break e;e.insertBefore(o,i),c=i}return void 0!==c?c:o.nextSibling}function v(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||W.test(t)?n:n+"px"}function y(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||v(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||v(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?O:g,i):e.removeEventListener(t,i?O:g,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&-1==t.indexOf("-")?e.removeAttribute(t):e.setAttribute(t,n))}}function g(e){this.l[e.type+!1](A.event?A.event(e):e)}function O(e){this.l[e.type+!0](A.event?A.event(e):e)}function j(e,t,n,o,i,c,u,_,a){var f,d,b,h,m,v,y,g,O,j,w,N,P,T,k,D=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(a=n.__h,_=t.__e=n.__e,t.__h=null,c=[_]),(f=A.__b)&&f(t);try{e:if("function"==typeof D){if(g=t.props,O=(f=D.contextType)&&o[f.__c],j=f?O?O.props.value:f.__:o,n.__c?y=(d=t.__c=n.__c).__=d.__E:("prototype"in D&&D.prototype.render?t.__c=d=new D(g,j):(t.__c=d=new s(g,j),d.constructor=D,d.render=E),O&&O.sub(d),d.props=g,d.state||(d.state={}),d.context=j,d.__n=o,b=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=D.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=r({},d.__s)),r(d.__s,D.getDerivedStateFromProps(g,d.__s))),h=d.props,m=d.state,b)null==D.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==D.getDerivedStateFromProps&&g!==h&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(g,j),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(g,d.__s,j)||t.__v===n.__v){for(d.props=g,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),w=0;w<d._sb.length;w++)d.__h.push(d._sb[w]);d._sb=[],d.__h.length&&u.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(g,d.__s,j),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(h,m,v)}))}if(d.context=j,d.props=g,d.__v=t,d.__P=e,N=A.__r,P=0,"prototype"in D&&D.prototype.render){for(d.state=d.__s,d.__d=!1,N&&N(t),f=d.render(d.props,d.state,d.context),T=0;T<d._sb.length;T++)d.__h.push(d._sb[T]);d._sb=[]}else do{d.__d=!1,N&&N(t),f=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++P<25);d.state=d.__s,null!=d.getChildContext&&(o=r(r({},o),d.getChildContext())),b||null==d.getSnapshotBeforeUpdate||(v=d.getSnapshotBeforeUpdate(h,m)),k=null!=f&&f.type===l&&null==f.key?f.props.children:f,p(e,Array.isArray(k)?k:[k],t,n,o,i,c,u,_,a),d.base=t.__e,t.__h=null,d.__h.length&&u.push(d),y&&(d.__E=d.__=null),d.__e=!1}else null==c&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=S(n.__e,t,n,o,i,c,u,a);(f=A.diffed)&&f(t)}catch(e){t.__v=null,(a||null!=c)&&(t.__e=_,t.__h=!!a,c[c.indexOf(_)]=null),A.__e(e,t,n)}}function w(e,t){A.__c&&A.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){A.__e(e,t.__v)}}))}function S(e,t,n,r,i,c,u,l){var s,a,f,d=n.props,b=t.props,h=t.type,m=0;if("svg"===h&&(i=!0),null!=c)for(;m<c.length;m++)if((s=c[m])&&"setAttribute"in s==!!h&&(h?s.localName===h:3===s.nodeType)){e=s,c[m]=null;break}if(null==e){if(null===h)return document.createTextNode(b);e=i?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,b.is&&b),c=null,l=!1}if(null===h)d===b||l&&e.data===b||(e.data=b);else{if(c=c&&x.call(e.childNodes),a=(d=n.props||R).dangerouslySetInnerHTML,f=b.dangerouslySetInnerHTML,!l){if(null!=c)for(d={},m=0;m<e.attributes.length;m++)d[e.attributes[m].name]=e.attributes[m].value;(f||a)&&(f&&(a&&f.__html==a.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||y(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||y(e,i,t[i],n[i],r)}(e,b,d,i,l),f)t.__k=[];else if(m=t.props.children,p(e,Array.isArray(m)?m:[m],t,n,r,i&&"foreignObject"!==h,c,u,c?c[0]:n.__k&&_(n,0),l),null!=c)for(m=c.length;m--;)null!=c[m]&&o(c[m]);l||("value"in b&&void 0!==(m=b.value)&&(m!==e.value||"progress"===h&&!m||"option"===h&&m!==d.value)&&y(e,"value",m,d.value,!1),"checked"in b&&void 0!==(m=b.checked)&&m!==e.checked&&y(e,"checked",m,d.checked,!1))}return e}function N(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){A.__e(e,n)}}function P(e,t,n){var r,i;if(A.unmount&&A.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||N(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){A.__e(e,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&P(r[i],t,n||"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__=e.__e=e.__d=void 0}function E(e,t,n){return this.constructor(e,n)}function T(e,t,n){var r,o,c;A.__&&A.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,c=[],j(t,e=(!r&&n||t).__k=i(l,null,[e]),o||R,R,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?x.call(t.childNodes):null,c,!r&&n?n:o?o.__e:t.firstChild,r),w(c,e)}function k(e,t){T(e,t,k)}function D(e,t,n){var o,i,u,l=r({},e.props);for(u in t)"key"==u?o=t[u]:"ref"==u?i=t[u]:l[u]=t[u];return arguments.length>2&&(l.children=arguments.length>3?x.call(arguments,2):n),c(e.type,l,o||e.key,i||e.ref,null)}function C(e,t){var n={__c:t="__cC"+F++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(f)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"Component",(function(){return s})),n.d(t,"Fragment",(function(){return l})),n.d(t,"cloneElement",(function(){return D})),n.d(t,"createContext",(function(){return C})),n.d(t,"createElement",(function(){return i})),n.d(t,"createRef",(function(){return u})),n.d(t,"h",(function(){return i})),n.d(t,"hydrate",(function(){return k})),n.d(t,"isValidElement",(function(){return U})),n.d(t,"options",(function(){return A})),n.d(t,"render",(function(){return T})),n.d(t,"toChildArray",(function(){return h}));var x,A,L,U,M,H,F,R={},I=[],W=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;x=I.slice,A={__e:function(e,t,n,r){for(var o,i,c;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),c=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),c=o.__d),c)return o.__E=o}catch(t){e=t}throw e}},L=0,U=function(e){return null!=e&&void 0===e.constructor},s.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),f(this))},s.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},s.prototype.render=l,M=[],d.__r=0,F=0},ibc8:function(e,t,n){"use strict";(function(e){function r(e){e.preventDefault();const t=new FormData(e.target).get(o);t&&(location.hash=`#${t}`)}n.d(t,"a",(function(){return i}));const o="GoToNumberCTA",i=()=>e("section",{className:"card-cell__cta"},e("form",{role:"search",onSubmit:r},e("label",null,"Enter a number",e("input",{id:o,name:o,type:"number",inputmode:"numeric",min:"1",max:"90",step:"1",placeholder:"1 - 90",list:"defaultNumbers"})),e("datalist",{id:"defaultNumbers"},Array(90).fill(1).map(((e,t)=>t+1)).map((t=>e("option",{key:t,value:t},t)))),e("button",{type:"submit"},"Go to its cell")))}).call(this,n("hosL").h)},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:i,hydrate:c}=r,u=e=>e&&e.default?e.default:e,l=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(l(n.p)+"sw-esm.js"),"function"==typeof u(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,t=()=>{let t=u(n("QfWi")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const s={preRenderData:r};r.url&&l(r.url);i(o(t,{CLI_DATA:s}),document.body,e)};0,t()}}});
//# sourceMappingURL=bundle.42e93.esm.js.map