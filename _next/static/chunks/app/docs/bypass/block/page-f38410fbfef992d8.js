(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{4355:(e,t,n)=>{Promise.resolve().then(n.bind(n,3878))},3878:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var o=n(5155),c=n(3577),l=n(9678),r=n(8170),s=n(2115),a=n(2963),i=n(4216),d=n(9141),u=n(700),m=n.n(u),b=n(9169),g=n(8927),v=n(6863);let p=(0,c.v)(l.w,{seconds:BigInt(0),nanos:0}),h=function(){var e;let[t,n]=(0,s.useState)("Time"),[c,l]=(0,s.useState)(1),u=e=>e===t?l(-c):n(e),h=e=>e===t?(0,o.jsx)("i",{className:-1===c?"bi bi-sort-up-alt":"bi bi-sort-down-alt"}):(0,o.jsx)(o.Fragment,{});function x(e,t){return e>t?-1*c:1*c}let f=e=>(0,o.jsxs)("th",{className:m().clickable,onClick:()=>u(e),children:[e,h(e)]}),{data:y,error:A,isLoading:w,isValidating:S,mutate:_}=(0,g.mp)(v.XH,v.XH.method.block_history);return A?(0,o.jsx)(b.A,{code:A.code,children:A.msg}):w||void 0===y?(0,o.jsx)(b.A,{}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.A,{variant:"outline-primary",className:"mb-3",onClick:()=>_(),disabled:S||w,children:["Refresh ",(S||w)&&(0,o.jsxs)(o.Fragment,{children:["\xa0",(0,o.jsx)(i.A,{size:"sm",animation:"border"})]})]}),(0,o.jsxs)(d.A,{hover:!0,striped:!0,size:"sm",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[f("Time"),(0,o.jsx)("th",{children:"Net"}),f("Host"),f("Count"),y.dumpProcessEnabled&&f("Proc")]})}),(0,o.jsx)("tbody",{className:"text-break",children:null==y?void 0:null===(e=y.objects)||void 0===e?void 0:e.filter(e=>e.time).sort((e,n)=>{var o,c;return"Host"===t?x(e.host,n.host):"Proc"===t?x(e.process,n.process):"Count"===t?x(e.blockCount,n.blockCount):x((0,r.FP)(null!==(o=e.time)&&void 0!==o?o:p),(0,r.FP)(null!==(c=n.time)&&void 0!==c?c:p))}).map((e,t)=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,r.FP)(e.time).toLocaleString()}),(0,o.jsx)("td",{children:e.protocol}),(0,o.jsx)("td",{children:e.host}),(0,o.jsx)("td",{children:Number(e.blockCount)}),y.dumpProcessEnabled&&(0,o.jsx)("td",{children:e.process})]},"bh-"+t))})]})]})}},348:(e,t,n)=>{"use strict";n.d(t,{DH:()=>s,G_:()=>b,Ow:()=>u,Oz:()=>c,VN:()=>h,X3:()=>i,_s:()=>p,dp:()=>m,h$:()=>v,kP:()=>o,mv:()=>g,oH:()=>r,r3:()=>l,u1:()=>a});let o="",c="https://clients3.google.com/generate_204",l="dns.nextdns.io:853",r=!0,s="http://ip.sb",a="stun.syncthing.net:3478",i="stun.nextcloud.com:443",d=()=>{let e=localStorage.getItem("api_url");o=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(c=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(l=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(r="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(s=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(a=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(i=e)},u=e=>{x("api_url",e)},m=e=>{x("latency_dns_url",e)},b=e=>{x("latency_http_url",e)},g=e=>{x("latency_ipv6",e.toString())},v=e=>{x("latency_ip_url",e)},p=e=>{x("latency_stun_url",e)},h=e=>{x("latency_stun_tcp_url",e)},x=(e,t)=>{""===t?localStorage.removeItem(e):localStorage.setItem(e,t),d()};d()},9169:(e,t,n)=>{"use strict";n.d(t,{$:()=>l,A:()=>r});var o=n(5155),c=n(4216);let l=e=>{let{statusCode:t,title:n,raw:c}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("p",{className:"fw-bold fs-3 text-center",children:[t," | ",(0,o.jsx)("a",{className:"text-reset text-decoration-none fs-6 fw-normal",children:n})]}),c&&(0,o.jsx)("pre",{className:"text-center my-2 text-danger lead",children:c})]})},r=function(e){return(0,o.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(l,{statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,o.jsx)("div",{className:"p2",children:(0,o.jsx)(c.A,{})})]})}},8927:(e,t,n)=>{"use strict";n.d(t,{AD:()=>d,cY:()=>i,kP:()=>u,mp:()=>a,zZ:()=>m});var o=n(950),c=n(7558),l=n(6989),r=n(7021),s=n(348);function a(e,t,n){return(0,r.Ay)(i(e,t),d(e,t),n)}let i=(e,t)=>"/".concat(e.typeName,"/").concat(t.name);function d(e,t,n,r,a){return()=>a?(0,o.o)(t.output,a):fetch("".concat(s.kP).concat(i(e,t)),{method:n||"POST",body:r?(0,c.R)(t.input,r):void 0}).then(async e=>{if(!e.ok)throw{code:e.status,msg:e.statusText,raw:e.text()};return(0,l.Er)(t.output,new Uint8Array(await e.arrayBuffer()))})}async function u(e,t,n){let o=await fetch("".concat(s.kP).concat(i(e,t)),{method:"POST",body:n?(0,c.R)(t.input,n):void 0});return o.ok?{data:(0,l.Er)(t.output,new Uint8Array(await o.arrayBuffer()))}:{error:{code:o.status,msg:await o.text()}}}function m(e,t,n,o){return(r,a)=>{let d,{next:u}=a,m=new URL(""!==s.kP?s.kP:window.location.toString());m.pathname=i(e,t),m.protocol="https:"===m.protocol?"wss:":"ws:";let b=!1,g=()=>{b||(console.log("connecting to: ".concat(m)),(d=new WebSocket(m)).binaryType="arraybuffer",d.addEventListener("open",e=>{console.log("connect to: ".concat(m,", event type: ").concat(e.type)),null==d||d.send((0,c.R)(t.input,n))}),d.addEventListener("message",e=>{let n=(0,l.Er)(t.output,new Uint8Array(e.data));u(null,e=>o(n,e))}),d.addEventListener("error",e=>{let t="websocket have some error";u({msg:t,code:500}),console.log(t,e.type)}),d.addEventListener("close",e=>{console.log("websocket closed, code: "+e.code+", isClosed: ",b),u(null,void 0),b||(console.log("reconnect after 2 seconds"),setTimeout(()=>g(),2e3))}))};return g(),()=>{b=!0,void 0!==d&&(console.log("close: ".concat(r)),d.close(),d=void 0)}}}},2773:(e,t,n)=>{"use strict";n.d(t,{Am:()=>r,Ay:()=>a});var o=n(2115),c=n(5155);let l=["as","disabled"];function r({tagName:e,disabled:t,href:n,target:o,rel:c,role:l,onClick:r,tabIndex:s=0,type:a}){e||(e=null!=n||null!=o||null!=c?"a":"button");let i={tagName:e};if("button"===e)return[{type:a||"button",disabled:t},i];let d=o=>{var c;if(!t&&("a"!==e||(c=n)&&"#"!==c.trim())||o.preventDefault(),t){o.stopPropagation();return}null==r||r(o)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:t?void 0:s,href:n,target:"a"===e?o:void 0,"aria-disabled":t||void 0,rel:"a"===e?c:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},i]}let s=o.forwardRef((e,t)=>{let{as:n,disabled:o}=e,s=function(e,t){if(null==e)return{};var n={};for(var o in e)if(({}).hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}(e,l),[a,{tagName:i}]=r(Object.assign({tagName:n,disabled:o},s));return(0,c.jsx)(i,Object.assign({},s,a,{ref:t}))});s.displayName="Button";let a=s},2963:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var o=n(4617),c=n.n(o),l=n(2115),r=n(2773),s=n(1653),a=n(5155);let i=l.forwardRef((e,t)=>{let{as:n,bsPrefix:o,variant:l="primary",size:i,active:d=!1,disabled:u=!1,className:m,...b}=e,g=(0,s.oU)(o,"btn"),[v,{tagName:p}]=(0,r.Am)({tagName:n,disabled:u,...b});return(0,a.jsx)(p,{...v,...b,ref:t,disabled:u,className:c()(m,g,d&&"active",l&&"".concat(g,"-").concat(l),i&&"".concat(g,"-").concat(i),b.href&&u&&"disabled")})});i.displayName="Button";let d=i},4216:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var o=n(4617),c=n.n(o),l=n(2115),r=n(1653),s=n(5155);let a=l.forwardRef((e,t)=>{let{bsPrefix:n,variant:o,animation:l="border",size:a,as:i="div",className:d,...u}=e;n=(0,r.oU)(n,"spinner");let m="".concat(n,"-").concat(l);return(0,s.jsx)(i,{ref:t,...u,className:c()(d,m,a&&"".concat(m,"-").concat(a),o&&"text-".concat(o))})});a.displayName="Spinner";let i=a},9141:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var o=n(4617),c=n.n(o),l=n(2115),r=n(1653),s=n(5155);let a=l.forwardRef((e,t)=>{let{bsPrefix:n,className:o,striped:l,bordered:a,borderless:i,hover:d,size:u,variant:m,responsive:b,...g}=e,v=(0,r.oU)(n,"table"),p=c()(o,v,m&&"".concat(v,"-").concat(m),u&&"".concat(v,"-").concat(u),l&&"".concat(v,"-").concat("string"==typeof l?"striped-".concat(l):"striped"),a&&"".concat(v,"-bordered"),i&&"".concat(v,"-borderless"),d&&"".concat(v,"-hover")),h=(0,s.jsx)("table",{...g,className:p,ref:t});if(b){let e="".concat(v,"-responsive");return"string"==typeof b&&(e="".concat(e,"-").concat(b)),(0,s.jsx)("div",{className:e,children:h})}return h})},700:e=>{e.exports={clickable:"clickable_clickable__ytaUf"}},9537:(e,t,n)=>{"use strict";function o(e,t,...n){if(0==n.length)return e.enums[t];let c=n.pop();return n.reduce((e,t)=>e.nestedMessages[t],e.messages[t]).nestedEnums[c]}n.d(t,{R:()=>o})},9678:(e,t,n)=>{"use strict";n.d(t,{i:()=>l,w:()=>r});var o=n(6788),c=n(8123);let l=(0,o.w)("Ch9nb29nbGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3RvEg9nb29nbGUucHJvdG9idWYiKwoJVGltZXN0YW1wEg8KB3NlY29uZHMYASABKAMSDQoFbmFub3MYAiABKAVChQEKE2NvbS5nb29nbGUucHJvdG9idWZCDlRpbWVzdGFtcFByb3RvUAFaMmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3RpbWVzdGFtcHBi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),r=(0,c.Z)(l,0)},1936:(e,t,n)=>{"use strict";n.d(t,{Ax:()=>l,g8:()=>r});var o=n(6788),c=n(8123);let l=(0,o.w)("Ch5nb29nbGUvcHJvdG9idWYvd3JhcHBlcnMucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIcCgtEb3VibGVWYWx1ZRINCgV2YWx1ZRgBIAEoASIbCgpGbG9hdFZhbHVlEg0KBXZhbHVlGAEgASgCIhsKCkludDY0VmFsdWUSDQoFdmFsdWUYASABKAMiHAoLVUludDY0VmFsdWUSDQoFdmFsdWUYASABKAQiGwoKSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoBSIcCgtVSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoDSIaCglCb29sVmFsdWUSDQoFdmFsdWUYASABKAgiHAoLU3RyaW5nVmFsdWUSDQoFdmFsdWUYASABKAkiGwoKQnl0ZXNWYWx1ZRINCgV2YWx1ZRgBIAEoDEKDAQoTY29tLmdvb2dsZS5wcm90b2J1ZkINV3JhcHBlcnNQcm90b1ABWjFnb29nbGUuZ29sYW5nLm9yZy9wcm90b2J1Zi90eXBlcy9rbm93bi93cmFwcGVyc3Bi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),r=(0,c.Z)(l,7)},8170:(e,t,n)=>{"use strict";function o(e){return new Date(1e3*Number(e.seconds)+Math.ceil(e.nanos/1e6))}n.d(t,{FP:()=>o})}},e=>{var t=t=>e(e.s=t);e.O(0,[607,100,863,441,517,358],()=>t(4355)),_N_E=e.O()}]);