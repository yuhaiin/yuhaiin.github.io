(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{4776:(e,t,l)=>{Promise.resolve().then(l.bind(l,368))},744:(e,t,l)=>{"use strict";l.d(t,{DH:()=>d,G_:()=>m,Ow:()=>i,Oz:()=>c,VN:()=>h,X3:()=>s,_s:()=>v,dp:()=>b,h$:()=>g,kP:()=>n,mv:()=>p,oH:()=>o,r3:()=>a,u1:()=>r});var n="",c="https://clients3.google.com/generate_204",a="dns.nextdns.io:853",o=!0,d="http://ip.sb",r="stun.syncthing.net:3478",s="stun.nextcloud.com:443";let u=()=>{let e=localStorage.getItem("api_url");n=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(c=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(a=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(o="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(d=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(r=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(s=e)},i=e=>{G("api_url",e)},b=e=>{G("latency_dns_url",e)},m=e=>{G("latency_http_url",e)},p=e=>{G("latency_ipv6",e.toString())},g=e=>{G("latency_ip_url",e)},v=e=>{G("latency_stun_url",e)},h=e=>{G("latency_stun_tcp_url",e)},G=(e,t)=>{""===t?localStorage.removeItem(e):localStorage.setItem(e,t),u()};u()},9169:(e,t,l)=>{"use strict";l.d(t,{A:()=>d});var n=l(5155),c=l(5554),a=l.n(c),o=l(4216);let d=function(e){return(0,n.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,n.jsx)("div",{className:"p2",children:(0,n.jsx)(o.A,{})})]})}},8927:(e,t,l)=>{"use strict";l.d(t,{AD:()=>d,kP:()=>r,zZ:()=>s});var n=l(950),c=l(7558),a=l(6989),o=l(744);function d(e,t,l,d){return r=>d?(0,n.o)(e.output,d):fetch("".concat(o.kP).concat(r),{method:t,body:l?(0,c.R)(e.input,l):void 0}).then(async t=>{if(!t.ok)throw{code:t.status,msg:t.statusText,raw:t.text()};return(0,a.Er)(e.output,new Uint8Array(await t.arrayBuffer()))})}async function r(e,t,l,n){let d=await fetch("".concat(o.kP).concat(t),{method:l,body:n?(0,c.R)(e.input,n):void 0});return d.ok?{data:(0,a.Er)(e.output,new Uint8Array(await d.arrayBuffer()))}:{error:{code:d.status,msg:await d.text()}}}function s(e,t,l){let n,d=!1;return(r,s)=>{let{next:u}=s,i=new URL(""!==o.kP?o.kP:window.location.toString());i.pathname=r,i.protocol="https:"===i.protocol?"wss:":"ws:";let b=()=>{d||(console.log("connecting to: ".concat(i)),(n=new WebSocket(i)).binaryType="arraybuffer",n.addEventListener("open",l=>{console.log("connect to: ".concat(i,", event type: ").concat(l.type)),null==n||n.send((0,c.R)(e.input,t))}),n.addEventListener("message",t=>{let n=(0,a.Er)(e.output,new Uint8Array(t.data));u(null,e=>l(n,e))}),n.addEventListener("error",e=>{let t="websocket have some error";u({msg:t,code:500}),console.log(t,e.type)}),n.addEventListener("close",e=>{console.log("websocket closed, code: "+e.code),u(null,void 0),d||(console.log("reconnect after 1 seconds"),setTimeout(b,1e3))}))};return b(),()=>{d=!0,void 0!==n&&(console.log("close: ".concat(r)),n.close(),n=void 0)}}}},368:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>G});var n=l(5155),c=l(3577),a=l(9678),o=l(8170),d=l(2115),r=l(2963),s=l(4216),u=l(9141),i=l(4995),b=l(700),m=l.n(b),p=l(9169),g=l(8927),v=l(6903);let h=(0,c.v)(a.w,{seconds:BigInt(0),nanos:0}),G=function(){var e;let[t,l]=(0,d.useState)("Time"),[c,a]=(0,d.useState)(1),b=e=>e===t?a(-c):l(e),G=e=>e===t?(0,n.jsx)("i",{className:-1===c?"bi bi-sort-up-alt":"bi bi-sort-down-alt"}):(0,n.jsx)(n.Fragment,{}),R=(e,t)=>e>t?-1*c:1*c,A=e=>(0,n.jsxs)("th",{className:m().clickable,onClick:()=>b(e),children:[e,G(e)]}),{data:W,error:y,isLoading:Y,isValidating:Z,mutate:N}=(0,i.Ay)("/conn/failed_history",(0,g.AD)(v.oQ.method.failed_history));return y?(0,n.jsx)(p.A,{code:y.code,children:y.msg}):Y||void 0===W?(0,n.jsx)(p.A,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.A,{variant:"outline-primary",className:"mb-3",onClick:()=>N(),disabled:Z||Y,children:["Refresh ",(Z||Y)&&(0,n.jsxs)(n.Fragment,{children:["\xa0",(0,n.jsx)(s.A,{size:"sm",animation:"border"})]})]}),(0,n.jsxs)(u.A,{hover:!0,striped:!0,size:"sm",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[A("Time"),(0,n.jsx)("th",{children:"Net"}),A("Host"),A("Count"),(0,n.jsx)("th",{children:"Err"}),W.dumpProcessEnabled&&A("Proc")]})}),(0,n.jsx)("tbody",{className:"text-break",children:null==W?void 0:null===(e=W.objects)||void 0===e?void 0:e.filter(e=>e.time).sort((e,l)=>{var n,c;return"Host"===t?R(e.host,l.host):"Proc"===t?R(e.process,l.process):"Count"===t?R(e.failedCount,l.failedCount):R((0,o.FP)(null!==(n=e.time)&&void 0!==n?n:h),(0,o.FP)(null!==(c=l.time)&&void 0!==c?c:h))}).map((e,t)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,o.FP)(e.time).toLocaleString()}),(0,n.jsx)("td",{children:e.protocol}),(0,n.jsx)("td",{children:e.host}),(0,n.jsx)("td",{children:Number(e.failedCount)}),(0,n.jsx)("td",{children:e.error}),W.dumpProcessEnabled&&(0,n.jsx)("td",{children:e.process})]},"bh-"+t))})]})]})}},6342:(e,t,l)=>{"use strict";l.d(t,{L9:()=>n,NW:()=>c});let n=(0,l(6788).w)("ChZzdGF0aXN0aWMvY29uZmlnLnByb3RvEhF5dWhhaWluLnN0YXRpc3RpYyKEAQoIbmV0X3R5cGUSNQoJY29ubl90eXBlGAEgASgOMhcueXVoYWlpbi5zdGF0aXN0aWMudHlwZVIJY29ubl90eXBlEkEKD3VuZGVybHlpbmdfdHlwZRgCIAEoDjIXLnl1aGFpaW4uc3RhdGlzdGljLnR5cGVSD3VuZGVybHlpbmdfdHlwZSK4AQoKY29ubmVjdGlvbhIMCgRhZGRyGAEgASgJEgoKAmlkGAIgASgEEikKBHR5cGUYAyABKAsyGy55dWhhaWluLnN0YXRpc3RpYy5uZXRfdHlwZRI3CgVleHRyYRgEIAMoCzIoLnl1aGFpaW4uc3RhdGlzdGljLmNvbm5lY3Rpb24uRXh0cmFFbnRyeRosCgpFeHRyYUVudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEqjwEKBHR5cGUSCwoHdW5rbm93bhAAEgcKA3RjcBABEggKBHRjcDQQAhIICgR0Y3A2EAMSBwoDdWRwEAQSCAoEdWRwNBAFEggKBHVkcDYQBhIGCgJpcBAHEgcKA2lwNBAIEgcKA2lwNhAJEggKBHVuaXgQChIMCgh1bml4Z3JhbRALEg4KCnVuaXhwYWNrZXQQDEIzWjFnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3Mvc3RhdGlzdGljYgZwcm90bzM");var c=function(e){return e[e.unknown=0]="unknown",e[e.tcp=1]="tcp",e[e.tcp4=2]="tcp4",e[e.tcp6=3]="tcp6",e[e.udp=4]="udp",e[e.udp4=5]="udp4",e[e.udp6=6]="udp6",e[e.ip=7]="ip",e[e.ip4=8]="ip4",e[e.ip6=9]="ip6",e[e.unix=10]="unix",e[e.unixgram=11]="unixgram",e[e.unixpacket=12]="unixpacket",e}({})},6903:(e,t,l)=>{"use strict";l.d(t,{SE:()=>u,oQ:()=>i});var n=l(6788),c=l(8123),a=l(4395),o=l(9297),d=l(9678),r=l(6342);let s=(0,n.w)("ChtzdGF0aXN0aWMvZ3JwYy9jb25maWcucHJvdG8SIHl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlIi4KCnRvdGFsX2Zsb3cSEAoIZG93bmxvYWQYASABKAQSDgoGdXBsb2FkGAIgASgEIpcCCgtub3RpZnlfZGF0YRJCCgp0b3RhbF9mbG93GAMgASgLMiwueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UudG90YWxfZmxvd0gAEloKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMYASABKAsyOC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfbmV3X2Nvbm5lY3Rpb25zSAASYAoZbm90aWZ5X3JlbW92ZV9jb25uZWN0aW9ucxgCIAEoCzI7Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnNIAEIGCgRkYXRhIkwKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMSMgoLY29ubmVjdGlvbnMYASADKAsyHS55dWhhaWluLnN0YXRpc3RpYy5jb25uZWN0aW9uIigKGW5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnMSCwoDaWRzGAEgAygEIp4BCg5mYWlsZWRfaGlzdG9yeRIQCghwcm90b2NvbBgBIAEoCRIMCgRob3N0GAIgASgJEg0KBWVycm9yGAMgASgJEg8KB3Byb2Nlc3MYBCABKAkSKAoEdGltZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASIgoMZmFpbGVkX2NvdW50GAYgASgEUgxmYWlsZWRfY291bnQijAEKE2ZhaWxlZF9oaXN0b3J5X2xpc3QSQQoHb2JqZWN0cxgBIAMoCzIwLnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLmZhaWxlZF9oaXN0b3J5EjIKFGR1bXBfcHJvY2Vzc19lbmFibGVkGAIgASgIUhRkdW1wX3Byb2Nlc3NfZW5hYmxlZCJ5CgthbGxfaGlzdG9yeRIxCgpjb25uZWN0aW9uGAEgASgLMh0ueXVoYWlpbi5zdGF0aXN0aWMuY29ubmVjdGlvbhINCgVjb3VudBgCIAEoBBIoCgR0aW1lGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCKGAQoQYWxsX2hpc3RvcnlfbGlzdBI+CgdvYmplY3RzGAEgAygLMi0ueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UuYWxsX2hpc3RvcnkSMgoUZHVtcF9wcm9jZXNzX2VuYWJsZWQYAiABKAhSFGR1bXBfcHJvY2Vzc19lbmFibGVkMqkECgtjb25uZWN0aW9ucxJZCgVjb25ucxIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRo4Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9uZXdfY29ubmVjdGlvbnMSYQoKY2xvc2VfY29ubhI7Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnMaFi5nb29nbGUucHJvdG9idWYuRW1wdHkSTQoFdG90YWwSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaLC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS50b3RhbF9mbG93ElEKBm5vdGlmeRIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRotLnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9kYXRhMAESXwoOZmFpbGVkX2hpc3RvcnkSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaNS55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5mYWlsZWRfaGlzdG9yeV9saXN0ElkKC2FsbF9oaXN0b3J5EhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GjIueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UuYWxsX2hpc3RvcnlfbGlzdEI7WjlnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3Mvc3RhdGlzdGljL3NlcnZpY2ViBnByb3RvMw",[o.t,r.L9,d.i]),u=(0,c.Z)(s,3),i=(0,a.Z)(s,0)},2773:(e,t,l)=>{"use strict";l.d(t,{Am:()=>o,Ay:()=>r});var n=l(2115),c=l(5155);let a=["as","disabled"];function o({tagName:e,disabled:t,href:l,target:n,rel:c,role:a,onClick:o,tabIndex:d=0,type:r}){e||(e=null!=l||null!=n||null!=c?"a":"button");let s={tagName:e};if("button"===e)return[{type:r||"button",disabled:t},s];let u=n=>{var c;if(!t&&("a"!==e||(c=l)&&"#"!==c.trim())||n.preventDefault(),t){n.stopPropagation();return}null==o||o(n)};return"a"===e&&(l||(l="#"),t&&(l=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:t?void 0:d,href:l,target:"a"===e?n:void 0,"aria-disabled":t||void 0,rel:"a"===e?c:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},s]}let d=n.forwardRef((e,t)=>{let{as:l,disabled:n}=e,d=function(e,t){if(null==e)return{};var l={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;l[n]=e[n]}return l}(e,a),[r,{tagName:s}]=o(Object.assign({tagName:l,disabled:n},d));return(0,c.jsx)(s,Object.assign({},d,r,{ref:t}))});d.displayName="Button";let r=d},2963:(e,t,l)=>{"use strict";l.d(t,{A:()=>u});var n=l(4617),c=l.n(n),a=l(2115),o=l(2773),d=l(1653),r=l(5155);let s=a.forwardRef((e,t)=>{let{as:l,bsPrefix:n,variant:a="primary",size:s,active:u=!1,disabled:i=!1,className:b,...m}=e,p=(0,d.oU)(n,"btn"),[g,{tagName:v}]=(0,o.Am)({tagName:l,disabled:i,...m});return(0,r.jsx)(v,{...g,...m,ref:t,disabled:i,className:c()(b,p,u&&"active",a&&"".concat(p,"-").concat(a),s&&"".concat(p,"-").concat(s),m.href&&i&&"disabled")})});s.displayName="Button";let u=s},9141:(e,t,l)=>{"use strict";l.d(t,{A:()=>r});var n=l(4617),c=l.n(n),a=l(2115),o=l(1653),d=l(5155);let r=a.forwardRef((e,t)=>{let{bsPrefix:l,className:n,striped:a,bordered:r,borderless:s,hover:u,size:i,variant:b,responsive:m,...p}=e,g=(0,o.oU)(l,"table"),v=c()(n,g,b&&"".concat(g,"-").concat(b),i&&"".concat(g,"-").concat(i),a&&"".concat(g,"-").concat("string"==typeof a?"striped-".concat(a):"striped"),r&&"".concat(g,"-bordered"),s&&"".concat(g,"-borderless"),u&&"".concat(g,"-hover")),h=(0,d.jsx)("table",{...p,className:v,ref:t});if(m){let e="".concat(g,"-responsive");return"string"==typeof m&&(e="".concat(e,"-").concat(m)),(0,d.jsx)("div",{className:e,children:h})}return h})},700:e=>{e.exports={clickable:"clickable_clickable__ytaUf"}},9678:(e,t,l)=>{"use strict";l.d(t,{i:()=>a,w:()=>o});var n=l(6788),c=l(8123);let a=(0,n.w)("Ch9nb29nbGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3RvEg9nb29nbGUucHJvdG9idWYiKwoJVGltZXN0YW1wEg8KB3NlY29uZHMYASABKAMSDQoFbmFub3MYAiABKAVChQEKE2NvbS5nb29nbGUucHJvdG9idWZCDlRpbWVzdGFtcFByb3RvUAFaMmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3RpbWVzdGFtcHBi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),o=(0,c.Z)(a,0)},8170:(e,t,l)=>{"use strict";function n(e){return new Date(1e3*Number(e.seconds)+Math.ceil(e.nanos/1e6))}l.d(t,{FP:()=>n})}},e=>{var t=t=>e(e.s=t);e.O(0,[607,295,375,441,517,358],()=>t(4776)),_N_E=e.O()}]);