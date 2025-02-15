(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6599],{9693:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=n(306),o=n(5155),l=r._(n(2115)),i=r._(n(6107)),d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function s(e){let{res:t,err:n}=e;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}let a={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class u extends l.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,n=this.props.title||d[e]||"An unexpected error has occurred";return(0,o.jsxs)("div",{style:a.error,children:[(0,o.jsx)(i.default,{children:(0,o.jsx)("title",{children:e?e+": "+n:"Application error: a client-side exception has occurred"})}),(0,o.jsxs)("div",{style:a.desc,children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,o.jsx)("h1",{className:"next-error-h1",style:a.h1,children:e}):null,(0,o.jsx)("div",{style:a.wrap,children:(0,o.jsxs)("h2",{style:a.h2,children:[this.props.title||e?n:(0,o.jsx)(o.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}u.displayName="ErrorPage",u.getInitialProps=s,u.origGetInitialProps=s,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3003:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(306)._(n(2115)).default.createContext({})},675:(e,t)=>{"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},6107:(e,t,n)=>{"use strict";var r=n(2818);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return g},defaultHead:function(){return p}});let o=n(306),l=n(9955),i=n(5155),d=l._(n(2115)),s=o._(n(1172)),a=n(3003),u=n(1147),c=n(675);function p(e){void 0===e&&(e=!1);let t=[(0,i.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===d.default.Fragment?e.concat(d.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(2363);let h=["name","httpEquiv","charSet","itemProp"];function b(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(p(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let l=!0,i=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){i=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?l=!1:t.add(o.type);break;case"meta":for(let e=0,t=h.length;e<t;e++){let t=h[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?l=!1:n.add(t);else{let e=o.props[t],n=r[t]||new Set;("name"!==t||!i)&&n.has(e)?l=!1:(n.add(e),r[t]=n)}}}}return l}}()).reverse().map((e,t)=>{let o=e.key||t;if(r.env.__NEXT_OPTIMIZE_FONTS&&!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,d.default.cloneElement(e,t)}return d.default.cloneElement(e,{key:o})})}let g=function(e){let{children:t}=e,n=(0,d.useContext)(a.AmpStateContext),r=(0,d.useContext)(u.HeadManagerContext);return(0,i.jsx)(s.default,{reduceComponentsToState:b,headManager:r,inAmpMode:(0,c.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1172:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let r=n(2115),o="undefined"==typeof window,l=o?()=>{}:r.useLayoutEffect,i=o?()=>{}:r.useEffect;function d(e){let{headManager:t,reduceComponentsToState:n}=e;function d(){if(t&&t.mountedInstances){let o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}if(o){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),d()}return l(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),l(()=>(t&&(t._pendingUpdate=d),()=>{t&&(t._pendingUpdate=d)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},5554:(e,t,n)=>{e.exports=n(9693)},8143:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});var r=n(2115),o=n(1996),l=n.n(o),i=n(9637),d=n(5570),s=n(3381);let a=l().oneOf(["start","end"]),u=l().oneOfType([a,l().shape({sm:a}),l().shape({md:a}),l().shape({lg:a}),l().shape({xl:a}),l().shape({xxl:a}),l().object]);var c=n(5155);let p={id:l().string,href:l().string,onClick:l().func,title:l().node.isRequired,disabled:l().bool,align:u,menuRole:l().string,renderMenuOnMount:l().bool,rootCloseEvent:l().string,menuVariant:l().oneOf(["dark"]),flip:l().bool,bsPrefix:l().string,variant:l().string,size:l().string},f=r.forwardRef((e,t)=>{let{title:n,children:r,bsPrefix:o,rootCloseEvent:l,variant:a,size:u,menuRole:p,renderMenuOnMount:f,disabled:h,href:b,id:g,menuVariant:m,flip:y,...v}=e;return(0,c.jsxs)(i.A,{ref:t,...v,children:[(0,c.jsx)(d.A,{id:g,href:b,size:u,variant:a,disabled:h,childBsPrefix:o,children:n}),(0,c.jsx)(s.A,{role:p,renderOnMount:f,rootCloseEvent:l,variant:m,flip:y,children:r})]})});f.displayName="DropdownButton",f.propTypes=p;let h=f},3620:(e,t,n)=>{"use strict";n.d(t,{U:()=>r});let r=(0,n(7570).w)("Ch5nb29nbGUvcHJvdG9idWYvZHVyYXRpb24ucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIqCghEdXJhdGlvbhIPCgdzZWNvbmRzGAEgASgDEg0KBW5hbm9zGAIgASgFQoMBChNjb20uZ29vZ2xlLnByb3RvYnVmQg1EdXJhdGlvblByb3RvUAFaMWdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL2R1cmF0aW9ucGL4AQGiAgNHUEKqAh5Hb29nbGUuUHJvdG9idWYuV2VsbEtub3duVHlwZXNiBnByb3RvMw")}}]);