(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[534],{7867:function(t,n,e){Promise.resolve().then(e.bind(e,9927))},798:function(t,n,e){"use strict";e.d(n,{$f:function(){return m},Mj:function(){return Z},Ti:function(){return s},U9:function(){return h},XE:function(){return b},YO:function(){return r},Z5:function(){return u},dn:function(){return i},fG:function(){return c},gU:function(){return l},gW:function(){return g},q$:function(){return v},r:function(){return d},rQ:function(){return o}});var c="",o="https://clients3.google.com/generate_204",l="dns.nextdns.io:853",r=!0,s="http://ip.sb",u="stun.syncthing.net:3478",i="stun.nextcloud.com:443";let a=()=>{let t=localStorage.getItem("api_url");c=null!==t?t:"",t=localStorage.getItem("remote_bypass"),null!==(t=localStorage.getItem("latency_http_url"))&&(o=t),null!==(t=localStorage.getItem("latency_dns_url"))&&(l=t),null!==(t=localStorage.getItem("latency_ipv6"))&&(r="true"===t),null!==(t=localStorage.getItem("latency_ip_url"))&&(s=t),null!==(t=localStorage.getItem("latency_stun_url"))&&(u=t),null!==(t=localStorage.getItem("latency_stun_tcp_url"))&&(i=t)},d=t=>{W("api_url",t)},m=t=>{W("latency_dns_url",t)},b=t=>{W("latency_http_url",t)},g=t=>{W("latency_ipv6",t.toString())},h=t=>{W("latency_ip_url",t)},Z=t=>{W("latency_stun_url",t)},v=t=>{W("latency_stun_tcp_url",t)},W=(t,n)=>{""===n?localStorage.removeItem(t):localStorage.setItem(t,n),a()};a()},9927:function(t,n,e){"use strict";e.r(n);var c=e(7437),o=e(4076),l=e(4273),r=e(5118),s=e(5594),u=e(4088),i=e(8560),a=e(1074),d=e(5645),m=e(6263),b=e(2265),g=e(7614),h=e.n(g);let Z=(0,i.U)(a.O,{seconds:BigInt(0),nanos:0});n.default=function(){var t;let[n,e]=(0,b.useState)("Time"),[i,a]=(0,b.useState)(1),g=t=>t===n?a(-i):e(t),v=t=>t===n?(0,c.jsx)("i",{className:-1===i?"bi bi-sort-up-alt":"bi bi-sort-down-alt"}):(0,c.jsx)(c.Fragment,{}),W=(t,n)=>t>n?-1*i:1*i,f=t=>(0,c.jsxs)("th",{className:h().clickable,onClick:()=>g(t),children:[t,v(t)]}),{data:p,error:G,isLoading:y,mutate:x}=(0,r.ZP)("/bypass/block_history",(0,s.D4)(u.JS));return G?(0,c.jsx)(m.Z,{code:G.code,children:G.msg}):y||void 0===p?(0,c.jsx)(m.Z,{}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.Z,{variant:"outline-primary",className:"mb-3",onClick:()=>x(),children:"Refresh"}),(0,c.jsxs)(l.Z,{hover:!0,striped:!0,children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"#"}),f("Time"),(0,c.jsx)("th",{children:"Protocol"}),f("Host"),p.dumpProcessEnabled&&f("Process")]})}),(0,c.jsx)("tbody",{children:null==p?void 0:null===(t=p.objects)||void 0===t?void 0:t.filter(t=>t.time).sort((t,e)=>{var c,o;return"Host"===n?W(t.host,e.host):"Process"===n?W(t.process,e.process):W((0,d.r1)(null!==(c=t.time)&&void 0!==c?c:Z),(0,d.r1)(null!==(o=e.time)&&void 0!==o?o:Z))}).map((t,n)=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:n+1}),(0,c.jsx)("td",{children:(0,d.r1)(t.time).toLocaleString()}),(0,c.jsx)("td",{children:t.protocol}),(0,c.jsx)("td",{children:t.host}),p.dumpProcessEnabled&&(0,c.jsx)("td",{children:t.process})]},"bh-"+n))})]})]})}},6263:function(t,n,e){"use strict";var c=e(7437),o=e(279),l=e(914),r=e.n(l);n.Z=function(t){return(0,c.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==t.children&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r(),{className:"p2",statusCode:void 0!==t.code?t.code:500,title:t.children})}),(0,c.jsx)("div",{className:"p2",children:(0,c.jsx)(o.Z,{})})]})}},5594:function(t,n,e){"use strict";e.d(n,{D4:function(){return r},OV:function(){return s},Uo:function(){return u},o5:function(){return i}});var c=e(798),o=e(3334),l=e(4504);function r(t,n,e,r){return s=>r?(0,o.d)(t,r):fetch("".concat(c.fG).concat(s),{method:n,body:e}).then(async n=>{if(!n.ok)throw{code:n.status,msg:n.statusText,raw:n.text()};return(0,l.h4)(t,new Uint8Array(await n.arrayBuffer()))})}function s(t,n,e,o){return r=>fetch("".concat(c.fG).concat(r),{method:e,body:o}).then(async e=>{if(!e.ok)throw{code:e.status,msg:e.statusText,raw:e.text()};return n((0,l.h4)(t,new Uint8Array(await e.arrayBuffer())))})}let u=async(t,n)=>{let e=await fetch("".concat(c.fG).concat(t),{method:void 0!==n.method?n.method:"POST",body:n.body});return e.ok?void 0===n.process?{}:{data:n.process(e)}:{error:{code:e.status,msg:e.text()}}};function i(t,n,e){return(o,r)=>{let s,{next:u}=r,i=new URL(""!==c.fG?c.fG:window.location.toString());i.pathname=o,i.protocol="https:"===i.protocol?"wss:":"ws:";let a=!1,d=()=>{a||(console.log("connecting to: ".concat(i)),(s=new WebSocket(i)).binaryType="arraybuffer",s.addEventListener("open",n=>{console.log("connect to: ".concat(i,", event type: ").concat(n.type)),null==s||s.send(t)}),s.addEventListener("message",t=>{let c=(0,l.h4)(n,new Uint8Array(t.data));u(null,t=>e(t,c))}),s.addEventListener("error",t=>{let n="websocket have some error";u({msg:n,code:500}),console.log(n,t.type)}),s.addEventListener("close",t=>{console.log("websocket closed, code: "+t.code),u(null,void 0),a||(console.log("reconnect after 1 seconds"),setTimeout(d,1e3))}))};return d(),()=>{a=!0,void 0!==s&&(console.log("close: ".concat(o)),s.close(),s=void 0)}}}},4088:function(t,n,e){"use strict";e.d(n,{JS:function(){return m},vr:function(){return d}});var c=e(7472),o=e(5369),l=e(5043),r=e(9301),s=e(2854),u=e(6535),i=e(1074);let a=(0,c.l)("Chhjb25maWcvZ3JwYy9jb25maWcucHJvdG8SHXl1aGFpaW4ucHJvdG9zLmNvbmZpZy5zZXJ2aWNlImoKDXRlc3RfcmVzcG9uc2USKQoEbW9kZRgBIAEoCzIbLnl1aGFpaW4uYnlwYXNzLm1vZGVfY29uZmlnEg4KBnJlYXNvbhgCIAEoCRIeCgphZnRlcl9hZGRyGAMgASgJUgphZnRlcl9hZGRyImoKDWJsb2NrX2hpc3RvcnkSEAoIcHJvdG9jb2wYASABKAkSDAoEaG9zdBgCIAEoCRIoCgR0aW1lGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIPCgdwcm9jZXNzGAQgASgJIocBChJibG9ja19oaXN0b3J5X2xpc3QSPQoHb2JqZWN0cxgBIAMoCzIsLnl1aGFpaW4ucHJvdG9zLmNvbmZpZy5zZXJ2aWNlLmJsb2NrX2hpc3RvcnkSMgoUZHVtcF9wcm9jZXNzX2VuYWJsZWQYAiABKAhSFGR1bXBfcHJvY2Vzc19lbmFibGVkMrgBCg5jb25maWdfc2VydmljZRI3CgRsb2FkEhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GhcueXVoYWlpbi5jb25maWcuc2V0dGluZxI3CgRzYXZlEhcueXVoYWlpbi5jb25maWcuc2V0dGluZxoWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRI0CgRpbmZvEhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GhQueXVoYWlpbi5jb25maWcuaW5mbzLiAgoGYnlwYXNzEjYKBGxvYWQSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaFi55dWhhaWluLmJ5cGFzcy5jb25maWcSNgoEc2F2ZRIWLnl1aGFpaW4uYnlwYXNzLmNvbmZpZxoWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRI4CgZyZWxvYWQSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaFi5nb29nbGUucHJvdG9idWYuRW1wdHkSUgoEdGVzdBIcLmdvb2dsZS5wcm90b2J1Zi5TdHJpbmdWYWx1ZRosLnl1aGFpaW4ucHJvdG9zLmNvbmZpZy5zZXJ2aWNlLnRlc3RfcmVzcG9uc2USWgoNYmxvY2tfaGlzdG9yeRIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRoxLnl1aGFpaW4ucHJvdG9zLmNvbmZpZy5zZXJ2aWNlLmJsb2NrX2hpc3RvcnlfbGlzdEI4WjZnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3MvY29uZmlnL3NlcnZpY2ViBnByb3RvMw",[l.rx,r.GZ,s.r,u.hD,i.K]),d=(0,o.L)(a,0),m=(0,o.L)(a,2)},7614:function(t){t.exports={clickable:"clickable_clickable__ytaUf"}},3639:function(t,n,e){"use strict";function c(t,n,...e){if(0==e.length)return t.enums[n];let o=e.pop();return e.reduce((t,n)=>t.nestedMessages[n],t.messages[n]).nestedEnums[o]}e.d(n,{i:function(){return c}})},6535:function(t,n,e){"use strict";e.d(n,{hD:function(){return l},mV:function(){return r}});var c=e(7472),o=e(5369);let l=(0,c.l)("Ch5nb29nbGUvcHJvdG9idWYvd3JhcHBlcnMucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIcCgtEb3VibGVWYWx1ZRINCgV2YWx1ZRgBIAEoASIbCgpGbG9hdFZhbHVlEg0KBXZhbHVlGAEgASgCIhsKCkludDY0VmFsdWUSDQoFdmFsdWUYASABKAMiHAoLVUludDY0VmFsdWUSDQoFdmFsdWUYASABKAQiGwoKSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoBSIcCgtVSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoDSIaCglCb29sVmFsdWUSDQoFdmFsdWUYASABKAgiHAoLU3RyaW5nVmFsdWUSDQoFdmFsdWUYASABKAkiGwoKQnl0ZXNWYWx1ZRINCgV2YWx1ZRgBIAEoDEKDAQoTY29tLmdvb2dsZS5wcm90b2J1ZkINV3JhcHBlcnNQcm90b1ABWjFnb29nbGUuZ29sYW5nLm9yZy9wcm90b2J1Zi90eXBlcy9rbm93bi93cmFwcGVyc3Bi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),r=(0,o.L)(l,7)}},function(t){t.O(0,[470,439,118,394,43,971,117,744],function(){return t(t.s=7867)}),_N_E=t.O()}]);