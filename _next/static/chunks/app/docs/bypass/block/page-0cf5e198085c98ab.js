(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[534],{7867:function(t,n,e){Promise.resolve().then(e.bind(e,8446))},4971:function(t,n,e){"use strict";e.d(n,{$f:function(){return b},Mj:function(){return f},Ti:function(){return u},U9:function(){return g},XE:function(){return m},YO:function(){return l},Z5:function(){return a},dn:function(){return i},fG:function(){return c},gU:function(){return r},gW:function(){return v},q$:function(){return h},r:function(){return d},rQ:function(){return o}});var c="",o="https://clients3.google.com/generate_204",r="dns.nextdns.io:853",l=!0,u="http://ip.sb",a="stun.syncthing.net:3478",i="stun.nextcloud.com:443";let s=()=>{let t=localStorage.getItem("api_url");c=null!==t?t:"",t=localStorage.getItem("remote_bypass"),null!==(t=localStorage.getItem("latency_http_url"))&&(o=t),null!==(t=localStorage.getItem("latency_dns_url"))&&(r=t),null!==(t=localStorage.getItem("latency_ipv6"))&&(l="true"===t),null!==(t=localStorage.getItem("latency_ip_url"))&&(u=t),null!==(t=localStorage.getItem("latency_stun_url"))&&(a=t),null!==(t=localStorage.getItem("latency_stun_tcp_url"))&&(i=t)},d=t=>{Z("api_url",t)},b=t=>{Z("latency_dns_url",t)},m=t=>{Z("latency_http_url",t)},v=t=>{Z("latency_ipv6",t.toString())},g=t=>{Z("latency_ip_url",t)},f=t=>{Z("latency_stun_url",t)},h=t=>{Z("latency_stun_tcp_url",t)},Z=(t,n)=>{""===n?localStorage.removeItem(t):localStorage.setItem(t,n),s()};s()},8446:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return Z}});var c=e(7437),o=e(2808),r=e(6800),l=e.n(r),u=e(2265),a=e(2574);let i=u.forwardRef((t,n)=>{let{bsPrefix:e,className:o,striped:r,bordered:u,borderless:i,hover:s,size:d,variant:b,responsive:m,...v}=t,g=(0,a.vE)(e,"table"),f=l()(o,g,b&&"".concat(g,"-").concat(b),d&&"".concat(g,"-").concat(d),r&&"".concat(g,"-").concat("string"==typeof r?"striped-".concat(r):"striped"),u&&"".concat(g,"-bordered"),i&&"".concat(g,"-borderless"),s&&"".concat(g,"-hover")),h=(0,c.jsx)("table",{...v,className:f,ref:n});if(m){let t="".concat(g,"-responsive");return"string"==typeof m&&(t="".concat(t,"-").concat(m)),(0,c.jsx)("div",{className:t,children:h})}return h});var s=e(1617),d=e(879),b=e(5427),m=e(8537),v=e(7895);function g(t){return new Date(1e3*Number(t.seconds)+Math.ceil(t.nanos/1e6))}var f=e(716);let h=(0,m.U)(v.O,{seconds:BigInt(0),nanos:0});var Z=function(){var t;let{data:n,error:e,isLoading:r,mutate:l}=(0,s.ZP)("/bypass/block_history",(0,d.D4)(b.JS));return e?(0,c.jsx)(f.Z,{code:e.code,children:e.msg}):r||void 0===n?(0,c.jsx)(f.Z,{}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.Z,{variant:"outline-primary",onClick:()=>l(),children:"Refresh"}),(0,c.jsxs)(i,{hover:!0,striped:!0,children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"#"}),(0,c.jsx)("th",{children:"Time"}),(0,c.jsx)("th",{children:"Protocol"}),(0,c.jsx)("th",{children:"Host"}),n.dumpProcessEnabled&&(0,c.jsx)("th",{children:"Process"})]})}),(0,c.jsx)("tbody",{children:null==n?void 0:null===(t=n.objects)||void 0===t?void 0:t.sort((t,n)=>{var e,c;return g(null!==(e=t.time)&&void 0!==e?e:h)>g(null!==(c=n.time)&&void 0!==c?c:h)?-1:1}).map((t,e)=>{if(t.time)return(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:e+1}),(0,c.jsx)("td",{children:g(t.time).toLocaleString()}),(0,c.jsx)("td",{children:t.protocol}),(0,c.jsx)("td",{children:t.host}),n.dumpProcessEnabled&&(0,c.jsx)("td",{children:t.process})]},"bh-"+e)})})]})]})}},716:function(t,n,e){"use strict";var c=e(7437),o=e(2514),r=e(6264),l=e.n(r);n.Z=function(t){return(0,c.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==t.children&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(l(),{className:"p2",statusCode:void 0!==t.code?t.code:500,title:t.children})}),(0,c.jsx)("div",{className:"p2",children:(0,c.jsx)(o.Z,{})})]})}},879:function(t,n,e){"use strict";e.d(n,{D4:function(){return l},OV:function(){return u},Uo:function(){return a},o5:function(){return i}});var c=e(4971),o=e(4050),r=e(7764);function l(t,n,e,l){return u=>l?(0,o.d)(t,l):fetch("".concat(c.fG).concat(u),{method:n,body:e}).then(async n=>{if(!n.ok)throw{code:n.status,msg:n.statusText,raw:n.text()};return(0,r.h4)(t,new Uint8Array(await n.arrayBuffer()))})}function u(t,n,e,o){return l=>fetch("".concat(c.fG).concat(l),{method:e,body:o}).then(async e=>{if(!e.ok)throw{code:e.status,msg:e.statusText,raw:e.text()};return n((0,r.h4)(t,new Uint8Array(await e.arrayBuffer())))})}let a=async(t,n)=>{let e=await fetch("".concat(c.fG).concat(t),{method:void 0!==n.method?n.method:"POST",body:n.body});return e.ok?void 0===n.process?{}:{data:n.process(e)}:{error:{code:e.status,msg:e.text()}}};function i(t,n,e){return(o,l)=>{let u,{next:a}=l,i=new URL(""!==c.fG?c.fG:window.location.toString());i.pathname=o,i.protocol="https:"===i.protocol?"wss:":"ws:";let s=!1,d=()=>{s||(console.log("connecting to: ".concat(i)),(u=new WebSocket(i)).binaryType="arraybuffer",u.addEventListener("open",n=>{console.log("connect to: ".concat(i,", event type: ").concat(n.type)),null==u||u.send(t)}),u.addEventListener("message",t=>{let c=(0,r.h4)(n,new Uint8Array(t.data));a(null,t=>e(t,c))}),u.addEventListener("error",t=>{let n="websocket have some error";a({msg:n,code:500}),console.log(n,t.type)}),u.addEventListener("close",t=>{console.log("websocket closed, code: "+t.code),a(null,void 0),s||(console.log("reconnect after 1 seconds"),setTimeout(d,1e3))}))};return d(),()=>{s=!0,void 0!==u&&(console.log("close: ".concat(o)),u.close(),u=void 0)}}}},5427:function(t,n,e){"use strict";e.d(n,{JS:function(){return b},vr:function(){return d}});var c=e(200),o=e(9320),r=e(2374),l=e(1170),u=e(8516),a=e(3168),i=e(7895);let s=(0,c.l)("Chhjb25maWcvZ3JwYy9jb25maWcucHJvdG8SHXl1aGFpaW4ucHJvdG9zLmNvbmZpZy5zZXJ2aWNlImoKDXRlc3RfcmVzcG9uc2USKQoEbW9kZRgBIAEoCzIbLnl1aGFpaW4uYnlwYXNzLm1vZGVfY29uZmlnEg4KBnJlYXNvbhgCIAEoCRIeCgphZnRlcl9hZGRyGAMgASgJUgphZnRlcl9hZGRyImoKDWJsb2NrX2hpc3RvcnkSEAoIcHJvdG9jb2wYASABKAkSDAoEaG9zdBgCIAEoCRIoCgR0aW1lGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIPCgdwcm9jZXNzGAQgASgJIocBChJibG9ja19oaXN0b3J5X2xpc3QSPQoHb2JqZWN0cxgBIAMoCzIsLnl1aGFpaW4ucHJvdG9zLmNvbmZpZy5zZXJ2aWNlLmJsb2NrX2hpc3RvcnkSMgoUZHVtcF9wcm9jZXNzX2VuYWJsZWQYAiABKAhSFGR1bXBfcHJvY2Vzc19lbmFibGVkMrgBCg5jb25maWdfc2VydmljZRI3CgRsb2FkEhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GhcueXVoYWlpbi5jb25maWcuc2V0dGluZxI3CgRzYXZlEhcueXVoYWlpbi5jb25maWcuc2V0dGluZxoWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRI0CgRpbmZvEhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GhQueXVoYWlpbi5jb25maWcuaW5mbzLiAgoGYnlwYXNzEjYKBGxvYWQSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaFi55dWhhaWluLmJ5cGFzcy5jb25maWcSNgoEc2F2ZRIWLnl1aGFpaW4uYnlwYXNzLmNvbmZpZxoWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRI4CgZyZWxvYWQSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaFi5nb29nbGUucHJvdG9idWYuRW1wdHkSUgoEdGVzdBIcLmdvb2dsZS5wcm90b2J1Zi5TdHJpbmdWYWx1ZRosLnl1aGFpaW4ucHJvdG9zLmNvbmZpZy5zZXJ2aWNlLnRlc3RfcmVzcG9uc2USWgoNYmxvY2tfaGlzdG9yeRIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRoxLnl1aGFpaW4ucHJvdG9zLmNvbmZpZy5zZXJ2aWNlLmJsb2NrX2hpc3RvcnlfbGlzdEI4WjZnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3MvY29uZmlnL3NlcnZpY2ViBnByb3RvMw",[r.rx,l.GZ,u.r,a.hD,i.K]),d=(0,o.L)(s,0),b=(0,o.L)(s,2)},7212:function(t,n,e){"use strict";e.d(n,{FT:function(){return l}});var c=e(2265),o=e(7437);let r=["as","disabled"];function l({tagName:t,disabled:n,href:e,target:c,rel:o,role:r,onClick:l,tabIndex:u=0,type:a}){t||(t=null!=e||null!=c||null!=o?"a":"button");let i={tagName:t};if("button"===t)return[{type:a||"button",disabled:n},i];let s=c=>{var o;if(!n&&("a"!==t||(o=e)&&"#"!==o.trim())||c.preventDefault(),n){c.stopPropagation();return}null==l||l(c)};return"a"===t&&(e||(e="#"),n&&(e=void 0)),[{role:null!=r?r:"button",disabled:void 0,tabIndex:n?void 0:u,href:e,target:"a"===t?c:void 0,"aria-disabled":n||void 0,rel:"a"===t?o:void 0,onClick:s,onKeyDown:t=>{" "===t.key&&(t.preventDefault(),s(t))}},i]}let u=c.forwardRef((t,n)=>{let{as:e,disabled:c}=t,u=function(t,n){if(null==t)return{};var e,c,o={},r=Object.keys(t);for(c=0;c<r.length;c++)e=r[c],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r),[a,{tagName:i}]=l(Object.assign({tagName:e,disabled:c},u));return(0,o.jsx)(i,Object.assign({},u,a,{ref:n}))});u.displayName="Button",n.ZP=u},2808:function(t,n,e){"use strict";var c=e(6800),o=e.n(c),r=e(2265),l=e(7212),u=e(2574),a=e(7437);let i=r.forwardRef((t,n)=>{let{as:e,bsPrefix:c,variant:r="primary",size:i,active:s=!1,disabled:d=!1,className:b,...m}=t,v=(0,u.vE)(c,"btn"),[g,{tagName:f}]=(0,l.FT)({tagName:e,disabled:d,...m});return(0,a.jsx)(f,{...g,...m,ref:n,disabled:d,className:o()(b,v,s&&"active",r&&"".concat(v,"-").concat(r),i&&"".concat(v,"-").concat(i),m.href&&d&&"disabled")})});i.displayName="Button",n.Z=i},8933:function(t,n,e){"use strict";function c(t,n,...e){if(0==e.length)return t.enums[n];let o=e.pop();return e.reduce((t,n)=>t.nestedMessages[n],t.messages[n]).nestedEnums[o]}e.d(n,{i:function(){return c}})},8516:function(t,n,e){"use strict";e.d(n,{r:function(){return r},u:function(){return l}});var c=e(200),o=e(9320);let r=(0,c.l)("Chtnb29nbGUvcHJvdG9idWYvZW1wdHkucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIHCgVFbXB0eUJ9ChNjb20uZ29vZ2xlLnByb3RvYnVmQgpFbXB0eVByb3RvUAFaLmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL2VtcHR5cGL4AQGiAgNHUEKqAh5Hb29nbGUuUHJvdG9idWYuV2VsbEtub3duVHlwZXNiBnByb3RvMw"),l=(0,o.L)(r,0)},7895:function(t,n,e){"use strict";e.d(n,{K:function(){return r},O:function(){return l}});var c=e(200),o=e(9320);let r=(0,c.l)("Ch9nb29nbGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3RvEg9nb29nbGUucHJvdG9idWYiKwoJVGltZXN0YW1wEg8KB3NlY29uZHMYASABKAMSDQoFbmFub3MYAiABKAVChQEKE2NvbS5nb29nbGUucHJvdG9idWZCDlRpbWVzdGFtcFByb3RvUAFaMmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3RpbWVzdGFtcHBi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),l=(0,o.L)(r,0)},3168:function(t,n,e){"use strict";e.d(n,{hD:function(){return r},mV:function(){return l}});var c=e(200),o=e(9320);let r=(0,c.l)("Ch5nb29nbGUvcHJvdG9idWYvd3JhcHBlcnMucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIcCgtEb3VibGVWYWx1ZRINCgV2YWx1ZRgBIAEoASIbCgpGbG9hdFZhbHVlEg0KBXZhbHVlGAEgASgCIhsKCkludDY0VmFsdWUSDQoFdmFsdWUYASABKAMiHAoLVUludDY0VmFsdWUSDQoFdmFsdWUYASABKAQiGwoKSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoBSIcCgtVSW50MzJWYWx1ZRINCgV2YWx1ZRgBIAEoDSIaCglCb29sVmFsdWUSDQoFdmFsdWUYASABKAgiHAoLU3RyaW5nVmFsdWUSDQoFdmFsdWUYASABKAkiGwoKQnl0ZXNWYWx1ZRINCgV2YWx1ZRgBIAEoDEKDAQoTY29tLmdvb2dsZS5wcm90b2J1ZkINV3JhcHBlcnNQcm90b1ABWjFnb29nbGUuZ29sYW5nLm9yZy9wcm90b2J1Zi90eXBlcy9rbm93bi93cmFwcGVyc3Bi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),l=(0,o.L)(r,7)}},function(t){t.O(0,[817,485,374,971,23,744],function(){return t(t.s=7867)}),_N_E=t.O()}]);