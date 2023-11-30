"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[796],{833:function(e,t,r){var n=r(4440),o=r.n(n),l=r(2265),a=r(4497),s=r(7437);let u=l.forwardRef((e,t)=>{let{bsPrefix:r,size:n,vertical:l=!1,className:u,role:c="group",as:d="div",...i}=e,p=(0,a.vE)(r,"btn-group"),f=p;return l&&(f="".concat(p,"-vertical")),(0,s.jsx)(d,{...i,ref:t,role:c,className:o()(u,f,n&&"".concat(p,"-").concat(n))})});u.displayName="ButtonGroup",t.Z=u},479:function(e,t,r){r.d(t,{Z:function(){return et}});var n=r(4440),o=r.n(n),l=r(2265),a=r(1829),s=r(6537),u=r(5739),c=r(5856),d=r(488),i=r(3278),p=r(5113);let f=l.createContext(null);var v=r(2375),w=r(6998),m=r(5703),g=r(5754),h=r(7437);let b=["children"],y=()=>{};function x(e={}){let t=(0,l.useContext)(f),[r,n]=(0,v.Z)(),o=(0,l.useRef)(!1),{flip:a,offset:s,rootCloseEvent:u,fixed:c=!1,placement:d,popperConfig:i={},enableEventListeners:p=!0,usePopper:h=!!t}=e,b=(null==t?void 0:t.show)==null?!!e.show:t.show;b&&!o.current&&(o.current=!0);let{placement:x,setMenu:Z,menuElement:k,toggleElement:C}=t||{},N=(0,w.Z)(C,k,(0,g.ZP)({placement:d||x||"bottom-start",enabled:h,enableEvents:null==p?b:p,offset:s,flip:a,fixed:c,arrowElement:r,popperConfig:i})),j=Object.assign({ref:Z||y,"aria-labelledby":null==C?void 0:C.id},N.attributes.popper,{style:N.styles.popper}),E={show:b,placement:x,hasShown:o.current,toggle:null==t?void 0:t.toggle,popper:h?N:null,arrowProps:h?Object.assign({ref:n},N.attributes.arrow,{style:N.styles.arrow}):{}};return(0,m.Z)(k,e=>{null==t||t.toggle(!1,e)},{clickTrigger:u,disabled:!b}),[j,E]}function Z(e){let{children:t}=e,r=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,b),[n,o]=x(r);return(0,h.jsx)(h.Fragment,{children:t(n,o)})}Z.displayName="DropdownMenu",Z.defaultProps={usePopper:!0};var k=r(4256);let C=e=>{var t;return(null==(t=e.getAttribute("role"))?void 0:t.toLowerCase())==="menu"},N=()=>{};function j(){let e=(0,k.gP)(),{show:t=!1,toggle:r=N,setToggle:n,menuElement:o}=(0,l.useContext)(f)||{},a=(0,l.useCallback)(e=>{r(!t,e)},[t,r]),s={id:e,ref:n||N,onClick:a,"aria-expanded":!!t};return o&&C(o)&&(s["aria-haspopup"]=!0),[s,{show:t,toggle:r}]}function E({children:e}){let[t,r]=j();return(0,h.jsx)(h.Fragment,{children:e(t,r)})}E.displayName="DropdownToggle";var D=r(1066),P=r(6123),T=r(8949),R=r(9861);let O=["eventKey","disabled","onClick","active","as"];function M({key:e,href:t,active:r,disabled:n,onClick:o}){let a=(0,l.useContext)(D.Z),s=(0,l.useContext)(P.Z),{activeKey:u}=s||{},c=(0,D.h)(e,t),d=null==r&&null!=e?(0,D.h)(u)===c:r,i=(0,p.Z)(e=>{n||(null==o||o(e),a&&!e.isPropagationStopped()&&a(c,e))});return[{onClick:i,"aria-disabled":n||void 0,"aria-selected":d,[(0,R.PB)("dropdown-item")]:""},{isActive:d}]}let I=l.forwardRef((e,t)=>{let{eventKey:r,disabled:n,onClick:o,active:l,as:a=T.ZP}=e,s=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,O),[u]=M({key:r,href:s.href,disabled:n,onClick:o,active:l});return(0,h.jsx)(a,Object.assign({},s,{ref:t},u))});I.displayName="DropdownItem";var S=r(4462);function A(){let e=(0,d.Z)(),t=(0,l.useRef)(null),r=(0,l.useCallback)(r=>{t.current=r,e()},[e]);return[t,r]}function _({defaultShow:e,show:t,onSelect:r,onToggle:n,itemSelector:o=`* [${(0,R.PB)("dropdown-item")}]`,focusFirstItemOnShow:d,placement:v="bottom-start",children:w}){let m=(0,S.Z)(),[g,b]=(0,u.$c)(t,e,n),[y,x]=A(),Z=y.current,[k,N]=A(),j=k.current,E=(0,c.Z)(g),P=(0,l.useRef)(null),T=(0,l.useRef)(!1),O=(0,l.useContext)(D.Z),M=(0,l.useCallback)((e,t,r=null==t?void 0:t.type)=>{b(e,{originalEvent:t,source:r})},[b]),I=(0,p.Z)((e,t)=>{null==r||r(e,t),M(!1,t,"select"),t.isPropagationStopped()||null==O||O(e,t)}),_=(0,l.useMemo)(()=>({toggle:M,placement:v,show:g,menuElement:Z,toggleElement:j,setMenu:x,setToggle:N}),[M,v,g,Z,j,x,N]);Z&&E&&!g&&(T.current=Z.contains(Z.ownerDocument.activeElement));let B=(0,p.Z)(()=>{j&&j.focus&&j.focus()}),F=(0,p.Z)(()=>{let e=P.current,t=d;if(null==t&&(t=!!(y.current&&C(y.current))&&"keyboard"),!1===t||"keyboard"===t&&!/^key.+$/.test(e))return;let r=(0,a.Z)(y.current,o)[0];r&&r.focus&&r.focus()});(0,l.useEffect)(()=>{g?F():T.current&&(T.current=!1,B())},[g,T,B,F]),(0,l.useEffect)(()=>{P.current=null});let $=(e,t)=>{if(!y.current)return null;let r=(0,a.Z)(y.current,o),n=r.indexOf(e)+t;return n=Math.max(0,Math.min(n,r.length)),r[n]};return(0,i.Z)((0,l.useCallback)(()=>m.document,[m]),"keydown",e=>{var t,r;let{key:n}=e,o=e.target,l=null==(t=y.current)?void 0:t.contains(o),a=null==(r=k.current)?void 0:r.contains(o),u=/input|textarea/i.test(o.tagName);if(u&&(" "===n||"Escape"!==n&&l||"Escape"===n&&"search"===o.type)||!l&&!a||"Tab"===n&&(!y.current||!g))return;P.current=e.type;let c={originalEvent:e,source:e.type};switch(n){case"ArrowUp":{let t=$(o,-1);t&&t.focus&&t.focus(),e.preventDefault();return}case"ArrowDown":if(e.preventDefault(),g){let e=$(o,1);e&&e.focus&&e.focus()}else b(!0,c);return;case"Tab":(0,s.ZP)(o.ownerDocument,"keyup",e=>{var t;("Tab"!==e.key||e.target)&&null!=(t=y.current)&&t.contains(e.target)||b(!1,c)},{once:!0});break;case"Escape":"Escape"===n&&(e.preventDefault(),e.stopPropagation()),b(!1,c)}}),(0,h.jsx)(D.Z.Provider,{value:I,children:(0,h.jsx)(f.Provider,{value:_,children:w})})}_.displayName="Dropdown",_.Menu=Z,_.Toggle=E,_.Item=I;var B=r(4061);let F=l.createContext({});F.displayName="DropdownContext";var $=r(4497);let H=l.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:l="hr",role:a="separator",...s}=e;return n=(0,$.vE)(n,"dropdown-divider"),(0,h.jsx)(l,{ref:t,className:o()(r,n),role:a,...s})});H.displayName="DropdownDivider";let G=l.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:l="div",role:a="heading",...s}=e;return n=(0,$.vE)(n,"dropdown-header"),(0,h.jsx)(l,{ref:t,className:o()(r,n),role:a,...s})});G.displayName="DropdownHeader";var K=r(5511);let L=l.forwardRef((e,t)=>{let{bsPrefix:r,className:n,eventKey:l,disabled:a=!1,onClick:s,active:u,as:c=K.Z,...d}=e,i=(0,$.vE)(r,"dropdown-item"),[p,f]=M({key:l,href:d.href,disabled:a,onClick:s,active:u});return(0,h.jsx)(c,{...d,...p,ref:t,className:o()(n,i,f.isActive&&"active",a&&"disabled")})});L.displayName="DropdownItem";let U=l.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:l="span",...a}=e;return n=(0,$.vE)(n,"dropdown-item-text"),(0,h.jsx)(l,{ref:t,className:o()(r,n),...a})});U.displayName="DropdownItemText";var q=r(7880),z=r(1271);r(267);var J=r(7231),Q=r(1808);function V(e,t,r){let n=e?r?"bottom-start":"bottom-end":r?"bottom-end":"bottom-start";return"up"===t?n=e?r?"top-start":"top-end":r?"top-end":"top-start":"end"===t?n=e?r?"left-end":"right-end":r?"left-start":"right-start":"start"===t?n=e?r?"right-end":"left-end":r?"right-start":"left-start":"down-centered"===t?n="bottom":"up-centered"===t&&(n="top"),n}r(5187);let W=l.forwardRef((e,t)=>{let{bsPrefix:r,className:n,align:a,rootCloseEvent:s,flip:u=!0,show:c,renderOnMount:d,as:i="div",popperConfig:p,variant:f,...v}=e,w=!1,m=(0,l.useContext)(Q.Z),g=(0,$.vE)(r,"dropdown-menu"),{align:b,drop:y,isRTL:Z}=(0,l.useContext)(F);a=a||b;let k=(0,l.useContext)(J.Z),C=[];if(a){if("object"==typeof a){let e=Object.keys(a);if(e.length){let t=e[0],r=a[t];w="start"===r,C.push("".concat(g,"-").concat(t,"-").concat(r))}}else"end"===a&&(w=!0)}let N=V(w,y,Z),[j,{hasShown:E,popper:D,show:P,toggle:T}]=x({flip:u,rootCloseEvent:s,show:c,usePopper:!m&&0===C.length,offset:[0,2],popperConfig:p,placement:N});if(j.ref=(0,z.Z)(t,j.ref),(0,q.Z)(()=>{P&&(null==D||D.update())},[P]),!E&&!d&&!k)return null;"string"!=typeof i&&(j.show=P,j.close=()=>null==T?void 0:T(!1),j.align=a);let R=v.style;return null!=D&&D.placement&&(R={...v.style,...j.style},v["x-placement"]=D.placement),(0,h.jsx)(i,{...v,...j,style:R,...(C.length||m)&&{"data-bs-popper":"static"},className:o()(n,g,P&&"show",w&&"".concat(g,"-end"),f&&"".concat(g,"-").concat(f),...C)})});W.displayName="DropdownMenu";var X=r(8490);let Y=l.forwardRef((e,t)=>{let{bsPrefix:r,split:n,className:a,childBsPrefix:s,as:u=X.Z,...c}=e,d=(0,$.vE)(r,"dropdown-toggle"),i=(0,l.useContext)(f);void 0!==s&&(c.bsPrefix=s);let[p]=j();return p.ref=(0,z.Z)(p.ref,t),(0,h.jsx)(u,{className:o()(a,d,n&&"".concat(d,"-split"),(null==i?void 0:i.show)&&"show"),...p,...c})});Y.displayName="DropdownToggle";let ee=l.forwardRef((e,t)=>{let{bsPrefix:r,drop:n="down",show:a,className:s,align:u="start",onSelect:c,onToggle:d,focusFirstItemOnShow:i,as:f="div",navbar:v,autoClose:w=!0,...m}=(0,B.Ch)(e,{show:"onToggle"}),g=(0,l.useContext)(J.Z),b=(0,$.vE)(r,"dropdown"),y=(0,$.SC)(),x=e=>!1===w?"click"===e:"inside"===w?"rootClose"!==e:"outside"!==w||"select"!==e,Z=(0,p.Z)((e,t)=>{t.originalEvent.currentTarget===document&&("keydown"!==t.source||"Escape"===t.originalEvent.key)&&(t.source="rootClose"),x(t.source)&&(null==d||d(e,t))}),k=V("end"===u,n,y),C=(0,l.useMemo)(()=>({align:u,drop:n,isRTL:y}),[u,n,y]);return(0,h.jsx)(F.Provider,{value:C,children:(0,h.jsx)(_,{placement:k,show:a,onSelect:c,onToggle:Z,focusFirstItemOnShow:i,itemSelector:".".concat(b,"-item:not(.disabled):not(:disabled)"),children:g?m.children:(0,h.jsx)(f,{...m,ref:t,className:o()(s,a&&"show",{down:b,"down-centered":"".concat(b,"-center"),up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"}[n])})})})});ee.displayName="Dropdown";var et=Object.assign(ee,{Toggle:Y,Menu:W,Item:L,ItemText:U,Divider:H,Header:G})}}]);