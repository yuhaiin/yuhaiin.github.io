(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[956],{8487:function(n,t,e){Promise.resolve().then(e.bind(e,3825))},798:function(n,t,e){"use strict";e.d(t,{$f:function(){return m},Mj:function(){return g},Ti:function(){return u},U9:function(){return p},XE:function(){return b},YO:function(){return r},Z5:function(){return d},dn:function(){return a},fG:function(){return c},gU:function(){return o},gW:function(){return h},q$:function(){return G},r:function(){return i},rQ:function(){return l}});var c="",l="https://clients3.google.com/generate_204",o="dns.nextdns.io:853",r=!0,u="http://ip.sb",d="stun.syncthing.net:3478",a="stun.nextcloud.com:443";let s=()=>{let n=localStorage.getItem("api_url");c=null!==n?n:"",n=localStorage.getItem("remote_bypass"),null!==(n=localStorage.getItem("latency_http_url"))&&(l=n),null!==(n=localStorage.getItem("latency_dns_url"))&&(o=n),null!==(n=localStorage.getItem("latency_ipv6"))&&(r="true"===n),null!==(n=localStorage.getItem("latency_ip_url"))&&(u=n),null!==(n=localStorage.getItem("latency_stun_url"))&&(d=n),null!==(n=localStorage.getItem("latency_stun_tcp_url"))&&(a=n)},i=n=>{v("api_url",n)},m=n=>{v("latency_dns_url",n)},b=n=>{v("latency_http_url",n)},h=n=>{v("latency_ipv6",n.toString())},p=n=>{v("latency_ip_url",n)},g=n=>{v("latency_stun_url",n)},G=n=>{v("latency_stun_tcp_url",n)},v=(n,t)=>{""===t?localStorage.removeItem(n):localStorage.setItem(n,t),s()};s()},6263:function(n,t,e){"use strict";var c=e(7437),l=e(279),o=e(914),r=e.n(o);t.Z=function(n){return(0,c.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==n.children&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r(),{className:"p2",statusCode:void 0!==n.code?n.code:500,title:n.children})}),(0,c.jsx)("div",{className:"p2",children:(0,c.jsx)(l.Z,{})})]})}},5594:function(n,t,e){"use strict";e.d(t,{D4:function(){return r},OV:function(){return u},Uo:function(){return d},o5:function(){return a}});var c=e(798),l=e(3334),o=e(4504);function r(n,t,e,r){return u=>r?(0,l.d)(n,r):fetch("".concat(c.fG).concat(u),{method:t,body:e}).then(async t=>{if(!t.ok)throw{code:t.status,msg:t.statusText,raw:t.text()};return(0,o.h4)(n,new Uint8Array(await t.arrayBuffer()))})}function u(n,t,e,l){return r=>fetch("".concat(c.fG).concat(r),{method:e,body:l}).then(async e=>{if(!e.ok)throw{code:e.status,msg:e.statusText,raw:e.text()};return t((0,o.h4)(n,new Uint8Array(await e.arrayBuffer())))})}let d=async(n,t)=>{let e=await fetch("".concat(c.fG).concat(n),{method:void 0!==t.method?t.method:"POST",body:t.body});return e.ok?void 0===t.process?{}:{data:t.process(e)}:{error:{code:e.status,msg:e.text()}}};function a(n,t,e){return(l,r)=>{let u,{next:d}=r,a=new URL(""!==c.fG?c.fG:window.location.toString());a.pathname=l,a.protocol="https:"===a.protocol?"wss:":"ws:";let s=!1,i=()=>{s||(console.log("connecting to: ".concat(a)),(u=new WebSocket(a)).binaryType="arraybuffer",u.addEventListener("open",t=>{console.log("connect to: ".concat(a,", event type: ").concat(t.type)),null==u||u.send(n)}),u.addEventListener("message",n=>{let c=(0,o.h4)(t,new Uint8Array(n.data));d(null,n=>e(n,c))}),u.addEventListener("error",n=>{let t="websocket have some error";d({msg:t,code:500}),console.log(t,n.type)}),u.addEventListener("close",n=>{console.log("websocket closed, code: "+n.code),d(null,void 0),s||(console.log("reconnect after 1 seconds"),setTimeout(i,1e3))}))};return i(),()=>{s=!0,void 0!==u&&(console.log("close: ".concat(l)),u.close(),u=void 0)}}}},3825:function(n,t,e){"use strict";e.r(t);var c=e(7437),l=e(4076),o=e(4273),r=e(5118),u=e(5594),d=e(8560),a=e(1074),s=e(5645),i=e(6263),m=e(4266),b=e(2265),h=e(7614),p=e.n(h);let g=(0,d.U)(a.O,{seconds:BigInt(0),nanos:0});t.default=function(){var n;let[t,e]=(0,b.useState)("Time"),[d,a]=(0,b.useState)(1),h=n=>n===t?a(-d):e(n),G=n=>n===t?(0,c.jsx)("i",{className:-1===d?"bi bi-sort-up-alt":"bi bi-sort-down-alt"}):(0,c.jsx)(c.Fragment,{}),v=(n,t)=>n>t?-1*d:1*d,f=n=>(0,c.jsxs)("th",{className:p().clickable,onClick:()=>h(n),children:[n,G(n)]}),{data:y,error:R,isLoading:W,mutate:A}=(0,r.ZP)("/conn/failed_history",(0,u.D4)(m.xB));return R?(0,c.jsx)(i.Z,{code:R.code,children:R.msg}):W||void 0===y?(0,c.jsx)(i.Z,{}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{variant:"outline-primary",className:"mb-3",onClick:()=>A(),children:"Refresh"}),(0,c.jsxs)(o.Z,{hover:!0,striped:!0,children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"#"}),f("Time"),(0,c.jsx)("th",{children:"Protocol"}),f("Host"),(0,c.jsx)("th",{children:"Error"}),y.dumpProcessEnabled&&f("Process")]})}),(0,c.jsx)("tbody",{children:null==y?void 0:null===(n=y.objects)||void 0===n?void 0:n.filter(n=>n.time).sort((n,e)=>{var c,l;return"Host"===t?v(n.host,e.host):"Process"===t?v(n.process,e.process):v((0,s.r1)(null!==(c=n.time)&&void 0!==c?c:g),(0,s.r1)(null!==(l=e.time)&&void 0!==l?l:g))}).map((n,t)=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:t+1}),(0,c.jsx)("td",{children:(0,s.r1)(n.time).toLocaleString()}),(0,c.jsx)("td",{children:n.protocol}),(0,c.jsx)("td",{children:n.host}),(0,c.jsx)("td",{children:n.error}),y.dumpProcessEnabled&&(0,c.jsx)("td",{children:n.process})]},"bh-"+t))})]})]})}},8208:function(n,t,e){"use strict";var c,l;e.d(t,{dt:function(){return c},rH:function(){return o}});let o=(0,e(7472).l)("ChZzdGF0aXN0aWMvY29uZmlnLnByb3RvEhF5dWhhaWluLnN0YXRpc3RpYyKEAQoIbmV0X3R5cGUSNQoJY29ubl90eXBlGAEgASgOMhcueXVoYWlpbi5zdGF0aXN0aWMudHlwZVIJY29ubl90eXBlEkEKD3VuZGVybHlpbmdfdHlwZRgCIAEoDjIXLnl1aGFpaW4uc3RhdGlzdGljLnR5cGVSD3VuZGVybHlpbmdfdHlwZSK4AQoKY29ubmVjdGlvbhIMCgRhZGRyGAEgASgJEgoKAmlkGAIgASgEEikKBHR5cGUYAyABKAsyGy55dWhhaWluLnN0YXRpc3RpYy5uZXRfdHlwZRI3CgVleHRyYRgEIAMoCzIoLnl1aGFpaW4uc3RhdGlzdGljLmNvbm5lY3Rpb24uRXh0cmFFbnRyeRosCgpFeHRyYUVudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEqjwEKBHR5cGUSCwoHdW5rbm93bhAAEgcKA3RjcBABEggKBHRjcDQQAhIICgR0Y3A2EAMSBwoDdWRwEAQSCAoEdWRwNBAFEggKBHVkcDYQBhIGCgJpcBAHEgcKA2lwNBAIEgcKA2lwNhAJEggKBHVuaXgQChIMCgh1bml4Z3JhbRALEg4KCnVuaXhwYWNrZXQQDEIzWjFnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3Mvc3RhdGlzdGljYgZwcm90bzM");(l=c||(c={}))[l.unknown=0]="unknown",l[l.tcp=1]="tcp",l[l.tcp4=2]="tcp4",l[l.tcp6=3]="tcp6",l[l.udp=4]="udp",l[l.udp4=5]="udp4",l[l.udp6=6]="udp6",l[l.ip=7]="ip",l[l.ip4=8]="ip4",l[l.ip6=9]="ip6",l[l.unix=10]="unix",l[l.unixgram=11]="unixgram",l[l.unixpacket=12]="unixpacket"},4266:function(n,t,e){"use strict";e.d(t,{Ei:function(){return a},TX:function(){return s},jz:function(){return i},xB:function(){return m}});var c=e(7472),l=e(5369),o=e(2854),r=e(1074),u=e(8208);let d=(0,c.l)("ChtzdGF0aXN0aWMvZ3JwYy9jb25maWcucHJvdG8SIHl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlIi4KCnRvdGFsX2Zsb3cSEAoIZG93bmxvYWQYASABKAQSDgoGdXBsb2FkGAIgASgEIpcCCgtub3RpZnlfZGF0YRJCCgp0b3RhbF9mbG93GAMgASgLMiwueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UudG90YWxfZmxvd0gAEloKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMYASABKAsyOC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfbmV3X2Nvbm5lY3Rpb25zSAASYAoZbm90aWZ5X3JlbW92ZV9jb25uZWN0aW9ucxgCIAEoCzI7Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnNIAEIGCgRkYXRhIkwKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMSMgoLY29ubmVjdGlvbnMYASADKAsyHS55dWhhaWluLnN0YXRpc3RpYy5jb25uZWN0aW9uIigKGW5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnMSCwoDaWRzGAEgAygEInoKDmZhaWxlZF9oaXN0b3J5EhAKCHByb3RvY29sGAEgASgJEgwKBGhvc3QYAiABKAkSDQoFZXJyb3IYAyABKAkSDwoHcHJvY2VzcxgEIAEoCRIoCgR0aW1lGAUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCKMAQoTZmFpbGVkX2hpc3RvcnlfbGlzdBJBCgdvYmplY3RzGAEgAygLMjAueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UuZmFpbGVkX2hpc3RvcnkSMgoUZHVtcF9wcm9jZXNzX2VuYWJsZWQYAiABKAhSFGR1bXBfcHJvY2Vzc19lbmFibGVkMs4DCgtjb25uZWN0aW9ucxJZCgVjb25ucxIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRo4Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9uZXdfY29ubmVjdGlvbnMSYQoKY2xvc2VfY29ubhI7Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnMaFi5nb29nbGUucHJvdG9idWYuRW1wdHkSTQoFdG90YWwSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaLC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS50b3RhbF9mbG93ElEKBm5vdGlmeRIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRotLnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9kYXRhMAESXwoOZmFpbGVkX2hpc3RvcnkSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaNS55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5mYWlsZWRfaGlzdG9yeV9saXN0QjtaOWdpdGh1Yi5jb20vQXN1dG9ydWZhL3l1aGFpaW4vcGtnL3Byb3Rvcy9zdGF0aXN0aWMvc2VydmljZWIGcHJvdG8z",[o.r,u.rH,r.K]),a=(0,l.L)(d,0),s=(0,l.L)(d,1),i=(0,l.L)(d,3),m=(0,l.L)(d,5)},7614:function(n){n.exports={clickable:"clickable_clickable__ytaUf"}}},function(n){n.O(0,[470,439,118,394,971,117,744],function(){return n(n.s=8487)}),_N_E=n.O()}]);