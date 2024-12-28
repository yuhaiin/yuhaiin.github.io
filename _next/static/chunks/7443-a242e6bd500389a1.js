(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7443],{8987:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(2115);function o(e){let t=function(e){let t=(0,r.useRef)(e);return t.current=e,t}(e);(0,r.useEffect)(()=>()=>t.current(),[])}},9693:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=n(306),o=n(5155),l=r._(n(2115)),a=r._(n(6107)),s={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function i(e){let{res:t,err:n}=e;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}let d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class u extends l.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,n=this.props.title||s[e]||"An unexpected error has occurred";return(0,o.jsxs)("div",{style:d.error,children:[(0,o.jsx)(a.default,{children:(0,o.jsx)("title",{children:e?e+": "+n:"Application error: a client-side exception has occurred"})}),(0,o.jsxs)("div",{style:d.desc,children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,o.jsx)("h1",{className:"next-error-h1",style:d.h1,children:e}):null,(0,o.jsx)("div",{style:d.wrap,children:(0,o.jsxs)("h2",{style:d.h2,children:[this.props.title||e?n:(0,o.jsx)(o.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}u.displayName="ErrorPage",u.getInitialProps=i,u.origGetInitialProps=i,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3003:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(306)._(n(2115)).default.createContext({})},675:(e,t)=>{"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},6107:(e,t,n)=>{"use strict";var r=n(2818);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return h},defaultHead:function(){return f}});let o=n(306),l=n(9955),a=n(5155),s=l._(n(2115)),i=o._(n(1172)),d=n(3003),u=n(1147),c=n(675);function f(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(2363);let m=["name","httpEquiv","charSet","itemProp"];function b(e,t){let{inAmpMode:n}=t;return e.reduce(p,[]).reverse().concat(f(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let l=!0,a=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){a=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?l=!1:t.add(o.type);break;case"meta":for(let e=0,t=m.length;e<t;e++){let t=m[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?l=!1:n.add(t);else{let e=o.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?l=!1:(n.add(e),r[t]=n)}}}}return l}}()).reverse().map((e,t)=>{let o=e.key||t;if(r.env.__NEXT_OPTIMIZE_FONTS&&!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,s.default.cloneElement(e,t)}return s.default.cloneElement(e,{key:o})})}let h=function(e){let{children:t}=e,n=(0,s.useContext)(d.AmpStateContext),r=(0,s.useContext)(u.HeadManagerContext);return(0,a.jsx)(i.default,{reduceComponentsToState:b,headManager:r,inAmpMode:(0,c.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1172:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let r=n(2115),o="undefined"==typeof window,l=o?()=>{}:r.useLayoutEffect,a=o?()=>{}:r.useEffect;function s(e){let{headManager:t,reduceComponentsToState:n}=e;function s(){if(t&&t.mountedInstances){let o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}if(o){var i;null==t||null==(i=t.mountedInstances)||i.add(e.children),s()}return l(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),l(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},5554:(e,t,n)=>{e.exports=n(9693)},3614:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var r=n(4617),o=n.n(r),l=n(2115),a=n(1653),s=n(5155);let i=l.forwardRef((e,t)=>{let{bsPrefix:n,size:r,vertical:l=!1,className:i,role:d="group",as:u="div",...c}=e,f=(0,a.oU)(n,"btn-group"),p=f;return l&&(p="".concat(f,"-vertical")),(0,s.jsx)(u,{...c,ref:t,role:d,className:o()(i,p,r&&"".concat(f,"-").concat(r))})});i.displayName="ButtonGroup";let d=i},169:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(1996),o=n.n(r),l=n(2115),a=n(4617),s=n.n(a),i=n(5155);let d={"aria-label":o().string,onClick:o().func,variant:o().oneOf(["white"])},u=l.forwardRef((e,t)=>{let{className:n,variant:r,"aria-label":o="Close",...l}=e;return(0,i.jsx)("button",{ref:t,type:"button",className:s()("btn-close",r&&"btn-close-".concat(r),n),"aria-label":o,...l})});u.displayName="CloseButton",u.propTypes=d;let c=u},8143:(e,t,n)=>{"use strict";n.d(t,{A:()=>m});var r=n(2115),o=n(1996),l=n.n(o),a=n(9637),s=n(5570),i=n(3381);let d=l().oneOf(["start","end"]),u=l().oneOfType([d,l().shape({sm:d}),l().shape({md:d}),l().shape({lg:d}),l().shape({xl:d}),l().shape({xxl:d}),l().object]);var c=n(5155);let f={id:l().string,href:l().string,onClick:l().func,title:l().node.isRequired,disabled:l().bool,align:u,menuRole:l().string,renderMenuOnMount:l().bool,rootCloseEvent:l().string,menuVariant:l().oneOf(["dark"]),flip:l().bool,bsPrefix:l().string,variant:l().string,size:l().string},p=r.forwardRef((e,t)=>{let{title:n,children:r,bsPrefix:o,rootCloseEvent:l,variant:d,size:u,menuRole:f,renderMenuOnMount:p,disabled:m,href:b,id:h,menuVariant:g,flip:y,...v}=e;return(0,c.jsxs)(a.A,{ref:t,...v,children:[(0,c.jsx)(s.A,{id:h,href:b,size:u,variant:d,disabled:m,childBsPrefix:o,children:n}),(0,c.jsx)(i.A,{role:f,renderOnMount:p,rootCloseEvent:l,variant:g,flip:y,children:r})]})});p.displayName="DropdownButton",p.propTypes=f;let m=p},3281:(e,t,n)=>{"use strict";n.d(t,{A:()=>m});var r=n(4617),o=n.n(r),l=n(2115),a=n(2400),s=n(5998),i=n(4837),d=n(3557),u=n(4579),c=n(5155);let f={[a.ns]:"show",[a._K]:"show"},p=l.forwardRef((e,t)=>{let{className:n,children:r,transitionClasses:a={},onEnter:p,...m}=e,b={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...m},h=(0,l.useCallback)((e,t)=>{(0,d.A)(e),null==p||p(e,t)},[p]);return(0,c.jsx)(u.A,{ref:t,addEndListener:i.A,...b,onEnter:h,childRef:(0,s.am)(r),children:(e,t)=>l.cloneElement(r,{...t,className:o()("fade",n,r.props.className,f[e],a[e])})})});p.displayName="Fade";let m=p},6121:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var r=n(4617),o=n.n(r),l=n(2115),a=n(1653),s=n(5155);let i=l.forwardRef((e,t)=>{let{bsPrefix:n,className:r,as:l="div",...i}=e,d=(0,a.oU)(n,"row"),u=(0,a.gy)(),c=(0,a.Jm)(),f="".concat(d,"-cols"),p=[];return u.forEach(e=>{let t;let n=i[e];delete i[e],null!=n&&"object"==typeof n?{cols:t}=n:t=n,null!=t&&p.push("".concat(f).concat(e!==c?"-".concat(e):"","-").concat(t))}),(0,s.jsx)(l,{ref:t,...i,className:o()(r,d,...p)})});i.displayName="Row";let d=i},491:(e,t,n)=>{"use strict";n.d(t,{A:()=>x});var r=n(2115),o=n(4617),l=n.n(o),a=n(8987);let s=0x80000000-1;var i=n(2400),d=n(3281),u=n(5155);let c={[i.ns]:"showing",[i.ze]:"showing show"},f=r.forwardRef((e,t)=>(0,u.jsx)(d.A,{...e,ref:t,transitionClasses:c}));f.displayName="ToastFade";var p=n(3853),m=n(1653),b=n(169);let h=r.createContext({onClose(){}}),g=r.forwardRef((e,t)=>{let{bsPrefix:n,closeLabel:o="Close",closeVariant:a,closeButton:s=!0,className:i,children:d,...c}=e;n=(0,m.oU)(n,"toast-header");let f=(0,r.useContext)(h),g=(0,p.A)(e=>{null==f||null==f.onClose||f.onClose(e)});return(0,u.jsxs)("div",{ref:t,...c,className:l()(n,i),children:[d,s&&(0,u.jsx)(b.A,{"aria-label":o,variant:a,onClick:g,"data-dismiss":"toast"})]})});g.displayName="ToastHeader";let y=r.forwardRef((e,t)=>{let{className:n,bsPrefix:r,as:o="div",...a}=e;return r=(0,m.oU)(r,"toast-body"),(0,u.jsx)(o,{ref:t,className:l()(n,r),...a})});y.displayName="ToastBody";let v=r.forwardRef((e,t)=>{let{bsPrefix:n,className:o,transition:i=f,show:d=!0,animation:c=!0,delay:p=5e3,autohide:b=!1,onClose:g,onEntered:y,onExit:v,onExiting:x,onEnter:A,onEntering:w,onExited:C,bg:j,...E}=e;n=(0,m.oU)(n,"toast");let R=(0,r.useRef)(p),_=(0,r.useRef)(g);(0,r.useEffect)(()=>{R.current=p,_.current=g},[p,g]);let S=function(){let e=function(){let e=(0,r.useRef)(!0),t=(0,r.useRef)(()=>e.current);return(0,r.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}(),t=(0,r.useRef)();return(0,a.A)(()=>clearTimeout(t.current)),(0,r.useMemo)(()=>{let n=()=>clearTimeout(t.current);return{set:function(r,o=0){e()&&(n(),o<=s?t.current=setTimeout(r,o):function e(t,n,r){let o=r-Date.now();t.current=o<=s?setTimeout(n,o):setTimeout(()=>e(t,n,r),s)}(t,r,Date.now()+o))},clear:n,handleRef:t}},[])}(),N=!!(b&&d),I=(0,r.useCallback)(()=>{N&&(null==_.current||_.current())},[N]);(0,r.useEffect)(()=>{S.set(I,R.current)},[S,I]);let W=(0,r.useMemo)(()=>({onClose:g}),[g]),U=!!(i&&c),B=(0,u.jsx)("div",{...E,ref:t,className:l()(n,o,j&&"bg-".concat(j),!U&&(d?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return(0,u.jsx)(h.Provider,{value:W,children:U&&i?(0,u.jsx)(i,{in:d,onEnter:A,onEntering:w,onEntered:y,onExit:v,onExiting:x,onExited:C,unmountOnExit:!0,children:B}):B})});v.displayName="Toast";let x=Object.assign(v,{Body:y,Header:g})},1757:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var r=n(4617),o=n.n(r),l=n(2115),a=n(1653),s=n(5155);let i={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},d=l.forwardRef((e,t)=>{let{bsPrefix:n,position:r,containerPosition:l,className:d,as:u="div",...c}=e;return n=(0,a.oU)(n,"toast-container"),(0,s.jsx)(u,{ref:t,...c,className:o()(n,r&&i[r],l&&"position-".concat(l),d)})});d.displayName="ToastContainer";let u=d},3620:(e,t,n)=>{"use strict";n.d(t,{U:()=>r});let r=(0,n(6788).w)("Ch5nb29nbGUvcHJvdG9idWYvZHVyYXRpb24ucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIqCghEdXJhdGlvbhIPCgdzZWNvbmRzGAEgASgDEg0KBW5hbm9zGAIgASgFQoMBChNjb20uZ29vZ2xlLnByb3RvYnVmQg1EdXJhdGlvblByb3RvUAFaMWdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL2R1cmF0aW9ucGL4AQGiAgNHUEKqAh5Hb29nbGUuUHJvdG9idWYuV2VsbEtub3duVHlwZXNiBnByb3RvMw")},1936:(e,t,n)=>{"use strict";n.d(t,{Ax:()=>l,g8:()=>a});var r=n(6788),o=n(8123);let l=(0,r.w)("Ch5nb29nbGUvcHJvdG9idWYvd3JhcHBlcnMucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIcCgtEb3VibGVWYWx1ZRINCgV2YWx1ZRgBIAEoASIbCgpGbG9hdFZhbHVlEg0KBXZhbHVlGAEgASgCIhsKCkludDY0VmFsdWUSDQoFdmFsdWUYASABKAMiHAoLVUludDY0VmFsdWUSDQoFdmFsdWUYASABKAQiGwoKSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoBSIcCgtVSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoDSIaCglCb29sVmFsdWUSDQoFdmFsdWUYASABKAgiHAoLU3RyaW5nVmFsdWUSDQoFdmFsdWUYASABKAkiGwoKQnl0ZXNWYWx1ZRINCgV2YWx1ZRgBIAEoDEKDAQoTY29tLmdvb2dsZS5wcm90b2J1ZkINV3JhcHBlcnNQcm90b1ABWjFnb29nbGUuZ29sYW5nLm9yZy9wcm90b2J1Zi90eXBlcy9rbm93bi93cmFwcGVyc3Bi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),a=(0,o.Z)(l,7)}}]);