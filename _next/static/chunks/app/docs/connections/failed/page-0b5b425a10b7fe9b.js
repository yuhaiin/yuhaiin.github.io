(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7956],{8487:function(n,t,e){Promise.resolve().then(e.bind(e,3825))},798:function(n,t,e){"use strict";e.d(t,{$f:function(){return b},Mj:function(){return p},Ti:function(){return u},U9:function(){return g},XE:function(){return m},YO:function(){return r},Z5:function(){return a},dn:function(){return d},fG:function(){return c},gU:function(){return o},gW:function(){return h},q$:function(){return G},r:function(){return s},rQ:function(){return l}});var c="",l="https://clients3.google.com/generate_204",o="dns.nextdns.io:853",r=!0,u="http://ip.sb",a="stun.syncthing.net:3478",d="stun.nextcloud.com:443";let i=()=>{let n=localStorage.getItem("api_url");c=null!==n?n:"",n=localStorage.getItem("remote_bypass"),null!==(n=localStorage.getItem("latency_http_url"))&&(l=n),null!==(n=localStorage.getItem("latency_dns_url"))&&(o=n),null!==(n=localStorage.getItem("latency_ipv6"))&&(r="true"===n),null!==(n=localStorage.getItem("latency_ip_url"))&&(u=n),null!==(n=localStorage.getItem("latency_stun_url"))&&(a=n),null!==(n=localStorage.getItem("latency_stun_tcp_url"))&&(d=n)},s=n=>{R("api_url",n)},b=n=>{R("latency_dns_url",n)},m=n=>{R("latency_http_url",n)},h=n=>{R("latency_ipv6",n.toString())},g=n=>{R("latency_ip_url",n)},p=n=>{R("latency_stun_url",n)},G=n=>{R("latency_stun_tcp_url",n)},R=(n,t)=>{""===t?localStorage.removeItem(n):localStorage.setItem(n,t),i()};i()},6263:function(n,t,e){"use strict";var c=e(7437),l=e(279),o=e(914),r=e.n(o);t.Z=function(n){return(0,c.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==n.children&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r(),{className:"p2",statusCode:void 0!==n.code?n.code:500,title:n.children})}),(0,c.jsx)("div",{className:"p2",children:(0,c.jsx)(l.Z,{})})]})}},5594:function(n,t,e){"use strict";e.d(t,{D4:function(){return r},OV:function(){return u},Uo:function(){return a},o5:function(){return d}});var c=e(798),l=e(3334),o=e(4504);function r(n,t,e,r){return u=>r?(0,l.d)(n,r):fetch("".concat(c.fG).concat(u),{method:t,body:e}).then(async t=>{if(!t.ok)throw{code:t.status,msg:t.statusText,raw:t.text()};return(0,o.h4)(n,new Uint8Array(await t.arrayBuffer()))})}function u(n,t,e,l){return r=>fetch("".concat(c.fG).concat(r),{method:e,body:l}).then(async e=>{if(!e.ok)throw{code:e.status,msg:e.statusText,raw:e.text()};return t((0,o.h4)(n,new Uint8Array(await e.arrayBuffer())))})}let a=async(n,t)=>{let e=await fetch("".concat(c.fG).concat(n),{method:void 0!==t.method?t.method:"POST",body:t.body});return e.ok?void 0===t.process?{}:{data:t.process(e)}:{error:{code:e.status,msg:e.text()}}};function d(n,t,e){return(l,r)=>{let u,{next:a}=r,d=new URL(""!==c.fG?c.fG:window.location.toString());d.pathname=l,d.protocol="https:"===d.protocol?"wss:":"ws:";let i=!1,s=()=>{i||(console.log("connecting to: ".concat(d)),(u=new WebSocket(d)).binaryType="arraybuffer",u.addEventListener("open",t=>{console.log("connect to: ".concat(d,", event type: ").concat(t.type)),null==u||u.send(n)}),u.addEventListener("message",n=>{let c=(0,o.h4)(t,new Uint8Array(n.data));a(null,n=>e(n,c))}),u.addEventListener("error",n=>{let t="websocket have some error";a({msg:t,code:500}),console.log(t,n.type)}),u.addEventListener("close",n=>{console.log("websocket closed, code: "+n.code),a(null,void 0),i||(console.log("reconnect after 1 seconds"),setTimeout(s,1e3))}))};return s(),()=>{i=!0,void 0!==u&&(console.log("close: ".concat(l)),u.close(),u=void 0)}}}},3825:function(n,t,e){"use strict";e.r(t);var c=e(7437),l=e(4076),o=e(4273),r=e(5118),u=e(5594),a=e(8560),d=e(1074),i=e(5645),s=e(6263),b=e(4266),m=e(2265),h=e(7614),g=e.n(h);let p=(0,a.U)(d.O,{seconds:BigInt(0),nanos:0});t.default=function(){var n;let[t,e]=(0,m.useState)("Time"),[a,d]=(0,m.useState)(1),h=n=>n===t?d(-a):e(n),G=n=>n===t?(0,c.jsx)("i",{className:-1===a?"bi bi-sort-up-alt":"bi bi-sort-down-alt"}):(0,c.jsx)(c.Fragment,{}),R=(n,t)=>n>t?-1*a:1*a,f=n=>(0,c.jsxs)("th",{className:g().clickable,onClick:()=>h(n),children:[n,G(n)]}),{data:v,error:y,isLoading:Z,mutate:W}=(0,r.ZP)("/conn/failed_history",(0,u.D4)(b.xB));return y?(0,c.jsx)(s.Z,{code:y.code,children:y.msg}):Z||void 0===v?(0,c.jsx)(s.Z,{}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{variant:"outline-primary",className:"mb-3",onClick:()=>W(),children:"Refresh"}),(0,c.jsxs)(o.Z,{hover:!0,striped:!0,size:"sm",children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[f("Time"),(0,c.jsx)("th",{children:"Net"}),f("Host"),f("Count"),(0,c.jsx)("th",{children:"Err"}),v.dumpProcessEnabled&&f("Proc")]})}),(0,c.jsx)("tbody",{className:"text-break",children:null==v?void 0:null===(n=v.objects)||void 0===n?void 0:n.filter(n=>n.time).sort((n,e)=>{var c,l;return"Host"===t?R(n.host,e.host):"Proc"===t?R(n.process,e.process):"Count"===t?R(n.failedCount,e.failedCount):R((0,i.r1)(null!==(c=n.time)&&void 0!==c?c:p),(0,i.r1)(null!==(l=e.time)&&void 0!==l?l:p))}).map((n,t)=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:(0,i.r1)(n.time).toLocaleString()}),(0,c.jsx)("td",{children:n.protocol}),(0,c.jsx)("td",{children:n.host}),(0,c.jsx)("td",{children:Number(n.failedCount)}),(0,c.jsx)("td",{children:n.error}),v.dumpProcessEnabled&&(0,c.jsx)("td",{children:n.process})]},"bh-"+t))})]})]})}},8208:function(n,t,e){"use strict";var c,l;e.d(t,{dt:function(){return c},rH:function(){return o}});let o=(0,e(7472).l)("ChZzdGF0aXN0aWMvY29uZmlnLnByb3RvEhF5dWhhaWluLnN0YXRpc3RpYyKEAQoIbmV0X3R5cGUSNQoJY29ubl90eXBlGAEgASgOMhcueXVoYWlpbi5zdGF0aXN0aWMudHlwZVIJY29ubl90eXBlEkEKD3VuZGVybHlpbmdfdHlwZRgCIAEoDjIXLnl1aGFpaW4uc3RhdGlzdGljLnR5cGVSD3VuZGVybHlpbmdfdHlwZSK4AQoKY29ubmVjdGlvbhIMCgRhZGRyGAEgASgJEgoKAmlkGAIgASgEEikKBHR5cGUYAyABKAsyGy55dWhhaWluLnN0YXRpc3RpYy5uZXRfdHlwZRI3CgVleHRyYRgEIAMoCzIoLnl1aGFpaW4uc3RhdGlzdGljLmNvbm5lY3Rpb24uRXh0cmFFbnRyeRosCgpFeHRyYUVudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEqjwEKBHR5cGUSCwoHdW5rbm93bhAAEgcKA3RjcBABEggKBHRjcDQQAhIICgR0Y3A2EAMSBwoDdWRwEAQSCAoEdWRwNBAFEggKBHVkcDYQBhIGCgJpcBAHEgcKA2lwNBAIEgcKA2lwNhAJEggKBHVuaXgQChIMCgh1bml4Z3JhbRALEg4KCnVuaXhwYWNrZXQQDEIzWjFnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3Mvc3RhdGlzdGljYgZwcm90bzM");(l=c||(c={}))[l.unknown=0]="unknown",l[l.tcp=1]="tcp",l[l.tcp4=2]="tcp4",l[l.tcp6=3]="tcp6",l[l.udp=4]="udp",l[l.udp4=5]="udp4",l[l.udp6=6]="udp6",l[l.ip=7]="ip",l[l.ip4=8]="ip4",l[l.ip6=9]="ip6",l[l.unix=10]="unix",l[l.unixgram=11]="unixgram",l[l.unixpacket=12]="unixpacket"},4266:function(n,t,e){"use strict";e.d(t,{Ei:function(){return d},TX:function(){return i},jz:function(){return s},xB:function(){return b}});var c=e(7472),l=e(5369),o=e(2854),r=e(1074),u=e(8208);let a=(0,c.l)("ChtzdGF0aXN0aWMvZ3JwYy9jb25maWcucHJvdG8SIHl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlIi4KCnRvdGFsX2Zsb3cSEAoIZG93bmxvYWQYASABKAQSDgoGdXBsb2FkGAIgASgEIpcCCgtub3RpZnlfZGF0YRJCCgp0b3RhbF9mbG93GAMgASgLMiwueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UudG90YWxfZmxvd0gAEloKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMYASABKAsyOC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfbmV3X2Nvbm5lY3Rpb25zSAASYAoZbm90aWZ5X3JlbW92ZV9jb25uZWN0aW9ucxgCIAEoCzI7Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnNIAEIGCgRkYXRhIkwKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMSMgoLY29ubmVjdGlvbnMYASADKAsyHS55dWhhaWluLnN0YXRpc3RpYy5jb25uZWN0aW9uIigKGW5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnMSCwoDaWRzGAEgAygEIp4BCg5mYWlsZWRfaGlzdG9yeRIQCghwcm90b2NvbBgBIAEoCRIMCgRob3N0GAIgASgJEg0KBWVycm9yGAMgASgJEg8KB3Byb2Nlc3MYBCABKAkSKAoEdGltZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASIgoMZmFpbGVkX2NvdW50GAYgASgEUgxmYWlsZWRfY291bnQijAEKE2ZhaWxlZF9oaXN0b3J5X2xpc3QSQQoHb2JqZWN0cxgBIAMoCzIwLnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLmZhaWxlZF9oaXN0b3J5EjIKFGR1bXBfcHJvY2Vzc19lbmFibGVkGAIgASgIUhRkdW1wX3Byb2Nlc3NfZW5hYmxlZDLOAwoLY29ubmVjdGlvbnMSWQoFY29ubnMSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaOC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfbmV3X2Nvbm5lY3Rpb25zEmEKCmNsb3NlX2Nvbm4SOy55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfcmVtb3ZlX2Nvbm5lY3Rpb25zGhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5Ek0KBXRvdGFsEhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GiwueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UudG90YWxfZmxvdxJRCgZub3RpZnkSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaLS55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfZGF0YTABEl8KDmZhaWxlZF9oaXN0b3J5EhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GjUueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UuZmFpbGVkX2hpc3RvcnlfbGlzdEI7WjlnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3Mvc3RhdGlzdGljL3NlcnZpY2ViBnByb3RvMw",[o.r,u.rH,r.K]),d=(0,l.L)(a,0),i=(0,l.L)(a,1),s=(0,l.L)(a,3),b=(0,l.L)(a,5)},7614:function(n){n.exports={clickable:"clickable_clickable__ytaUf"}}},function(n){n.O(0,[2470,7439,5118,8394,2971,2117,1744],function(){return n(n.s=8487)}),_N_E=n.O()}]);