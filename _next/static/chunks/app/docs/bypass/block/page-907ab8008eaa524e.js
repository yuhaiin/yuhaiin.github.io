(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{4355:(t,e,n)=>{Promise.resolve().then(n.bind(n,3878))},744:(t,e,n)=>{"use strict";n.d(e,{DH:()=>r,G_:()=>m,Ow:()=>u,Oz:()=>l,VN:()=>p,X3:()=>i,_s:()=>h,dp:()=>b,h$:()=>v,kP:()=>o,mv:()=>g,oH:()=>s,r3:()=>c,u1:()=>a});var o="",l="https://clients3.google.com/generate_204",c="dns.nextdns.io:853",s=!0,r="http://ip.sb",a="stun.syncthing.net:3478",i="stun.nextcloud.com:443";let d=()=>{let t=localStorage.getItem("api_url");o=null!==t?t:"",t=localStorage.getItem("remote_bypass"),null!==(t=localStorage.getItem("latency_http_url"))&&(l=t),null!==(t=localStorage.getItem("latency_dns_url"))&&(c=t),null!==(t=localStorage.getItem("latency_ipv6"))&&(s="true"===t),null!==(t=localStorage.getItem("latency_ip_url"))&&(r=t),null!==(t=localStorage.getItem("latency_stun_url"))&&(a=t),null!==(t=localStorage.getItem("latency_stun_tcp_url"))&&(i=t)},u=t=>{y("api_url",t)},b=t=>{y("latency_dns_url",t)},m=t=>{y("latency_http_url",t)},g=t=>{y("latency_ipv6",t.toString())},v=t=>{y("latency_ip_url",t)},h=t=>{y("latency_stun_url",t)},p=t=>{y("latency_stun_tcp_url",t)},y=(t,e)=>{""===e?localStorage.removeItem(t):localStorage.setItem(t,e),d()};d()},3878:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>p});var o=n(5155),l=n(3577),c=n(9678),s=n(8170),r=n(2115),a=n(2963),i=n(9141),d=n(4995),u=n(700),b=n.n(u),m=n(9169),g=n(8927),v=n(6863);let h=(0,l.v)(c.w,{seconds:BigInt(0),nanos:0}),p=function(){var t;let[e,n]=(0,r.useState)("Time"),[l,c]=(0,r.useState)(1),u=t=>t===e?c(-l):n(t),p=t=>t===e?(0,o.jsx)("i",{className:-1===l?"bi bi-sort-up-alt":"bi bi-sort-down-alt"}):(0,o.jsx)(o.Fragment,{}),y=(t,e)=>t>e?-1*l:1*l,x=t=>(0,o.jsxs)("th",{className:b().clickable,onClick:()=>u(t),children:[t,p(t)]}),{data:f,error:A,isLoading:w,mutate:_}=(0,d.Ay)("/bypass/block_history",(0,g.AD)(v.XH.method.block_history));return A?(0,o.jsx)(m.A,{code:A.code,children:A.msg}):w||void 0===f?(0,o.jsx)(m.A,{}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.A,{variant:"outline-primary",className:"mb-3",onClick:()=>_(),children:"Refresh"}),(0,o.jsxs)(i.A,{hover:!0,striped:!0,size:"sm",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[x("Time"),(0,o.jsx)("th",{children:"Net"}),x("Host"),x("Count"),f.dumpProcessEnabled&&x("Proc")]})}),(0,o.jsx)("tbody",{className:"text-break",children:null==f?void 0:null===(t=f.objects)||void 0===t?void 0:t.filter(t=>t.time).sort((t,n)=>{var o,l;return"Host"===e?y(t.host,n.host):"Proc"===e?y(t.process,n.process):"Count"===e?y(t.blockCount,n.blockCount):y((0,s.FP)(null!==(o=t.time)&&void 0!==o?o:h),(0,s.FP)(null!==(l=n.time)&&void 0!==l?l:h))}).map((t,e)=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,s.FP)(t.time).toLocaleString()}),(0,o.jsx)("td",{children:t.protocol}),(0,o.jsx)("td",{children:t.host}),(0,o.jsx)("td",{children:Number(t.blockCount)}),f.dumpProcessEnabled&&(0,o.jsx)("td",{children:t.process})]},"bh-"+e))})]})]})}},9169:(t,e,n)=>{"use strict";n.d(e,{A:()=>r});var o=n(5155),l=n(5554),c=n.n(l),s=n(4216);let r=function(t){return(0,o.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==t.children&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(c(),{className:"p2",statusCode:void 0!==t.code?t.code:500,title:t.children})}),(0,o.jsx)("div",{className:"p2",children:(0,o.jsx)(s.A,{})})]})}},8927:(t,e,n)=>{"use strict";n.d(e,{AD:()=>r,kP:()=>a,zZ:()=>i});var o=n(950),l=n(7558),c=n(6989),s=n(744);function r(t,e,n,r){return a=>r?(0,o.o)(t.output,r):fetch("".concat(s.kP).concat(a),{method:e,body:n?(0,l.R)(t.input,n):void 0}).then(async e=>{if(!e.ok)throw{code:e.status,msg:e.statusText,raw:e.text()};return(0,c.Er)(t.output,new Uint8Array(await e.arrayBuffer()))})}async function a(t,e,n,o){let r=await fetch("".concat(s.kP).concat(e),{method:n,body:o?(0,l.R)(t.input,o):void 0});return r.ok?{data:(0,c.Er)(t.output,new Uint8Array(await r.arrayBuffer()))}:{error:{code:r.status,msg:await r.text()}}}function i(t,e,n){let o,r=!1;return(a,i)=>{let{next:d}=i,u=new URL(""!==s.kP?s.kP:window.location.toString());u.pathname=a,u.protocol="https:"===u.protocol?"wss:":"ws:";let b=()=>{r||(console.log("connecting to: ".concat(u)),(o=new WebSocket(u)).binaryType="arraybuffer",o.addEventListener("open",n=>{console.log("connect to: ".concat(u,", event type: ").concat(n.type)),null==o||o.send((0,l.R)(t.input,e))}),o.addEventListener("message",e=>{let o=(0,c.Er)(t.output,new Uint8Array(e.data));d(null,t=>n(o,t))}),o.addEventListener("error",t=>{let e="websocket have some error";d({msg:e,code:500}),console.log(e,t.type)}),o.addEventListener("close",t=>{console.log("websocket closed, code: "+t.code),d(null,void 0),r||(console.log("reconnect after 1 seconds"),setTimeout(b,1e3))}))};return b(),()=>{r=!0,void 0!==o&&(console.log("close: ".concat(a)),o.close(),o=void 0)}}}},2773:(t,e,n)=>{"use strict";n.d(e,{Am:()=>s,Ay:()=>a});var o=n(2115),l=n(5155);let c=["as","disabled"];function s({tagName:t,disabled:e,href:n,target:o,rel:l,role:c,onClick:s,tabIndex:r=0,type:a}){t||(t=null!=n||null!=o||null!=l?"a":"button");let i={tagName:t};if("button"===t)return[{type:a||"button",disabled:e},i];let d=o=>{var l;if(!e&&("a"!==t||(l=n)&&"#"!==l.trim())||o.preventDefault(),e){o.stopPropagation();return}null==s||s(o)};return"a"===t&&(n||(n="#"),e&&(n=void 0)),[{role:null!=c?c:"button",disabled:void 0,tabIndex:e?void 0:r,href:n,target:"a"===t?o:void 0,"aria-disabled":e||void 0,rel:"a"===t?l:void 0,onClick:d,onKeyDown:t=>{" "===t.key&&(t.preventDefault(),d(t))}},i]}let r=o.forwardRef((t,e)=>{let{as:n,disabled:o}=t,r=function(t,e){if(null==t)return{};var n={};for(var o in t)if(({}).hasOwnProperty.call(t,o)){if(e.indexOf(o)>=0)continue;n[o]=t[o]}return n}(t,c),[a,{tagName:i}]=s(Object.assign({tagName:n,disabled:o},r));return(0,l.jsx)(i,Object.assign({},r,a,{ref:e}))});r.displayName="Button";let a=r},2963:(t,e,n)=>{"use strict";n.d(e,{A:()=>d});var o=n(4617),l=n.n(o),c=n(2115),s=n(2773),r=n(1653),a=n(5155);let i=c.forwardRef((t,e)=>{let{as:n,bsPrefix:o,variant:c="primary",size:i,active:d=!1,disabled:u=!1,className:b,...m}=t,g=(0,r.oU)(o,"btn"),[v,{tagName:h}]=(0,s.Am)({tagName:n,disabled:u,...m});return(0,a.jsx)(h,{...v,...m,ref:e,disabled:u,className:l()(b,g,d&&"active",c&&"".concat(g,"-").concat(c),i&&"".concat(g,"-").concat(i),m.href&&u&&"disabled")})});i.displayName="Button";let d=i},9141:(t,e,n)=>{"use strict";n.d(e,{A:()=>a});var o=n(4617),l=n.n(o),c=n(2115),s=n(1653),r=n(5155);let a=c.forwardRef((t,e)=>{let{bsPrefix:n,className:o,striped:c,bordered:a,borderless:i,hover:d,size:u,variant:b,responsive:m,...g}=t,v=(0,s.oU)(n,"table"),h=l()(o,v,b&&"".concat(v,"-").concat(b),u&&"".concat(v,"-").concat(u),c&&"".concat(v,"-").concat("string"==typeof c?"striped-".concat(c):"striped"),a&&"".concat(v,"-bordered"),i&&"".concat(v,"-borderless"),d&&"".concat(v,"-hover")),p=(0,r.jsx)("table",{...g,className:h,ref:e});if(m){let t="".concat(v,"-responsive");return"string"==typeof m&&(t="".concat(t,"-").concat(m)),(0,r.jsx)("div",{className:t,children:p})}return p})},700:t=>{t.exports={clickable:"clickable_clickable__ytaUf"}},9537:(t,e,n)=>{"use strict";function o(t,e,...n){if(0==n.length)return t.enums[e];let l=n.pop();return n.reduce((t,e)=>t.nestedMessages[e],t.messages[e]).nestedEnums[l]}n.d(e,{R:()=>o})},9678:(t,e,n)=>{"use strict";n.d(e,{i:()=>c,w:()=>s});var o=n(6788),l=n(8123);let c=(0,o.w)("Ch9nb29nbGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3RvEg9nb29nbGUucHJvdG9idWYiKwoJVGltZXN0YW1wEg8KB3NlY29uZHMYASABKAMSDQoFbmFub3MYAiABKAVChQEKE2NvbS5nb29nbGUucHJvdG9idWZCDlRpbWVzdGFtcFByb3RvUAFaMmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3RpbWVzdGFtcHBi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),s=(0,l.Z)(c,0)},1936:(t,e,n)=>{"use strict";n.d(e,{Ax:()=>c,g8:()=>s});var o=n(6788),l=n(8123);let c=(0,o.w)("Ch5nb29nbGUvcHJvdG9idWYvd3JhcHBlcnMucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIcCgtEb3VibGVWYWx1ZRINCgV2YWx1ZRgBIAEoASIbCgpGbG9hdFZhbHVlEg0KBXZhbHVlGAEgASgCIhsKCkludDY0VmFsdWUSDQoFdmFsdWUYASABKAMiHAoLVUludDY0VmFsdWUSDQoFdmFsdWUYASABKAQiGwoKSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoBSIcCgtVSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoDSIaCglCb29sVmFsdWUSDQoFdmFsdWUYASABKAgiHAoLU3RyaW5nVmFsdWUSDQoFdmFsdWUYASABKAkiGwoKQnl0ZXNWYWx1ZRINCgV2YWx1ZRgBIAEoDEKDAQoTY29tLmdvb2dsZS5wcm90b2J1ZkINV3JhcHBlcnNQcm90b1ABWjFnb29nbGUuZ29sYW5nLm9yZy9wcm90b2J1Zi90eXBlcy9rbm93bi93cmFwcGVyc3Bi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),s=(0,l.Z)(c,7)},8170:(t,e,n)=>{"use strict";function o(t){return new Date(1e3*Number(t.seconds)+Math.ceil(t.nanos/1e6))}n.d(e,{FP:()=>o})}},t=>{var e=e=>t(t.s=e);t.O(0,[607,295,375,863,441,517,358],()=>e(4355)),_N_E=t.O()}]);