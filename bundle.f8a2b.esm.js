!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/tombolata/",t(t.s="7Axg")}({"0iWG":function(e,t,n){"use strict";(function(e){function r({dispatch:t}){const n=Object(o.e)();return e("section",{className:"card__controller"},e("button",{onClick:()=>{t({type:i.d})}},"Reset"),e("fieldset",null,e("label",null,"Number of cards (1-6)",e("input",{defaultValue:"6",inputmode:"numeric",min:"1",max:"6",step:"1",ref:n,type:"number"})),e("button",{onClick:()=>{n.current.value<=6&&t({type:i.a,quantity:isNaN(n.current.value)?6:+n.current.value})}},"New Cards")),e("button",{onClick:()=>{t({type:i.b})}},"New [TOMBOLONE]"))}n.d(t,"a",(function(){return r}));var o=n("fJWa"),i=n("b1lf")}).call(this,n("FTql").h)},"1PNQ":function(e,t,n){"use strict";var r=n("FTql"),o=n("5E/N");t.a=({dispatch:e,numbers:t,isSelected:n})=>Object(r.h)("div",{className:"card__container card__container--tombolone",role:"grid","aria-label":"Tombolone"},Object(r.h)("div",{className:"card card--tombolone"},Object(r.h)("div",{className:"card__row",role:"row"},Object(r.h)(o.a,{numbers:t.slice(0,10),dispatch:e,isSelected:n})),Object(r.h)("div",{className:"card__row",role:"row"},Object(r.h)(o.a,{numbers:t.slice(10,20),dispatch:e,isSelected:n})),Object(r.h)("div",{className:"card__row",role:"row"},Object(r.h)(o.a,{numbers:t.slice(20,30),dispatch:e,isSelected:n}))))},"3gQT":function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){let n=-1,r=e.slice(0),i=o({},t),c=[];for(;++n<5;){const e=r[O(0,r.length-1)];r=r.filter((t=>t!=e));const{extractedNumber:t,updatedSource:n}=u(i,e);i=o({},n),c.push(t)}return{updatedSource:o({},i),row:c.slice(0).sort(((e,t)=>e-t))}}function u(e,t){const n=e[t].slice(0),r=O(0,n.length-1),i=e[t][r];return{extractedNumber:i,updatedSource:o(o({},e),{},{[t]:n.filter((e=>e!=i))})}}function l(e){return _(e)}function _(e,t=[]){const{row:n,updatedSource:r}=c(s(S,e),e);return 2==t.length?{updatedSource:r,rows:[...t,n]}:_(r,[...t,n])}function s(e,t){const n=Object.entries(t).map((([e,t])=>[+e,t.length])).sort(((e,t)=>t[1]-e[1]));if(n.at(-1)[1]>3)return e.slice(0);return n.filter((e=>0!=e[1])).map((e=>e[0])).slice(0,5)}function a(){const e=[],t=N.slice(1);for(let n=0;n<3;n++){const r=30*n;e[n]=t.slice(r,r+30)}return e}function f(){const e=[];let t;for(;(t=e.length)<6;){const n=t%2==0?15*t:15*(t-1)+5,r=[N.slice(1+n,6+n),N.slice(11+n,16+n),N.slice(21+n,26+n)];e.push(r)}return e}function d(e){const t=function(e){return e.flat(3).sort(((e,t)=>e-t))};return[t([e[0],e[1]]),t([e[2],e[3]]),t([e[4],e[5]])]}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e=6){let t=[],n=structuredClone(k);for(;t.length<e;){6==t.length&&(n=structuredClone(k));const{rows:e,updatedSource:r}=l(n);t.push(e),n=m({},r)}return t}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"c",(function(){return x})),n.d(t,"a",(function(){return D}));var w=n("b1lf");const O=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)),j=new Array(91).fill(""),N=Object.keys(j).map(Number),S=[1,10,20,30,40,50,60,70,80],k={[S[0]]:[...N.slice(1,10)],[S[1]]:[...N.slice(10,20)],[S[2]]:[...N.slice(20,30)],[S[3]]:[...N.slice(30,40)],[S[4]]:[...N.slice(40,50)],[S[5]]:[...N.slice(50,60)],[S[6]]:[...N.slice(60,70)],[S[7]]:[...N.slice(70,80)],[S[8]]:[...N.slice(80,91)]};var P={getCards:b,getTomboloneCardsV1:a,getTomboloneCardsV2:f,convertOutputGetTomboloneCardsV2ToV1:d};const T="tombolata",E=window.sessionStorage.getItem(T),C={cards:[],selectedNumbers:[],tomboloneFreeNumbers:[],tomboloneNewNumber:null,mode:""},x=E?JSON.parse(E):C;window.history.pushState(x,"","#"+(x.mode||""));const D=["cards","tombolone"];t.b=(e,t)=>{const n=((e,t)=>{switch(t.type){case w.e:return t.state?y({},t.state):e;case w.d:return y(y({},e),{},{selectedNumbers:[],tomboloneFreeNumbers:e.tomboloneFreeNumbers.length?[...e.cards[0],...e.cards[1],...e.cards[2]]:C.tomboloneFreeNumbers});case w.a:{var n;const e=P.getCards().slice(0,null!==(n=null==t?void 0:t.quantity)&&void 0!==n?n:6);return y(y({},C),{},{mode:D[0],cards:e})}case w.b:{const e=P.convertOutputGetTomboloneCardsV2ToV1(P.getTomboloneCardsV2());return y(y({},C),{},{mode:D[1],cards:e,tomboloneFreeNumbers:[...e[0],...e[1],...e[2]]})}case w.c:{if(!e.tomboloneFreeNumbers.length)return e;const t=O(0,e.tomboloneFreeNumbers.length-1),n=e.tomboloneFreeNumbers.slice(0),r=n.splice(t,1)[0];return y(y({},e),{},{tomboloneNewNumber:r,tomboloneFreeNumbers:n,selectedNumbers:[...e.selectedNumbers,r]})}case w.f:return e.mode===D[1]?e:y(y({},e),{},{selectedNumbers:e.selectedNumbers.includes(t.number)?e.selectedNumbers.filter((e=>e!=t.number)):[...e.selectedNumbers,t.number]});default:throw new Error("Unexpected action")}})(e,t);return t.type===w.d?window.sessionStorage.removeItem(T):window.sessionStorage.setItem(T,JSON.stringify(n)),window.history.pushState(n,"","#"+(n.mode||"")),n}},"5E/N":function(e,t,n){"use strict";var r=n("FTql"),o=n("b1lf");const i=({dispatch:e,number:t,isSelected:n,setActiveDescendant:i})=>Object(r.h)("button",{id:t,className:"card__number"+(n?" card__number--selected":""),onFocus:()=>{i&&i(`cell-${t}`)},onClick:function(n){n.preventDefault(),n.stopPropagation(),e({type:o.f,number:t})},disabled:!i,tabIndex:"-1"},t);t.a=({numbers:e,dispatch:t,isSelected:n,setActiveDescendant:o})=>e.map(((e,c)=>Object(r.h)("div",{key:e||Date.now()+c,role:"gridcell","aria-selected":e?n(e):void 0,"aria-disabled":!e,className:"card__box"+(n(e)?" card__box--selected":""),id:e?`cell-${e}`:void 0},e?Object(r.h)(i,{dispatch:t,number:e,isSelected:n(e),setActiveDescendant:o}):null)))},"7Axg":function(e,t,n){"use strict";n.r(t);var r=n("FTql");const{h:o,render:i,hydrate:c}=r,u=e=>e&&e.default?e.default:e,l=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(l(n.p)+"sw-esm.js"),"function"==typeof u(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,t=()=>{let t=u(n("QfWi")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const _={preRenderData:r};r.url&&l(r.url);i(o(t,{CLI_DATA:_}),document.body,e)};0,t()}},"8fuW":function(e,t,n){"use strict";function r(){"wakeLock"in navigator&&async function(){await async function(){try{await navigator.wakeLock.request("screen")}catch(e){console.log(e)}}()}()}n.d(t,"a",(function(){return r}))},FTql:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function i(e,t,n){var r,o,i,u={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:u[i]=t[i];if(arguments.length>2&&(u.children=arguments.length>3?D.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===u[i]&&(u[i]=e.defaultProps[i]);return c(e,u,r,o,null)}function c(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++A:o,__i:-1,__u:0};return null==o&&null!=F.vnode&&F.vnode(i),i}function u(){return{current:null}}function l(e){return e.children}function _(e,t){this.props=e,this.context=t}function s(e,t){if(null==t)return e.__?s(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?s(e):null}function a(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return a(e)}}function f(e){(!e.__d&&(e.__d=!0)&&W.push(e)&&!d.__r++||H!==F.debounceRendering)&&((H=F.debounceRendering)||U)(d)}function d(){var e,t,n,o,i,c,u,l;for(W.sort(L);e=W.shift();)e.__d&&(t=W.length,o=void 0,c=(i=(n=e).__v).__e,u=[],l=[],n.__P&&((o=r({},i)).__v=i.__v+1,F.vnode&&F.vnode(o),O(n.__P,o,i,n.__n,n.__P.namespaceURI,32&i.__u?[c]:null,u,null==c?s(i):c,!!(32&i.__u),l),o.__v=i.__v,o.__.__k[o.__i]=o,j(u,o,l),o.__e!=c&&a(o)),W.length>t&&W.sort(L));d.__r=0}function p(e,t,n,r,o,i,c,u,l,_,s){var a,f,d,p,b,v,y=r&&r.__k||Q,g=t.length;for(l=m(n,t,y,l,g),a=0;a<g;a++)null!=(d=n.__k[a])&&(f=-1===d.__i?V:y[d.__i]||V,d.__i=a,v=O(e,d,f,o,i,c,u,l,_,s),p=d.__e,d.ref&&f.ref!=d.ref&&(f.ref&&S(f.ref,null,d),s.push(d.ref,d.__c||p,d)),null==b&&null!=p&&(b=p),4&d.__u||f.__k===d.__k?l=h(d,l,e):"function"==typeof d.type&&void 0!==v?l=v:p&&(l=p.nextSibling),d.__u&=-7);return n.__e=b,l}function m(e,t,n,r,o){var i,u,_,a,f,d=n.length,p=d,m=0;for(e.__k=new Array(o),i=0;i<o;i++)null!=(u=t[i])&&"boolean"!=typeof u&&"function"!=typeof u?(a=i+m,(u=e.__k[i]="string"==typeof u||"number"==typeof u||"bigint"==typeof u||u.constructor==String?c(null,u,null,null,null):G(u)?c(l,{children:u},null,null,null):void 0===u.constructor&&u.__b>0?c(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u).__=e,u.__b=e.__b+1,_=null,-1!==(f=u.__i=v(u,n,a,p))&&(p--,(_=n[f])&&(_.__u|=2)),null==_||null===_.__v?(-1==f&&m--,"function"!=typeof u.type&&(u.__u|=4)):f!=a&&(f==a-1?m--:f==a+1?m++:(f>a?m--:m++,u.__u|=4))):e.__k[i]=null;if(p)for(i=0;i<d;i++)null!=(_=n[i])&&!(2&_.__u)&&(_.__e==r&&(r=s(_)),k(_,_));return r}function h(e,t,n){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=h(r[o],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=s(e)),n.insertBefore(e.__e,t||null),t=e.__e);do{t=t&&t.nextSibling}while(null!=t&&8==t.nodeType);return t}function b(e,t){return t=t||[],null==e||"boolean"==typeof e||(G(e)?e.some((function(e){b(e,t)})):t.push(e)),t}function v(e,t,n,r){var o,i,c=e.key,u=e.type,l=t[n];if(null===l||l&&c==l.key&&u===l.type&&!(2&l.__u))return n;if(r>(null==l||2&l.__u?0:1))for(o=n-1,i=n+1;o>=0||i<t.length;){if(o>=0){if((l=t[o])&&!(2&l.__u)&&c==l.key&&u===l.type)return o;o--}if(i<t.length){if((l=t[i])&&!(2&l.__u)&&c==l.key&&u===l.type)return i;i++}}return-1}function y(e,t,n){"-"==t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||J.test(t)?n:n+"px"}function g(e,t,n,r,o){var i;e:if("style"==t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||y(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||y(e.style,t,n[t])}else if("o"==t[0]&&"n"==t[1])i=t!=(t=t.replace(R,"$1")),t=t.toLowerCase()in e||"onFocusOut"==t||"onFocusIn"==t?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r?n.u=r.u:(n.u=I,e.addEventListener(t,i?B:q,i)):e.removeEventListener(t,i?B:q,i);else{if("http://www.w3.org/2000/svg"==o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&"popover"!=t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!=t[4]?e.removeAttribute(t):e.setAttribute(t,"popover"==t&&1==n?"":n))}}function w(e){return function(t){if(this.l){var n=this.l[t.type+e];if(null==t.t)t.t=I++;else if(t.t<n.u)return;return n(F.event?F.event(t):t)}}}function O(e,t,n,i,c,u,s,a,f,d){var m,h,b,v,y,g,w,O,j,S,k,T,E,C,x,D,A,M=t.type;if(void 0!==t.constructor)return null;128&n.__u&&(f=!!(32&n.__u),u=[a=t.__e=n.__e]),(m=F.__b)&&m(t);e:if("function"==typeof M)try{if(O=t.props,j="prototype"in M&&M.prototype.render,S=(m=M.contextType)&&i[m.__c],k=m?S?S.props.value:m.__:i,n.__c?w=(h=t.__c=n.__c).__=h.__E:(j?t.__c=h=new M(O,k):(t.__c=h=new _(O,k),h.constructor=M,h.render=P),S&&S.sub(h),h.props=O,h.state||(h.state={}),h.context=k,h.__n=i,b=h.__d=!0,h.__h=[],h._sb=[]),j&&null==h.__s&&(h.__s=h.state),j&&null!=M.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=r({},h.__s)),r(h.__s,M.getDerivedStateFromProps(O,h.__s))),v=h.props,y=h.state,h.__v=t,b)j&&null==M.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),j&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(j&&null==M.getDerivedStateFromProps&&O!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(O,k),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(O,h.__s,k)||t.__v==n.__v)){for(t.__v!=n.__v&&(h.props=O,h.state=h.__s,h.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some((function(e){e&&(e.__=t)})),T=0;T<h._sb.length;T++)h.__h.push(h._sb[T]);h._sb=[],h.__h.length&&s.push(h);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(O,h.__s,k),j&&null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(v,y,g)}))}if(h.context=k,h.props=O,h.__P=e,h.__e=!1,E=F.__r,C=0,j){for(h.state=h.__s,h.__d=!1,E&&E(t),m=h.render(h.props,h.state,h.context),x=0;x<h._sb.length;x++)h.__h.push(h._sb[x]);h._sb=[]}else do{h.__d=!1,E&&E(t),m=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++C<25);h.state=h.__s,null!=h.getChildContext&&(i=r(r({},i),h.getChildContext())),j&&!b&&null!=h.getSnapshotBeforeUpdate&&(g=h.getSnapshotBeforeUpdate(v,y)),a=p(e,G(D=null!=m&&m.type===l&&null==m.key?m.props.children:m)?D:[D],t,n,i,c,u,s,a,f,d),h.base=t.__e,t.__u&=-161,h.__h.length&&s.push(h),w&&(h.__E=h.__=null)}catch(e){if(t.__v=null,f||null!=u)if(e.then){for(t.__u|=f?160:128;a&&8==a.nodeType&&a.nextSibling;)a=a.nextSibling;u[u.indexOf(a)]=null,t.__e=a}else for(A=u.length;A--;)o(u[A]);else t.__e=n.__e,t.__k=n.__k;F.__e(e,t,n)}else null==u&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):a=t.__e=N(n.__e,t,n,i,c,u,s,f,d);return(m=F.diffed)&&m(t),128&t.__u?void 0:a}function j(e,t,n){for(var r=0;r<n.length;r++)S(n[r],n[++r],n[++r]);F.__c&&F.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){F.__e(e,t.__v)}}))}function N(e,t,n,r,i,c,u,l,_){var a,f,d,m,h,b,v,y=n.props,w=t.props,O=t.type;if("svg"==O?i="http://www.w3.org/2000/svg":"math"==O?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=c)for(a=0;a<c.length;a++)if((h=c[a])&&"setAttribute"in h==!!O&&(O?h.localName==O:3==h.nodeType)){e=h,c[a]=null;break}if(null==e){if(null==O)return document.createTextNode(w);e=document.createElementNS(i,O,w.is&&w),l&&(F.__m&&F.__m(t,c),l=!1),c=null}if(null===O)y===w||l&&e.data===w||(e.data=w);else{if(c=c&&D.call(e.childNodes),y=n.props||V,!l&&null!=c)for(y={},a=0;a<e.attributes.length;a++)y[(h=e.attributes[a]).name]=h.value;for(a in y)if(h=y[a],"children"==a);else if("dangerouslySetInnerHTML"==a)d=h;else if(!(a in w)){if("value"==a&&"defaultValue"in w||"checked"==a&&"defaultChecked"in w)continue;g(e,a,null,h,i)}for(a in w)h=w[a],"children"==a?m=h:"dangerouslySetInnerHTML"==a?f=h:"value"==a?b=h:"checked"==a?v=h:l&&"function"!=typeof h||y[a]===h||g(e,a,h,y[a],i);if(f)l||d&&(f.__html===d.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(d&&(e.innerHTML=""),p(e,G(m)?m:[m],t,n,r,"foreignObject"==O?"http://www.w3.org/1999/xhtml":i,c,u,c?c[0]:n.__k&&s(n,0),l,_),null!=c)for(a=c.length;a--;)o(c[a]);l||(a="value","progress"==O&&null==b?e.removeAttribute("value"):void 0!==b&&(b!==e[a]||"progress"==O&&!b||"option"==O&&b!==y[a])&&g(e,a,b,y[a],i),a="checked",void 0!==v&&v!==e[a]&&g(e,a,v,y[a],i))}return e}function S(e,t,n){try{if("function"==typeof e){var r="function"==typeof e.__u;r&&e.__u(),r&&null==t||(e.__u=e(t))}else e.current=t}catch(e){F.__e(e,n)}}function k(e,t,n){var r,i;if(F.unmount&&F.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||S(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){F.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&k(r[i],t,n||"function"!=typeof e.type);n||o(e.__e),e.__c=e.__=e.__e=void 0}function P(e,t,n){return this.constructor(e,n)}function T(e,t,n){var r,o,c,u;t==document&&(t=document.documentElement),F.__&&F.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,c=[],u=[],O(t,e=(!r&&n||t).__k=i(l,null,[e]),o||V,V,t.namespaceURI,!r&&n?[n]:o?null:t.firstChild?D.call(t.childNodes):null,c,!r&&n?n:o?o.__e:t.firstChild,r,u),j(c,e,u)}function E(e,t){T(e,t,E)}function C(e,t,n){var o,i,u,l,_=r({},e.props);for(u in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)"key"==u?o=t[u]:"ref"==u?i=t[u]:_[u]=void 0===t[u]&&void 0!==l?l[u]:t[u];return arguments.length>2&&(_.children=arguments.length>3?D.call(arguments,2):n),c(e.type,_,o||e.key,i||e.ref,null)}function x(e,t){var n={__c:t="__cC"+$++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=new Set,(r={})[t]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.forEach((function(e){e.__e=!0,f(e)}))},this.sub=function(e){n.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n&&n.delete(e),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"Component",(function(){return _})),n.d(t,"Fragment",(function(){return l})),n.d(t,"cloneElement",(function(){return C})),n.d(t,"createContext",(function(){return x})),n.d(t,"createElement",(function(){return i})),n.d(t,"createRef",(function(){return u})),n.d(t,"h",(function(){return i})),n.d(t,"hydrate",(function(){return E})),n.d(t,"isValidElement",(function(){return M})),n.d(t,"options",(function(){return F})),n.d(t,"render",(function(){return T})),n.d(t,"toChildArray",(function(){return b}));var D,F,A,M,W,H,U,L,R,I,q,B,$,V={},Q=[],J=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,G=Array.isArray;D=Q.slice,F={__e:function(e,t,n,r){for(var o,i,c;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),c=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),c=o.__d),c)return o.__E=o}catch(t){e=t}throw e}},A=0,M=function(e){return null!=e&&null==e.constructor},_.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),f(this))},_.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},_.prototype.render=l,W=[],U="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,L=function(e,t){return e.__v.__b-t.__v.__b},d.__r=0,R=/(PointerCapture)$|Capture$/i,I=0,q=w(!1),B=w(!0),$=0},QP3f:function(e){e.exports=JSON.parse('{"private":true,"name":"cardgenerator","version":"3.0.1","license":"MIT","engines":{"pnpm":"9.9.0","node":">=16.0.0 <17.0.0"},"scripts":{"build":"preact build --no-prerender","serve":"sirv build --port 8080 --cors --single","dev":"preact watch","lint":"eslint src","test":"jest","test:watch":"jest --watch","deploy":"gh-pages -b build -d build -m \\"New version deployed\\""},"eslintConfig":{"extends":"preact","ignorePatterns":["build/"]},"devDependencies":{"enzyme":"^3.11.0","enzyme-adapter-preact-pure":"^4.1.0","eslint":"^8.57.1","eslint-config-preact":"^1.5.0","gh-pages":"^4.0.0","jest":"^27.5.1","jest-preset-preact":"^4.1.1","preact-cli":"^3.5.1","sirv-cli":"3.0.0"},"dependencies":{"preact":"^10.11.3","preact-render-to-string":"^5.2.6","preact-router":"^4.1.0"},"jest":{"preset":"jest-preset-preact","setupFiles":["<rootDir>/tests/__mocks__/browserMocks.js","<rootDir>/tests/__mocks__/setupTests.js"],"testMatch":["**/__tests__/**/*.[j]s?(x)","**/?(*.)+(spec|test).[j]s?(x)"],"collectCoverage":true,"collectCoverageFrom":["<rootDir>/src/**/*.{js,jsx}"],"coverageDirectory":"<rootDir>/tests/coverage","coverageReporters":["json","text","html","cobertura"],"coverageThreshold":{"global":{"branches":1,"functions":1,"lines":1,"statements":1}}}}')},QfWi:function(e,t,n){"use strict";n.r(t);var r=n("ugae");t.default=r.a},UeDS:function(e,t,n){"use strict";function r(e,t,n){const o=-1==e?n.findIndex((e=>e>0)):e+t>n.length-1?e+t-n.length-1:e+t;return n.at(o)?o:r(o,t>0?1:-1,n)}var o=n("FTql"),i=n("fJWa"),c=n("5E/N");const u={ArrowLeft:-1,ArrowRight:1,ArrowUp:-9,ArrowDown:9};t.a=({dispatch:e,numbers:t,isSelected:n,orderIndex:l})=>{const _=Object(i.c)((()=>{const e=new Array(27).fill(0);return t.forEach(((t,n)=>{t.forEach((t=>{e[9*n+(t<10?0:90==t?8:+`${t}`[0])]=t}))})),e}),[t]),[s,a]=Object(i.f)(void 0),f=Object(i.a)((e=>{const t=u[e.code];if(!t)return;const n=r(_.indexOf(e.target.id?+e.target.id:-1),t,_);document.getElementById(`${_.at(n)}`).focus()}),[_]);return Object(o.h)("div",{className:"card__container",role:"grid","aria-label":`Card num. ${l+1}`,"aria-multiselectable":"true","aria-activedescendant":s,tabindex:"0",onKeyDown:f},Object(o.h)("div",{className:"card"},Object(o.h)("div",{className:"card__row",role:"row"},Object(o.h)(c.a,{numbers:_.slice(0,9),dispatch:e,isSelected:n,setActiveDescendant:a})),Object(o.h)("div",{className:"card__row",role:"row"},Object(o.h)(c.a,{numbers:_.slice(9,18),dispatch:e,isSelected:n,setActiveDescendant:a})),Object(o.h)("div",{className:"card__row",role:"row"},Object(o.h)(c.a,{numbers:_.slice(18,27),dispatch:e,isSelected:n,setActiveDescendant:a}))))}},aM6B:function(e,t,n){"use strict";var r=n("FTql"),o=n("b1lf");let i=null;t.a=({dispatch:e,number:t})=>Object(r.h)("section",{className:"card__tombolone_number"},Object(r.h)("button",{onClick:()=>{i||(e({type:o.c}),i=window.setTimeout((()=>{window.clearTimeout(i),i=null}),1e3))}},"New number"),Object(r.h)("div",{id:"tombolone_number",role:"status","aria-live":t?"assertive":"off"},t||""))},b1lf:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return l}));const r="RESET",o="NEW_CARD",i="NEW_TOMBOLONE",c="NEW_TOMBOLONE_NUMBER",u="SELECT_NUMBER",l="RESTORE_STATE"},fJWa:function(e,t,n){"use strict";function r(e,t){j.__h&&j.__h(b,e,w||t),w=0;var n=b.__H||(b.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function o(e){return w=1,i(m,e)}function i(e,t,n){var o=r(h++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):m(void 0,t),function(e){var t=o.__N?o.__N[0]:o.__[0],n=o.t(t,e);t!==n&&(o.__N=[n,o.__[1]],o.__c.setState({}))}],o.__c=b,!b.u)){var i=function(e,t,n){if(!o.__c.__H)return!0;var r=o.__c.__H.__.filter((function(e){return!!e.__c}));if(r.every((function(e){return!e.__N})))return!c||c.call(this,e,t,n);var i=o.__c.props!==e;return r.forEach((function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(i=!0)}})),c&&c.call(this,e,t,n)||i};b.u=!0;var c=b.shouldComponentUpdate,u=b.componentWillUpdate;b.componentWillUpdate=function(e,t,n){if(this.__e){var r=c;c=void 0,i(e,t,n),c=r}u&&u.call(this,e,t,n)},b.shouldComponentUpdate=i}return o.__N||o.__}function c(e,t){var n=r(h++,3);!j.__s&&p(n.__H,t)&&(n.__=e,n.i=t,b.__H.__h.push(n))}function u(e){return w=5,l((function(){return{current:e}}),[])}function l(e,t){var n=r(h++,7);return p(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function _(e,t){return w=8,l((function(){return e}),t)}function s(){for(var e;e=O.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(f),e.__H.__h.forEach(d),e.__H.__h=[]}catch(t){e.__H.__h=[],j.__e(t,e.__v)}}function a(e){var t,n=function(){clearTimeout(r),C&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);C&&(t=requestAnimationFrame(n))}function f(e){var t=b,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),b=t}function d(e){var t=b;e.__c=e.__(),b=t}function p(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function m(e,t){return"function"==typeof t?t(e):t}n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return o}));var h,b,v,y,g=n("FTql"),w=0,O=[],j=g.options,N=j.__b,S=j.__r,k=j.diffed,P=j.__c,T=j.unmount,E=j.__;j.__b=function(e){b=null,N&&N(e)},j.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),E&&E(e,t)},j.__r=function(e){S&&S(e),h=0;var t=(b=e.__c).__H;t&&(v===b?(t.__h=[],b.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.i=e.__N=void 0}))):(t.__h.forEach(f),t.__h.forEach(d),t.__h=[],h=0)),v=b},j.diffed=function(e){k&&k(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==O.push(t)&&y===j.requestAnimationFrame||((y=j.requestAnimationFrame)||a)(s)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.i=void 0}))),v=b=null},j.__c=function(e,t){t.some((function(e){try{e.__h.forEach(f),e.__h=e.__h.filter((function(e){return!e.__||d(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],j.__e(n,e.__v)}})),P&&P(e,t)},j.unmount=function(e){T&&T(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{f(e)}catch(e){t=e}})),n.__H=void 0,t&&j.__e(t,n.__v))};var C="function"==typeof requestAnimationFrame},ibc8:function(e,t,n){"use strict";(function(e){function r(e){e.preventDefault();const t=new FormData(e.target).get(o);t&&(location.hash=`#${t}`)}n.d(t,"a",(function(){return i}));const o="GoToNumberCTA",i=()=>e("section",{className:"card-cell__cta"},e("form",{role:"search",onSubmit:r},e("label",null,"Enter a number",e("input",{id:o,name:o,type:"number",inputmode:"numeric",min:"1",max:"90",step:"1",placeholder:"1 - 90",list:"defaultNumbers"})),e("datalist",{id:"defaultNumbers"},Array(90).fill(1).map(((e,t)=>t+1)).map((t=>e("option",{key:t,value:t},t)))),e("button",{type:"submit"},"Go to its cell")))}).call(this,n("FTql").h)},ugae:function(e,t,n){"use strict";(function(e){var r=n("fJWa"),o=n("QP3f"),i=n("b1lf"),c=n("8fuW"),u=n("3gQT"),l=n("UeDS"),_=n("0iWG"),s=n("ibc8"),a=n("1PNQ"),f=n("aM6B");t.a=()=>{const[t,n]=Object(r.d)(u.b,u.c),d=Object(r.a)((e=>t.selectedNumbers.includes(e)),[t.selectedNumbers]),p=t.mode===u.a[1];return Object(r.b)((()=>{Object(c.a)(),window.onpopstate=function({state:e={}}){n({type:i.e,state:e})}}),[]),e("div",{id:"app",className:"container"},e("header",null,e("h1",null,"Tombolata")),e("main",null,e(_.a,{dispatch:n}),p?e(f.a,{dispatch:n,number:t.tomboloneNewNumber}):t.cards&&t.cards.length?e(s.a,null):null,e("section",{className:"card__list"},t.cards.map(((t,r)=>p?e(a.a,{key:r,dispatch:n,isSelected:d,numbers:t}):e(l.a,{key:r+t[0],dispatch:n,isSelected:d,numbers:t,orderIndex:r}))))),e("footer",null,"v.",o.version," "))}}).call(this,n("FTql").h)}});
//# sourceMappingURL=bundle.f8a2b.esm.js.map