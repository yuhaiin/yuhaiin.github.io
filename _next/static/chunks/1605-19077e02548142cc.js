(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1605],{9693:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let n=r(306),a=r(5155),d=n._(r(2115)),l=n._(r(6107)),o={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function s(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let i={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class u extends d.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||o[e]||"An unexpected error has occurred";return(0,a.jsxs)("div",{style:i.error,children:[(0,a.jsx)(l.default,{children:(0,a.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,a.jsxs)("div",{style:i.desc,children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,a.jsx)("h1",{className:"next-error-h1",style:i.h1,children:e}):null,(0,a.jsx)("div",{style:i.wrap,children:(0,a.jsxs)("h2",{style:i.h2,children:[this.props.title||e?r:(0,a.jsx)(a.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}u.displayName="ErrorPage",u.getInitialProps=s,u.origGetInitialProps=s,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3003:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(306)._(r(2115)).default.createContext({})},675:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},6107:(e,t,r)=>{"use strict";var n=r(2818);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return y},defaultHead:function(){return f}});let a=r(306),d=r(9955),l=r(5155),o=d._(r(2115)),s=a._(r(1172)),i=r(3003),u=r(1147),c=r(675);function f(e){void 0===e&&(e=!1);let t=[(0,l.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(2363);let m=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return a=>{let d=!0,l=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){l=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?d=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?d=!1:t.add(a.type);break;case"meta":for(let e=0,t=m.length;e<t;e++){let t=m[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?d=!1:r.add(t);else{let e=a.props[t],r=n[t]||new Set;("name"!==t||!l)&&r.has(e)?d=!1:(r.add(e),n[t]=r)}}}}return d}}()).reverse().map((e,t)=>{let a=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:a})})}let y=function(e){let{children:t}=e,r=(0,o.useContext)(i.AmpStateContext),n=(0,o.useContext)(u.HeadManagerContext);return(0,l.jsx)(s.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1172:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=r(2115),a="undefined"==typeof window,d=a?()=>{}:n.useLayoutEffect,l=a?()=>{}:n.useEffect;function o(e){let{headManager:t,reduceComponentsToState:r}=e;function o(){if(t&&t.mountedInstances){let a=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(a,e))}}if(a){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),o()}return d(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),d(()=>(t&&(t._pendingUpdate=o),()=>{t&&(t._pendingUpdate=o)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},5554:(e,t,r)=>{e.exports=r(9693)},2981:(e,t,r)=>{"use strict";r.d(t,{A:()=>_});var n=r(4617),a=r.n(n),d=r(2115),l=r(1653),o=r(5155);let s=d.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:d="div",...s}=e;return n=(0,l.oU)(n,"card-body"),(0,o.jsx)(d,{ref:t,className:a()(r,n),...s})});s.displayName="CardBody";let i=d.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:d="div",...s}=e;return n=(0,l.oU)(n,"card-footer"),(0,o.jsx)(d,{ref:t,className:a()(r,n),...s})});i.displayName="CardFooter";var u=r(7251);let c=d.forwardRef((e,t)=>{let{bsPrefix:r,className:n,as:s="div",...i}=e,c=(0,l.oU)(r,"card-header"),f=(0,d.useMemo)(()=>({cardHeaderBsPrefix:c}),[c]);return(0,o.jsx)(u.A.Provider,{value:f,children:(0,o.jsx)(s,{ref:t,...i,className:a()(n,c)})})});c.displayName="CardHeader";let f=d.forwardRef((e,t)=>{let{bsPrefix:r,className:n,variant:d,as:s="img",...i}=e,u=(0,l.oU)(r,"card-img");return(0,o.jsx)(s,{ref:t,className:a()(d?"".concat(u,"-").concat(d):u,n),...i})});f.displayName="CardImg";let p=d.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:d="div",...s}=e;return n=(0,l.oU)(n,"card-img-overlay"),(0,o.jsx)(d,{ref:t,className:a()(r,n),...s})});p.displayName="CardImgOverlay";let m=d.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:d="a",...s}=e;return n=(0,l.oU)(n,"card-link"),(0,o.jsx)(d,{ref:t,className:a()(r,n),...s})});m.displayName="CardLink";var h=r(7449);let y=(0,h.A)("h6"),b=d.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:d=y,...s}=e;return n=(0,l.oU)(n,"card-subtitle"),(0,o.jsx)(d,{ref:t,className:a()(r,n),...s})});b.displayName="CardSubtitle";let g=d.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:d="p",...s}=e;return n=(0,l.oU)(n,"card-text"),(0,o.jsx)(d,{ref:t,className:a()(r,n),...s})});g.displayName="CardText";let v=(0,h.A)("h5"),x=d.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:d=v,...s}=e;return n=(0,l.oU)(n,"card-title"),(0,o.jsx)(d,{ref:t,className:a()(r,n),...s})});x.displayName="CardTitle";let j=d.forwardRef((e,t)=>{let{bsPrefix:r,className:n,bg:d,text:i,border:u,body:c=!1,children:f,as:p="div",...m}=e,h=(0,l.oU)(r,"card");return(0,o.jsx)(p,{ref:t,...m,className:a()(n,h,d&&"bg-".concat(d),i&&"text-".concat(i),u&&"border-".concat(u)),children:c?(0,o.jsx)(s,{children:f}):f})});j.displayName="Card";let _=Object.assign(j,{Img:f,Title:x,Subtitle:b,Body:s,Link:m,Text:g,Header:c,Footer:i,ImgOverlay:p})},7251:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let n=r(2115).createContext(null);n.displayName="CardHeaderContext";let a=n},7449:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(2115),a=r(4617),d=r.n(a),l=r(5155);let o=e=>n.forwardRef((t,r)=>(0,l.jsx)("div",{...t,ref:r,className:d()(t.className,e)}))},3620:(e,t,r)=>{"use strict";r.d(t,{U:()=>n});let n=(0,r(6788).w)("Ch5nb29nbGUvcHJvdG9idWYvZHVyYXRpb24ucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIqCghEdXJhdGlvbhIPCgdzZWNvbmRzGAEgASgDEg0KBW5hbm9zGAIgASgFQoMBChNjb20uZ29vZ2xlLnByb3RvYnVmQg1EdXJhdGlvblByb3RvUAFaMWdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL2R1cmF0aW9ucGL4AQGiAgNHUEKqAh5Hb29nbGUuUHJvdG9idWYuV2VsbEtub3duVHlwZXNiBnByb3RvMw")}}]);