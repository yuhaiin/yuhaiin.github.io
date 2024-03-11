"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[728],{3756:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(2265);function o(){return(0,r.useState)(null)}},520:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(2265),o=n(9476);function i(e,t,n,i=!1){let a=(0,o.Z)(n);(0,r.useEffect)(()=>{let n="function"==typeof e?e():e;return n.addEventListener(t,a,i),()=>n.removeEventListener(t,a,i)},[e])}},3106:function(e,t,n){var r=n(2265);let o=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product;t.Z="undefined"!=typeof document||o?r.useLayoutEffect:r.useEffect},7531:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(2265);function o(e){let t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{t.current=e}),t.current}},7160:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(2265);n(3756),n(2225);var o=n(9476);n(520),n(7481),n(7531),n(3106),new WeakMap;var i=n(6144),a=n(7437);let s=["onKeyDown"],u=r.forwardRef((e,t)=>{var n;let{onKeyDown:r}=e,u=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,s),[l]=(0,i.FT)(Object.assign({tagName:"a"},u)),c=(0,o.Z)(e=>{l.onKeyDown(e),null==r||r(e)});return(n=u.href)&&"#"!==n.trim()&&"button"!==u.role?(0,a.jsx)("a",Object.assign({ref:t},u,{onKeyDown:r})):(0,a.jsx)("a",Object.assign({ref:t},u,l,{onKeyDown:c}))});u.displayName="Anchor";var l=u},5602:function(e,t,n){let r=n(2265).createContext(null);t.Z=r},2099:function(e,t,n){n.d(t,{F:function(){return f}});var r=n(2265),o=n(9476),i=n(5450),a=n(6551),s=n(6144),u=n(4209),l=n(7437);let c=["eventKey","disabled","onClick","active","as"];function f({key:e,href:t,active:n,disabled:s,onClick:l}){let c=(0,r.useContext)(i.Z),{activeKey:f}=(0,r.useContext)(a.Z)||{},d=(0,i.h)(e,t),p=null==n&&null!=e?(0,i.h)(f)===d:n;return[{onClick:(0,o.Z)(e=>{s||(null==l||l(e),c&&!e.isPropagationStopped()&&c(d,e))}),"aria-disabled":s||void 0,"aria-selected":p,[(0,u.PB)("dropdown-item")]:""},{isActive:p}]}let d=r.forwardRef((e,t)=>{let{eventKey:n,disabled:r,onClick:o,active:i,as:a=s.ZP}=e,u=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,c),[d]=f({key:n,href:u.href,disabled:r,onClick:o,active:i});return(0,l.jsx)(a,Object.assign({},u,{ref:t},d))});d.displayName="DropdownItem",t.Z=d},2630:function(e,t,n){n.d(t,{d:function(){return d}});var r=n(2265),o=n(3756),i=n(5602),a=n(9782),s=n(5403),u=n(3068),l=n(7437);let c=["children"],f=()=>{};function d(e={}){let t=(0,r.useContext)(i.Z),[n,l]=(0,o.Z)(),c=(0,r.useRef)(!1),{flip:d,offset:p,rootCloseEvent:m,fixed:v=!1,placement:h,popperConfig:g={},enableEventListeners:y=!0,usePopper:b=!!t}=e,w=(null==t?void 0:t.show)==null?!!e.show:t.show;w&&!c.current&&(c.current=!0);let{placement:x,setMenu:O,menuElement:Z,toggleElement:E}=t||{},j=(0,a.Z)(E,Z,(0,u.ZP)({placement:h||x||"bottom-start",enabled:b,enableEvents:null==y?w:y,offset:p,flip:d,fixed:v,arrowElement:n,popperConfig:g})),D=Object.assign({ref:O||f,"aria-labelledby":null==E?void 0:E.id},j.attributes.popper,{style:j.styles.popper}),k={show:w,placement:x,hasShown:c.current,toggle:null==t?void 0:t.toggle,popper:b?j:null,arrowProps:b?Object.assign({ref:l},j.attributes.arrow,{style:j.styles.arrow}):{}};return(0,s.Z)(Z,e=>{null==t||t.toggle(!1,e)},{clickTrigger:m,disabled:!w}),[D,k]}function p(e){let{children:t}=e,[n,r]=d(function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,c));return(0,l.jsx)(l.Fragment,{children:t(n,r)})}p.displayName="DropdownMenu",p.defaultProps={usePopper:!0},t.Z=p},6417:function(e,t,n){n.d(t,{Jr:function(){return l},bt:function(){return s}});var r=n(2265),o=n(5625),i=n(5602),a=n(7437);let s=e=>{var t;return(null==(t=e.getAttribute("role"))?void 0:t.toLowerCase())==="menu"},u=()=>{};function l(){let e=(0,o.gP)(),{show:t=!1,toggle:n=u,setToggle:a,menuElement:l}=(0,r.useContext)(i.Z)||{},c={id:e,ref:a||u,onClick:(0,r.useCallback)(e=>{n(!t,e)},[t,n]),"aria-expanded":!!t};return l&&s(l)&&(c["aria-haspopup"]=!0),[c,{show:t,toggle:n}]}function c({children:e}){let[t,n]=l();return(0,a.jsx)(a.Fragment,{children:e(t,n)})}c.displayName="DropdownToggle",t.ZP=c},7848:function(e,t,n){var r=n(9476),o=n(1564),i=n(2265);t.Z=function({children:e,in:t,onExited:n,mountOnEnter:a,unmountOnExit:s}){let u=(0,i.useRef)(null),l=(0,i.useRef)(t),c=(0,r.Z)(n);(0,i.useEffect)(()=>{t?l.current=!0:c(u.current)},[t,c]);let f=(0,o.Z)(u,e.ref),d=(0,i.cloneElement)(e,{ref:f});return t?d:s||!l.current&&a?null:d}},3068:function(e,t,n){n.d(t,{ZP:function(){return r}});function r({enabled:e,enableEvents:t,placement:n,flip:r,offset:o,fixed:i,containerPadding:a,arrowElement:s,popperConfig:u={}}){var l,c,f,d,p;let m=function(e){let t={};return Array.isArray(e)?(null==e||e.forEach(e=>{t[e.name]=e}),t):e||t}(u.modifiers);return Object.assign({},u,{placement:n,enabled:e,strategy:i?"fixed":u.strategy,modifiers:function(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}(Object.assign({},m,{eventListeners:{enabled:t,options:null==(l=m.eventListeners)?void 0:l.options},preventOverflow:Object.assign({},m.preventOverflow,{options:a?Object.assign({padding:a},null==(c=m.preventOverflow)?void 0:c.options):null==(f=m.preventOverflow)?void 0:f.options}),offset:{options:Object.assign({offset:o},null==(d=m.offset)?void 0:d.options)},arrow:Object.assign({},m.arrow,{enabled:!!s,options:Object.assign({},null==(p=m.arrow)?void 0:p.options,{element:s})}),flip:Object.assign({enabled:!!r},m.flip)}))})}},5403:function(e,t,n){n.d(t,{f:function(){return f}});var r=n(4343),o=n(7442),i=n(9275),a=n(2265),s=n(9476),u=n(5858),l=n.n(u);let c=()=>{},f=e=>e&&("current"in e?e.current:e),d={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};t.Z=function(e,t=c,{disabled:n,clickTrigger:u="click"}={}){let p=(0,a.useRef)(!1),m=(0,a.useRef)(!1),v=(0,a.useCallback)(t=>{let n=f(e);l()(!!n,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),p.current=!n||!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)||0!==t.button||!!(0,r.Z)(n,t.target)||m.current,m.current=!1},[e]),h=(0,s.Z)(t=>{let n=f(e);n&&(0,r.Z)(n,t.target)&&(m.current=!0)}),g=(0,s.Z)(e=>{p.current||t(e)});(0,a.useEffect)(()=>{var t,r;if(n||null==e)return;let a=(0,i.Z)(f(e)),s=a.defaultView||window,l=null!=(t=s.event)?t:null==(r=s.parent)?void 0:r.event,p=null;d[u]&&(p=(0,o.Z)(a,d[u],h,!0));let m=(0,o.Z)(a,u,v,!0),y=(0,o.Z)(a,u,e=>{if(e===l){l=void 0;return}g(e)}),b=[];return"ontouchstart"in a.documentElement&&(b=[].slice.call(a.body.children).map(e=>(0,o.Z)(e,"mousemove",c))),()=>{null==p||p(),m(),y(),b.forEach(e=>e())}},[e,n,u,v,h,g])}},9782:function(e,t,n){n.d(t,{Z:function(){return ew}});var r,o,i,a,s,u=n(2265),l=Object.prototype.hasOwnProperty;function c(e,t,n){for(n of e.keys())if(f(n,t))return n}function f(e,t){var n,r,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&f(e[r],t[r]););return -1===r}if(n===Set){if(e.size!==t.size)return!1;for(r of e)if((o=r)&&"object"==typeof o&&!(o=c(t,o))||!t.has(o))return!1;return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e)if((o=r[0])&&"object"==typeof o&&!(o=c(t,o))||!f(r[1],t.get(o)))return!1;return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return -1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return -1===r}if(!n||"object"==typeof e){for(n in r=0,e)if(l.call(e,n)&&++r&&!l.call(t,n)||!(n in t)||!f(e[n],t[n]))return!1;return Object.keys(t).length===r}}return e!=e&&t!=t}var d=n(7481),p=function(e){let t=(0,d.Z)();return[e[0],(0,u.useCallback)(n=>{if(t())return e[1](n)},[t,e[1]])]};function m(e){return e.split("-")[0]}function v(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function h(e){var t=v(e).Element;return e instanceof t||e instanceof Element}function g(e){var t=v(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function y(e){if("undefined"==typeof ShadowRoot)return!1;var t=v(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var b=Math.max,w=Math.min,x=Math.round;function O(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Z(){return!/^((?!chrome|android).)*safari/i.test(O())}function E(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&g(e)&&(o=e.offsetWidth>0&&x(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&x(r.height)/e.offsetHeight||1);var a=(h(e)?v(e):window).visualViewport,s=!Z()&&n,u=(r.left+(s&&a?a.offsetLeft:0))/o,l=(r.top+(s&&a?a.offsetTop:0))/i,c=r.width/o,f=r.height/i;return{width:c,height:f,top:l,right:u+c,bottom:l+f,left:u,x:u,y:l}}function j(e){var t=E(e),n=e.offsetWidth,r=e.offsetHeight;return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-r)&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function D(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&y(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function k(e){return e?(e.nodeName||"").toLowerCase():null}function C(e){return v(e).getComputedStyle(e)}function A(e){return((h(e)?e.ownerDocument:e.document)||window.document).documentElement}function R(e){return"html"===k(e)?e:e.assignedSlot||e.parentNode||(y(e)?e.host:null)||A(e)}function P(e){return g(e)&&"fixed"!==C(e).position?e.offsetParent:null}function N(e){for(var t=v(e),n=P(e);n&&["table","td","th"].indexOf(k(n))>=0&&"static"===C(n).position;)n=P(n);return n&&("html"===k(n)||"body"===k(n)&&"static"===C(n).position)?t:n||function(e){var t=/firefox/i.test(O());if(/Trident/i.test(O())&&g(e)&&"fixed"===C(e).position)return null;var n=R(e);for(y(n)&&(n=n.host);g(n)&&0>["html","body"].indexOf(k(n));){var r=C(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function S(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function M(e,t,n){return b(e,w(t,n))}function L(){return{top:0,right:0,bottom:0,left:0}}function T(e){return Object.assign({},L(),e)}function W(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}var B="bottom",I="right",H="left",_="auto",V=["top",B,I,H],$="start",F="viewport",q="popper",z=V.reduce(function(e,t){return e.concat([t+"-"+$,t+"-end"])},[]),U=[].concat(V,[_]).reduce(function(e,t){return e.concat([t,t+"-"+$,t+"-end"])},[]),K=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function J(e){return e.split("-")[1]}var Y={top:"auto",right:"auto",bottom:"auto",left:"auto"};function G(e){var t,n,r,o,i,a,s,u=e.popper,l=e.popperRect,c=e.placement,f=e.variation,d=e.offsets,p=e.position,m=e.gpuAcceleration,h=e.adaptive,g=e.roundOffsets,y=e.isFixed,b=d.x,w=void 0===b?0:b,O=d.y,Z=void 0===O?0:O,E="function"==typeof g?g({x:w,y:Z}):{x:w,y:Z};w=E.x,Z=E.y;var j=d.hasOwnProperty("x"),D=d.hasOwnProperty("y"),k=H,R="top",P=window;if(h){var S=N(u),M="clientHeight",L="clientWidth";S===v(u)&&"static"!==C(S=A(u)).position&&"absolute"===p&&(M="scrollHeight",L="scrollWidth"),("top"===c||(c===H||c===I)&&"end"===f)&&(R=B,Z-=(y&&S===P&&P.visualViewport?P.visualViewport.height:S[M])-l.height,Z*=m?1:-1),(c===H||("top"===c||c===B)&&"end"===f)&&(k=I,w-=(y&&S===P&&P.visualViewport?P.visualViewport.width:S[L])-l.width,w*=m?1:-1)}var T=Object.assign({position:p},h&&Y),W=!0===g?(t={x:w,y:Z},n=v(u),r=t.x,o=t.y,{x:x(r*(i=n.devicePixelRatio||1))/i||0,y:x(o*i)/i||0}):{x:w,y:Z};return(w=W.x,Z=W.y,m)?Object.assign({},T,((s={})[R]=D?"0":"",s[k]=j?"0":"",s.transform=1>=(P.devicePixelRatio||1)?"translate("+w+"px, "+Z+"px)":"translate3d("+w+"px, "+Z+"px, 0)",s)):Object.assign({},T,((a={})[R]=D?Z+"px":"",a[k]=j?w+"px":"",a.transform="",a))}var X={passive:!0},Q={left:"right",right:"left",bottom:"top",top:"bottom"};function ee(e){return e.replace(/left|right|bottom|top/g,function(e){return Q[e]})}var et={start:"end",end:"start"};function en(e){return e.replace(/start|end/g,function(e){return et[e]})}function er(e){var t=v(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function eo(e){return E(A(e)).left+er(e).scrollLeft}function ei(e){var t=C(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ea(e,t){void 0===t&&(t=[]);var n,r=function e(t){return["html","body","#document"].indexOf(k(t))>=0?t.ownerDocument.body:g(t)&&ei(t)?t:e(R(t))}(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=v(r),a=o?[i].concat(i.visualViewport||[],ei(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(ea(R(a)))}function es(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function eu(e,t,n){var r,o,i,a,s,u,l,c,f,d;return t===F?es(function(e,t){var n=v(e),r=A(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,u=0;if(o){i=o.width,a=o.height;var l=Z();(l||!l&&"fixed"===t)&&(s=o.offsetLeft,u=o.offsetTop)}return{width:i,height:a,x:s+eo(e),y:u}}(e,n)):h(t)?((r=E(t,!1,"fixed"===n)).top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r):es((o=A(e),a=A(o),s=er(o),u=null==(i=o.ownerDocument)?void 0:i.body,l=b(a.scrollWidth,a.clientWidth,u?u.scrollWidth:0,u?u.clientWidth:0),c=b(a.scrollHeight,a.clientHeight,u?u.scrollHeight:0,u?u.clientHeight:0),f=-s.scrollLeft+eo(o),d=-s.scrollTop,"rtl"===C(u||a).direction&&(f+=b(a.clientWidth,u?u.clientWidth:0)-l),{width:l,height:c,x:f,y:d}))}function el(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?m(o):null,a=o?J(o):null,s=n.x+n.width/2-r.width/2,u=n.y+n.height/2-r.height/2;switch(i){case"top":t={x:s,y:n.y-r.height};break;case B:t={x:s,y:n.y+n.height};break;case I:t={x:n.x+n.width,y:u};break;case H:t={x:n.x-r.width,y:u};break;default:t={x:n.x,y:n.y}}var l=i?S(i):null;if(null!=l){var c="y"===l?"height":"width";switch(a){case $:t[l]=t[l]-(n[c]/2-r[c]/2);break;case"end":t[l]=t[l]+(n[c]/2-r[c]/2)}}return t}function ec(e,t){void 0===t&&(t={});var n,r,o,i,a,s,u,l=t,c=l.placement,f=void 0===c?e.placement:c,d=l.strategy,p=void 0===d?e.strategy:d,m=l.boundary,v=l.rootBoundary,y=l.elementContext,x=void 0===y?q:y,O=l.altBoundary,Z=l.padding,j=void 0===Z?0:Z,P=T("number"!=typeof j?j:W(j,V)),S=e.rects.popper,M=e.elements[void 0!==O&&O?x===q?"reference":q:x],L=(n=h(M)?M:M.contextElement||A(e.elements.popper),s=(a=[].concat("clippingParents"===(r=void 0===m?"clippingParents":m)?(o=ea(R(n)),h(i=["absolute","fixed"].indexOf(C(n).position)>=0&&g(n)?N(n):n)?o.filter(function(e){return h(e)&&D(e,i)&&"body"!==k(e)}):[]):[].concat(r),[void 0===v?F:v]))[0],(u=a.reduce(function(e,t){var r=eu(n,t,p);return e.top=b(r.top,e.top),e.right=w(r.right,e.right),e.bottom=w(r.bottom,e.bottom),e.left=b(r.left,e.left),e},eu(n,s,p))).width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u),H=E(e.elements.reference),_=el({reference:H,element:S,strategy:"absolute",placement:f}),$=es(Object.assign({},S,_)),z=x===q?$:H,U={top:L.top-z.top+P.top,bottom:z.bottom-L.bottom+P.bottom,left:L.left-z.left+P.left,right:z.right-L.right+P.right},K=e.modifiersData.offset;if(x===q&&K){var J=K[f];Object.keys(U).forEach(function(e){var t=[I,B].indexOf(e)>=0?1:-1,n=["top",B].indexOf(e)>=0?"y":"x";U[e]+=J[n]*t})}return U}function ef(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ed(e){return["top",I,B,H].some(function(t){return e[t]>=0})}var ep={placement:"bottom",modifiers:[],strategy:"absolute"};function em(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}let ev=(i=void 0===(o=(r={defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ec(t,{elementContext:"reference"}),s=ec(t,{altBoundary:!0}),u=ef(a,r),l=ef(s,o,i),c=ed(u),f=ed(l);t.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":f})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=el({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=n.adaptive,i=n.roundOffsets,a=void 0===i||i,s={placement:m(t.placement),variation:J(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,G(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,G(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,u=v(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach(function(e){e.addEventListener("scroll",n.update,X)}),s&&u.addEventListener("resize",n.update,X),function(){i&&l.forEach(function(e){e.removeEventListener("scroll",n.update,X)}),s&&u.removeEventListener("resize",n.update,X)}},data:{}},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=U.reduce(function(e,n){var r,o,a,s,u,l;return e[n]=(r=t.rects,a=[H,"top"].indexOf(o=m(n))>=0?-1:1,u=(s="function"==typeof i?i(Object.assign({},r,{placement:n})):i)[0],l=s[1],u=u||0,l=(l||0)*a,[H,I].indexOf(o)>=0?{x:l,y:u}:{x:u,y:l}),e},{}),s=a[t.placement],u=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,u=n.fallbackPlacements,l=n.padding,c=n.boundary,f=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,v=void 0===p||p,h=n.allowedAutoPlacements,g=t.options.placement,y=m(g)===g,b=u||(y||!v?[ee(g)]:function(e){if(m(e)===_)return[];var t=ee(e);return[en(e),t,en(t)]}(g)),w=[g].concat(b).reduce(function(e,n){var r,o,i,a,s,u,d,p,g,y,b,w;return e.concat(m(n)===_?(o=(r={placement:n,boundary:c,rootBoundary:f,padding:l,flipVariations:v,allowedAutoPlacements:h}).placement,i=r.boundary,a=r.rootBoundary,s=r.padding,u=r.flipVariations,p=void 0===(d=r.allowedAutoPlacements)?U:d,0===(b=(y=(g=J(o))?u?z:z.filter(function(e){return J(e)===g}):V).filter(function(e){return p.indexOf(e)>=0})).length&&(b=y),Object.keys(w=b.reduce(function(e,n){return e[n]=ec(t,{placement:n,boundary:i,rootBoundary:a,padding:s})[m(n)],e},{})).sort(function(e,t){return w[e]-w[t]})):n)},[]),x=t.rects.reference,O=t.rects.popper,Z=new Map,E=!0,j=w[0],D=0;D<w.length;D++){var k=w[D],C=m(k),A=J(k)===$,R=["top",B].indexOf(C)>=0,P=R?"width":"height",N=ec(t,{placement:k,boundary:c,rootBoundary:f,altBoundary:d,padding:l}),S=R?A?I:H:A?B:"top";x[P]>O[P]&&(S=ee(S));var M=ee(S),L=[];if(i&&L.push(N[C]<=0),s&&L.push(N[S]<=0,N[M]<=0),L.every(function(e){return e})){j=k,E=!1;break}Z.set(k,L)}if(E)for(var T=v?3:1,W=function(e){var t=w.find(function(t){var n=Z.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return j=t,"break"},F=T;F>0&&"break"!==W(F);F--);t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=n.altAxis,a=n.boundary,s=n.rootBoundary,u=n.altBoundary,l=n.padding,c=n.tether,f=void 0===c||c,d=n.tetherOffset,p=void 0===d?0:d,v=ec(t,{boundary:a,rootBoundary:s,padding:l,altBoundary:u}),h=m(t.placement),g=J(t.placement),y=!g,x=S(h),O="x"===x?"y":"x",Z=t.modifiersData.popperOffsets,E=t.rects.reference,D=t.rects.popper,k="function"==typeof p?p(Object.assign({},t.rects,{placement:t.placement})):p,C="number"==typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),A=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(Z){if(void 0===o||o){var P,T="y"===x?"top":H,W="y"===x?B:I,_="y"===x?"height":"width",V=Z[x],F=V+v[T],q=V-v[W],z=f?-D[_]/2:0,U=g===$?E[_]:D[_],K=g===$?-D[_]:-E[_],Y=t.elements.arrow,G=f&&Y?j(Y):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:L(),Q=X[T],ee=X[W],et=M(0,E[_],G[_]),en=y?E[_]/2-z-et-Q-C.mainAxis:U-et-Q-C.mainAxis,er=y?-E[_]/2+z+et+ee+C.mainAxis:K+et+ee+C.mainAxis,eo=t.elements.arrow&&N(t.elements.arrow),ei=eo?"y"===x?eo.clientTop||0:eo.clientLeft||0:0,ea=null!=(P=null==A?void 0:A[x])?P:0,es=M(f?w(F,V+en-ea-ei):F,V,f?b(q,V+er-ea):q);Z[x]=es,R[x]=es-V}if(void 0!==i&&i){var eu,el,ef="x"===x?"top":H,ed="x"===x?B:I,ep=Z[O],em="y"===O?"height":"width",ev=ep+v[ef],eh=ep-v[ed],eg=-1!==["top",H].indexOf(h),ey=null!=(el=null==A?void 0:A[O])?el:0,eb=eg?ev:ep-E[em]-D[em]-ey+C.altAxis,ew=eg?ep+E[em]+D[em]-ey-C.altAxis:eh,ex=f&&eg?(eu=M(eb,ep,ew))>ew?ew:eu:M(f?eb:ev,ep,f?ew:eh);Z[O]=ex,R[O]=ex-ep}t.modifiersData[r]=R}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,r=e.state,o=e.name,i=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,u=m(r.placement),l=S(u),c=[H,I].indexOf(u)>=0?"height":"width";if(a&&s){var f=T("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:W(t,V)),d=j(a),p="y"===l?"top":H,v="y"===l?B:I,h=r.rects.reference[c]+r.rects.reference[l]-s[l]-r.rects.popper[c],g=s[l]-r.rects.reference[l],y=N(a),b=y?"y"===l?y.clientHeight||0:y.clientWidth||0:0,w=f[p],x=b-d[c]-f[v],O=b/2-d[c]/2+(h/2-g/2),Z=M(w,O,x);r.modifiersData[o]=((n={})[l]=Z,n.centerOffset=Z-O,n)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&D(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}]}).defaultModifiers)?[]:o,s=void 0===(a=r.defaultOptions)?ep:a,function(e,t,n){void 0===n&&(n=s);var r,o={placement:"bottom",orderedModifiers:[],options:Object.assign({},ep,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],u=!1,l={state:o,setOptions:function(n){var r,u,f,d,p,m="function"==typeof n?n(o.options):n;c(),o.options=Object.assign({},s,o.options,m),o.scrollParents={reference:h(e)?ea(e):e.contextElement?ea(e.contextElement):[],popper:ea(t)};var v=(u=Object.keys(r=[].concat(i,o.options.modifiers).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return r[e]}),f=new Map,d=new Set,p=[],u.forEach(function(e){f.set(e.name,e)}),u.forEach(function(e){d.has(e.name)||function e(t){d.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!d.has(t)){var n=f.get(t);n&&e(n)}}),p.push(t)}(e)}),K.reduce(function(e,t){return e.concat(p.filter(function(e){return e.phase===t}))},[]));return o.orderedModifiers=v.filter(function(e){return e.enabled}),o.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=e.effect;if("function"==typeof r){var i=r({state:o,name:t,instance:l,options:void 0===n?{}:n});a.push(i||function(){})}}),l.update()},forceUpdate:function(){if(!u){var e,t,n,r,i,a,s,c,f,d,p,m,h=o.elements,y=h.reference,b=h.popper;if(em(y,b)){o.rects={reference:(t=N(b),n="fixed"===o.options.strategy,r=g(t),c=g(t)&&(a=x((i=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=x(i.height)/t.offsetHeight||1,1!==a||1!==s),f=A(t),d=E(y,c,n),p={scrollLeft:0,scrollTop:0},m={x:0,y:0},(r||!r&&!n)&&(("body"!==k(t)||ei(f))&&(p=(e=t)!==v(e)&&g(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:er(e)),g(t)?(m=E(t,!0),m.x+=t.clientLeft,m.y+=t.clientTop):f&&(m.x=eo(f))),{x:d.left+p.scrollLeft-m.x,y:d.top+p.scrollTop-m.y,width:d.width,height:d.height}),popper:j(b)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach(function(e){return o.modifiersData[e.name]=Object.assign({},e.data)});for(var w=0;w<o.orderedModifiers.length;w++){if(!0===o.reset){o.reset=!1,w=-1;continue}var O=o.orderedModifiers[w],Z=O.fn,D=O.options,C=void 0===D?{}:D,R=O.name;"function"==typeof Z&&(o=Z({state:o,options:C,name:R,instance:l})||o)}}}},update:function(){return r||(r=new Promise(function(e){Promise.resolve().then(function(){r=void 0,e(new Promise(function(e){l.forceUpdate(),e(o)}))})})),r},destroy:function(){c(),u=!0}};if(!em(e,t))return l;function c(){a.forEach(function(e){return e()}),a=[]}return l.setOptions(n).then(function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)}),l}),eh=["enabled","placement","strategy","modifiers"],eg={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>void 0},ey={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{let{reference:t,popper:n}=e.elements;if("removeAttribute"in t){let e=(t.getAttribute("aria-describedby")||"").split(",").filter(e=>e.trim()!==n.id);e.length?t.setAttribute("aria-describedby",e.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;let{popper:n,reference:r}=e.elements,o=null==(t=n.getAttribute("role"))?void 0:t.toLowerCase();if(n.id&&"tooltip"===o&&"setAttribute"in r){let e=r.getAttribute("aria-describedby");if(e&&-1!==e.split(",").indexOf(n.id))return;r.setAttribute("aria-describedby",e?`${e},${n.id}`:n.id)}}},eb=[];var ew=function(e,t,n={}){let{enabled:r=!0,placement:o="bottom",strategy:i="absolute",modifiers:a=eb}=n,s=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,eh),l=(0,u.useRef)(a),c=(0,u.useRef)(),d=(0,u.useCallback)(()=>{var e;null==(e=c.current)||e.update()},[]),m=(0,u.useCallback)(()=>{var e;null==(e=c.current)||e.forceUpdate()},[]),[v,h]=p((0,u.useState)({placement:o,update:d,forceUpdate:m,attributes:{},styles:{popper:{},arrow:{}}})),g=(0,u.useMemo)(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:e})=>{let t={},n={};Object.keys(e.elements).forEach(r=>{t[r]=e.styles[r],n[r]=e.attributes[r]}),h({state:e,styles:t,attributes:n,update:d,forceUpdate:m,placement:e.placement})}}),[d,m,h]),y=(0,u.useMemo)(()=>(f(l.current,a)||(l.current=a),l.current),[a]);return(0,u.useEffect)(()=>{c.current&&r&&c.current.setOptions({placement:o,strategy:i,modifiers:[...y,g,eg]})},[i,o,g,r,y]),(0,u.useEffect)(()=>{if(r&&null!=e&&null!=t)return c.current=ev(e,t,Object.assign({},s,{placement:o,strategy:i,modifiers:[...y,ey,g]})),()=>{null!=c.current&&(c.current.destroy(),c.current=void 0,h(e=>Object.assign({},e,{attributes:{},styles:{popper:{}}})))}},[r,e,t]),v}},5324:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(2265),o=n(7550);let i=(0,r.createContext)(o.Z?window:void 0);function a(){return(0,r.useContext)(i)}i.Provider},2599:function(e,t,n){n.d(t,{$c:function(){return o}});var r=n(2265);function o(e,t,n){let o=(0,r.useRef)(void 0!==e),[i,a]=(0,r.useState)(t),s=void 0!==e,u=o.current;return o.current=s,!s&&u&&i!==t&&a(t),[s?e:i,(0,r.useCallback)((...e)=>{let[t,...r]=e,o=null==n?void 0:n(t,...r);return a(t),o},[n])]}},4343:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}},7386:function(e,t,n){n.d(t,{Z:function(){return M}});var r=n(710),o=n.n(r),i=n(2265),a=n(6623),s=n(9390),u=n(2599),l=n(7531),c=n(9620),f=n(520),d=n(9476),p=n(5602),m=n(2630),v=n(6417),h=n(2099),g=n(5450),y=n(4209),b=n(5324),w=n(7437);function x(){let e=(0,c.Z)(),t=(0,i.useRef)(null),n=(0,i.useCallback)(n=>{t.current=n,e()},[e]);return[t,n]}function O({defaultShow:e,show:t,onSelect:n,onToggle:r,itemSelector:o=`* [${(0,y.PB)("dropdown-item")}]`,focusFirstItemOnShow:c,placement:m="bottom-start",children:h}){let O=(0,b.Z)(),[Z,E]=(0,u.$c)(t,e,r),[j,D]=x(),k=j.current,[C,A]=x(),R=C.current,P=(0,l.Z)(Z),N=(0,i.useRef)(null),S=(0,i.useRef)(!1),M=(0,i.useContext)(g.Z),L=(0,i.useCallback)((e,t,n=null==t?void 0:t.type)=>{E(e,{originalEvent:t,source:n})},[E]),T=(0,d.Z)((e,t)=>{null==n||n(e,t),L(!1,t,"select"),t.isPropagationStopped()||null==M||M(e,t)}),W=(0,i.useMemo)(()=>({toggle:L,placement:m,show:Z,menuElement:k,toggleElement:R,setMenu:D,setToggle:A}),[L,m,Z,k,R,D,A]);k&&P&&!Z&&(S.current=k.contains(k.ownerDocument.activeElement));let B=(0,d.Z)(()=>{R&&R.focus&&R.focus()}),I=(0,d.Z)(()=>{let e=N.current,t=c;if(null==t&&(t=!!(j.current&&(0,v.bt)(j.current))&&"keyboard"),!1===t||"keyboard"===t&&!/^key.+$/.test(e))return;let n=(0,a.Z)(j.current,o)[0];n&&n.focus&&n.focus()});(0,i.useEffect)(()=>{Z?I():S.current&&(S.current=!1,B())},[Z,S,B,I]),(0,i.useEffect)(()=>{N.current=null});let H=(e,t)=>{if(!j.current)return null;let n=(0,a.Z)(j.current,o),r=n.indexOf(e)+t;return r=Math.max(0,Math.min(r,n.length)),n[r]};return(0,f.Z)((0,i.useCallback)(()=>O.document,[O]),"keydown",e=>{var t,n;let{key:r}=e,o=e.target,i=null==(t=j.current)?void 0:t.contains(o),a=null==(n=C.current)?void 0:n.contains(o);if(/input|textarea/i.test(o.tagName)&&(" "===r||"Escape"!==r&&i||"Escape"===r&&"search"===o.type)||!i&&!a||"Tab"===r&&(!j.current||!Z))return;N.current=e.type;let u={originalEvent:e,source:e.type};switch(r){case"ArrowUp":{let t=H(o,-1);t&&t.focus&&t.focus(),e.preventDefault();return}case"ArrowDown":if(e.preventDefault(),Z){let e=H(o,1);e&&e.focus&&e.focus()}else E(!0,u);return;case"Tab":(0,s.ZP)(o.ownerDocument,"keyup",e=>{var t;("Tab"!==e.key||e.target)&&null!=(t=j.current)&&t.contains(e.target)||E(!1,u)},{once:!0});break;case"Escape":"Escape"===r&&(e.preventDefault(),e.stopPropagation()),E(!1,u)}}),(0,w.jsx)(g.Z.Provider,{value:T,children:(0,w.jsx)(p.Z.Provider,{value:W,children:h})})}O.displayName="Dropdown",O.Menu=m.Z,O.Toggle=v.ZP,O.Item=h.Z;var Z=n(2540),E=n(2789),j=n(2865);let D=i.forwardRef((e,t)=>{let{className:n,bsPrefix:r,as:i="hr",role:a="separator",...s}=e;return r=(0,j.vE)(r,"dropdown-divider"),(0,w.jsx)(i,{ref:t,className:o()(n,r),role:a,...s})});D.displayName="DropdownDivider";let k=i.forwardRef((e,t)=>{let{className:n,bsPrefix:r,as:i="div",role:a="heading",...s}=e;return r=(0,j.vE)(r,"dropdown-header"),(0,w.jsx)(i,{ref:t,className:o()(n,r),role:a,...s})});k.displayName="DropdownHeader";var C=n(5107);let A=i.forwardRef((e,t)=>{let{className:n,bsPrefix:r,as:i="span",...a}=e;return r=(0,j.vE)(r,"dropdown-item-text"),(0,w.jsx)(i,{ref:t,className:o()(n,r),...a})});A.displayName="DropdownItemText";var R=n(4370),P=n(9538),N=n(1805);let S=i.forwardRef((e,t)=>{let{bsPrefix:n,drop:r="down",show:a,className:s,align:u="start",onSelect:l,onToggle:c,focusFirstItemOnShow:f,as:p="div",navbar:m,autoClose:v=!0,...h}=(0,Z.Ch)(e,{show:"onToggle"}),g=(0,i.useContext)(N.Z),y=(0,j.vE)(n,"dropdown"),b=(0,j.SC)(),x=e=>!1===v?"click"===e:"inside"===v?"rootClose"!==e:"outside"!==v||"select"!==e,D=(0,d.Z)((e,t)=>{var n,r;(null==(n=t.originalEvent)||null==(r=n.target)||!r.classList.contains("dropdown-toggle")||"mousedown"!==t.source)&&(t.originalEvent.currentTarget===document&&("keydown"!==t.source||"Escape"===t.originalEvent.key)&&(t.source="rootClose"),x(t.source)&&(null==c||c(e,t)))}),k=(0,R.J)("end"===u,r,b),C=(0,i.useMemo)(()=>({align:u,drop:r,isRTL:b}),[u,r,b]);return(0,w.jsx)(E.Z.Provider,{value:C,children:(0,w.jsx)(O,{placement:k,show:a,onSelect:l,onToggle:D,focusFirstItemOnShow:f,itemSelector:".".concat(y,"-item:not(.disabled):not(:disabled)"),children:g?h.children:(0,w.jsx)(p,{...h,ref:t,className:o()(s,a&&"show",{down:y,"down-centered":"".concat(y,"-center"),up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"}[r])})})})});S.displayName="Dropdown";var M=Object.assign(S,{Toggle:P.Z,Menu:R.Z,Item:C.Z,ItemText:A,Divider:D,Header:k})},2789:function(e,t,n){let r=n(2265).createContext({});r.displayName="DropdownContext",t.Z=r},5107:function(e,t,n){var r=n(710),o=n.n(r),i=n(2265),a=n(2099),s=n(7160),u=n(2865),l=n(7437);let c=i.forwardRef((e,t)=>{let{bsPrefix:n,className:r,eventKey:i,disabled:c=!1,onClick:f,active:d,as:p=s.Z,...m}=e,v=(0,u.vE)(n,"dropdown-item"),[h,g]=(0,a.F)({key:i,href:m.href,disabled:c,onClick:f,active:d});return(0,l.jsx)(p,{...m,...h,ref:t,className:o()(r,v,g.isActive&&"active",c&&"disabled")})});c.displayName="DropdownItem",t.Z=c},4370:function(e,t,n){n.d(t,{J:function(){return v}});var r=n(710),o=n.n(r),i=n(2265),a=n(2630),s=n(3106),u=n(1564);n(5858);var l=n(2789),c=n(1805),f=n(7061),d=n(2865),p=n(7604),m=n(7437);function v(e,t,n){let r=e?n?"bottom-start":"bottom-end":n?"bottom-end":"bottom-start";return"up"===t?r=e?n?"top-start":"top-end":n?"top-end":"top-start":"end"===t?r=e?n?"left-end":"right-end":n?"left-start":"right-start":"start"===t?r=e?n?"right-end":"left-end":n?"right-start":"left-start":"down-centered"===t?r="bottom":"up-centered"===t&&(r="top"),r}let h=i.forwardRef((e,t)=>{let{bsPrefix:n,className:r,align:h,rootCloseEvent:g,flip:y=!0,show:b,renderOnMount:w,as:x="div",popperConfig:O,variant:Z,...E}=e,j=!1,D=(0,i.useContext)(f.Z),k=(0,d.vE)(n,"dropdown-menu"),{align:C,drop:A,isRTL:R}=(0,i.useContext)(l.Z);h=h||C;let P=(0,i.useContext)(c.Z),N=[];if(h){if("object"==typeof h){let e=Object.keys(h);if(e.length){let t=e[0],n=h[t];j="start"===n,N.push("".concat(k,"-").concat(t,"-").concat(n))}}else"end"===h&&(j=!0)}let S=v(j,A,R),[M,{hasShown:L,popper:T,show:W,toggle:B}]=(0,a.d)({flip:y,rootCloseEvent:g,show:b,usePopper:!D&&0===N.length,offset:[0,2],popperConfig:O,placement:S});if(M.ref=(0,u.Z)((0,p.Z)(t,"DropdownMenu"),M.ref),(0,s.Z)(()=>{W&&(null==T||T.update())},[W]),!L&&!w&&!P)return null;"string"!=typeof x&&(M.show=W,M.close=()=>null==B?void 0:B(!1),M.align=h);let I=E.style;return null!=T&&T.placement&&(I={...E.style,...M.style},E["x-placement"]=T.placement),(0,m.jsx)(x,{...E,...M,style:I,...(N.length||D)&&{"data-bs-popper":"static"},className:o()(r,k,W&&"show",j&&"".concat(k,"-end"),Z&&"".concat(k,"-").concat(Z),...N)})});h.displayName="DropdownMenu",t.Z=h},9538:function(e,t,n){var r=n(1564),o=n(5602),i=n(6417),a=n(710),s=n.n(a),u=n(2265),l=n(6879),c=n(2865),f=n(7604),d=n(7437);let p=u.forwardRef((e,t)=>{let{bsPrefix:n,split:a,className:p,childBsPrefix:m,as:v=l.Z,...h}=e,g=(0,c.vE)(n,"dropdown-toggle"),y=(0,u.useContext)(o.Z);void 0!==m&&(h.bsPrefix=m);let[b]=(0,i.Jr)();return b.ref=(0,r.Z)(b.ref,(0,f.Z)(t,"DropdownToggle")),(0,d.jsx)(v,{className:s()(p,g,a&&"".concat(g,"-split"),(null==y?void 0:y.show)&&"show"),...b,...h})});p.displayName="DropdownToggle",t.Z=p},1805:function(e,t,n){let r=n(2265).createContext(null);r.displayName="InputGroupContext",t.Z=r},7061:function(e,t,n){let r=n(2265).createContext(null);r.displayName="NavbarContext",t.Z=r},5914:function(e,t,n){var r=n(710),o=n.n(r),i=n(2265),a=n(2865),s=n(7437);let u=i.forwardRef((e,t)=>{let{bsPrefix:n,className:r,as:i="div",...u}=e,l=(0,a.vE)(n,"row"),c=(0,a.pi)(),f=(0,a.zG)(),d="".concat(l,"-cols"),p=[];return c.forEach(e=>{let t;let n=u[e];delete u[e],null!=n&&"object"==typeof n?{cols:t}=n:t=n,null!=t&&p.push("".concat(d).concat(e!==f?"-".concat(e):"","-").concat(t))}),(0,s.jsx)(i,{ref:t,...u,className:o()(r,l,...p)})});u.displayName="Row",t.Z=u},7604:function(e,t,n){function r(e,t){return e}n.d(t,{Z:function(){return r}}),n(1939),n(2265),n(1564)},5625:function(e,t,n){n.d(t,{gP:function(){return l}});var r=n(2265);let o={prefix:String(Math.round(1e10*Math.random())),current:0},i=r.createContext(o),a=r.createContext(!1),s=!!("undefined"!=typeof window&&window.document&&window.document.createElement),u=new WeakMap,l="function"==typeof r.useId?function(e){let t=r.useId(),[n]=(0,r.useState)("function"==typeof r.useSyncExternalStore?r.useSyncExternalStore(d,c,f):(0,r.useContext)(a)),i=n?"react-aria":`react-aria${o.prefix}`;return e||`${i}-${t}`}:function(e){let t=(0,r.useContext)(i);t!==o||s||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=function(e=!1){let t=(0,r.useContext)(i),n=(0,r.useRef)(null);if(null===n.current&&!e){var o,a;let e=null===(a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===a?void 0:null===(o=a.ReactCurrentOwner)||void 0===o?void 0:o.current;if(e){let n=u.get(e);null==n?u.set(e,{id:t.current,state:e.memoizedState}):e.memoizedState!==n.state&&(t.current=n.id,u.delete(e))}n.current=++t.current}return n.current}(!!e),a=`react-aria${t.prefix}`;return e||`${a}-${n}`};function c(){return!1}function f(){return!0}function d(e){return()=>{}}}}]);