(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7177],{8063:(e,t,n)=>{Promise.resolve().then(n.bind(n,8319))},348:(e,t,n)=>{"use strict";n.d(t,{DH:()=>o,G_:()=>m,Ow:()=>u,Oz:()=>a,VN:()=>h,X3:()=>c,_s:()=>p,dp:()=>f,h$:()=>v,kP:()=>r,mv:()=>x,oH:()=>l,r3:()=>s,u1:()=>i});let r="",a="https://clients3.google.com/generate_204",s="dns.nextdns.io:853",l=!0,o="http://ip.sb",i="stun.syncthing.net:3478",c="stun.nextcloud.com:443",d=()=>{let e=localStorage.getItem("api_url");r=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(a=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(s=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(l="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(o=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(i=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(c=e)},u=e=>{y("api_url",e)},f=e=>{y("latency_dns_url",e)},m=e=>{y("latency_http_url",e)},x=e=>{y("latency_ipv6",e.toString())},v=e=>{y("latency_ip_url",e)},p=e=>{y("latency_stun_url",e)},h=e=>{y("latency_stun_tcp_url",e)},y=(e,t)=>{""===t?localStorage.removeItem(e):localStorage.setItem(e,t),d()};d()},148:(e,t,n)=>{"use strict";n.d(t,{u:()=>o,y:()=>i});var r=n(5155),a=n(2115),s=n(1757),l=n(491);let o=(0,a.createContext)({Info:e=>{console.log(e)},Error:e=>{console.error(e)}}),i=e=>{let{children:t}=e,[n,i]=(0,a.useState)({value:{},index:0}),c=(e,t)=>i(n=>({value:{...n.value,[n.index]:{text:e,type:t}},index:n.index+1}));return(0,r.jsxs)(o.Provider,{value:{Info:e=>{console.log(e),c(e,"success")},Error:e=>{console.error(e),c(e,"danger")}},children:[(0,r.jsx)(s.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(n.value).map(e=>{let[t,n]=e;return(0,r.jsxs)(l.A,{role:"alert","aria-live":"assertive",show:!0,bg:n.type,onClose:()=>{i(e=>{let n={...e.value};return delete n[t],{...e,value:n}})},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,r.jsxs)(l.A.Header,{children:[(0,r.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,r.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,r.jsx)(l.A.Body,{className:"text-center",children:n.text})]},"toast"+t)})}),t]})}},8319:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Q});var r=n(5155);n(3386),n(5685);var a=n(2115),s=n(4617),l=n.n(s),o=n(1653);let i=a.forwardRef((e,t)=>{let{bsPrefix:n,fluid:a=!1,as:s="div",className:i,...c}=e,d=(0,o.oU)(n,"container");return(0,r.jsx)(s,{ref:t,...c,className:l()(i,a?"".concat(d).concat("string"==typeof a?"-".concat(a):"-fluid"):d)})});i.displayName="Container";var c=n(148),d=n(6658),u=n(7644),f=n(6647);let m=a.forwardRef((e,t)=>{let{bsPrefix:n,className:a,as:s,...i}=e;n=(0,o.oU)(n,"navbar-brand");let c=s||(i.href?"a":"span");return(0,r.jsx)(c,{...i,ref:t,className:l()(a,n)})});m.displayName="NavbarBrand";var x=n(896),v=n(1668);let p=a.forwardRef((e,t)=>{let{children:n,bsPrefix:s,...l}=e;s=(0,o.oU)(s,"navbar-collapse");let i=(0,a.useContext)(v.A);return(0,r.jsx)(x.A,{in:!!(i&&i.expanded),...l,children:(0,r.jsx)("div",{ref:t,className:s,children:n})})});p.displayName="NavbarCollapse";var h=n(3853);let y=a.forwardRef((e,t)=>{let{bsPrefix:n,className:s,children:i,label:c="Toggle navigation",as:d="button",onClick:u,...f}=e;n=(0,o.oU)(n,"navbar-toggler");let{onToggle:m,expanded:x}=(0,a.useContext)(v.A)||{},p=(0,h.A)(e=>{u&&u(e),m&&m()});return"button"===d&&(f.type="button"),(0,r.jsx)(d,{...f,ref:t,onClick:p,"aria-label":c,className:l()(s,n,!x&&"collapsed"),children:i||(0,r.jsx)("span",{className:"".concat(n,"-icon")})})});y.displayName="NavbarToggle";var g=n(1146);let j=new WeakMap,b=(e,t)=>{if(!e||!t)return;let n=j.get(t)||new Map;j.set(t,n);let r=n.get(e);return r||((r=t.matchMedia(e)).refCount=0,n.set(r.media,r)),r},A=function(e){let t=Object.keys(e);function n(e,t){return e===t?t:e?`${e} and ${t}`:t}return function(r,s,l){let o;return"object"==typeof r?(o=r,l=s,s=!0):o={[r]:s=s||!0},function(e,t="undefined"==typeof window?void 0:window){let n=b(e,t),[r,s]=(0,a.useState)(()=>!!n&&n.matches);return(0,g.A)(()=>{let n=b(e,t);if(!n)return s(!1);let r=j.get(t),a=()=>{s(n.matches)};return n.refCount++,n.addListener(a),a(),()=>{n.removeListener(a),n.refCount--,n.refCount<=0&&(null==r||r.delete(n.media)),n=void 0}},[e]),r}((0,a.useMemo)(()=>Object.entries(o).reduce((r,[a,s])=>{if("up"===s||!0===s){let t;r=n(r,("number"==typeof(t=e[a])&&(t=`${t}px`),`(min-width: ${t})`))}if("down"===s||!0===s){let s;r=n(r,(s="number"==typeof(s=e[t[Math.min(t.indexOf(a)+1,t.length-1)]])?`${s-.2}px`:`calc(${s} - 0.2px)`,`(max-width: ${s})`))}return r},""),[JSON.stringify(o)]),l)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});var N=n(9952),w=n(3281);let C=a.forwardRef((e,t)=>{let{className:n,bsPrefix:a,as:s="div",...i}=e;return a=(0,o.oU)(a,"offcanvas-body"),(0,r.jsx)(s,{ref:t,className:l()(n,a),...i})});C.displayName="OffcanvasBody";var E=n(2400),I=n(5998),k=n(4837),_=n(4579);let O={[E.ns]:"show",[E._K]:"show"},R=a.forwardRef((e,t)=>{let{bsPrefix:n,className:s,children:i,in:c=!1,mountOnEnter:d=!1,unmountOnExit:u=!1,appear:f=!1,...m}=e;return n=(0,o.oU)(n,"offcanvas"),(0,r.jsx)(_.A,{ref:t,addEndListener:k.A,in:c,mountOnEnter:d,unmountOnExit:u,appear:f,...m,childRef:(0,I.am)(i),children:(e,t)=>a.cloneElement(i,{...t,className:l()(s,i.props.className,(e===E.ns||e===E.ze)&&"".concat(n,"-toggling"),O[e])})})});R.displayName="OffcanvasToggling";var T=n(7467),S=n(2243);let U=a.forwardRef((e,t)=>{let{bsPrefix:n,className:a,closeLabel:s="Close",closeButton:i=!1,...c}=e;return n=(0,o.oU)(n,"offcanvas-header"),(0,r.jsx)(S.A,{ref:t,...c,className:l()(a,n),closeLabel:s,closeButton:i})});U.displayName="OffcanvasHeader";let K=(0,n(7449).A)("h5"),M=a.forwardRef((e,t)=>{let{className:n,bsPrefix:a,as:s=K,...i}=e;return a=(0,o.oU)(a,"offcanvas-title"),(0,r.jsx)(s,{ref:t,className:l()(n,a),...i})});M.displayName="OffcanvasTitle";var P=n(3876);function H(e){return(0,r.jsx)(R,{...e})}function B(e){return(0,r.jsx)(w.A,{...e})}let L=a.forwardRef((e,t)=>{let{bsPrefix:n,className:s,children:i,"aria-labelledby":c,placement:d="start",responsive:u,show:f=!1,backdrop:m=!0,keyboard:x=!0,scroll:v=!1,onEscapeKeyDown:p,onShow:y,onHide:g,container:j,autoFocus:b=!0,enforceFocus:w=!0,restoreFocus:C=!0,restoreFocusOptions:E,onEntered:I,onExit:k,onExiting:_,onEnter:O,onEntering:R,onExited:S,backdropClassName:U,manager:K,renderStaticNode:M=!1,...L}=e,D=(0,a.useRef)();n=(0,o.oU)(n,"offcanvas");let[F,W]=(0,a.useState)(!1),$=(0,h.A)(g),z=A(u||"xs","up");(0,a.useEffect)(()=>{W(u?f&&!z:f)},[f,u,z]);let G=(0,a.useMemo)(()=>({onHide:$}),[$]),J=(0,a.useCallback)(e=>(0,r.jsx)("div",{...e,className:l()("".concat(n,"-backdrop"),U)}),[U,n]),Y=e=>(0,r.jsx)("div",{...e,...L,className:l()(s,u?"".concat(n,"-").concat(u):n,"".concat(n,"-").concat(d)),"aria-labelledby":c,children:i});return(0,r.jsxs)(r.Fragment,{children:[!F&&(u||M)&&Y({}),(0,r.jsx)(T.A.Provider,{value:G,children:(0,r.jsx)(N.A,{show:F,ref:t,backdrop:m,container:j,keyboard:x,autoFocus:b,enforceFocus:w&&!v,restoreFocus:C,restoreFocusOptions:E,onEscapeKeyDown:p,onShow:y,onHide:$,onEnter:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e&&(e.style.visibility="visible"),null==O||O(e,...n)},onEntering:R,onEntered:I,onExit:k,onExiting:_,onExited:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e&&(e.style.visibility=""),null==S||S(...n)},manager:K||(v?(D.current||(D.current=new P.A({handleContainerOverflow:!1})),D.current):(0,P.R)()),transition:H,backdropTransition:B,renderBackdrop:J,renderDialog:Y})})]})});L.displayName="Offcanvas";let D=Object.assign(L,{Body:C,Header:U,Title:M}),F=a.forwardRef((e,t)=>{let{onHide:n,...s}=e,l=(0,a.useContext)(v.A),o=(0,h.A)(()=>{null==l||null==l.onToggle||l.onToggle(),null==n||n()});return(0,r.jsx)(D,{ref:t,show:!!(null!=l&&l.expanded),...s,renderStaticNode:!0,onHide:o})});F.displayName="NavbarOffcanvas";let W=a.forwardRef((e,t)=>{let{className:n,bsPrefix:a,as:s="span",...i}=e;return a=(0,o.oU)(a,"navbar-text"),(0,r.jsx)(s,{ref:t,className:l()(n,a),...i})});W.displayName="NavbarText";let $=a.forwardRef((e,t)=>{let{bsPrefix:n,expand:s=!0,variant:i="light",bg:c,fixed:d,sticky:m,className:x,as:p="nav",expanded:h,onToggle:y,onSelect:g,collapseOnSelect:j=!1,...b}=(0,f.Zw)(e,{expanded:"onToggle"}),A=(0,o.oU)(n,"navbar"),N=(0,a.useCallback)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];null==g||g(...t),j&&h&&(null==y||y(!1))},[g,j,h,y]);void 0===b.role&&"nav"!==p&&(b.role="navigation");let w="".concat(A,"-expand");"string"==typeof s&&(w="".concat(w,"-").concat(s));let C=(0,a.useMemo)(()=>({onToggle:()=>null==y?void 0:y(!h),bsPrefix:A,expanded:!!h,expand:s}),[A,h,s,y]);return(0,r.jsx)(v.A.Provider,{value:C,children:(0,r.jsx)(u.A.Provider,{value:N,children:(0,r.jsx)(p,{ref:t,...b,className:l()(x,A,s&&w,i&&"".concat(A,"-").concat(i),c&&"bg-".concat(c),m&&"sticky-".concat(m),d&&"fixed-".concat(d))})})})});$.displayName="Navbar";let z=Object.assign($,{Brand:m,Collapse:p,Offcanvas:F,Text:W,Toggle:y});var G=n(3360),J=n(9637),Y=n(5748);let Z=a.forwardRef((e,t)=>{let{id:n,title:a,children:s,bsPrefix:i,className:c,rootCloseEvent:d,menuRole:u,disabled:f,active:m,renderMenuOnMount:x,menuVariant:v,...p}=e,h=(0,o.oU)(void 0,"nav-item");return(0,r.jsxs)(J.A,{ref:t,...p,className:l()(c,h),children:[(0,r.jsx)(J.A.Toggle,{id:n,eventKey:null,active:m,disabled:f,childBsPrefix:i,as:Y.A,children:a}),(0,r.jsx)(J.A.Menu,{role:u,renderOnMount:x,rootCloseEvent:d,variant:v,children:s})]})});Z.displayName="NavDropdown";let V=Object.assign(Z,{Item:J.A.Item,ItemText:J.A.ItemText,Divider:J.A.Divider,Header:J.A.Header});var X=n(348);let q=function(e){let t;let n=(0,d.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(z,{collapseOnSelect:!0,expand:"lg",style:{backdropFilter:"blur(50px)"},className:"shadow-sm",sticky:"top",children:(0,r.jsxs)(i,{fluid:!0,children:[(0,r.jsx)(z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,r.jsx)(z.Collapse,{children:(0,r.jsxs)(G.A,{activeKey:(0,d.usePathname)(),onSelect:(e,t)=>{t.preventDefault(),e&&n.push(e)},children:[(0,r.jsx)(G.A.Item,{children:(0,r.jsx)(G.A.Link,{eventKey:"/",children:"HOME"})}),(0,r.jsx)(G.A.Item,{children:(0,r.jsx)(G.A.Link,{eventKey:"/docs/group/",children:"OUTBOUND"})}),(0,r.jsx)(G.A.Item,{children:(0,r.jsx)(G.A.Link,{eventKey:"/docs/tag/",children:"TAG"})}),(0,r.jsx)(G.A.Item,{children:(0,r.jsx)(G.A.Link,{eventKey:"/docs/subscribe/",children:"SUBSCRIBE"})}),(0,r.jsxs)(V,{title:"CONNECTIONS",active:(0,d.usePathname)().startsWith("/docs/connections/"),children:[(0,r.jsx)(V.Item,{eventKey:"/docs/connections/",children:"Connections"}),(0,r.jsx)(V.Item,{eventKey:"/docs/connections/history",children:"History"}),(0,r.jsx)(V.Item,{eventKey:"/docs/connections/failed",children:"Failed History"})]}),(0,r.jsxs)(V,{title:"BYPASS",active:(0,d.usePathname)().startsWith("/docs/bypass/"),children:[(0,r.jsx)(V.Item,{eventKey:"/docs/bypass/",children:"Config"}),(0,r.jsx)(V.Item,{eventKey:"/docs/bypass/test",children:"Test Route"}),(0,r.jsx)(V.Item,{eventKey:"/docs/bypass/block",children:"Block History"})]}),(0,r.jsxs)(V,{title:"SETTING",active:(t=(0,d.usePathname)()).startsWith("/docs/config/")||t.startsWith("/docs/webui/"),children:[(0,r.jsx)(V.Item,{eventKey:"/docs/config/",children:"Config"}),(0,r.jsx)(V.Item,{eventKey:"/docs/config/inbounds/",children:"Inbound"}),(0,r.jsx)(V.Item,{eventKey:"/docs/config/resolver/",children:"Resolver"}),(0,r.jsx)(V.Item,{eventKey:"/docs/webui/",children:"WebUI"}),(0,r.jsx)(V.Divider,{}),(0,r.jsx)(V.Item,{eventKey:X.kP+"/debug/pprof",children:"Pprof"}),(0,r.jsx)(V.Divider,{}),(0,r.jsx)(V.Item,{eventKey:"/docs/config/about",children:"About"})]})]})})]})}),e.children]})};function Q(e){let{children:t}=e,[n,s]=(0,a.useState)(void 0);return(0,a.useEffect)(()=>{if(!window.matchMedia){s("light");return}let e=window.matchMedia("(prefers-color-scheme: dark)");s(e.matches?"dark":"light"),e.addEventListener("change",e=>{s(e.matches?"dark":"light")})},[]),(0,r.jsxs)("html",{lang:"en","data-bs-theme":n,suppressHydrationWarning:!0,children:[(0,r.jsxs)("head",{children:[(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("title",{children:"Yuhaiin"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/docs/faviconv2.ico"}),(0,r.jsx)("meta",{name:"description",content:"yuhaiin"}),(0,r.jsx)("link",{rel:"apple-touch-icon",href:"/docs/logov2192.png"})]}),(0,r.jsx)("body",{children:n&&(0,r.jsx)(q,{children:(0,r.jsx)(i,{className:"mt-3 mb-3",children:(0,r.jsx)(c.y,{children:t})})})})]})}n(3905)},7251:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let r=n(2115).createContext(null);r.displayName="CardHeaderContext";let a=r},896:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});var r=n(4617),a=n.n(r),s=n(3762),l=n(2115),o=n(2400),i=n(5998),c=n(4837),d=n(4309),u=n(3557),f=n(4579),m=n(5155);let x={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function v(e,t){let n=t["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],r=x[e];return n+parseInt((0,s.A)(t,r[0]),10)+parseInt((0,s.A)(t,r[1]),10)}let p={[o.kp]:"collapse",[o.ze]:"collapsing",[o.ns]:"collapsing",[o._K]:"collapse show"},h=l.forwardRef((e,t)=>{let{onEnter:n,onEntering:r,onEntered:s,onExit:o,onExiting:x,className:h,children:y,dimension:g="height",in:j=!1,timeout:b=300,mountOnEnter:A=!1,unmountOnExit:N=!1,appear:w=!1,getDimensionValue:C=v,...E}=e,I="function"==typeof g?g():g,k=(0,l.useMemo)(()=>(0,d.A)(e=>{e.style[I]="0"},n),[I,n]),_=(0,l.useMemo)(()=>(0,d.A)(e=>{let t="scroll".concat(I[0].toUpperCase()).concat(I.slice(1));e.style[I]="".concat(e[t],"px")},r),[I,r]),O=(0,l.useMemo)(()=>(0,d.A)(e=>{e.style[I]=null},s),[I,s]),R=(0,l.useMemo)(()=>(0,d.A)(e=>{e.style[I]="".concat(C(I,e),"px"),(0,u.A)(e)},o),[o,C,I]),T=(0,l.useMemo)(()=>(0,d.A)(e=>{e.style[I]=null},x),[I,x]);return(0,m.jsx)(f.A,{ref:t,addEndListener:c.A,...E,"aria-expanded":E.role?j:null,onEnter:k,onEntering:_,onEntered:O,onExit:R,onExiting:T,childRef:(0,i.am)(y),in:j,timeout:b,mountOnEnter:A,unmountOnExit:N,appear:w,children:(e,t)=>l.cloneElement(y,{...t,className:a()(h,y.props.className,p[e],"width"===I&&"collapse-horizontal")})})})},3360:(e,t,n)=>{"use strict";n.d(t,{A:()=>v});var r=n(4617),a=n.n(r),s=n(2115),l=n(6647),o=n(9814),i=n(1653),c=n(1668),d=n(7251),u=n(5155);let f=s.forwardRef((e,t)=>{let{className:n,bsPrefix:r,as:s="div",...l}=e;return r=(0,i.oU)(r,"nav-item"),(0,u.jsx)(s,{ref:t,className:a()(n,r),...l})});f.displayName="NavItem";var m=n(5748);let x=s.forwardRef((e,t)=>{let n,r;let{as:f="div",bsPrefix:m,variant:x,fill:v=!1,justify:p=!1,navbar:h,navbarScroll:y,className:g,activeKey:j,...b}=(0,l.Zw)(e,{activeKey:"onSelect"}),A=(0,i.oU)(m,"nav"),N=!1,w=(0,s.useContext)(c.A),C=(0,s.useContext)(d.A);return w?(n=w.bsPrefix,N=null==h||h):C&&({cardHeaderBsPrefix:r}=C),(0,u.jsx)(o.A,{as:f,ref:t,activeKey:j,className:a()(g,{[A]:!N,["".concat(n,"-nav")]:N,["".concat(n,"-nav-scroll")]:N&&y,["".concat(r,"-").concat(x)]:!!r,["".concat(A,"-").concat(x)]:!!x,["".concat(A,"-fill")]:v,["".concat(A,"-justified")]:p}),...b})});x.displayName="Nav";let v=Object.assign(x,{Item:f,Link:m.A})},5748:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var r=n(4617),a=n.n(r),s=n(2115),l=n(9656),o=n(3973),i=n(7644),c=n(1653),d=n(5155);let u=s.forwardRef((e,t)=>{let{bsPrefix:n,className:r,as:s=l.A,active:u,eventKey:f,disabled:m=!1,...x}=e;n=(0,c.oU)(n,"nav-link");let[v,p]=(0,o.M)({key:(0,i.u)(f,x.href),active:u,disabled:m,...x});return(0,d.jsx)(s,{...x,...v,ref:t,disabled:m,className:a()(r,n,m&&"disabled",p.isActive&&"active")})});u.displayName="NavLink";let f=u},1653:(e,t,n)=>{"use strict";n.d(t,{Jm:()=>u,Jy:()=>a,Wz:()=>f,ff:()=>s,gy:()=>d,oU:()=>c});var r=n(2115);n(5155);let a=["xxl","xl","lg","md","sm","xs"],s="xs",l=r.createContext({prefixes:{},breakpoints:a,minBreakpoint:s}),{Consumer:o,Provider:i}=l;function c(e,t){let{prefixes:n}=(0,r.useContext)(l);return e||n[t]||t}function d(){let{breakpoints:e}=(0,r.useContext)(l);return e}function u(){let{minBreakpoint:e}=(0,r.useContext)(l);return e}function f(){let{dir:e}=(0,r.useContext)(l);return"rtl"===e}},491:(e,t,n)=>{"use strict";n.d(t,{A:()=>j});var r=n(2115),a=n(4617),s=n.n(a),l=n(8987);let o=0x80000000-1;var i=n(2400),c=n(3281),d=n(5155);let u={[i.ns]:"showing",[i.ze]:"showing show"},f=r.forwardRef((e,t)=>(0,d.jsx)(c.A,{...e,ref:t,transitionClasses:u}));f.displayName="ToastFade";var m=n(3853),x=n(1653),v=n(169);let p=r.createContext({onClose(){}}),h=r.forwardRef((e,t)=>{let{bsPrefix:n,closeLabel:a="Close",closeVariant:l,closeButton:o=!0,className:i,children:c,...u}=e;n=(0,x.oU)(n,"toast-header");let f=(0,r.useContext)(p),h=(0,m.A)(e=>{null==f||null==f.onClose||f.onClose(e)});return(0,d.jsxs)("div",{ref:t,...u,className:s()(n,i),children:[c,o&&(0,d.jsx)(v.A,{"aria-label":a,variant:l,onClick:h,"data-dismiss":"toast"})]})});h.displayName="ToastHeader";let y=r.forwardRef((e,t)=>{let{className:n,bsPrefix:r,as:a="div",...l}=e;return r=(0,x.oU)(r,"toast-body"),(0,d.jsx)(a,{ref:t,className:s()(n,r),...l})});y.displayName="ToastBody";let g=r.forwardRef((e,t)=>{let{bsPrefix:n,className:a,transition:i=f,show:c=!0,animation:u=!0,delay:m=5e3,autohide:v=!1,onClose:h,onEntered:y,onExit:g,onExiting:j,onEnter:b,onEntering:A,onExited:N,bg:w,...C}=e;n=(0,x.oU)(n,"toast");let E=(0,r.useRef)(m),I=(0,r.useRef)(h);(0,r.useEffect)(()=>{E.current=m,I.current=h},[m,h]);let k=function(){let e=function(){let e=(0,r.useRef)(!0),t=(0,r.useRef)(()=>e.current);return(0,r.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}(),t=(0,r.useRef)();return(0,l.A)(()=>clearTimeout(t.current)),(0,r.useMemo)(()=>{let n=()=>clearTimeout(t.current);return{set:function(r,a=0){e()&&(n(),a<=o?t.current=setTimeout(r,a):function e(t,n,r){let a=r-Date.now();t.current=a<=o?setTimeout(n,a):setTimeout(()=>e(t,n,r),o)}(t,r,Date.now()+a))},clear:n,handleRef:t}},[])}(),_=!!(v&&c),O=(0,r.useCallback)(()=>{_&&(null==I.current||I.current())},[_]);(0,r.useEffect)(()=>{k.set(O,E.current)},[k,O]);let R=(0,r.useMemo)(()=>({onClose:h}),[h]),T=!!(i&&u),S=(0,d.jsx)("div",{...C,ref:t,className:s()(n,a,w&&"bg-".concat(w),!T&&(c?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return(0,d.jsx)(p.Provider,{value:R,children:T&&i?(0,d.jsx)(i,{in:c,onEnter:b,onEntering:A,onEntered:y,onExit:g,onExiting:j,onExited:N,unmountOnExit:!0,children:S}):S})});g.displayName="Toast";let j=Object.assign(g,{Body:y,Header:h})},1757:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var r=n(4617),a=n.n(r),s=n(2115),l=n(1653),o=n(5155);let i={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},c=s.forwardRef((e,t)=>{let{bsPrefix:n,position:r,containerPosition:s,className:c,as:d="div",...u}=e;return n=(0,l.oU)(n,"toast-container"),(0,o.jsx)(d,{ref:t,...u,className:a()(n,r&&i[r],s&&"position-".concat(s),c)})});c.displayName="ToastContainer";let d=c},4309:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(e=>null!=e).reduce((e,t)=>{if("function"!=typeof t)throw Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}},null)}},3905:()=>{},3386:()=>{},5685:()=>{},4617:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=s(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=s(t,n));return t}(n)))}return e}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0!==(n=(function(){return a}).apply(t,[]))&&(e.exports=n)}()}},e=>{var t=t=>e(e.s=t);e.O(0,[9675,740,7992,6306,9818,9637,6536,8441,1517,7358],()=>t(8063)),_N_E=e.O()}]);