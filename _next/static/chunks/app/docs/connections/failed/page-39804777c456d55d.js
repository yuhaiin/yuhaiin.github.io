(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{4776:(e,t,l)=>{Promise.resolve().then(l.bind(l,368))},744:(e,t,l)=>{"use strict";l.d(t,{DH:()=>d,G_:()=>m,Ow:()=>i,Oz:()=>c,VN:()=>R,X3:()=>r,_s:()=>p,dp:()=>b,h$:()=>g,kP:()=>n,mv:()=>h,oH:()=>a,r3:()=>o,u1:()=>s});var n="",c="https://clients3.google.com/generate_204",o="dns.nextdns.io:853",a=!0,d="http://ip.sb",s="stun.syncthing.net:3478",r="stun.nextcloud.com:443";let u=()=>{let e=localStorage.getItem("api_url");n=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(c=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(o=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(a="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(d=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(s=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(r=e)},i=e=>{v("api_url",e)},b=e=>{v("latency_dns_url",e)},m=e=>{v("latency_http_url",e)},h=e=>{v("latency_ipv6",e.toString())},g=e=>{v("latency_ip_url",e)},p=e=>{v("latency_stun_url",e)},R=e=>{v("latency_stun_tcp_url",e)},v=(e,t)=>{""===t?localStorage.removeItem(e):localStorage.setItem(e,t),u()};u()},9169:(e,t,l)=>{"use strict";l.d(t,{A:()=>d});var n=l(5155),c=l(4216),o=l(5554),a=l.n(o);let d=function(e){return(0,n.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,n.jsx)("div",{className:"p2",children:(0,n.jsx)(c.A,{})})]})}},8927:(e,t,l)=>{"use strict";l.d(t,{AD:()=>a,EY:()=>d,Fp:()=>s,gR:()=>r});var n=l(744),c=l(950),o=l(6989);function a(e,t,l,a){return d=>a?(0,c.o)(e,a):fetch("".concat(n.kP).concat(d),{method:t,body:l}).then(async t=>{if(!t.ok)throw{code:t.status,msg:t.statusText,raw:t.text()};return(0,o.Er)(e,new Uint8Array(await t.arrayBuffer()))})}function d(e,t,l,c){return a=>fetch("".concat(n.kP).concat(a),{method:l,body:c}).then(async l=>{if(!l.ok)throw{code:l.status,msg:l.statusText,raw:l.text()};return t((0,o.Er)(e,new Uint8Array(await l.arrayBuffer())))})}let s=async(e,t)=>{let l=await fetch("".concat(n.kP).concat(e),{method:void 0!==t.method?t.method:"POST",body:t.body});return l.ok?void 0===t.process?{}:{data:t.process(l)}:{error:{code:l.status,msg:l.text()}}};function r(e,t,l){return(c,a)=>{let d,{next:s}=a,r=new URL(""!==n.kP?n.kP:window.location.toString());r.pathname=c,r.protocol="https:"===r.protocol?"wss:":"ws:";let u=!1,i=()=>{u||(console.log("connecting to: ".concat(r)),(d=new WebSocket(r)).binaryType="arraybuffer",d.addEventListener("open",t=>{console.log("connect to: ".concat(r,", event type: ").concat(t.type)),null==d||d.send(e)}),d.addEventListener("message",e=>{let n=(0,o.Er)(t,new Uint8Array(e.data));s(null,e=>l(e,n))}),d.addEventListener("error",e=>{let t="websocket have some error";s({msg:t,code:500}),console.log(t,e.type)}),d.addEventListener("close",e=>{console.log("websocket closed, code: "+e.code),s(null,void 0),u||(console.log("reconnect after 1 seconds"),setTimeout(i,1e3))}))};return i(),()=>{u=!0,void 0!==d&&(console.log("close: ".concat(c)),d.close(),d=void 0)}}}},368:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>R});var n=l(5155),c=l(2963),o=l(9141),a=l(4995),d=l(8927),s=l(3577),r=l(9678),u=l(8170),i=l(9169),b=l(6903),m=l(2115),h=l(700),g=l.n(h);let p=(0,s.v)(r.w,{seconds:BigInt(0),nanos:0}),R=function(){var e;let[t,l]=(0,m.useState)("Time"),[s,r]=(0,m.useState)(1),h=e=>e===t?r(-s):l(e),R=e=>e===t?(0,n.jsx)("i",{className:-1===s?"bi bi-sort-up-alt":"bi bi-sort-down-alt"}):(0,n.jsx)(n.Fragment,{}),v=(e,t)=>e>t?-1*s:1*s,A=e=>(0,n.jsxs)("th",{className:g().clickable,onClick:()=>h(e),children:[e,R(e)]}),{data:G,error:y,isLoading:W,mutate:Z}=(0,a.Ay)("/conn/failed_history",(0,d.AD)(b.Bh));return y?(0,n.jsx)(i.A,{code:y.code,children:y.msg}):W||void 0===G?(0,n.jsx)(i.A,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.A,{variant:"outline-primary",className:"mb-3",onClick:()=>Z(),children:"Refresh"}),(0,n.jsxs)(o.A,{hover:!0,striped:!0,size:"sm",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[A("Time"),(0,n.jsx)("th",{children:"Net"}),A("Host"),A("Count"),(0,n.jsx)("th",{children:"Err"}),G.dumpProcessEnabled&&A("Proc")]})}),(0,n.jsx)("tbody",{className:"text-break",children:null==G?void 0:null===(e=G.objects)||void 0===e?void 0:e.filter(e=>e.time).sort((e,l)=>{var n,c;return"Host"===t?v(e.host,l.host):"Proc"===t?v(e.process,l.process):"Count"===t?v(e.failedCount,l.failedCount):v((0,u.FP)(null!==(n=e.time)&&void 0!==n?n:p),(0,u.FP)(null!==(c=l.time)&&void 0!==c?c:p))}).map((e,t)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,u.FP)(e.time).toLocaleString()}),(0,n.jsx)("td",{children:e.protocol}),(0,n.jsx)("td",{children:e.host}),(0,n.jsx)("td",{children:Number(e.failedCount)}),(0,n.jsx)("td",{children:e.error}),G.dumpProcessEnabled&&(0,n.jsx)("td",{children:e.process})]},"bh-"+t))})]})]})}},6342:(e,t,l)=>{"use strict";l.d(t,{L9:()=>n,NW:()=>c});let n=(0,l(6788).w)("ChZzdGF0aXN0aWMvY29uZmlnLnByb3RvEhF5dWhhaWluLnN0YXRpc3RpYyKEAQoIbmV0X3R5cGUSNQoJY29ubl90eXBlGAEgASgOMhcueXVoYWlpbi5zdGF0aXN0aWMudHlwZVIJY29ubl90eXBlEkEKD3VuZGVybHlpbmdfdHlwZRgCIAEoDjIXLnl1aGFpaW4uc3RhdGlzdGljLnR5cGVSD3VuZGVybHlpbmdfdHlwZSK4AQoKY29ubmVjdGlvbhIMCgRhZGRyGAEgASgJEgoKAmlkGAIgASgEEikKBHR5cGUYAyABKAsyGy55dWhhaWluLnN0YXRpc3RpYy5uZXRfdHlwZRI3CgVleHRyYRgEIAMoCzIoLnl1aGFpaW4uc3RhdGlzdGljLmNvbm5lY3Rpb24uRXh0cmFFbnRyeRosCgpFeHRyYUVudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEqjwEKBHR5cGUSCwoHdW5rbm93bhAAEgcKA3RjcBABEggKBHRjcDQQAhIICgR0Y3A2EAMSBwoDdWRwEAQSCAoEdWRwNBAFEggKBHVkcDYQBhIGCgJpcBAHEgcKA2lwNBAIEgcKA2lwNhAJEggKBHVuaXgQChIMCgh1bml4Z3JhbRALEg4KCnVuaXhwYWNrZXQQDEIzWjFnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3Mvc3RhdGlzdGljYgZwcm90bzM");var c=function(e){return e[e.unknown=0]="unknown",e[e.tcp=1]="tcp",e[e.tcp4=2]="tcp4",e[e.tcp6=3]="tcp6",e[e.udp=4]="udp",e[e.udp4=5]="udp4",e[e.udp6=6]="udp6",e[e.ip=7]="ip",e[e.ip4=8]="ip4",e[e.ip6=9]="ip6",e[e.unix=10]="unix",e[e.unixgram=11]="unixgram",e[e.unixpacket=12]="unixpacket",e}({})},6903:(e,t,l)=>{"use strict";l.d(t,{Bh:()=>b,SE:()=>i,YA:()=>u,dE:()=>r});var n=l(6788),c=l(8123),o=l(9297),a=l(9678),d=l(6342);let s=(0,n.w)("ChtzdGF0aXN0aWMvZ3JwYy9jb25maWcucHJvdG8SIHl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlIi4KCnRvdGFsX2Zsb3cSEAoIZG93bmxvYWQYASABKAQSDgoGdXBsb2FkGAIgASgEIpcCCgtub3RpZnlfZGF0YRJCCgp0b3RhbF9mbG93GAMgASgLMiwueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UudG90YWxfZmxvd0gAEloKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMYASABKAsyOC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfbmV3X2Nvbm5lY3Rpb25zSAASYAoZbm90aWZ5X3JlbW92ZV9jb25uZWN0aW9ucxgCIAEoCzI7Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnNIAEIGCgRkYXRhIkwKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMSMgoLY29ubmVjdGlvbnMYASADKAsyHS55dWhhaWluLnN0YXRpc3RpYy5jb25uZWN0aW9uIigKGW5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnMSCwoDaWRzGAEgAygEIp4BCg5mYWlsZWRfaGlzdG9yeRIQCghwcm90b2NvbBgBIAEoCRIMCgRob3N0GAIgASgJEg0KBWVycm9yGAMgASgJEg8KB3Byb2Nlc3MYBCABKAkSKAoEdGltZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASIgoMZmFpbGVkX2NvdW50GAYgASgEUgxmYWlsZWRfY291bnQijAEKE2ZhaWxlZF9oaXN0b3J5X2xpc3QSQQoHb2JqZWN0cxgBIAMoCzIwLnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLmZhaWxlZF9oaXN0b3J5EjIKFGR1bXBfcHJvY2Vzc19lbmFibGVkGAIgASgIUhRkdW1wX3Byb2Nlc3NfZW5hYmxlZDLOAwoLY29ubmVjdGlvbnMSWQoFY29ubnMSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaOC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfbmV3X2Nvbm5lY3Rpb25zEmEKCmNsb3NlX2Nvbm4SOy55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfcmVtb3ZlX2Nvbm5lY3Rpb25zGhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5Ek0KBXRvdGFsEhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GiwueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UudG90YWxfZmxvdxJRCgZub3RpZnkSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaLS55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfZGF0YTABEl8KDmZhaWxlZF9oaXN0b3J5EhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GjUueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UuZmFpbGVkX2hpc3RvcnlfbGlzdEI7WjlnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3Mvc3RhdGlzdGljL3NlcnZpY2ViBnByb3RvMw",[o.t,d.L9,a.i]),r=(0,c.Z)(s,0),u=(0,c.Z)(s,1),i=(0,c.Z)(s,3),b=(0,c.Z)(s,5)},700:e=>{e.exports={clickable:"clickable_clickable__ytaUf"}}},e=>{var t=t=>e(e.s=t);e.O(0,[607,235,995,459,441,517,358],()=>t(4776)),_N_E=e.O()}]);