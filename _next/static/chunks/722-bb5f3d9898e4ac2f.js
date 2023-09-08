"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[722],{5754:function(e,t,n){n.d(t,{ZP:function(){return r}});function r({enabled:e,enableEvents:t,placement:n,flip:r,offset:o,fixed:i,containerPadding:a,arrowElement:s,popperConfig:f={}}){var c,u,l,p,d;let m=function(e){let t={};return Array.isArray(e)?(null==e||e.forEach(e=>{t[e.name]=e}),t):e||t}(f.modifiers);return Object.assign({},f,{placement:n,enabled:e,strategy:i?"fixed":f.strategy,modifiers:function(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}(Object.assign({},m,{eventListeners:{enabled:t,options:null==(c=m.eventListeners)?void 0:c.options},preventOverflow:Object.assign({},m.preventOverflow,{options:a?Object.assign({padding:a},null==(u=m.preventOverflow)?void 0:u.options):null==(l=m.preventOverflow)?void 0:l.options}),offset:{options:Object.assign({offset:o},null==(p=m.offset)?void 0:p.options)},arrow:Object.assign({},m.arrow,{enabled:!!s,options:Object.assign({},null==(d=m.arrow)?void 0:d.options,{element:s})}),flip:Object.assign({enabled:!!r},m.flip)}))})}},5703:function(e,t,n){n.d(t,{f:function(){return l}});var r=n(1535),o=n(7966),i=n(3931),a=n(2265),s=n(5113),f=n(267),c=n.n(f);let u=()=>{},l=e=>e&&("current"in e?e.current:e),p={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};t.Z=function(e,t=u,{disabled:n,clickTrigger:f="click"}={}){let d=(0,a.useRef)(!1),m=(0,a.useRef)(!1),h=(0,a.useCallback)(t=>{let n=l(e);c()(!!n,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),d.current=!n||!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)||0!==t.button||!!(0,r.Z)(n,t.target)||m.current,m.current=!1},[e]),v=(0,s.Z)(t=>{let n=l(e);n&&(0,r.Z)(n,t.target)&&(m.current=!0)}),g=(0,s.Z)(e=>{d.current||t(e)});(0,a.useEffect)(()=>{var t,r;if(n||null==e)return;let a=(0,i.Z)(l(e)),s=a.defaultView||window,c=null!=(t=s.event)?t:null==(r=s.parent)?void 0:r.event,d=null;p[f]&&(d=(0,o.Z)(a,p[f],v,!0));let m=(0,o.Z)(a,f,h,!0),b=(0,o.Z)(a,f,e=>{if(e===c){c=void 0;return}g(e)}),y=[];return"ontouchstart"in a.documentElement&&(y=[].slice.call(a.body.children).map(e=>(0,o.Z)(e,"mousemove",u))),()=>{null==d||d(),m(),b(),y.forEach(e=>e())}},[e,n,f,h,v,g])}},6998:function(e,t,n){n.d(t,{Z:function(){return ew}});var r,o,i,a,s,f=n(2265),c=Object.prototype.hasOwnProperty;function u(e,t,n){for(n of e.keys())if(l(n,t))return n}function l(e,t){var n,r,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&l(e[r],t[r]););return -1===r}if(n===Set){if(e.size!==t.size)return!1;for(r of e)if((o=r)&&"object"==typeof o&&!(o=u(t,o))||!t.has(o))return!1;return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e)if((o=r[0])&&"object"==typeof o&&!(o=u(t,o))||!l(r[1],t.get(o)))return!1;return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return -1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return -1===r}if(!n||"object"==typeof e){for(n in r=0,e)if(c.call(e,n)&&++r&&!c.call(t,n)||!(n in t)||!l(e[n],t[n]))return!1;return Object.keys(t).length===r}}return e!=e&&t!=t}var p=n(1823),d=function(e){var t=(0,p.Z)();return[e[0],(0,f.useCallback)(function(n){if(t())return e[1](n)},[t,e[1]])]};function m(e){return e.split("-")[0]}function h(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function v(e){var t=h(e).Element;return e instanceof t||e instanceof Element}function g(e){var t=h(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function b(e){if("undefined"==typeof ShadowRoot)return!1;var t=h(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var y=Math.max,w=Math.min,x=Math.round;function O(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function j(){return!/^((?!chrome|android).)*safari/i.test(O())}function A(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&g(e)&&(o=e.offsetWidth>0&&x(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&x(r.height)/e.offsetHeight||1);var a=(v(e)?h(e):window).visualViewport,s=!j()&&n,f=(r.left+(s&&a?a.offsetLeft:0))/o,c=(r.top+(s&&a?a.offsetTop:0))/i,u=r.width/o,l=r.height/i;return{width:u,height:l,top:c,right:f+u,bottom:c+l,left:f,x:f,y:c}}function E(e){var t=A(e),n=e.offsetWidth,r=e.offsetHeight;return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-r)&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function D(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&b(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function k(e){return e?(e.nodeName||"").toLowerCase():null}function L(e){return h(e).getComputedStyle(e)}function M(e){return((v(e)?e.ownerDocument:e.document)||window.document).documentElement}function R(e){return"html"===k(e)?e:e.assignedSlot||e.parentNode||(b(e)?e.host:null)||M(e)}function W(e){return g(e)&&"fixed"!==L(e).position?e.offsetParent:null}function B(e){for(var t=h(e),n=W(e);n&&["table","td","th"].indexOf(k(n))>=0&&"static"===L(n).position;)n=W(n);return n&&("html"===k(n)||"body"===k(n)&&"static"===L(n).position)?t:n||function(e){var t=/firefox/i.test(O());if(/Trident/i.test(O())&&g(e)&&"fixed"===L(e).position)return null;var n=R(e);for(b(n)&&(n=n.host);g(n)&&0>["html","body"].indexOf(k(n));){var r=L(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function P(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function C(e,t,n){return y(e,w(t,n))}function H(){return{top:0,right:0,bottom:0,left:0}}function S(e){return Object.assign({},H(),e)}function T(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}var V="bottom",Z="right",N="left",q="auto",z=["top",V,Z,N],I="start",U="viewport",_="popper",F=z.reduce(function(e,t){return e.concat([t+"-"+I,t+"-end"])},[]),K=[].concat(z,[q]).reduce(function(e,t){return e.concat([t,t+"-"+I,t+"-end"])},[]),X=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Y(e){return e.split("-")[1]}var $={top:"auto",right:"auto",bottom:"auto",left:"auto"};function G(e){var t,n,r,o,i,a,s,f=e.popper,c=e.popperRect,u=e.placement,l=e.variation,p=e.offsets,d=e.position,m=e.gpuAcceleration,v=e.adaptive,g=e.roundOffsets,b=e.isFixed,y=p.x,w=void 0===y?0:y,O=p.y,j=void 0===O?0:O,A="function"==typeof g?g({x:w,y:j}):{x:w,y:j};w=A.x,j=A.y;var E=p.hasOwnProperty("x"),D=p.hasOwnProperty("y"),k=N,R="top",W=window;if(v){var P=B(f),C="clientHeight",H="clientWidth";P===h(f)&&"static"!==L(P=M(f)).position&&"absolute"===d&&(C="scrollHeight",H="scrollWidth"),("top"===u||(u===N||u===Z)&&"end"===l)&&(R=V,j-=(b&&P===W&&W.visualViewport?W.visualViewport.height:P[C])-c.height,j*=m?1:-1),(u===N||("top"===u||u===V)&&"end"===l)&&(k=Z,w-=(b&&P===W&&W.visualViewport?W.visualViewport.width:P[H])-c.width,w*=m?1:-1)}var S=Object.assign({position:d},v&&$),T=!0===g?(t={x:w,y:j},n=h(f),r=t.x,o=t.y,{x:x(r*(i=n.devicePixelRatio||1))/i||0,y:x(o*i)/i||0}):{x:w,y:j};return(w=T.x,j=T.y,m)?Object.assign({},S,((s={})[R]=D?"0":"",s[k]=E?"0":"",s.transform=1>=(W.devicePixelRatio||1)?"translate("+w+"px, "+j+"px)":"translate3d("+w+"px, "+j+"px, 0)",s)):Object.assign({},S,((a={})[R]=D?j+"px":"",a[k]=E?w+"px":"",a.transform="",a))}var J={passive:!0},Q={left:"right",right:"left",bottom:"top",top:"bottom"};function ee(e){return e.replace(/left|right|bottom|top/g,function(e){return Q[e]})}var et={start:"end",end:"start"};function en(e){return e.replace(/start|end/g,function(e){return et[e]})}function er(e){var t=h(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function eo(e){return A(M(e)).left+er(e).scrollLeft}function ei(e){var t=L(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ea(e,t){void 0===t&&(t=[]);var n,r=function e(t){return["html","body","#document"].indexOf(k(t))>=0?t.ownerDocument.body:g(t)&&ei(t)?t:e(R(t))}(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=h(r),a=o?[i].concat(i.visualViewport||[],ei(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(ea(R(a)))}function es(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ef(e,t,n){var r,o,i,a,s,f,c,u,l,p;return t===U?es(function(e,t){var n=h(e),r=M(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var c=j();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+eo(e),y:f}}(e,n)):v(t)?((r=A(t,!1,"fixed"===n)).top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r):es((o=M(e),a=M(o),s=er(o),f=null==(i=o.ownerDocument)?void 0:i.body,c=y(a.scrollWidth,a.clientWidth,f?f.scrollWidth:0,f?f.clientWidth:0),u=y(a.scrollHeight,a.clientHeight,f?f.scrollHeight:0,f?f.clientHeight:0),l=-s.scrollLeft+eo(o),p=-s.scrollTop,"rtl"===L(f||a).direction&&(l+=y(a.clientWidth,f?f.clientWidth:0)-c),{width:c,height:u,x:l,y:p}))}function ec(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?m(o):null,a=o?Y(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case"top":t={x:s,y:n.y-r.height};break;case V:t={x:s,y:n.y+n.height};break;case Z:t={x:n.x+n.width,y:f};break;case N:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?P(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case I:t[c]=t[c]-(n[u]/2-r[u]/2);break;case"end":t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}function eu(e,t){void 0===t&&(t={});var n,r,o,i,a,s,f,c=t,u=c.placement,l=void 0===u?e.placement:u,p=c.strategy,d=void 0===p?e.strategy:p,m=c.boundary,h=c.rootBoundary,b=c.elementContext,x=void 0===b?_:b,O=c.altBoundary,j=c.padding,E=void 0===j?0:j,W=S("number"!=typeof E?E:T(E,z)),P=e.rects.popper,C=e.elements[void 0!==O&&O?x===_?"reference":_:x],H=(n=v(C)?C:C.contextElement||M(e.elements.popper),s=(a=[].concat("clippingParents"===(r=void 0===m?"clippingParents":m)?(o=ea(R(n)),v(i=["absolute","fixed"].indexOf(L(n).position)>=0&&g(n)?B(n):n)?o.filter(function(e){return v(e)&&D(e,i)&&"body"!==k(e)}):[]):[].concat(r),[void 0===h?U:h]))[0],(f=a.reduce(function(e,t){var r=ef(n,t,d);return e.top=y(r.top,e.top),e.right=w(r.right,e.right),e.bottom=w(r.bottom,e.bottom),e.left=y(r.left,e.left),e},ef(n,s,d))).width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f),N=A(e.elements.reference),q=ec({reference:N,element:P,strategy:"absolute",placement:l}),I=es(Object.assign({},P,q)),F=x===_?I:N,K={top:H.top-F.top+W.top,bottom:F.bottom-H.bottom+W.bottom,left:H.left-F.left+W.left,right:F.right-H.right+W.right},X=e.modifiersData.offset;if(x===_&&X){var Y=X[l];Object.keys(K).forEach(function(e){var t=[Z,V].indexOf(e)>=0?1:-1,n=["top",V].indexOf(e)>=0?"y":"x";K[e]+=Y[n]*t})}return K}function el(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ep(e){return["top",Z,V,N].some(function(t){return e[t]>=0})}var ed={placement:"bottom",modifiers:[],strategy:"absolute"};function em(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}let eh=(i=void 0===(o=(r={defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=eu(t,{elementContext:"reference"}),s=eu(t,{altBoundary:!0}),f=el(a,r),c=el(s,o,i),u=ep(f),l=ep(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ec({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=n.adaptive,i=n.roundOffsets,a=void 0===i||i,s={placement:m(t.placement),variation:Y(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,G(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,G(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=h(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(e){e.addEventListener("scroll",n.update,J)}),s&&f.addEventListener("resize",n.update,J),function(){i&&c.forEach(function(e){e.removeEventListener("scroll",n.update,J)}),s&&f.removeEventListener("resize",n.update,J)}},data:{}},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=K.reduce(function(e,n){var r,o,a,s,f,c;return e[n]=(r=t.rects,a=[N,"top"].indexOf(o=m(n))>=0?-1:1,f=(s="function"==typeof i?i(Object.assign({},r,{placement:n})):i)[0],c=s[1],f=f||0,c=(c||0)*a,[N,Z].indexOf(o)>=0?{x:c,y:f}:{x:f,y:c}),e},{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,h=void 0===d||d,v=n.allowedAutoPlacements,g=t.options.placement,b=m(g)===g,y=f||(b||!h?[ee(g)]:function(e){if(m(e)===q)return[];var t=ee(e);return[en(e),t,en(t)]}(g)),w=[g].concat(y).reduce(function(e,n){var r,o,i,a,s,f,p,d,g,b,y,w;return e.concat(m(n)===q?(o=(r={placement:n,boundary:u,rootBoundary:l,padding:c,flipVariations:h,allowedAutoPlacements:v}).placement,i=r.boundary,a=r.rootBoundary,s=r.padding,f=r.flipVariations,d=void 0===(p=r.allowedAutoPlacements)?K:p,0===(y=(b=(g=Y(o))?f?F:F.filter(function(e){return Y(e)===g}):z).filter(function(e){return d.indexOf(e)>=0})).length&&(y=b),Object.keys(w=y.reduce(function(e,n){return e[n]=eu(t,{placement:n,boundary:i,rootBoundary:a,padding:s})[m(n)],e},{})).sort(function(e,t){return w[e]-w[t]})):n)},[]),x=t.rects.reference,O=t.rects.popper,j=new Map,A=!0,E=w[0],D=0;D<w.length;D++){var k=w[D],L=m(k),M=Y(k)===I,R=["top",V].indexOf(L)>=0,W=R?"width":"height",B=eu(t,{placement:k,boundary:u,rootBoundary:l,altBoundary:p,padding:c}),P=R?M?Z:N:M?V:"top";x[W]>O[W]&&(P=ee(P));var C=ee(P),H=[];if(i&&H.push(B[L]<=0),s&&H.push(B[P]<=0,B[C]<=0),H.every(function(e){return e})){E=k,A=!1;break}j.set(k,H)}if(A)for(var S=h?3:1,T=function(e){var t=w.find(function(t){var n=j.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return E=t,"break"},U=S;U>0&&"break"!==T(U);U--);t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=n.altAxis,a=n.boundary,s=n.rootBoundary,f=n.altBoundary,c=n.padding,u=n.tether,l=void 0===u||u,p=n.tetherOffset,d=void 0===p?0:p,h=eu(t,{boundary:a,rootBoundary:s,padding:c,altBoundary:f}),v=m(t.placement),g=Y(t.placement),b=!g,x=P(v),O="x"===x?"y":"x",j=t.modifiersData.popperOffsets,A=t.rects.reference,D=t.rects.popper,k="function"==typeof d?d(Object.assign({},t.rects,{placement:t.placement})):d,L="number"==typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(j){if(void 0===o||o){var W,S="y"===x?"top":N,T="y"===x?V:Z,q="y"===x?"height":"width",z=j[x],U=z+h[S],_=z-h[T],F=l?-D[q]/2:0,K=g===I?A[q]:D[q],X=g===I?-D[q]:-A[q],$=t.elements.arrow,G=l&&$?E($):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:H(),Q=J[S],ee=J[T],et=C(0,A[q],G[q]),en=b?A[q]/2-F-et-Q-L.mainAxis:K-et-Q-L.mainAxis,er=b?-A[q]/2+F+et+ee+L.mainAxis:X+et+ee+L.mainAxis,eo=t.elements.arrow&&B(t.elements.arrow),ei=eo?"y"===x?eo.clientTop||0:eo.clientLeft||0:0,ea=null!=(W=null==M?void 0:M[x])?W:0,es=z+en-ea-ei,ef=z+er-ea,ec=C(l?w(U,es):U,z,l?y(_,ef):_);j[x]=ec,R[x]=ec-z}if(void 0!==i&&i){var el,ep,ed="x"===x?"top":N,em="x"===x?V:Z,eh=j[O],ev="y"===O?"height":"width",eg=eh+h[ed],eb=eh-h[em],ey=-1!==["top",N].indexOf(v),ew=null!=(ep=null==M?void 0:M[O])?ep:0,ex=ey?eg:eh-A[ev]-D[ev]-ew+L.altAxis,eO=ey?eh+A[ev]+D[ev]-ew-L.altAxis:eb,ej=l&&ey?(el=C(ex,eh,eO))>eO?eO:el:C(l?ex:eg,eh,l?eO:eb);j[O]=ej,R[O]=ej-eh}t.modifiersData[r]=R}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,r=e.state,o=e.name,i=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,f=m(r.placement),c=P(f),u=[N,Z].indexOf(f)>=0?"height":"width";if(a&&s){var l=S("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:T(t,z)),p=E(a),d="y"===c?"top":N,h="y"===c?V:Z,v=r.rects.reference[u]+r.rects.reference[c]-s[c]-r.rects.popper[u],g=s[c]-r.rects.reference[c],b=B(a),y=b?"y"===c?b.clientHeight||0:b.clientWidth||0:0,w=l[d],x=y-p[u]-l[h],O=y/2-p[u]/2+(v/2-g/2),j=C(w,O,x);r.modifiersData[o]=((n={})[c]=j,n.centerOffset=j-O,n)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&D(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}]}).defaultModifiers)?[]:o,s=void 0===(a=r.defaultOptions)?ed:a,function(e,t,n){void 0===n&&(n=s);var r,o={placement:"bottom",orderedModifiers:[],options:Object.assign({},ed,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],f=!1,c={state:o,setOptions:function(n){var r,f,l,p,d,m="function"==typeof n?n(o.options):n;u(),o.options=Object.assign({},s,o.options,m),o.scrollParents={reference:v(e)?ea(e):e.contextElement?ea(e.contextElement):[],popper:ea(t)};var h=(f=Object.keys(r=[].concat(i,o.options.modifiers).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return r[e]}),l=new Map,p=new Set,d=[],f.forEach(function(e){l.set(e.name,e)}),f.forEach(function(e){p.has(e.name)||function e(t){p.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!p.has(t)){var n=l.get(t);n&&e(n)}}),d.push(t)}(e)}),X.reduce(function(e,t){return e.concat(d.filter(function(e){return e.phase===t}))},[]));return o.orderedModifiers=h.filter(function(e){return e.enabled}),o.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=e.effect;if("function"==typeof r){var i=r({state:o,name:t,instance:c,options:void 0===n?{}:n});a.push(i||function(){})}}),c.update()},forceUpdate:function(){if(!f){var e,t,n,r,i,a,s,u,l,p,d,m,v=o.elements,b=v.reference,y=v.popper;if(em(b,y)){o.rects={reference:(t=B(y),n="fixed"===o.options.strategy,r=g(t),u=g(t)&&(a=x((i=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=x(i.height)/t.offsetHeight||1,1!==a||1!==s),l=M(t),p=A(b,u,n),d={scrollLeft:0,scrollTop:0},m={x:0,y:0},(r||!r&&!n)&&(("body"!==k(t)||ei(l))&&(d=(e=t)!==h(e)&&g(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:er(e)),g(t)?(m=A(t,!0),m.x+=t.clientLeft,m.y+=t.clientTop):l&&(m.x=eo(l))),{x:p.left+d.scrollLeft-m.x,y:p.top+d.scrollTop-m.y,width:p.width,height:p.height}),popper:E(y)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach(function(e){return o.modifiersData[e.name]=Object.assign({},e.data)});for(var w=0;w<o.orderedModifiers.length;w++){if(!0===o.reset){o.reset=!1,w=-1;continue}var O=o.orderedModifiers[w],j=O.fn,D=O.options,L=void 0===D?{}:D,R=O.name;"function"==typeof j&&(o=j({state:o,options:L,name:R,instance:c})||o)}}}},update:function(){return r||(r=new Promise(function(e){Promise.resolve().then(function(){r=void 0,e(new Promise(function(e){c.forceUpdate(),e(o)}))})})),r},destroy:function(){u(),f=!0}};if(!em(e,t))return c;function u(){a.forEach(function(e){return e()}),a=[]}return c.setOptions(n).then(function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)}),c}),ev=["enabled","placement","strategy","modifiers"],eg={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>void 0},eb={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{let{reference:t,popper:n}=e.elements;if("removeAttribute"in t){let e=(t.getAttribute("aria-describedby")||"").split(",").filter(e=>e.trim()!==n.id);e.length?t.setAttribute("aria-describedby",e.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;let{popper:n,reference:r}=e.elements,o=null==(t=n.getAttribute("role"))?void 0:t.toLowerCase();if(n.id&&"tooltip"===o&&"setAttribute"in r){let e=r.getAttribute("aria-describedby");if(e&&-1!==e.split(",").indexOf(n.id))return;r.setAttribute("aria-describedby",e?`${e},${n.id}`:n.id)}}},ey=[];var ew=function(e,t,n={}){let{enabled:r=!0,placement:o="bottom",strategy:i="absolute",modifiers:a=ey}=n,s=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,ev),c=(0,f.useRef)(a),u=(0,f.useRef)(),p=(0,f.useCallback)(()=>{var e;null==(e=u.current)||e.update()},[]),m=(0,f.useCallback)(()=>{var e;null==(e=u.current)||e.forceUpdate()},[]),[h,v]=d((0,f.useState)({placement:o,update:p,forceUpdate:m,attributes:{},styles:{popper:{},arrow:{}}})),g=(0,f.useMemo)(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:e})=>{let t={},n={};Object.keys(e.elements).forEach(r=>{t[r]=e.styles[r],n[r]=e.attributes[r]}),v({state:e,styles:t,attributes:n,update:p,forceUpdate:m,placement:e.placement})}}),[p,m,v]),b=(0,f.useMemo)(()=>(l(c.current,a)||(c.current=a),c.current),[a]);return(0,f.useEffect)(()=>{u.current&&r&&u.current.setOptions({placement:o,strategy:i,modifiers:[...b,g,eg]})},[i,o,g,r,b]),(0,f.useEffect)(()=>{if(r&&null!=e&&null!=t)return u.current=eh(e,t,Object.assign({},s,{placement:o,strategy:i,modifiers:[...b,eb,g]})),()=>{null!=u.current&&(u.current.destroy(),u.current=void 0,v(e=>Object.assign({},e,{attributes:{},styles:{popper:{}}})))}},[r,e,t]),h}},1329:function(e,t,n){var r=n(4440),o=n.n(r),i=n(2265),a=n(6376),s=n(7437);let f=i.forwardRef((e,t)=>{let{bsPrefix:n,className:r,as:i="div",...f}=e,c=(0,a.vE)(n,"row"),u=(0,a.pi)(),l=(0,a.zG)(),p="".concat(c,"-cols"),d=[];return u.forEach(e=>{let t;let n=f[e];delete f[e],null!=n&&"object"==typeof n?{cols:t}=n:t=n;let r=e!==l?"-".concat(e):"";null!=t&&d.push("".concat(p).concat(r,"-").concat(t))}),(0,s.jsx)(i,{ref:t,...f,className:o()(r,c,...d)})});f.displayName="Row",t.Z=f}}]);