"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9818],{4672:(e,r,t)=>{function n(e){return`data-rr-ui-${e}`}function u(e){return`rrUi${e}`}t.d(r,{sE:()=>n,y:()=>u})},2257:(e,r,t)=>{t.d(r,{A:()=>u});let n=t(2115).createContext(null);n.displayName="NavContext";let u=n},7644:(e,r,t)=>{t.d(r,{A:()=>o,u:()=>u});let n=t(2115).createContext(null),u=(e,r=null)=>null!=e?String(e):r||null,o=n},3236:(e,r,t)=>{t.d(r,{A:()=>i});var n=t(2115),u=t(7678);let o=(0,n.createContext)(u.A?window:void 0);function i(){return(0,n.useContext)(o)}o.Provider},9971:(e,r,t)=>{t.d(r,{A:()=>u});var n=t(2115);let u=function(e){let r=(0,n.useRef)(e);return(0,n.useEffect)(()=>{r.current=e},[e]),r}},8447:(e,r,t)=>{t.d(r,{A:()=>o});var n=t(2115),u=t(9971);function o(e){let r=(0,u.A)(e);return(0,n.useCallback)(function(...e){return r.current&&r.current(...e)},[r])}},5418:(e,r,t)=>{t.d(r,{A:()=>u});var n=t(2115);function u(){let[,e]=(0,n.useReducer)(e=>e+1,0);return e}},9396:(e,r,t)=>{t.d(r,{A:()=>o});var n=t(2115);let u=void 0!==t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product,o="undefined"!=typeof document||u?n.useLayoutEffect:n.useEffect},104:(e,r,t)=>{t.d(r,{A:()=>u});var n=t(2115);function u(){let e=(0,n.useRef)(!0),r=(0,n.useRef)(()=>e.current);return(0,n.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),r.current}},1977:(e,r,t)=>{t.d(r,{A:()=>u});var n=t(2115);function u(e){let r=(0,n.useRef)(null);return(0,n.useEffect)(()=>{r.current=e}),r.current}},6790:(e,r,t)=>{t.d(r,{A:()=>n});function n(e,r){return e.contains?e.contains(r):e.compareDocumentPosition?e===r||!!(16&e.compareDocumentPosition(r)):void 0}},2819:(e,r,t)=>{t.d(r,{A:()=>u});var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function u(e,r){return n(e.querySelectorAll(r))}},7989:e=>{e.exports=function(e,r,t,n,u,o,i,c){if(!e){var a;if(void 0===r)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[t,n,u,o,i,c],f=0;(a=Error(r.replace(/%s/g,function(){return l[f++]}))).name="Invariant Violation"}throw a.framesToPop=1,a}}},6647:(e,r,t)=>{function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(null,arguments)}t.d(r,{Zw:()=>a});var u=t(160),o=t(2115);function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}function a(e,r){return Object.keys(r).reduce(function(t,a){var l,f,s,d,v,p,m,y,g=t[i(a)],A=t[a],b=(0,u.A)(t,[i(a),a].map(c)),h=r[a],E=(l=e[h],f=(0,o.useRef)(void 0!==A),d=(s=(0,o.useState)(g))[0],v=s[1],p=void 0!==A,m=f.current,f.current=p,!p&&m&&d!==g&&v(g),[p?A:d,(0,o.useCallback)(function(e){for(var r=arguments.length,t=Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];l&&l.apply(void 0,[e].concat(t)),v(e)},[l])]),C=E[0],w=E[1];return n({},b,((y={})[a]=C,y[h]=w,y))},e)}t(7989)}}]);