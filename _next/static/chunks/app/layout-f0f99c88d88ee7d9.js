(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7177],{8063:(e,t,n)=>{Promise.resolve().then(n.bind(n,8319))},348:(e,t,n)=>{"use strict";n.d(t,{DH:()=>o,G_:()=>x,Ow:()=>u,Oz:()=>a,VN:()=>p,X3:()=>c,_s:()=>h,dp:()=>f,h$:()=>m,kP:()=>r,mv:()=>v,oH:()=>l,r3:()=>s,u1:()=>i});let r="",a="https://clients3.google.com/generate_204",s="dns.nextdns.io:853",l=!0,o="http://ip.sb",i="stun.syncthing.net:3478",c="stun.nextcloud.com:443",d=()=>{let e=localStorage.getItem("api_url");r=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(a=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(s=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(l="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(o=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(i=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(c=e)},u=e=>{g("api_url",e)},f=e=>{g("latency_dns_url",e)},x=e=>{g("latency_http_url",e)},v=e=>{g("latency_ipv6",e.toString())},m=e=>{g("latency_ip_url",e)},h=e=>{g("latency_stun_url",e)},p=e=>{g("latency_stun_tcp_url",e)},g=(e,t)=>{""===t?localStorage.removeItem(e):localStorage.setItem(e,t),d()};d()},148:(e,t,n)=>{"use strict";n.d(t,{u:()=>o,y:()=>i});var r=n(5155),a=n(2115),s=n(1757),l=n(491);let o=(0,a.createContext)({Info:e=>{console.log(e)},Error:e=>{console.error(e)}}),i=e=>{let{children:t}=e,[n,i]=(0,a.useState)({value:{},index:0}),c=(e,t)=>i(n=>({value:{...n.value,[n.index]:{text:e,type:t}},index:n.index+1}));return(0,r.jsxs)(o.Provider,{value:{Info:e=>{console.log(e),c(e,"success")},Error:e=>{console.error(e),c(e,"danger")}},children:[(0,r.jsx)(s.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(n.value).map(e=>{let[t,n]=e;return(0,r.jsxs)(l.A,{role:"alert","aria-live":"assertive",show:!0,bg:n.type,onClose:()=>{i(e=>{let n={...e.value};return delete n[t],{...e,value:n}})},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,r.jsxs)(l.A.Header,{children:[(0,r.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,r.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,r.jsx)(l.A.Body,{className:"text-center",children:n.text})]},"toast"+t)})}),t]})}},8319:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Q});var r=n(5155);n(3386),n(5685);var a=n(2115),s=n(4617),l=n.n(s),o=n(1653);let i=a.forwardRef((e,t)=>{let{bsPrefix:n,fluid:a=!1,as:s="div",className:i,...c}=e,d=(0,o.oU)(n,"container");return(0,r.jsx)(s,{ref:t,...c,className:l()(i,a?"".concat(d).concat("string"==typeof a?"-".concat(a):"-fluid"):d)})});i.displayName="Container";var c=n(148),d=n(6658),u=n(7644),f=n(6647);let x=a.forwardRef((e,t)=>{let{bsPrefix:n,className:a,as:s,...i}=e;n=(0,o.oU)(n,"navbar-brand");let c=s||(i.href?"a":"span");return(0,r.jsx)(c,{...i,ref:t,className:l()(a,n)})});x.displayName="NavbarBrand";var v=n(896),m=n(1668);let h=a.forwardRef((e,t)=>{let{children:n,bsPrefix:s,...l}=e;s=(0,o.oU)(s,"navbar-collapse");let i=(0,a.useContext)(m.A);return(0,r.jsx)(v.A,{in:!!(i&&i.expanded),...l,children:(0,r.jsx)("div",{ref:t,className:s,children:n})})});h.displayName="NavbarCollapse";var p=n(3853);let g=a.forwardRef((e,t)=>{let{bsPrefix:n,className:s,children:i,label:c="Toggle navigation",as:d="button",onClick:u,...f}=e;n=(0,o.oU)(n,"navbar-toggler");let{onToggle:x,expanded:v}=(0,a.useContext)(m.A)||{},h=(0,p.A)(e=>{u&&u(e),x&&x()});return"button"===d&&(f.type="button"),(0,r.jsx)(d,{...f,ref:t,onClick:h,"aria-label":c,className:l()(s,n,!v&&"collapsed"),children:i||(0,r.jsx)("span",{className:"".concat(n,"-icon")})})});g.displayName="NavbarToggle";var y=n(1146);let j=new WeakMap,b=(e,t)=>{if(!e||!t)return;let n=j.get(t)||new Map;j.set(t,n);let r=n.get(e);return r||((r=t.matchMedia(e)).refCount=0,n.set(r.media,r)),r},N=function(e){let t=Object.keys(e);function n(e,t){return e===t?t:e?`${e} and ${t}`:t}return function(r,s,l){let o;return"object"==typeof r?(o=r,l=s,s=!0):o={[r]:s=s||!0},function(e,t="undefined"==typeof window?void 0:window){let n=b(e,t),[r,s]=(0,a.useState)(()=>!!n&&n.matches);return(0,y.A)(()=>{let n=b(e,t);if(!n)return s(!1);let r=j.get(t),a=()=>{s(n.matches)};return n.refCount++,n.addListener(a),a(),()=>{n.removeListener(a),n.refCount--,n.refCount<=0&&(null==r||r.delete(n.media)),n=void 0}},[e]),r}((0,a.useMemo)(()=>Object.entries(o).reduce((r,[a,s])=>{if("up"===s||!0===s){let t;r=n(r,("number"==typeof(t=e[a])&&(t=`${t}px`),`(min-width: ${t})`))}if("down"===s||!0===s){let s;r=n(r,(s="number"==typeof(s=e[t[Math.min(t.indexOf(a)+1,t.length-1)]])?`${s-.2}px`:`calc(${s} - 0.2px)`,`(max-width: ${s})`))}return r},""),[JSON.stringify(o)]),l)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});var w=n(9952),A=n(3281);let I=a.forwardRef((e,t)=>{let{className:n,bsPrefix:a,as:s="div",...i}=e;return a=(0,o.oU)(a,"offcanvas-body"),(0,r.jsx)(s,{ref:t,className:l()(n,a),...i})});I.displayName="OffcanvasBody";var _=n(2400),C=n(5998),k=n(4837),O=n(4579);let S={[_.ns]:"show",[_._K]:"show"},E=a.forwardRef((e,t)=>{let{bsPrefix:n,className:s,children:i,in:c=!1,mountOnEnter:d=!1,unmountOnExit:u=!1,appear:f=!1,...x}=e;return n=(0,o.oU)(n,"offcanvas"),(0,r.jsx)(O.A,{ref:t,addEndListener:k.A,in:c,mountOnEnter:d,unmountOnExit:u,appear:f,...x,childRef:(0,C.am)(i),children:(e,t)=>a.cloneElement(i,{...t,className:l()(s,i.props.className,(e===_.ns||e===_.ze)&&"".concat(n,"-toggling"),S[e])})})});E.displayName="OffcanvasToggling";var T=n(7467),K=n(2243);let R=a.forwardRef((e,t)=>{let{bsPrefix:n,className:a,closeLabel:s="Close",closeButton:i=!1,...c}=e;return n=(0,o.oU)(n,"offcanvas-header"),(0,r.jsx)(K.A,{ref:t,...c,className:l()(a,n),closeLabel:s,closeButton:i})});R.displayName="OffcanvasHeader";let P=(0,n(7449).A)("h5"),U=a.forwardRef((e,t)=>{let{className:n,bsPrefix:a,as:s=P,...i}=e;return a=(0,o.oU)(a,"offcanvas-title"),(0,r.jsx)(s,{ref:t,className:l()(n,a),...i})});U.displayName="OffcanvasTitle";var H=n(3876);function B(e){return(0,r.jsx)(E,{...e})}function M(e){return(0,r.jsx)(A.A,{...e})}let D=a.forwardRef((e,t)=>{let{bsPrefix:n,className:s,children:i,"aria-labelledby":c,placement:d="start",responsive:u,show:f=!1,backdrop:x=!0,keyboard:v=!0,scroll:m=!1,onEscapeKeyDown:h,onShow:g,onHide:y,container:j,autoFocus:b=!0,enforceFocus:A=!0,restoreFocus:I=!0,restoreFocusOptions:_,onEntered:C,onExit:k,onExiting:O,onEnter:S,onEntering:E,onExited:K,backdropClassName:R,manager:P,renderStaticNode:U=!1,...D}=e,L=(0,a.useRef)();n=(0,o.oU)(n,"offcanvas");let[F,W]=(0,a.useState)(!1),$=(0,p.A)(y),z=N(u||"xs","up");(0,a.useEffect)(()=>{W(u?f&&!z:f)},[f,u,z]);let G=(0,a.useMemo)(()=>({onHide:$}),[$]),J=(0,a.useCallback)(e=>(0,r.jsx)("div",{...e,className:l()("".concat(n,"-backdrop"),R)}),[R,n]),Y=e=>(0,r.jsx)("div",{...e,...D,className:l()(s,u?"".concat(n,"-").concat(u):n,"".concat(n,"-").concat(d)),"aria-labelledby":c,children:i});return(0,r.jsxs)(r.Fragment,{children:[!F&&(u||U)&&Y({}),(0,r.jsx)(T.A.Provider,{value:G,children:(0,r.jsx)(w.A,{show:F,ref:t,backdrop:x,container:j,keyboard:v,autoFocus:b,enforceFocus:A&&!m,restoreFocus:I,restoreFocusOptions:_,onEscapeKeyDown:h,onShow:g,onHide:$,onEnter:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e&&(e.style.visibility="visible"),null==S||S(e,...n)},onEntering:E,onEntered:C,onExit:k,onExiting:O,onExited:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e&&(e.style.visibility=""),null==K||K(...n)},manager:P||(m?(L.current||(L.current=new H.A({handleContainerOverflow:!1})),L.current):(0,H.R)()),transition:B,backdropTransition:M,renderBackdrop:J,renderDialog:Y})})]})});D.displayName="Offcanvas";let L=Object.assign(D,{Body:I,Header:R,Title:U}),F=a.forwardRef((e,t)=>{let{onHide:n,...s}=e,l=(0,a.useContext)(m.A),o=(0,p.A)(()=>{null==l||null==l.onToggle||l.onToggle(),null==n||n()});return(0,r.jsx)(L,{ref:t,show:!!(null!=l&&l.expanded),...s,renderStaticNode:!0,onHide:o})});F.displayName="NavbarOffcanvas";let W=a.forwardRef((e,t)=>{let{className:n,bsPrefix:a,as:s="span",...i}=e;return a=(0,o.oU)(a,"navbar-text"),(0,r.jsx)(s,{ref:t,className:l()(n,a),...i})});W.displayName="NavbarText";let $=a.forwardRef((e,t)=>{let{bsPrefix:n,expand:s=!0,variant:i="light",bg:c,fixed:d,sticky:x,className:v,as:h="nav",expanded:p,onToggle:g,onSelect:y,collapseOnSelect:j=!1,...b}=(0,f.Zw)(e,{expanded:"onToggle"}),N=(0,o.oU)(n,"navbar"),w=(0,a.useCallback)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];null==y||y(...t),j&&p&&(null==g||g(!1))},[y,j,p,g]);void 0===b.role&&"nav"!==h&&(b.role="navigation");let A="".concat(N,"-expand");"string"==typeof s&&(A="".concat(A,"-").concat(s));let I=(0,a.useMemo)(()=>({onToggle:()=>null==g?void 0:g(!p),bsPrefix:N,expanded:!!p,expand:s}),[N,p,s,g]);return(0,r.jsx)(m.A.Provider,{value:I,children:(0,r.jsx)(u.A.Provider,{value:w,children:(0,r.jsx)(h,{ref:t,...b,className:l()(v,N,s&&A,i&&"".concat(N,"-").concat(i),c&&"bg-".concat(c),x&&"sticky-".concat(x),d&&"fixed-".concat(d))})})})});$.displayName="Navbar";let z=Object.assign($,{Brand:x,Collapse:h,Offcanvas:F,Text:W,Toggle:g});var G=n(3360),J=n(9637),Y=n(5748);let V=a.forwardRef((e,t)=>{let{id:n,title:a,children:s,bsPrefix:i,className:c,rootCloseEvent:d,menuRole:u,disabled:f,active:x,renderMenuOnMount:v,menuVariant:m,...h}=e,p=(0,o.oU)(void 0,"nav-item");return(0,r.jsxs)(J.A,{ref:t,...h,className:l()(c,p),children:[(0,r.jsx)(J.A.Toggle,{id:n,eventKey:null,active:x,disabled:f,childBsPrefix:i,as:Y.A,children:a}),(0,r.jsx)(J.A.Menu,{role:u,renderOnMount:v,rootCloseEvent:d,variant:m,children:s})]})});V.displayName="NavDropdown";let X=Object.assign(V,{Item:J.A.Item,ItemText:J.A.ItemText,Divider:J.A.Divider,Header:J.A.Header});var Z=n(348);let q=function(e){let t;let n=(0,d.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(z,{collapseOnSelect:!0,expand:"lg",style:{backdropFilter:"blur(50px)"},className:"shadow-sm",sticky:"top",children:(0,r.jsxs)(i,{fluid:!0,children:[(0,r.jsx)(z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,r.jsx)(z.Collapse,{children:(0,r.jsxs)(G.A,{activeKey:(0,d.usePathname)(),onSelect:(e,t)=>{t.preventDefault(),e&&n.push(e)},children:[(0,r.jsx)(G.A.Item,{children:(0,r.jsx)(G.A.Link,{eventKey:"/",children:"HOME"})}),(0,r.jsx)(G.A.Item,{children:(0,r.jsx)(G.A.Link,{eventKey:"/docs/group/",children:"OUTBOUND"})}),(0,r.jsx)(G.A.Item,{children:(0,r.jsx)(G.A.Link,{eventKey:"/docs/tag/",children:"TAG"})}),(0,r.jsx)(G.A.Item,{children:(0,r.jsx)(G.A.Link,{eventKey:"/docs/subscribe/",children:"SUBSCRIBE"})}),(0,r.jsxs)(X,{title:"CONNECTIONS",active:(0,d.usePathname)().startsWith("/docs/connections/"),children:[(0,r.jsx)(X.Item,{eventKey:"/docs/connections/",children:"Connections"}),(0,r.jsx)(X.Item,{eventKey:"/docs/connections/history",children:"History"}),(0,r.jsx)(X.Item,{eventKey:"/docs/connections/failed",children:"Failed History"})]}),(0,r.jsxs)(X,{title:"BYPASS",active:(0,d.usePathname)().startsWith("/docs/bypass/"),children:[(0,r.jsx)(X.Item,{eventKey:"/docs/bypass/",children:"Config"}),(0,r.jsx)(X.Item,{eventKey:"/docs/bypass/test",children:"Test Route"}),(0,r.jsx)(X.Item,{eventKey:"/docs/bypass/block",children:"Block History"})]}),(0,r.jsxs)(X,{title:"SETTING",active:(t=(0,d.usePathname)()).startsWith("/docs/config/")||t.startsWith("/docs/webui/"),children:[(0,r.jsx)(X.Item,{eventKey:"/docs/config/",children:"Config"}),(0,r.jsx)(X.Item,{eventKey:"/docs/config/inbounds/",children:"Inbound"}),(0,r.jsx)(X.Item,{eventKey:"/docs/config/resolver/",children:"Resolver"}),(0,r.jsx)(X.Item,{eventKey:"/docs/webui/",children:"WebUI"}),(0,r.jsx)(X.Divider,{}),(0,r.jsx)(X.Item,{eventKey:Z.kP+"/debug/pprof",children:"Pprof"}),(0,r.jsx)(X.Divider,{}),(0,r.jsx)(X.Item,{eventKey:"/docs/config/about",children:"About"})]})]})})]})}),e.children]})};function Q(e){let{children:t}=e,[n,s]=(0,a.useState)(void 0);return(0,a.useEffect)(()=>{if(!window.matchMedia){s("light");return}let e=window.matchMedia("(prefers-color-scheme: dark)");s(e.matches?"dark":"light"),e.addEventListener("change",e=>{s(e.matches?"dark":"light")})},[]),(0,r.jsxs)("html",{lang:"en","data-bs-theme":n,suppressHydrationWarning:!0,children:[(0,r.jsxs)("head",{children:[(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("title",{children:"Yuhaiin"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/docs/faviconv2.ico"}),(0,r.jsx)("meta",{name:"description",content:"yuhaiin"}),(0,r.jsx)("link",{rel:"apple-touch-icon",href:"/docs/logov2192.png"})]}),(0,r.jsx)("body",{children:n&&(0,r.jsx)(q,{children:(0,r.jsx)(i,{className:"mt-3 mb-3",children:(0,r.jsx)(c.y,{children:t})})})})]})}n(3905)},7251:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let r=n(2115).createContext(null);r.displayName="CardHeaderContext";let a=r},1653:(e,t,n)=>{"use strict";n.d(t,{Jm:()=>u,Jy:()=>a,Wz:()=>f,ff:()=>s,gy:()=>d,oU:()=>c});var r=n(2115);n(5155);let a=["xxl","xl","lg","md","sm","xs"],s="xs",l=r.createContext({prefixes:{},breakpoints:a,minBreakpoint:s}),{Consumer:o,Provider:i}=l;function c(e,t){let{prefixes:n}=(0,r.useContext)(l);return e||n[t]||t}function d(){let{breakpoints:e}=(0,r.useContext)(l);return e}function u(){let{minBreakpoint:e}=(0,r.useContext)(l);return e}function f(){let{dir:e}=(0,r.useContext)(l);return"rtl"===e}},3905:()=>{},3386:()=>{},5685:()=>{},4617:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=s(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=s(t,n));return t}(n)))}return e}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0!==(n=(function(){return a}).apply(t,[]))&&(e.exports=n)}()}},e=>{var t=t=>e(e.s=t);e.O(0,[9675,740,7992,6306,9818,9637,4691,7735,8441,1517,7358],()=>t(8063)),_N_E=e.O()}]);