(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1],{6781:(e,t,n)=>{Promise.resolve().then(n.bind(n,1759))},744:(e,t,n)=>{"use strict";n.d(t,{DH:()=>d,G_:()=>m,Ow:()=>s,Oz:()=>c,VN:()=>G,X3:()=>u,_s:()=>p,dp:()=>b,h$:()=>g,kP:()=>l,mv:()=>v,oH:()=>a,r3:()=>o,u1:()=>r});var l="",c="https://clients3.google.com/generate_204",o="dns.nextdns.io:853",a=!0,d="http://ip.sb",r="stun.syncthing.net:3478",u="stun.nextcloud.com:443";let i=()=>{let e=localStorage.getItem("api_url");l=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(c=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(o=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(a="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(d=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(r=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(u=e)},s=e=>{h("api_url",e)},b=e=>{h("latency_dns_url",e)},m=e=>{h("latency_http_url",e)},v=e=>{h("latency_ipv6",e.toString())},g=e=>{h("latency_ip_url",e)},p=e=>{h("latency_stun_url",e)},G=e=>{h("latency_stun_tcp_url",e)},h=(e,t)=>{""===t?localStorage.removeItem(e):localStorage.setItem(e,t),i()};i()},9169:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var l=n(5155),c=n(5554),o=n.n(c),a=n(4216);let d=function(e){return(0,l.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,l.jsx)("div",{className:"p2",children:(0,l.jsx)(a.A,{})})]})}},8927:(e,t,n)=>{"use strict";n.d(t,{AD:()=>d,kP:()=>r,zZ:()=>u});var l=n(950),c=n(7558),o=n(6989),a=n(744);function d(e,t,n,d){return r=>d?(0,l.o)(e.output,d):fetch("".concat(a.kP).concat(r),{method:t,body:n?(0,c.R)(e.input,n):void 0}).then(async t=>{if(!t.ok)throw{code:t.status,msg:t.statusText,raw:t.text()};return(0,o.Er)(e.output,new Uint8Array(await t.arrayBuffer()))})}async function r(e,t,n,l){let d=await fetch("".concat(a.kP).concat(t),{method:n,body:l?(0,c.R)(e.input,l):void 0});return d.ok?{data:(0,o.Er)(e.output,new Uint8Array(await d.arrayBuffer()))}:{error:{code:d.status,msg:await d.text()}}}function u(e,t,n){let l,d=!1;return(r,u)=>{let{next:i}=u,s=new URL(""!==a.kP?a.kP:window.location.toString());s.pathname=r,s.protocol="https:"===s.protocol?"wss:":"ws:";let b=()=>{d||(console.log("connecting to: ".concat(s)),(l=new WebSocket(s)).binaryType="arraybuffer",l.addEventListener("open",n=>{console.log("connect to: ".concat(s,", event type: ").concat(n.type)),null==l||l.send((0,c.R)(e.input,t))}),l.addEventListener("message",t=>{let l=(0,o.Er)(e.output,new Uint8Array(t.data));i(null,e=>n(l,e))}),l.addEventListener("error",e=>{let t="websocket have some error";i({msg:t,code:500}),console.log(t,e.type)}),l.addEventListener("close",e=>{console.log("websocket closed, code: "+e.code),i(null,void 0),d||(console.log("reconnect after 1 seconds"),setTimeout(b,1e3))}))};return b(),()=>{d=!0,void 0!==l&&(console.log("close: ".concat(r)),l.close(),l=void 0)}}}},1759:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>R});var l=n(5155),c=n(3577),o=n(9678),a=n(8170),d=n(2115),r=n(2963),u=n(4216),i=n(9141),s=n(4995),b=n(700),m=n.n(b),v=n(9169),g=n(8927),p=n(6342),G=n(6903);let h=(0,c.v)(o.w,{seconds:BigInt(0),nanos:0}),R=function(){var e;let[t,n]=(0,d.useState)("Time"),[c,o]=(0,d.useState)(1),b=e=>e===t?o(-c):n(e),R=e=>e===t?(0,l.jsx)("i",{className:-1===c?"bi bi-sort-up-alt":"bi bi-sort-down-alt"}):(0,l.jsx)(l.Fragment,{}),A=(e,t)=>e>t?-1*c:1*c,W=e=>(0,l.jsxs)("th",{className:m().clickable,onClick:()=>b(e),children:[e,R(e)]}),{data:y,error:Y,isLoading:Z,isValidating:N,mutate:x}=(0,s.Ay)("/conn/history",(0,g.AD)(G.oQ.method.all_history));return Y?(0,l.jsx)(v.A,{code:Y.code,children:Y.msg}):Z||void 0===y?(0,l.jsx)(v.A,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.A,{variant:"outline-primary",className:"mb-3",onClick:()=>x(),disabled:N||Z,children:["Refresh ",(N||Z)&&(0,l.jsxs)(l.Fragment,{children:["\xa0",(0,l.jsx)(u.A,{size:"sm",animation:"border"})]})]}),(0,l.jsxs)(i.A,{hover:!0,striped:!0,size:"sm",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[W("Time"),W("Host"),(0,l.jsx)("th",{children:"Mode"}),(0,l.jsx)("th",{children:"Net"}),W("Count"),y.dumpProcessEnabled&&W("Proc")]})}),(0,l.jsx)("tbody",{className:"text-break",children:null==y?void 0:null===(e=y.objects)||void 0===e?void 0:e.filter(e=>e.time).sort((e,n)=>{var l,c,o,d,r,u;return"Host"===t?A(null===(l=e.connection)||void 0===l?void 0:l.addr,null===(c=n.connection)||void 0===c?void 0:c.addr):"Proc"===t?A(null===(o=e.connection)||void 0===o?void 0:o.extra.Process,null===(d=n.connection)||void 0===d?void 0:d.extra.Process):"Count"===t?A(e.count,n.count):A((0,a.FP)(null!==(r=e.time)&&void 0!==r?r:h),(0,a.FP)(null!==(u=n.time)&&void 0!==u?u:h))}).map((e,t)=>{var n,c,o,d,r,u;return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,a.FP)(e.time).toLocaleString()}),(0,l.jsx)("td",{children:null===(n=e.connection)||void 0===n?void 0:n.addr}),(0,l.jsx)("td",{children:null===(c=e.connection)||void 0===c?void 0:c.extra.MODE}),(0,l.jsx)("td",{children:p.NW[null!==(u=null===(d=e.connection)||void 0===d?void 0:null===(o=d.type)||void 0===o?void 0:o.connType)&&void 0!==u?u:p.NW.unknown]}),(0,l.jsx)("td",{children:Number(e.count)}),y.dumpProcessEnabled&&(0,l.jsx)("td",{children:null===(r=e.connection)||void 0===r?void 0:r.extra.Process})]},"bh-"+t)})})]})]})}},6342:(e,t,n)=>{"use strict";n.d(t,{L9:()=>l,NW:()=>c});let l=(0,n(6788).w)("ChZzdGF0aXN0aWMvY29uZmlnLnByb3RvEhF5dWhhaWluLnN0YXRpc3RpYyKEAQoIbmV0X3R5cGUSNQoJY29ubl90eXBlGAEgASgOMhcueXVoYWlpbi5zdGF0aXN0aWMudHlwZVIJY29ubl90eXBlEkEKD3VuZGVybHlpbmdfdHlwZRgCIAEoDjIXLnl1aGFpaW4uc3RhdGlzdGljLnR5cGVSD3VuZGVybHlpbmdfdHlwZSK4AQoKY29ubmVjdGlvbhIMCgRhZGRyGAEgASgJEgoKAmlkGAIgASgEEikKBHR5cGUYAyABKAsyGy55dWhhaWluLnN0YXRpc3RpYy5uZXRfdHlwZRI3CgVleHRyYRgEIAMoCzIoLnl1aGFpaW4uc3RhdGlzdGljLmNvbm5lY3Rpb24uRXh0cmFFbnRyeRosCgpFeHRyYUVudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEqjwEKBHR5cGUSCwoHdW5rbm93bhAAEgcKA3RjcBABEggKBHRjcDQQAhIICgR0Y3A2EAMSBwoDdWRwEAQSCAoEdWRwNBAFEggKBHVkcDYQBhIGCgJpcBAHEgcKA2lwNBAIEgcKA2lwNhAJEggKBHVuaXgQChIMCgh1bml4Z3JhbRALEg4KCnVuaXhwYWNrZXQQDEIzWjFnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3Mvc3RhdGlzdGljYgZwcm90bzM");var c=function(e){return e[e.unknown=0]="unknown",e[e.tcp=1]="tcp",e[e.tcp4=2]="tcp4",e[e.tcp6=3]="tcp6",e[e.udp=4]="udp",e[e.udp4=5]="udp4",e[e.udp6=6]="udp6",e[e.ip=7]="ip",e[e.ip4=8]="ip4",e[e.ip6=9]="ip6",e[e.unix=10]="unix",e[e.unixgram=11]="unixgram",e[e.unixpacket=12]="unixpacket",e}({})},6903:(e,t,n)=>{"use strict";n.d(t,{SE:()=>i,oQ:()=>s});var l=n(6788),c=n(8123),o=n(4395),a=n(9297),d=n(9678),r=n(6342);let u=(0,l.w)("ChtzdGF0aXN0aWMvZ3JwYy9jb25maWcucHJvdG8SIHl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlIi4KCnRvdGFsX2Zsb3cSEAoIZG93bmxvYWQYASABKAQSDgoGdXBsb2FkGAIgASgEIpcCCgtub3RpZnlfZGF0YRJCCgp0b3RhbF9mbG93GAMgASgLMiwueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UudG90YWxfZmxvd0gAEloKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMYASABKAsyOC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfbmV3X2Nvbm5lY3Rpb25zSAASYAoZbm90aWZ5X3JlbW92ZV9jb25uZWN0aW9ucxgCIAEoCzI7Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnNIAEIGCgRkYXRhIkwKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMSMgoLY29ubmVjdGlvbnMYASADKAsyHS55dWhhaWluLnN0YXRpc3RpYy5jb25uZWN0aW9uIigKGW5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnMSCwoDaWRzGAEgAygEIp4BCg5mYWlsZWRfaGlzdG9yeRIQCghwcm90b2NvbBgBIAEoCRIMCgRob3N0GAIgASgJEg0KBWVycm9yGAMgASgJEg8KB3Byb2Nlc3MYBCABKAkSKAoEdGltZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASIgoMZmFpbGVkX2NvdW50GAYgASgEUgxmYWlsZWRfY291bnQijAEKE2ZhaWxlZF9oaXN0b3J5X2xpc3QSQQoHb2JqZWN0cxgBIAMoCzIwLnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLmZhaWxlZF9oaXN0b3J5EjIKFGR1bXBfcHJvY2Vzc19lbmFibGVkGAIgASgIUhRkdW1wX3Byb2Nlc3NfZW5hYmxlZCJ5CgthbGxfaGlzdG9yeRIxCgpjb25uZWN0aW9uGAEgASgLMh0ueXVoYWlpbi5zdGF0aXN0aWMuY29ubmVjdGlvbhINCgVjb3VudBgCIAEoBBIoCgR0aW1lGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCKGAQoQYWxsX2hpc3RvcnlfbGlzdBI+CgdvYmplY3RzGAEgAygLMi0ueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UuYWxsX2hpc3RvcnkSMgoUZHVtcF9wcm9jZXNzX2VuYWJsZWQYAiABKAhSFGR1bXBfcHJvY2Vzc19lbmFibGVkMqkECgtjb25uZWN0aW9ucxJZCgVjb25ucxIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRo4Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9uZXdfY29ubmVjdGlvbnMSYQoKY2xvc2VfY29ubhI7Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnMaFi5nb29nbGUucHJvdG9idWYuRW1wdHkSTQoFdG90YWwSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaLC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS50b3RhbF9mbG93ElEKBm5vdGlmeRIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRotLnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9kYXRhMAESXwoOZmFpbGVkX2hpc3RvcnkSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaNS55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5mYWlsZWRfaGlzdG9yeV9saXN0ElkKC2FsbF9oaXN0b3J5EhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GjIueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UuYWxsX2hpc3RvcnlfbGlzdEI7WjlnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3Mvc3RhdGlzdGljL3NlcnZpY2ViBnByb3RvMw",[a.t,r.L9,d.i]),i=(0,c.Z)(u,3),s=(0,o.Z)(u,0)},2773:(e,t,n)=>{"use strict";n.d(t,{Am:()=>a,Ay:()=>r});var l=n(2115),c=n(5155);let o=["as","disabled"];function a({tagName:e,disabled:t,href:n,target:l,rel:c,role:o,onClick:a,tabIndex:d=0,type:r}){e||(e=null!=n||null!=l||null!=c?"a":"button");let u={tagName:e};if("button"===e)return[{type:r||"button",disabled:t},u];let i=l=>{var c;if(!t&&("a"!==e||(c=n)&&"#"!==c.trim())||l.preventDefault(),t){l.stopPropagation();return}null==a||a(l)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:t?void 0:d,href:n,target:"a"===e?l:void 0,"aria-disabled":t||void 0,rel:"a"===e?c:void 0,onClick:i,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),i(e))}},u]}let d=l.forwardRef((e,t)=>{let{as:n,disabled:l}=e,d=function(e,t){if(null==e)return{};var n={};for(var l in e)if(({}).hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;n[l]=e[l]}return n}(e,o),[r,{tagName:u}]=a(Object.assign({tagName:n,disabled:l},d));return(0,c.jsx)(u,Object.assign({},d,r,{ref:t}))});d.displayName="Button";let r=d},2963:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var l=n(4617),c=n.n(l),o=n(2115),a=n(2773),d=n(1653),r=n(5155);let u=o.forwardRef((e,t)=>{let{as:n,bsPrefix:l,variant:o="primary",size:u,active:i=!1,disabled:s=!1,className:b,...m}=e,v=(0,d.oU)(l,"btn"),[g,{tagName:p}]=(0,a.Am)({tagName:n,disabled:s,...m});return(0,r.jsx)(p,{...g,...m,ref:t,disabled:s,className:c()(b,v,i&&"active",o&&"".concat(v,"-").concat(o),u&&"".concat(v,"-").concat(u),m.href&&s&&"disabled")})});u.displayName="Button";let i=u},9141:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var l=n(4617),c=n.n(l),o=n(2115),a=n(1653),d=n(5155);let r=o.forwardRef((e,t)=>{let{bsPrefix:n,className:l,striped:o,bordered:r,borderless:u,hover:i,size:s,variant:b,responsive:m,...v}=e,g=(0,a.oU)(n,"table"),p=c()(l,g,b&&"".concat(g,"-").concat(b),s&&"".concat(g,"-").concat(s),o&&"".concat(g,"-").concat("string"==typeof o?"striped-".concat(o):"striped"),r&&"".concat(g,"-bordered"),u&&"".concat(g,"-borderless"),i&&"".concat(g,"-hover")),G=(0,d.jsx)("table",{...v,className:p,ref:t});if(m){let e="".concat(g,"-responsive");return"string"==typeof m&&(e="".concat(e,"-").concat(m)),(0,d.jsx)("div",{className:e,children:G})}return G})},700:e=>{e.exports={clickable:"clickable_clickable__ytaUf"}},9678:(e,t,n)=>{"use strict";n.d(t,{i:()=>o,w:()=>a});var l=n(6788),c=n(8123);let o=(0,l.w)("Ch9nb29nbGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3RvEg9nb29nbGUucHJvdG9idWYiKwoJVGltZXN0YW1wEg8KB3NlY29uZHMYASABKAMSDQoFbmFub3MYAiABKAVChQEKE2NvbS5nb29nbGUucHJvdG9idWZCDlRpbWVzdGFtcFByb3RvUAFaMmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3RpbWVzdGFtcHBi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),a=(0,c.Z)(o,0)},8170:(e,t,n)=>{"use strict";function l(e){return new Date(1e3*Number(e.seconds)+Math.ceil(e.nanos/1e6))}n.d(t,{FP:()=>l})}},e=>{var t=t=>e(e.s=t);e.O(0,[607,295,375,441,517,358],()=>t(6781)),_N_E=e.O()}]);