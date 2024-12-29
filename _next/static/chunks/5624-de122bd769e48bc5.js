"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5624],{3614:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(4617),a=r.n(n),o=r(2115),s=r(1653),l=r(5155);let i=o.forwardRef((e,t)=>{let{bsPrefix:r,size:n,vertical:o=!1,className:i,role:c="group",as:u="div",...d}=e,f=(0,s.oU)(r,"btn-group"),m=f;return o&&(m="".concat(f,"-vertical")),(0,l.jsx)(u,{...d,ref:t,role:c,className:a()(i,m,n&&"".concat(f,"-").concat(n))})});i.displayName="ButtonGroup";let c=i},896:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(4617),a=r.n(n),o=r(3762),s=r(2115),l=r(2400),i=r(5998),c=r(4837),u=r(4309),d=r(3557),f=r(4579),m=r(5155);let g={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function p(e,t){let r=t["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],n=g[e];return r+parseInt((0,o.A)(t,n[0]),10)+parseInt((0,o.A)(t,n[1]),10)}let b={[l.kp]:"collapse",[l.ze]:"collapsing",[l.ns]:"collapsing",[l._K]:"collapse show"},y=s.forwardRef((e,t)=>{let{onEnter:r,onEntering:n,onEntered:o,onExit:l,onExiting:g,className:y,children:h,dimension:N="height",in:w=!1,timeout:A=300,mountOnEnter:v=!1,unmountOnExit:E=!1,appear:x=!1,getDimensionValue:$=p,...L}=e,j="function"==typeof N?N():N,R=(0,s.useMemo)(()=>(0,u.A)(e=>{e.style[j]="0"},r),[j,r]),S=(0,s.useMemo)(()=>(0,u.A)(e=>{let t="scroll".concat(j[0].toUpperCase()).concat(j.slice(1));e.style[j]="".concat(e[t],"px")},n),[j,n]),k=(0,s.useMemo)(()=>(0,u.A)(e=>{e.style[j]=null},o),[j,o]),I=(0,s.useMemo)(()=>(0,u.A)(e=>{e.style[j]="".concat($(j,e),"px"),(0,d.A)(e)},l),[l,$,j]),O=(0,s.useMemo)(()=>(0,u.A)(e=>{e.style[j]=null},g),[j,g]);return(0,m.jsx)(f.A,{ref:t,addEndListener:c.A,...L,"aria-expanded":L.role?w:null,onEnter:R,onEntering:S,onEntered:k,onExit:I,onExiting:O,childRef:(0,i.am)(h),in:w,timeout:A,mountOnEnter:v,unmountOnExit:E,appear:x,children:(e,t)=>s.cloneElement(h,{...t,className:a()(y,h.props.className,b[e],"width"===j&&"collapse-horizontal")})})})},8003:(e,t,r)=>{r.d(t,{A:()=>f});var n=r(4617),a=r.n(n),o=r(2115),s=r(1653),l=r(2389),i=r(2471),c=r(5155);let u=o.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:o="span",...l}=e;return n=(0,s.oU)(n,"input-group-text"),(0,c.jsx)(o,{ref:t,className:a()(r,n),...l})});u.displayName="InputGroupText";let d=o.forwardRef((e,t)=>{let{bsPrefix:r,size:n,hasValidation:l,className:u,as:d="div",...f}=e;r=(0,s.oU)(r,"input-group");let m=(0,o.useMemo)(()=>({}),[]);return(0,c.jsx)(i.A.Provider,{value:m,children:(0,c.jsx)(d,{ref:t,...f,className:a()(u,r,n&&"".concat(r,"-").concat(n),l&&"has-validation")})})});d.displayName="InputGroup";let f=Object.assign(d,{Text:u,Radio:e=>(0,c.jsx)(u,{children:(0,c.jsx)(l.A,{type:"radio",...e})}),Checkbox:e=>(0,c.jsx)(u,{children:(0,c.jsx)(l.A,{type:"checkbox",...e})})})},57:(e,t,r)=>{r.d(t,{A:()=>p});var n=r(4617),a=r.n(n),o=r(2115);r(1809);var s=r(6647),l=r(9814),i=r(1653),c=r(3853),u=r(3973),d=r(7644),f=r(5155);let m=o.forwardRef((e,t)=>{let{bsPrefix:r,active:n,disabled:o,eventKey:s,className:l,variant:m,action:g,as:p,...b}=e;r=(0,i.oU)(r,"list-group-item");let[y,h]=(0,u.M)({key:(0,d.u)(s,b.href),active:n,...b}),N=(0,c.A)(e=>{if(o){e.preventDefault(),e.stopPropagation();return}y.onClick(e)});o&&void 0===b.tabIndex&&(b.tabIndex=-1,b["aria-disabled"]=!0);let w=p||(g?b.href?"a":"button":"div");return(0,f.jsx)(w,{ref:t,...b,...y,onClick:N,className:a()(l,r,h.isActive&&"active",o&&"disabled",m&&"".concat(r,"-").concat(m),g&&"".concat(r,"-action"))})});m.displayName="ListGroupItem";let g=o.forwardRef((e,t)=>{let r;let{className:n,bsPrefix:o,variant:c,horizontal:u,numbered:d,as:m="div",...g}=(0,s.Zw)(e,{activeKey:"onSelect"}),p=(0,i.oU)(o,"list-group");return u&&(r=!0===u?"horizontal":"horizontal-".concat(u)),(0,f.jsx)(l.A,{ref:t,...g,as:m,className:a()(n,p,c&&"".concat(p,"-").concat(c),r&&"".concat(p,"-").concat(r),d&&"".concat(p,"-numbered"))})});g.displayName="ListGroup";let p=Object.assign(g,{Item:m})},0:(e,t,r)=>{r.d(t,{A:()=>O});var n,a=r(4617),o=r.n(a),s=r(6930),l=r(7678),i=r(5255),c=r(9221);function u(e){if((!n&&0!==n||e)&&l.A){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),n=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return n}var d=r(2115),f=r(3853),m=r(804),g=r(8987),p=r(2959),b=r(9952),y=r(3876),h=r(3281),N=r(1653),w=r(5155);let A=d.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:a="div",...s}=e;return n=(0,N.oU)(n,"modal-body"),(0,w.jsx)(a,{ref:t,className:o()(r,n),...s})});A.displayName="ModalBody";var v=r(7467);let E=d.forwardRef((e,t)=>{let{bsPrefix:r,className:n,contentClassName:a,centered:s,size:l,fullscreen:i,children:c,scrollable:u,...d}=e;r=(0,N.oU)(r,"modal");let f="".concat(r,"-dialog"),m="string"==typeof i?"".concat(r,"-fullscreen-").concat(i):"".concat(r,"-fullscreen");return(0,w.jsx)("div",{...d,ref:t,className:o()(f,n,l&&"".concat(r,"-").concat(l),s&&"".concat(f,"-centered"),u&&"".concat(f,"-scrollable"),i&&m),children:(0,w.jsx)("div",{className:o()("".concat(r,"-content"),a),children:c})})});E.displayName="ModalDialog";let x=d.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:a="div",...s}=e;return n=(0,N.oU)(n,"modal-footer"),(0,w.jsx)(a,{ref:t,className:o()(r,n),...s})});x.displayName="ModalFooter";var $=r(2243);let L=d.forwardRef((e,t)=>{let{bsPrefix:r,className:n,closeLabel:a="Close",closeButton:s=!1,...l}=e;return r=(0,N.oU)(r,"modal-header"),(0,w.jsx)($.A,{ref:t,...l,className:o()(n,r),closeLabel:a,closeButton:s})});L.displayName="ModalHeader";let j=(0,r(7449).A)("h4"),R=d.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:a=j,...s}=e;return n=(0,N.oU)(n,"modal-title"),(0,w.jsx)(a,{ref:t,className:o()(r,n),...s})});function S(e){return(0,w.jsx)(h.A,{...e,timeout:null})}function k(e){return(0,w.jsx)(h.A,{...e,timeout:null})}R.displayName="ModalTitle";let I=d.forwardRef((e,t)=>{let{bsPrefix:r,className:n,style:a,dialogClassName:h,contentClassName:A,children:x,dialogAs:$=E,"data-bs-theme":L,"aria-labelledby":j,"aria-describedby":R,"aria-label":I,show:O=!1,animation:T=!0,backdrop:U=!0,keyboard:C=!0,onEscapeKeyDown:Z,onShow:V,onHide:F,container:J,autoFocus:M=!0,enforceFocus:W=!0,restoreFocus:B=!0,restoreFocusOptions:G,onEntered:H,onExit:D,onExiting:Y,onEnter:K,onEntering:z,onExited:_,backdropClassName:X,manager:P,...Q}=e,[q,ee]=(0,d.useState)({}),[et,er]=(0,d.useState)(!1),en=(0,d.useRef)(!1),ea=(0,d.useRef)(!1),eo=(0,d.useRef)(null),[es,el]=(0,d.useState)(null),ei=(0,m.A)(t,el),ec=(0,f.A)(F),eu=(0,N.Wz)();r=(0,N.oU)(r,"modal");let ed=(0,d.useMemo)(()=>({onHide:ec}),[ec]);function ef(){return P||(0,y.R)({isRTL:eu})}function em(e){if(!l.A)return;let t=ef().getScrollbarWidth()>0,r=e.scrollHeight>(0,i.A)(e).documentElement.clientHeight;ee({paddingRight:t&&!r?u():void 0,paddingLeft:!t&&r?u():void 0})}let eg=(0,f.A)(()=>{es&&em(es.dialog)});(0,g.A)(()=>{(0,c.A)(window,"resize",eg),null==eo.current||eo.current()});let ep=()=>{en.current=!0},eb=e=>{en.current&&es&&e.target===es.dialog&&(ea.current=!0),en.current=!1},ey=()=>{er(!0),eo.current=(0,p.A)(es.dialog,()=>{er(!1)})},eh=e=>{e.target===e.currentTarget&&ey()},eN=e=>{if("static"===U){eh(e);return}if(ea.current||e.target!==e.currentTarget){ea.current=!1;return}null==F||F()},ew=(0,d.useCallback)(e=>(0,w.jsx)("div",{...e,className:o()("".concat(r,"-backdrop"),X,!T&&"show")}),[T,X,r]),eA={...a,...q};return eA.display="block",(0,w.jsx)(v.A.Provider,{value:ed,children:(0,w.jsx)(b.A,{show:O,ref:ei,backdrop:U,container:J,keyboard:!0,autoFocus:M,enforceFocus:W,restoreFocus:B,restoreFocusOptions:G,onEscapeKeyDown:e=>{C?null==Z||Z(e):(e.preventDefault(),"static"===U&&ey())},onShow:V,onHide:F,onEnter:(e,t)=>{e&&em(e),null==K||K(e,t)},onEntering:(e,t)=>{null==z||z(e,t),(0,s.Ay)(window,"resize",eg)},onEntered:H,onExit:e=>{null==eo.current||eo.current(),null==D||D(e)},onExiting:Y,onExited:e=>{e&&(e.style.display=""),null==_||_(e),(0,c.A)(window,"resize",eg)},manager:ef(),transition:T?S:void 0,backdropTransition:T?k:void 0,renderBackdrop:ew,renderDialog:e=>(0,w.jsx)("div",{role:"dialog",...e,style:eA,className:o()(n,r,et&&"".concat(r,"-static"),!T&&"show"),onClick:U?eN:void 0,onMouseUp:eb,"data-bs-theme":L,"aria-label":I,"aria-labelledby":j,"aria-describedby":R,children:(0,w.jsx)($,{...Q,onMouseDown:ep,className:h,contentClassName:A,children:x})})})})});I.displayName="Modal";let O=Object.assign(I,{Body:A,Header:L,Title:R,Footer:x,Dialog:E,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},6121:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(4617),a=r.n(n),o=r(2115),s=r(1653),l=r(5155);let i=o.forwardRef((e,t)=>{let{bsPrefix:r,className:n,as:o="div",...i}=e,c=(0,s.oU)(r,"row"),u=(0,s.gy)(),d=(0,s.Jm)(),f="".concat(c,"-cols"),m=[];return u.forEach(e=>{let t;let r=i[e];delete i[e],null!=r&&"object"==typeof r?{cols:t}=r:t=r,null!=t&&m.push("".concat(f).concat(e!==d?"-".concat(e):"","-").concat(t))}),(0,l.jsx)(o,{ref:t,...i,className:a()(n,c,...m)})});i.displayName="Row";let c=i},491:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(2115),a=r(4617),o=r.n(a),s=r(8987);let l=0x80000000-1;var i=r(2400),c=r(3281),u=r(5155);let d={[i.ns]:"showing",[i.ze]:"showing show"},f=n.forwardRef((e,t)=>(0,u.jsx)(c.A,{...e,ref:t,transitionClasses:d}));f.displayName="ToastFade";var m=r(3853),g=r(1653),p=r(169);let b=n.createContext({onClose(){}}),y=n.forwardRef((e,t)=>{let{bsPrefix:r,closeLabel:a="Close",closeVariant:s,closeButton:l=!0,className:i,children:c,...d}=e;r=(0,g.oU)(r,"toast-header");let f=(0,n.useContext)(b),y=(0,m.A)(e=>{null==f||null==f.onClose||f.onClose(e)});return(0,u.jsxs)("div",{ref:t,...d,className:o()(r,i),children:[c,l&&(0,u.jsx)(p.A,{"aria-label":a,variant:s,onClick:y,"data-dismiss":"toast"})]})});y.displayName="ToastHeader";let h=n.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:a="div",...s}=e;return n=(0,g.oU)(n,"toast-body"),(0,u.jsx)(a,{ref:t,className:o()(r,n),...s})});h.displayName="ToastBody";let N=n.forwardRef((e,t)=>{let{bsPrefix:r,className:a,transition:i=f,show:c=!0,animation:d=!0,delay:m=5e3,autohide:p=!1,onClose:y,onEntered:h,onExit:N,onExiting:w,onEnter:A,onEntering:v,onExited:E,bg:x,...$}=e;r=(0,g.oU)(r,"toast");let L=(0,n.useRef)(m),j=(0,n.useRef)(y);(0,n.useEffect)(()=>{L.current=m,j.current=y},[m,y]);let R=function(){let e=function(){let e=(0,n.useRef)(!0),t=(0,n.useRef)(()=>e.current);return(0,n.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}(),t=(0,n.useRef)();return(0,s.A)(()=>clearTimeout(t.current)),(0,n.useMemo)(()=>{let r=()=>clearTimeout(t.current);return{set:function(n,a=0){e()&&(r(),a<=l?t.current=setTimeout(n,a):function e(t,r,n){let a=n-Date.now();t.current=a<=l?setTimeout(r,a):setTimeout(()=>e(t,r,n),l)}(t,n,Date.now()+a))},clear:r,handleRef:t}},[])}(),S=!!(p&&c),k=(0,n.useCallback)(()=>{S&&(null==j.current||j.current())},[S]);(0,n.useEffect)(()=>{R.set(k,L.current)},[R,k]);let I=(0,n.useMemo)(()=>({onClose:y}),[y]),O=!!(i&&d),T=(0,u.jsx)("div",{...$,ref:t,className:o()(r,a,x&&"bg-".concat(x),!O&&(c?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return(0,u.jsx)(b.Provider,{value:I,children:O&&i?(0,u.jsx)(i,{in:c,onEnter:A,onEntering:v,onEntered:h,onExit:N,onExiting:w,onExited:E,unmountOnExit:!0,children:T}):T})});N.displayName="Toast";let w=Object.assign(N,{Body:h,Header:y})},1757:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(4617),a=r.n(n),o=r(2115),s=r(1653),l=r(5155);let i={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},c=o.forwardRef((e,t)=>{let{bsPrefix:r,position:n,containerPosition:o,className:c,as:u="div",...d}=e;return r=(0,s.oU)(r,"toast-container"),(0,l.jsx)(u,{ref:t,...d,className:a()(r,n&&i[n],o&&"position-".concat(o),c)})});c.displayName="ToastContainer";let u=c},4309:(e,t,r)=>{r.d(t,{A:()=>n});let n=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(e=>null!=e).reduce((e,t)=>{if("function"!=typeof t)throw Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];e.apply(this,n),t.apply(this,n)}},null)}},4504:(e,t,r)=>{r.d(t,{mj:()=>v});var n,a=r(9513),o=r(4151),s=r(3577),l=r(8628),i=r(3747),c=r(5005),u=r(9287),d=r(5636),f=r(466),m=r(3851),g=r(6788),p=r(8123);let b=(0,g.w)("Chxnb29nbGUvcHJvdG9idWYvc3RydWN0LnByb3RvEg9nb29nbGUucHJvdG9idWYihAEKBlN0cnVjdBIzCgZmaWVsZHMYASADKAsyIy5nb29nbGUucHJvdG9idWYuU3RydWN0LkZpZWxkc0VudHJ5GkUKC0ZpZWxkc0VudHJ5EgsKA2tleRgBIAEoCRIlCgV2YWx1ZRgCIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZToCOAEi6gEKBVZhbHVlEjAKCm51bGxfdmFsdWUYASABKA4yGi5nb29nbGUucHJvdG9idWYuTnVsbFZhbHVlSAASFgoMbnVtYmVyX3ZhbHVlGAIgASgBSAASFgoMc3RyaW5nX3ZhbHVlGAMgASgJSAASFAoKYm9vbF92YWx1ZRgEIAEoCEgAEi8KDHN0cnVjdF92YWx1ZRgFIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3RIABIwCgpsaXN0X3ZhbHVlGAYgASgLMhouZ29vZ2xlLnByb3RvYnVmLkxpc3RWYWx1ZUgAQgYKBGtpbmQiMwoJTGlzdFZhbHVlEiYKBnZhbHVlcxgBIAMoCzIWLmdvb2dsZS5wcm90b2J1Zi5WYWx1ZSobCglOdWxsVmFsdWUSDgoKTlVMTF9WQUxVRRAAQn8KE2NvbS5nb29nbGUucHJvdG9idWZCC1N0cnVjdFByb3RvUAFaL2dvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3N0cnVjdHBi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),y=(0,p.Z)(b,0),h=(0,p.Z)(b,1),N=(0,p.Z)(b,2);!function(e){e[e.NULL_VALUE=0]="NULL_VALUE"}(n||(n={}));var w=r(8519);let A={ignoreUnknownFields:!1};function v(e,t,r){return function(e,t,r){let n=(0,l.E4)(e);try{E(n,t,r?Object.assign(Object.assign({},A),r):A)}catch(e){if((0,i.p)(e))throw Error(`cannot decode ${e.field()} from JSON: ${e.message}`,{cause:e});throw e}return n.message}(e,function(e,t){try{return JSON.parse(e)}catch(r){let e=r instanceof Error?r.message:String(r);throw Error(`cannot decode message ${t} from JSON: ${e}`,{cause:r})}}(t,e.typeName),r)}function E(e,t,r){var n;if(function(e,t,r){if(!e.desc.typeName.startsWith("google.protobuf."))return!1;switch(e.desc.typeName){case"google.protobuf.Any":return function(e,t,r){var n;if(null===t||Array.isArray(t)||"object"!=typeof t)throw Error(`cannot decode message ${e.$typeName} from JSON: expected object but got ${(0,c.$L)(t)}`);if(0==Object.keys(t).length)return;let a=t["@type"];if("string"!=typeof a||""==a)throw Error(`cannot decode message ${e.$typeName} from JSON: "@type" is empty`);let o=a.includes("/")?a.substring(a.lastIndexOf("/")+1):a;if(!o.length)throw Error(`cannot decode message ${e.$typeName} from JSON: "@type" is invalid`);let s=null===(n=r.registry)||void 0===n?void 0:n.getMessage(o);if(!s)throw Error(`cannot decode message ${e.$typeName} from JSON: ${a} is not in the type registry`);let i=(0,l.E4)(s);if(o.startsWith("google.protobuf.")&&Object.prototype.hasOwnProperty.call(t,"value"))E(i,t.value,r);else{let e=Object.assign({},t);delete e["@type"],E(i,e,r)}(0,m.G0)(i.desc,i.message,e)}(e.message,t,r),!0;case"google.protobuf.Timestamp":return function(e,t){if("string"!=typeof t)throw Error(`cannot decode message ${e.$typeName} from JSON: ${(0,c.$L)(t)}`);let r=t.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);if(!r)throw Error(`cannot decode message ${e.$typeName} from JSON: invalid RFC 3339 string`);let n=Date.parse(r[1]+"-"+r[2]+"-"+r[3]+"T"+r[4]+":"+r[5]+":"+r[6]+(r[8]?r[8]:"Z"));if(Number.isNaN(n))throw Error(`cannot decode message ${e.$typeName} from JSON: invalid RFC 3339 string`);if(n<Date.parse("0001-01-01T00:00:00Z")||n>Date.parse("9999-12-31T23:59:59Z"))throw Error(`cannot decode message ${e.$typeName} from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`);e.seconds=o.M.parse(n/1e3),e.nanos=0,r[7]&&(e.nanos=parseInt("1"+r[7]+"0".repeat(9-r[7].length))-1e9)}(e.message,t),!0;case"google.protobuf.Duration":return function(e,t){if("string"!=typeof t)throw Error(`cannot decode message ${e.$typeName} from JSON: ${(0,c.$L)(t)}`);let r=t.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);if(null===r)throw Error(`cannot decode message ${e.$typeName} from JSON: ${(0,c.$L)(t)}`);let n=Number(r[1]);if(n>315576e6||n<-315576e6)throw Error(`cannot decode message ${e.$typeName} from JSON: ${(0,c.$L)(t)}`);if(e.seconds=o.M.parse(n),"string"!=typeof r[2])return;let a=r[2]+"0".repeat(9-r[2].length);e.nanos=parseInt(a),(n<0||Object.is(n,-0))&&(e.nanos=-e.nanos)}(e.message,t),!0;case"google.protobuf.FieldMask":return function(e,t){if("string"!=typeof t)throw Error(`cannot decode message ${e.$typeName} from JSON: ${(0,c.$L)(t)}`);""!==t&&(e.paths=t.split(",").map(function(t){if(t.includes("_"))throw Error(`cannot decode message ${e.$typeName} from JSON: path names must be lowerCamelCase`);let r=t.replace(/[A-Z]/g,e=>"_"+e.toLowerCase());return"_"===r[0]?r.substring(1):r}))}(e.message,t),!0;case"google.protobuf.Struct":return k(e.message,t),!0;case"google.protobuf.Value":return I(e.message,t),!0;case"google.protobuf.ListValue":return O(e.message,t),!0;default:if((0,f.l)(e.desc)){let r=e.desc.fields[0];return null===t?e.clear(r):e.set(r,R(r,t,!0)),!0}return!1}}(e,t,r))return;if(null==t||Array.isArray(t)||"object"!=typeof t)throw Error(`cannot decode ${e.desc} from JSON: ${(0,c.$L)(t)}`);let a=new Map,s=new Map;for(let t of e.desc.fields)s.set(t.name,t).set(t.jsonName,t);for(let[o,l]of Object.entries(t)){let t=s.get(o);if(t){if(t.oneof){if(null===l&&"scalar"==t.fieldKind)continue;let e=a.get(t.oneof);if(void 0!==e)throw new i.b(t.oneof,`oneof set multiple times by ${e.name} and ${t.name}`);a.set(t.oneof,t)}x(e,t,l,r)}else{let t;if(o.startsWith("[")&&o.endsWith("]")&&(t=null===(n=r.registry)||void 0===n?void 0:n.getExtension(o.substring(1,o.length-1)))&&t.extendee.typeName===e.desc.typeName){let[n,a,o]=(0,w.z3)(t);x(n,a,l,r),(0,w.G6)(e.message,t,o())}if(!t&&!r.ignoreUnknownFields)throw Error(`cannot decode ${e.desc} from JSON: key "${o}" is unknown`)}}}function x(e,t,r,n){switch(t.fieldKind){case"scalar":!function(e,t,r){let n=R(t,r,!1);n===j?e.clear(t):e.set(t,n)}(e,t,r);break;case"enum":!function(e,t,r,n){let a=L(t.enum,r,n.ignoreUnknownFields,!1);a===j?e.clear(t):a!==$&&e.set(t,a)}(e,t,r,n);break;case"message":!function(e,t,r,n){if(null===r&&"google.protobuf.Value"!=t.message.typeName){e.clear(t);return}let a=e.isSet(t)?e.get(t):(0,l.E4)(t.message);E(a,r,n),e.set(t,a)}(e,t,r,n);break;case"list":!function(e,t,r){if(null===t)return;let n=e.field();if(!Array.isArray(t))throw new i.b(n,"expected Array, got "+(0,c.$L)(t));for(let a of t){if(null===a)throw new i.b(n,"list item must not be null");switch(n.listKind){case"message":let t=(0,l.E4)(n.message);E(t,a,r),e.add(t);break;case"enum":let o=L(n.enum,a,r.ignoreUnknownFields,!0);o!==$&&e.add(o);break;case"scalar":e.add(R(n,a,!0))}}}(e.get(t),r,n);break;case"map":!function(e,t,r){if(null===t)return;let n=e.field();if("object"!=typeof t||Array.isArray(t))throw new i.b(n,"expected object, got "+(0,c.$L)(t));for(let[o,s]of Object.entries(t)){let t;if(null===s)throw new i.b(n,"map value must not be null");switch(n.mapKind){case"message":let c=(0,l.E4)(n.message);E(c,s,r),t=c;break;case"enum":if((t=L(n.enum,s,r.ignoreUnknownFields,!0))===$)return;break;case"scalar":t=R(n,s,!0)}let u=function(e,t){switch(e){case a.L.BOOL:switch(t){case"true":return!0;case"false":return!1}return t;case a.L.INT32:case a.L.FIXED32:case a.L.UINT32:case a.L.SFIXED32:case a.L.SINT32:return S(t);default:return t}}(n.mapKey,o);e.set(u,t)}}(e.get(t),r,n)}}let $=Symbol();function L(e,t,r,n){if(null===t)return"google.protobuf.NullValue"==e.typeName?0:n?e.values[0].number:j;switch(typeof t){case"number":if(Number.isInteger(t))return t;break;case"string":let a=e.values.find(e=>e.name===t);if(void 0!==a)return a.number;if(r)return $}throw Error(`cannot decode ${e} from JSON: ${(0,c.$L)(t)}`)}let j=Symbol();function R(e,t,r){if(null===t)return r?(0,u.M7)(e.scalar,!1):j;switch(e.scalar){case a.L.DOUBLE:case a.L.FLOAT:if("NaN"===t)return NaN;if("Infinity"===t)return Number.POSITIVE_INFINITY;if("-Infinity"===t)return Number.NEGATIVE_INFINITY;if("number"==typeof t){if(isNaN(t))throw new i.b(e,"unexpected NaN number");if(!isFinite(t))throw new i.b(e,"unexpected infinite number");break}if("string"==typeof t){if(""===t||t.trim().length!==t.length)break;let e=Number(t);if(!isFinite(e))break;return e}break;case a.L.INT32:case a.L.FIXED32:case a.L.SFIXED32:case a.L.SINT32:case a.L.UINT32:return S(t);case a.L.BYTES:if("string"==typeof t){if(""===t)return new Uint8Array(0);try{return(0,d.u)(t)}catch(r){let t=r instanceof Error?r.message:String(r);throw new i.b(e,t)}}}return t}function S(e){if("string"==typeof e){if(""===e||e.trim().length!==e.length)return e;let t=Number(e);return Number.isNaN(t)?e:t}return e}function k(e,t){if("object"!=typeof t||null==t||Array.isArray(t))throw Error(`cannot decode message ${e.$typeName} from JSON ${(0,c.$L)(t)}`);for(let[r,n]of Object.entries(t)){let t=(0,s.v)(h);I(t,n),e.fields[r]=t}}function I(e,t){switch(typeof t){case"number":e.kind={case:"numberValue",value:t};break;case"string":e.kind={case:"stringValue",value:t};break;case"boolean":e.kind={case:"boolValue",value:t};break;case"object":if(null===t)e.kind={case:"nullValue",value:n.NULL_VALUE};else if(Array.isArray(t)){let r=(0,s.v)(N);O(r,t),e.kind={case:"listValue",value:r}}else{let r=(0,s.v)(y);k(r,t),e.kind={case:"structValue",value:r}}break;default:throw Error(`cannot decode message ${e.$typeName} from JSON ${(0,c.$L)(t)}`)}return e}function O(e,t){if(!Array.isArray(t))throw Error(`cannot decode message ${e.$typeName} from JSON ${(0,c.$L)(t)}`);for(let r of t){let t=(0,s.v)(h);I(t,r),e.values.push(t)}}}}]);