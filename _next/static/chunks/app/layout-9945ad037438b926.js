(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6631:function(e,n,t){Promise.resolve().then(t.bind(t,6815))},6756:function(e,n,t){"use strict";t.d(n,{P:function(){return l},t:function(){return o}});var r=t(7437),i=t(2265),s=t(4349),c=t(4051);let l=(0,i.createContext)({Info:e=>{},Error:e=>{}}),o=e=>{let{children:n}=e,[t,o]=(0,i.useState)({value:{},index:0}),a=(e,n)=>o(t=>({value:{...t.value,[t.index]:{text:e,type:n}},index:t.index+1}));return(0,r.jsxs)(l.Provider,{value:{Info:e=>{console.log(e),a(e,"success")},Error:e=>{console.error(e),a(e,"danger")}},children:[(0,r.jsx)(s.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(t.value).map(e=>{let[n,i]=e;return(0,r.jsxs)(c.Z,{role:"alert","aria-live":"assertive",show:!0,bg:i.type,onClose:()=>{let e=t.value;delete e[n],o({...t,value:e}),console.log("close: "+n)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,r.jsxs)(c.Z.Header,{children:[(0,r.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,r.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,r.jsx)(c.Z.Body,{className:"text-center",children:i.text})]},"toast"+n)})}),n]})}},6815:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(7437),i=t(7753),s=t(6871),c=t(7907),l=t(8792);let o=e=>(0,r.jsx)(l.default,{className:"nav-link"+(void 0!==e.active?e.active?" active":"":(0,c.usePathname)()===e.href?" active":""),href:e.href,children:e.children});var a=function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"pt-2 border-bottom shadow-sm",style:{overflowY:"hidden",height:"52px"},children:(0,r.jsx)("div",{style:{overflow:"auto hidden"},children:(0,r.jsxs)(s.Z,{variant:"pills",style:{paddingBottom:"100px",paddingLeft:"10px",flexWrap:"nowrap"},children:[(0,r.jsx)(s.Z.Item,{children:(0,r.jsx)(o,{href:"/",children:"HOME"})}),(0,r.jsx)(s.Z.Item,{children:(0,r.jsx)(o,{href:"/docs/group/",children:"GROUP"})}),(0,r.jsx)(s.Z.Item,{children:(0,r.jsx)(o,{href:"/docs/tag/",children:"TAG"})}),(0,r.jsx)(s.Z.Item,{children:(0,r.jsx)(o,{href:"/docs/subscribe/",children:"SUBSCRIBE"})}),(0,r.jsx)(s.Z.Item,{children:(0,r.jsx)(o,{href:"/docs/connections/",children:"CONNECTIONS"})}),(0,r.jsx)(s.Z.Item,{children:(0,r.jsx)(o,{href:"/docs/config/",children:"CONFIG"})}),(0,r.jsx)(s.Z.Item,{children:(0,r.jsx)(o,{href:"/docs/webui/",children:"WEBUI"})}),(0,r.jsx)(s.Z.Item,{children:(0,r.jsx)("a",{className:"nav-link",href:"/debug/pprof",children:"PPROF"})})]})})}),e.children]})},d=t(6756);function h(e){let{children:n}=e;return(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("head",{children:[(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("title",{children:"Yuhaiin"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/docs/favicon.ico"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000000"}),(0,r.jsx)("meta",{name:"description",content:"yuhaiin"}),(0,r.jsx)("link",{rel:"apple-touch-icon",href:"/docs/logo192.png"})]}),(0,r.jsx)("body",{children:(0,r.jsx)(a,{children:(0,r.jsx)(i.Z,{className:"mt-3",children:(0,r.jsx)(d.t,{children:n})})})})]})}t(1068),t(1251)}},function(e){e.O(0,[271,149,329,321,971,69,744],function(){return e(e.s=6631)}),_N_E=e.O()}]);