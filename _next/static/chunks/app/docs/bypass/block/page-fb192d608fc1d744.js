(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{4355:(t,e,n)=>{Promise.resolve().then(n.bind(n,3878))},744:(t,e,n)=>{"use strict";n.d(e,{DH:()=>a,G_:()=>b,Ow:()=>i,Oz:()=>l,VN:()=>v,X3:()=>d,_s:()=>g,dp:()=>m,h$:()=>h,kP:()=>c,mv:()=>Z,oH:()=>s,r3:()=>o,u1:()=>r});var c="",l="https://clients3.google.com/generate_204",o="dns.nextdns.io:853",s=!0,a="http://ip.sb",r="stun.syncthing.net:3478",d="stun.nextcloud.com:443";let u=()=>{let t=localStorage.getItem("api_url");c=null!==t?t:"",t=localStorage.getItem("remote_bypass"),null!==(t=localStorage.getItem("latency_http_url"))&&(l=t),null!==(t=localStorage.getItem("latency_dns_url"))&&(o=t),null!==(t=localStorage.getItem("latency_ipv6"))&&(s="true"===t),null!==(t=localStorage.getItem("latency_ip_url"))&&(a=t),null!==(t=localStorage.getItem("latency_stun_url"))&&(r=t),null!==(t=localStorage.getItem("latency_stun_tcp_url"))&&(d=t)},i=t=>{W("api_url",t)},m=t=>{W("latency_dns_url",t)},b=t=>{W("latency_http_url",t)},Z=t=>{W("latency_ipv6",t.toString())},h=t=>{W("latency_ip_url",t)},g=t=>{W("latency_stun_url",t)},v=t=>{W("latency_stun_tcp_url",t)},W=(t,e)=>{""===e?localStorage.removeItem(t):localStorage.setItem(t,e),u()};u()},3878:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>v});var c=n(5155),l=n(2963),o=n(9141),s=n(4995),a=n(8927),r=n(6863),d=n(3577),u=n(9678),i=n(8170),m=n(9169),b=n(2115),Z=n(700),h=n.n(Z);let g=(0,d.v)(u.w,{seconds:BigInt(0),nanos:0}),v=function(){var t;let[e,n]=(0,b.useState)("Time"),[d,u]=(0,b.useState)(1),Z=t=>t===e?u(-d):n(t),v=t=>t===e?(0,c.jsx)("i",{className:-1===d?"bi bi-sort-up-alt":"bi bi-sort-down-alt"}):(0,c.jsx)(c.Fragment,{}),W=(t,e)=>t>e?-1*d:1*d,y=t=>(0,c.jsxs)("th",{className:h().clickable,onClick:()=>Z(t),children:[t,v(t)]}),{data:p,error:Y,isLoading:G,mutate:w}=(0,s.Ay)("/bypass/block_history",(0,a.AD)(r.LH));return Y?(0,c.jsx)(m.A,{code:Y.code,children:Y.msg}):G||void 0===p?(0,c.jsx)(m.A,{}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.A,{variant:"outline-primary",className:"mb-3",onClick:()=>w(),children:"Refresh"}),(0,c.jsxs)(o.A,{hover:!0,striped:!0,size:"sm",children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[y("Time"),(0,c.jsx)("th",{children:"Net"}),y("Host"),y("Count"),p.dumpProcessEnabled&&y("Proc")]})}),(0,c.jsx)("tbody",{className:"text-break",children:null==p?void 0:null===(t=p.objects)||void 0===t?void 0:t.filter(t=>t.time).sort((t,n)=>{var c,l;return"Host"===e?W(t.host,n.host):"Proc"===e?W(t.process,n.process):"Count"===e?W(t.blockCount,n.blockCount):W((0,i.FP)(null!==(c=t.time)&&void 0!==c?c:g),(0,i.FP)(null!==(l=n.time)&&void 0!==l?l:g))}).map((t,e)=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:(0,i.FP)(t.time).toLocaleString()}),(0,c.jsx)("td",{children:t.protocol}),(0,c.jsx)("td",{children:t.host}),(0,c.jsx)("td",{children:Number(t.blockCount)}),p.dumpProcessEnabled&&(0,c.jsx)("td",{children:t.process})]},"bh-"+e))})]})]})}},9169:(t,e,n)=>{"use strict";n.d(e,{A:()=>a});var c=n(5155),l=n(4216),o=n(5554),s=n.n(o);let a=function(t){return(0,c.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==t.children&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s(),{className:"p2",statusCode:void 0!==t.code?t.code:500,title:t.children})}),(0,c.jsx)("div",{className:"p2",children:(0,c.jsx)(l.A,{})})]})}},8927:(t,e,n)=>{"use strict";n.d(e,{AD:()=>a,EY:()=>d,Fp:()=>i,L1:()=>r,gR:()=>m,kP:()=>u});var c=n(744),l=n(950),o=n(6989),s=n(7558);function a(t,e,n,s){return a=>s?(0,l.o)(t,s):fetch("".concat(c.kP).concat(a),{method:e,body:n}).then(async e=>{if(!e.ok)throw{code:e.status,msg:e.statusText,raw:e.text()};return(0,o.Er)(t,new Uint8Array(await e.arrayBuffer()))})}function r(t,e,n,a){return r=>a?(0,l.o)(t.output,a):fetch("".concat(c.kP).concat(r),{method:e,body:n?(0,s.R)(t.input,n):void 0}).then(async e=>{if(!e.ok)throw{code:e.status,msg:e.statusText,raw:e.text()};return(0,o.Er)(t.output,new Uint8Array(await e.arrayBuffer()))})}function d(t,e,n,l){return s=>fetch("".concat(c.kP).concat(s),{method:n,body:l}).then(async n=>{if(!n.ok)throw{code:n.status,msg:n.statusText,raw:n.text()};return e((0,o.Er)(t,new Uint8Array(await n.arrayBuffer())))})}async function u(t,e,n,c){return i(e,{method:n,body:c?(0,s.R)(t.input,c):void 0,process:async e=>(0,o.Er)(t.output,new Uint8Array(await e.arrayBuffer()))})}let i=async(t,e)=>{let n=await fetch("".concat(c.kP).concat(t),{method:void 0!==e.method?e.method:"POST",body:e.body});return n.ok?void 0===e.process?{}:{data:e.process(n)}:{error:{code:n.status,msg:n.text()}}};function m(t,e,n){return(l,s)=>{let a,{next:r}=s,d=new URL(""!==c.kP?c.kP:window.location.toString());d.pathname=l,d.protocol="https:"===d.protocol?"wss:":"ws:";let u=!1,i=()=>{u||(console.log("connecting to: ".concat(d)),(a=new WebSocket(d)).binaryType="arraybuffer",a.addEventListener("open",e=>{console.log("connect to: ".concat(d,", event type: ").concat(e.type)),null==a||a.send(t)}),a.addEventListener("message",t=>{let c=(0,o.Er)(e,new Uint8Array(t.data));r(null,t=>n(t,c))}),a.addEventListener("error",t=>{let e="websocket have some error";r({msg:e,code:500}),console.log(e,t.type)}),a.addEventListener("close",t=>{console.log("websocket closed, code: "+t.code),r(null,void 0),u||(console.log("reconnect after 1 seconds"),setTimeout(i,1e3))}))};return i(),()=>{u=!0,void 0!==a&&(console.log("close: ".concat(l)),a.close(),a=void 0)}}}},6863:(t,e,n)=>{"use strict";n.d(e,{C$:()=>b,LH:()=>Z,mz:()=>h});var c=n(6788),l=n(8123),o=n(4395),s=n(878),a=n(4805),r=n(7641),d=n(9297),u=n(1936),i=n(9678);let m=(0,c.w)("Chhjb25maWcvZ3JwYy9jb25maWcucHJvdG8SHXl1aGFpaW4ucHJvdG9zLmNvbmZpZy5zZXJ2aWNlImoKDXRlc3RfcmVzcG9uc2USKQoEbW9kZRgBIAEoCzIbLnl1aGFpaW4uYnlwYXNzLm1vZGVfY29uZmlnEg4KBnJlYXNvbhgCIAEoCRIeCgphZnRlcl9hZGRyGAMgASgJUgphZnRlcl9hZGRyIowBCg1ibG9ja19oaXN0b3J5EhAKCHByb3RvY29sGAEgASgJEgwKBGhvc3QYAiABKAkSKAoEdGltZRgDIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASDwoHcHJvY2VzcxgEIAEoCRIgCgtibG9ja19jb3VudBgFIAEoBFILYmxvY2tfY291bnQihwEKEmJsb2NrX2hpc3RvcnlfbGlzdBI9CgdvYmplY3RzGAEgAygLMiwueXVoYWlpbi5wcm90b3MuY29uZmlnLnNlcnZpY2UuYmxvY2tfaGlzdG9yeRIyChRkdW1wX3Byb2Nlc3NfZW5hYmxlZBgCIAEoCFIUZHVtcF9wcm9jZXNzX2VuYWJsZWQiIgoRaW5ib3VuZHNfcmVzcG9uc2USDQoFbmFtZXMYASADKAkyuAEKDmNvbmZpZ19zZXJ2aWNlEjcKBGxvYWQSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaFy55dWhhaWluLmNvbmZpZy5zZXR0aW5nEjcKBHNhdmUSFy55dWhhaWluLmNvbmZpZy5zZXR0aW5nGhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5EjQKBGluZm8SFi5nb29nbGUucHJvdG9idWYuRW1wdHkaFC55dWhhaWluLmNvbmZpZy5pbmZvMuICCgZieXBhc3MSNgoEbG9hZBIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRoWLnl1aGFpaW4uYnlwYXNzLmNvbmZpZxI2CgRzYXZlEhYueXVoYWlpbi5ieXBhc3MuY29uZmlnGhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5EjgKBnJlbG9hZBIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRoWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRJSCgR0ZXN0EhwuZ29vZ2xlLnByb3RvYnVmLlN0cmluZ1ZhbHVlGiwueXVoYWlpbi5wcm90b3MuY29uZmlnLnNlcnZpY2UudGVzdF9yZXNwb25zZRJaCg1ibG9ja19oaXN0b3J5EhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GjEueXVoYWlpbi5wcm90b3MuY29uZmlnLnNlcnZpY2UuYmxvY2tfaGlzdG9yeV9saXN0MpkCCgdpbmJvdW5kElAKBGxpc3QSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaMC55dWhhaWluLnByb3Rvcy5jb25maWcuc2VydmljZS5pbmJvdW5kc19yZXNwb25zZRI+CgNnZXQSHC5nb29nbGUucHJvdG9idWYuU3RyaW5nVmFsdWUaGS55dWhhaWluLmxpc3RlbmVyLmluYm91bmQSPAoEc2F2ZRIZLnl1aGFpaW4ubGlzdGVuZXIuaW5ib3VuZBoZLnl1aGFpaW4ubGlzdGVuZXIuaW5ib3VuZBI+CgZyZW1vdmUSHC5nb29nbGUucHJvdG9idWYuU3RyaW5nVmFsdWUaFi5nb29nbGUucHJvdG9idWYuRW1wdHlCOFo2Z2l0aHViLmNvbS9Bc3V0b3J1ZmEveXVoYWlpbi9wa2cvcHJvdG9zL2NvbmZpZy9zZXJ2aWNlYgZwcm90bzM",[s.Pr,a.qc,r._6,d.t,u.Ax,i.i]),b=(0,l.Z)(m,0),Z=(0,l.Z)(m,2),h=(0,o.Z)(m,2)},700:t=>{t.exports={clickable:"clickable_clickable__ytaUf"}},9537:(t,e,n)=>{"use strict";function c(t,e,...n){if(0==n.length)return t.enums[e];let l=n.pop();return n.reduce((t,e)=>t.nestedMessages[e],t.messages[e]).nestedEnums[l]}n.d(e,{R:()=>c})},4395:(t,e,n)=>{"use strict";function c(t,e,...n){if(n.length>0)throw Error();return t.services[e]}n.d(e,{Z:()=>c})},1936:(t,e,n)=>{"use strict";n.d(e,{Ax:()=>o,g8:()=>s});var c=n(6788),l=n(8123);let o=(0,c.w)("Ch5nb29nbGUvcHJvdG9idWYvd3JhcHBlcnMucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIcCgtEb3VibGVWYWx1ZRINCgV2YWx1ZRgBIAEoASIbCgpGbG9hdFZhbHVlEg0KBXZhbHVlGAEgASgCIhsKCkludDY0VmFsdWUSDQoFdmFsdWUYASABKAMiHAoLVUludDY0VmFsdWUSDQoFdmFsdWUYASABKAQiGwoKSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoBSIcCgtVSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoDSIaCglCb29sVmFsdWUSDQoFdmFsdWUYASABKAgiHAoLU3RyaW5nVmFsdWUSDQoFdmFsdWUYASABKAkiGwoKQnl0ZXNWYWx1ZRINCgV2YWx1ZRgBIAEoDEKDAQoTY29tLmdvb2dsZS5wcm90b2J1ZkINV3JhcHBlcnNQcm90b1ABWjFnb29nbGUuZ29sYW5nLm9yZy9wcm90b2J1Zi90eXBlcy9rbm93bi93cmFwcGVyc3Bi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),s=(0,l.Z)(o,7)}},t=>{var e=e=>t(t.s=e);t.O(0,[607,488,995,459,878,441,517,358],()=>e(4355)),_N_E=t.O()}]);