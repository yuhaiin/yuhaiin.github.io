(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{4776:(e,l,t)=>{Promise.resolve().then(t.bind(t,368))},744:(e,l,t)=>{"use strict";t.d(l,{DH:()=>d,G_:()=>m,Ow:()=>i,Oz:()=>c,VN:()=>R,X3:()=>s,_s:()=>h,dp:()=>b,h$:()=>g,kP:()=>n,mv:()=>p,oH:()=>a,r3:()=>o,u1:()=>u});var n="",c="https://clients3.google.com/generate_204",o="dns.nextdns.io:853",a=!0,d="http://ip.sb",u="stun.syncthing.net:3478",s="stun.nextcloud.com:443";let r=()=>{let e=localStorage.getItem("api_url");n=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(c=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(o=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(a="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(d=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(u=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(s=e)},i=e=>{v("api_url",e)},b=e=>{v("latency_dns_url",e)},m=e=>{v("latency_http_url",e)},p=e=>{v("latency_ipv6",e.toString())},g=e=>{v("latency_ip_url",e)},h=e=>{v("latency_stun_url",e)},R=e=>{v("latency_stun_tcp_url",e)},v=(e,l)=>{""===l?localStorage.removeItem(e):localStorage.setItem(e,l),r()};r()},9169:(e,l,t)=>{"use strict";t.d(l,{A:()=>d});var n=t(5155),c=t(4216),o=t(5554),a=t.n(o);let d=function(e){return(0,n.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,n.jsx)("div",{className:"p2",children:(0,n.jsx)(c.A,{})})]})}},8927:(e,l,t)=>{"use strict";t.d(l,{AD:()=>d,gR:()=>s,kP:()=>u});var n=t(744),c=t(950),o=t(7558),a=t(6989);function d(e,l,t,d){return u=>d?(0,c.o)(e.output,d):fetch("".concat(n.kP).concat(u),{method:l,body:t?(0,o.R)(e.input,t):void 0}).then(async l=>{if(!l.ok)throw{code:l.status,msg:l.statusText,raw:l.text()};return(0,a.Er)(e.output,new Uint8Array(await l.arrayBuffer()))})}async function u(e,l,t,c){let d=await fetch("".concat(n.kP).concat(l),{method:t,body:c?(0,o.R)(e.input,c):void 0});return d.ok?{data:(0,a.Er)(e.output,new Uint8Array(await d.arrayBuffer()))}:{error:{code:d.status,msg:await d.text()}}}function s(e,l,t){return(c,o)=>{let d,{next:u}=o,s=new URL(""!==n.kP?n.kP:window.location.toString());s.pathname=c,s.protocol="https:"===s.protocol?"wss:":"ws:";let r=!1,i=()=>{r||(console.log("connecting to: ".concat(s)),(d=new WebSocket(s)).binaryType="arraybuffer",d.addEventListener("open",l=>{console.log("connect to: ".concat(s,", event type: ").concat(l.type)),null==d||d.send(e)}),d.addEventListener("message",e=>{let n=(0,a.Er)(l,new Uint8Array(e.data));u(null,e=>t(e,n))}),d.addEventListener("error",e=>{let l="websocket have some error";u({msg:l,code:500}),console.log(l,e.type)}),d.addEventListener("close",e=>{console.log("websocket closed, code: "+e.code),u(null,void 0),r||(console.log("reconnect after 1 seconds"),setTimeout(i,1e3))}))};return i(),()=>{r=!0,void 0!==d&&(console.log("close: ".concat(c)),d.close(),d=void 0)}}}},368:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>R});var n=t(5155),c=t(2963),o=t(9141),a=t(4995),d=t(8927),u=t(3577),s=t(9678),r=t(8170),i=t(9169),b=t(6903),m=t(2115),p=t(700),g=t.n(p);let h=(0,u.v)(s.w,{seconds:BigInt(0),nanos:0}),R=function(){var e;let[l,t]=(0,m.useState)("Time"),[u,s]=(0,m.useState)(1),p=e=>e===l?s(-u):t(e),R=e=>e===l?(0,n.jsx)("i",{className:-1===u?"bi bi-sort-up-alt":"bi bi-sort-down-alt"}):(0,n.jsx)(n.Fragment,{}),v=(e,l)=>e>l?-1*u:1*u,A=e=>(0,n.jsxs)("th",{className:g().clickable,onClick:()=>p(e),children:[e,R(e)]}),{data:G,error:y,isLoading:W,mutate:Z}=(0,a.Ay)("/conn/failed_history",(0,d.AD)(b.oQ.method.failed_history));return y?(0,n.jsx)(i.A,{code:y.code,children:y.msg}):W||void 0===G?(0,n.jsx)(i.A,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.A,{variant:"outline-primary",className:"mb-3",onClick:()=>Z(),children:"Refresh"}),(0,n.jsxs)(o.A,{hover:!0,striped:!0,size:"sm",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[A("Time"),(0,n.jsx)("th",{children:"Net"}),A("Host"),A("Count"),(0,n.jsx)("th",{children:"Err"}),G.dumpProcessEnabled&&A("Proc")]})}),(0,n.jsx)("tbody",{className:"text-break",children:null==G?void 0:null===(e=G.objects)||void 0===e?void 0:e.filter(e=>e.time).sort((e,t)=>{var n,c;return"Host"===l?v(e.host,t.host):"Proc"===l?v(e.process,t.process):"Count"===l?v(e.failedCount,t.failedCount):v((0,r.FP)(null!==(n=e.time)&&void 0!==n?n:h),(0,r.FP)(null!==(c=t.time)&&void 0!==c?c:h))}).map((e,l)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,r.FP)(e.time).toLocaleString()}),(0,n.jsx)("td",{children:e.protocol}),(0,n.jsx)("td",{children:e.host}),(0,n.jsx)("td",{children:Number(e.failedCount)}),(0,n.jsx)("td",{children:e.error}),G.dumpProcessEnabled&&(0,n.jsx)("td",{children:e.process})]},"bh-"+l))})]})]})}},6342:(e,l,t)=>{"use strict";t.d(l,{L9:()=>n,NW:()=>c});let n=(0,t(6788).w)("ChZzdGF0aXN0aWMvY29uZmlnLnByb3RvEhF5dWhhaWluLnN0YXRpc3RpYyKEAQoIbmV0X3R5cGUSNQoJY29ubl90eXBlGAEgASgOMhcueXVoYWlpbi5zdGF0aXN0aWMudHlwZVIJY29ubl90eXBlEkEKD3VuZGVybHlpbmdfdHlwZRgCIAEoDjIXLnl1aGFpaW4uc3RhdGlzdGljLnR5cGVSD3VuZGVybHlpbmdfdHlwZSK4AQoKY29ubmVjdGlvbhIMCgRhZGRyGAEgASgJEgoKAmlkGAIgASgEEikKBHR5cGUYAyABKAsyGy55dWhhaWluLnN0YXRpc3RpYy5uZXRfdHlwZRI3CgVleHRyYRgEIAMoCzIoLnl1aGFpaW4uc3RhdGlzdGljLmNvbm5lY3Rpb24uRXh0cmFFbnRyeRosCgpFeHRyYUVudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEqjwEKBHR5cGUSCwoHdW5rbm93bhAAEgcKA3RjcBABEggKBHRjcDQQAhIICgR0Y3A2EAMSBwoDdWRwEAQSCAoEdWRwNBAFEggKBHVkcDYQBhIGCgJpcBAHEgcKA2lwNBAIEgcKA2lwNhAJEggKBHVuaXgQChIMCgh1bml4Z3JhbRALEg4KCnVuaXhwYWNrZXQQDEIzWjFnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3Mvc3RhdGlzdGljYgZwcm90bzM");var c=function(e){return e[e.unknown=0]="unknown",e[e.tcp=1]="tcp",e[e.tcp4=2]="tcp4",e[e.tcp6=3]="tcp6",e[e.udp=4]="udp",e[e.udp4=5]="udp4",e[e.udp6=6]="udp6",e[e.ip=7]="ip",e[e.ip4=8]="ip4",e[e.ip6=9]="ip6",e[e.unix=10]="unix",e[e.unixgram=11]="unixgram",e[e.unixpacket=12]="unixpacket",e}({})},6903:(e,l,t)=>{"use strict";t.d(l,{SE:()=>i,YA:()=>r,oQ:()=>b});var n=t(6788),c=t(8123),o=t(4395),a=t(9297),d=t(9678),u=t(6342);let s=(0,n.w)("ChtzdGF0aXN0aWMvZ3JwYy9jb25maWcucHJvdG8SIHl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlIi4KCnRvdGFsX2Zsb3cSEAoIZG93bmxvYWQYASABKAQSDgoGdXBsb2FkGAIgASgEIpcCCgtub3RpZnlfZGF0YRJCCgp0b3RhbF9mbG93GAMgASgLMiwueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UudG90YWxfZmxvd0gAEloKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMYASABKAsyOC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfbmV3X2Nvbm5lY3Rpb25zSAASYAoZbm90aWZ5X3JlbW92ZV9jb25uZWN0aW9ucxgCIAEoCzI7Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnNIAEIGCgRkYXRhIkwKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMSMgoLY29ubmVjdGlvbnMYASADKAsyHS55dWhhaWluLnN0YXRpc3RpYy5jb25uZWN0aW9uIigKGW5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnMSCwoDaWRzGAEgAygEIp4BCg5mYWlsZWRfaGlzdG9yeRIQCghwcm90b2NvbBgBIAEoCRIMCgRob3N0GAIgASgJEg0KBWVycm9yGAMgASgJEg8KB3Byb2Nlc3MYBCABKAkSKAoEdGltZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASIgoMZmFpbGVkX2NvdW50GAYgASgEUgxmYWlsZWRfY291bnQijAEKE2ZhaWxlZF9oaXN0b3J5X2xpc3QSQQoHb2JqZWN0cxgBIAMoCzIwLnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLmZhaWxlZF9oaXN0b3J5EjIKFGR1bXBfcHJvY2Vzc19lbmFibGVkGAIgASgIUhRkdW1wX3Byb2Nlc3NfZW5hYmxlZDLOAwoLY29ubmVjdGlvbnMSWQoFY29ubnMSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaOC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfbmV3X2Nvbm5lY3Rpb25zEmEKCmNsb3NlX2Nvbm4SOy55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfcmVtb3ZlX2Nvbm5lY3Rpb25zGhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5Ek0KBXRvdGFsEhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GiwueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UudG90YWxfZmxvdxJRCgZub3RpZnkSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaLS55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfZGF0YTABEl8KDmZhaWxlZF9oaXN0b3J5EhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GjUueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UuZmFpbGVkX2hpc3RvcnlfbGlzdEI7WjlnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3Mvc3RhdGlzdGljL3NlcnZpY2ViBnByb3RvMw",[a.t,u.L9,d.i]),r=(0,c.Z)(s,1),i=(0,c.Z)(s,3),b=(0,o.Z)(s,0)},700:e=>{e.exports={clickable:"clickable_clickable__ytaUf"}}},e=>{var l=l=>e(e.s=l);e.O(0,[607,295,995,923,441,517,358],()=>l(4776)),_N_E=e.O()}]);