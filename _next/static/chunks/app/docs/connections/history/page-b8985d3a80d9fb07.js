(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1],{6781:(e,l,t)=>{Promise.resolve().then(t.bind(t,1759))},348:(e,l,t)=>{"use strict";t.d(l,{DH:()=>a,G_:()=>b,Ow:()=>r,Oz:()=>o,VN:()=>g,X3:()=>s,_s:()=>p,dp:()=>m,h$:()=>h,kP:()=>n,mv:()=>v,oH:()=>d,r3:()=>c,u1:()=>i});let n="",o="https://clients3.google.com/generate_204",c="dns.nextdns.io:853",d=!0,a="http://ip.sb",i="stun.syncthing.net:3478",s="stun.nextcloud.com:443",u=()=>{let e=localStorage.getItem("api_url");n=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(o=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(c=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(d="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(a=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(i=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(s=e)},r=e=>{G("api_url",e)},m=e=>{G("latency_dns_url",e)},b=e=>{G("latency_http_url",e)},v=e=>{G("latency_ipv6",e.toString())},h=e=>{G("latency_ip_url",e)},p=e=>{G("latency_stun_url",e)},g=e=>{G("latency_stun_tcp_url",e)},G=(e,l)=>{""===l?localStorage.removeItem(e):localStorage.setItem(e,l),u()};u()},9169:(e,l,t)=>{"use strict";t.d(l,{$:()=>c,A:()=>d});var n=t(5155),o=t(4216);let c=e=>{let{statusCode:l,title:t,raw:o}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{className:"fw-bold fs-3 text-center",children:[l," | ",(0,n.jsx)("a",{className:"text-reset text-decoration-none fs-6 fw-normal",children:t})]}),o&&(0,n.jsx)("pre",{className:"text-center my-2 text-danger lead",children:o})]})},d=function(e){return(0,n.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c,{statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,n.jsx)("div",{className:"p2",children:(0,n.jsx)(o.A,{})})]})}},8927:(e,l,t)=>{"use strict";t.d(l,{AD:()=>u,cY:()=>s,kP:()=>r,mp:()=>i,zZ:()=>m});var n=t(950),o=t(7558),c=t(6989),d=t(7021),a=t(348);function i(e,l,t){return(0,d.Ay)(s(e,l),u(e,l),t)}let s=(e,l)=>"/".concat(e.typeName,"/").concat(l.name);function u(e,l,t,d,i){return()=>i?(0,n.o)(l.output,i):fetch("".concat(a.kP).concat(s(e,l)),{method:t||"POST",body:d?(0,o.R)(l.input,d):void 0}).then(async e=>{if(!e.ok)throw{code:e.status,msg:e.statusText,raw:e.text()};return(0,c.Er)(l.output,new Uint8Array(await e.arrayBuffer()))})}async function r(e,l,t){let n=await fetch("".concat(a.kP).concat(s(e,l)),{method:"POST",body:t?(0,o.R)(l.input,t):void 0});return n.ok?{data:(0,c.Er)(l.output,new Uint8Array(await n.arrayBuffer()))}:{error:{code:n.status,msg:await n.text()}}}function m(e,l,t,n){return(d,i)=>{let u,{next:r}=i,m=new URL(""!==a.kP?a.kP:window.location.toString());m.pathname=s(e,l),m.protocol="https:"===m.protocol?"wss:":"ws:";let b=!1,v=()=>{b||(console.log("connecting to: ".concat(m)),(u=new WebSocket(m)).binaryType="arraybuffer",u.addEventListener("open",e=>{console.log("connect to: ".concat(m,", event type: ").concat(e.type)),null==u||u.send((0,o.R)(l.input,t))}),u.addEventListener("message",e=>{let t=(0,c.Er)(l.output,new Uint8Array(e.data));r(null,e=>n(t,e))}),u.addEventListener("error",e=>{let l="websocket have some error";r({msg:l,code:500}),console.log(l,e.type)}),u.addEventListener("close",e=>{console.log("websocket closed, code: "+e.code+", isClosed: ",b),r(null,void 0),b||(console.log("reconnect after 2 seconds"),setTimeout(()=>v(),2e3))}))};return v(),()=>{b=!0,void 0!==u&&(console.log("close: ".concat(d)),u.close(),u=void 0)}}}},425:(e,l,t)=>{"use strict";t.d(l,{H:()=>d,T:()=>a});var n=t(5155),o=t(57),c=t(6342);let d=e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.A.Item,{children:(0,n.jsxs)("div",{className:"d-sm-flex",children:[(0,n.jsx)("div",{className:"endpoint-name flex-grow-1 notranslate",children:e.itemKey}),(0,n.jsx)("div",{className:"notranslate text-break",style:{opacity:.6},children:"Hash"===e.itemKey&&e.showModal?(0,n.jsx)("a",{href:"#",onClick:l=>{l.preventDefault(),e.showModal&&e.showModal(e.itemValue)},children:e.itemValue}):e.itemValue})]})})}),a=e=>{var l,t,a,i;let{value:s,endContent:u,showModal:r}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.A,{variant:"flush",children:[(0,n.jsx)(d,{itemKey:"Addr",itemValue:s.addr}),(0,n.jsx)(d,{itemKey:"Type",itemValue:c.NW[null!==(a=null===(l=s.type)||void 0===l?void 0:l.connType)&&void 0!==a?a:0]}),(0,n.jsx)(d,{itemKey:"Underlying",itemValue:c.NW[null!==(i=null===(t=s.type)||void 0===t?void 0:t.underlyingType)&&void 0!==i?i:0]}),Object.entries(s.extra).sort((e,l)=>e<=l?-1:1).map(e=>{let[l,t]=e;return(0,n.jsx)(d,{itemKey:l,itemValue:t,showModal:r},l)}),u]})})}},1759:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>R});var n=t(5155),o=t(3577),c=t(9678),d=t(8170),a=t(2115),i=t(0),s=t(2963),u=t(4216),r=t(9141),m=t(700),b=t.n(m),v=t(9169),h=t(8927),p=t(6342),g=t(6903),G=t(425);let y=(0,o.v)(c.w,{seconds:BigInt(0),nanos:0}),R=function(){var e,l,t,c,m,R,W;let[A,x]=(0,a.useState)("Time"),[Y,j]=(0,a.useState)(1),Z=e=>e===A?j(-Y):x(e),N=e=>e===A?(0,n.jsx)("i",{className:-1===Y?"bi bi-sort-up-alt":"bi bi-sort-down-alt"}):(0,n.jsx)(n.Fragment,{});function w(e,l){return e>l?-1*Y:1*Y}let V=e=>(0,n.jsxs)("th",{className:b().clickable,onClick:()=>Z(e),children:[e,N(e)]}),[S,X]=(0,a.useState)({show:!1}),{data:E,error:I,isLoading:F,isValidating:C,mutate:f}=(0,h.mp)(g.oQ,g.oQ.method.all_history);return I?(0,n.jsx)(v.A,{code:I.code,children:I.msg}):F||void 0===E?(0,n.jsx)(v.A,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{centered:!0,show:S.show,onHide:()=>X(e=>({...e,show:!1})),children:(0,n.jsx)(i.A.Body,{children:(0,n.jsx)(G.T,{value:null!==(m=null===(e=S.data)||void 0===e?void 0:e.connection)&&void 0!==m?m:(0,o.v)(p.mR,{}),endContent:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(G.H,{itemKey:"Count",itemValue:null!==(R=null===(l=S.data)||void 0===l?void 0:l.count.toString())&&void 0!==R?R:"1"}),(0,n.jsx)(G.H,{itemKey:"Time",itemValue:(0,d.FP)(null!==(W=null===(t=S.data)||void 0===t?void 0:t.time)&&void 0!==W?W:y).toLocaleString()})]})})})}),(0,n.jsxs)(s.A,{variant:"outline-primary",className:"mb-3",onClick:()=>f(),disabled:C||F,children:["Refresh ",(C||F)&&(0,n.jsxs)(n.Fragment,{children:["\xa0",(0,n.jsx)(u.A,{size:"sm",animation:"border"})]})]}),(0,n.jsxs)(r.A,{hover:!0,striped:!0,size:"sm",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[V("Time"),V("Host"),(0,n.jsx)("th",{children:"Mode"}),(0,n.jsx)("th",{children:"Net"}),V("Count"),E.dumpProcessEnabled&&V("Proc")]})}),(0,n.jsx)("tbody",{className:"text-break",children:null==E?void 0:null===(c=E.objects)||void 0===c?void 0:c.filter(e=>e.time).sort((e,l)=>{var t,n,o,c,a,i;return"Host"===A?w(null===(t=e.connection)||void 0===t?void 0:t.addr,null===(n=l.connection)||void 0===n?void 0:n.addr):"Proc"===A?w(null===(o=e.connection)||void 0===o?void 0:o.extra.Process,null===(c=l.connection)||void 0===c?void 0:c.extra.Process):"Count"===A?w(e.count,l.count):w((0,d.FP)(null!==(a=e.time)&&void 0!==a?a:y),(0,d.FP)(null!==(i=l.time)&&void 0!==i?i:y))}).map((e,l)=>{var t,o,c,a,i,s;return(0,n.jsxs)("tr",{onClick:()=>X({show:!0,data:e}),children:[(0,n.jsx)("td",{children:(0,d.FP)(e.time).toLocaleString()}),(0,n.jsx)("td",{children:null===(t=e.connection)||void 0===t?void 0:t.addr}),(0,n.jsx)("td",{children:null===(o=e.connection)||void 0===o?void 0:o.extra.MODE}),(0,n.jsx)("td",{children:p.NW[null!==(s=null===(a=e.connection)||void 0===a?void 0:null===(c=a.type)||void 0===c?void 0:c.connType)&&void 0!==s?s:p.NW.unknown]}),(0,n.jsx)("td",{children:Number(e.count)}),E.dumpProcessEnabled&&(0,n.jsx)("td",{children:null===(i=e.connection)||void 0===i?void 0:i.extra.Process})]},"bh-"+l)})})]})]})}},6342:(e,l,t)=>{"use strict";t.d(l,{L9:()=>c,NW:()=>a,mR:()=>d});var n=t(6788),o=t(8123);let c=(0,n.w)("ChZzdGF0aXN0aWMvY29uZmlnLnByb3RvEhF5dWhhaWluLnN0YXRpc3RpYyKEAQoIbmV0X3R5cGUSNQoJY29ubl90eXBlGAEgASgOMhcueXVoYWlpbi5zdGF0aXN0aWMudHlwZVIJY29ubl90eXBlEkEKD3VuZGVybHlpbmdfdHlwZRgCIAEoDjIXLnl1aGFpaW4uc3RhdGlzdGljLnR5cGVSD3VuZGVybHlpbmdfdHlwZSK4AQoKY29ubmVjdGlvbhIMCgRhZGRyGAEgASgJEgoKAmlkGAIgASgEEikKBHR5cGUYAyABKAsyGy55dWhhaWluLnN0YXRpc3RpYy5uZXRfdHlwZRI3CgVleHRyYRgEIAMoCzIoLnl1aGFpaW4uc3RhdGlzdGljLmNvbm5lY3Rpb24uRXh0cmFFbnRyeRosCgpFeHRyYUVudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEqjwEKBHR5cGUSCwoHdW5rbm93bhAAEgcKA3RjcBABEggKBHRjcDQQAhIICgR0Y3A2EAMSBwoDdWRwEAQSCAoEdWRwNBAFEggKBHVkcDYQBhIGCgJpcBAHEgcKA2lwNBAIEgcKA2lwNhAJEggKBHVuaXgQChIMCgh1bml4Z3JhbRALEg4KCnVuaXhwYWNrZXQQDEIzWjFnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3Mvc3RhdGlzdGljYgZwcm90bzM"),d=(0,o.Z)(c,1);var a=function(e){return e[e.unknown=0]="unknown",e[e.tcp=1]="tcp",e[e.tcp4=2]="tcp4",e[e.tcp6=3]="tcp6",e[e.udp=4]="udp",e[e.udp4=5]="udp4",e[e.udp6=6]="udp6",e[e.ip=7]="ip",e[e.ip4=8]="ip4",e[e.ip6=9]="ip6",e[e.unix=10]="unix",e[e.unixgram=11]="unixgram",e[e.unixpacket=12]="unixpacket",e}({})},6903:(e,l,t)=>{"use strict";t.d(l,{SE:()=>u,oQ:()=>r});var n=t(6788),o=t(8123),c=t(4395),d=t(9297),a=t(9678),i=t(6342);let s=(0,n.w)("ChtzdGF0aXN0aWMvZ3JwYy9jb25maWcucHJvdG8SIHl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlIi4KCnRvdGFsX2Zsb3cSEAoIZG93bmxvYWQYASABKAQSDgoGdXBsb2FkGAIgASgEIpcCCgtub3RpZnlfZGF0YRJCCgp0b3RhbF9mbG93GAMgASgLMiwueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UudG90YWxfZmxvd0gAEloKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMYASABKAsyOC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5ub3RpZnlfbmV3X2Nvbm5lY3Rpb25zSAASYAoZbm90aWZ5X3JlbW92ZV9jb25uZWN0aW9ucxgCIAEoCzI7Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnNIAEIGCgRkYXRhIkwKFm5vdGlmeV9uZXdfY29ubmVjdGlvbnMSMgoLY29ubmVjdGlvbnMYASADKAsyHS55dWhhaWluLnN0YXRpc3RpYy5jb25uZWN0aW9uIigKGW5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnMSCwoDaWRzGAEgAygEIp4BCg5mYWlsZWRfaGlzdG9yeRIQCghwcm90b2NvbBgBIAEoCRIMCgRob3N0GAIgASgJEg0KBWVycm9yGAMgASgJEg8KB3Byb2Nlc3MYBCABKAkSKAoEdGltZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASIgoMZmFpbGVkX2NvdW50GAYgASgEUgxmYWlsZWRfY291bnQijAEKE2ZhaWxlZF9oaXN0b3J5X2xpc3QSQQoHb2JqZWN0cxgBIAMoCzIwLnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLmZhaWxlZF9oaXN0b3J5EjIKFGR1bXBfcHJvY2Vzc19lbmFibGVkGAIgASgIUhRkdW1wX3Byb2Nlc3NfZW5hYmxlZCJ5CgthbGxfaGlzdG9yeRIxCgpjb25uZWN0aW9uGAEgASgLMh0ueXVoYWlpbi5zdGF0aXN0aWMuY29ubmVjdGlvbhINCgVjb3VudBgCIAEoBBIoCgR0aW1lGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCKGAQoQYWxsX2hpc3RvcnlfbGlzdBI+CgdvYmplY3RzGAEgAygLMi0ueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UuYWxsX2hpc3RvcnkSMgoUZHVtcF9wcm9jZXNzX2VuYWJsZWQYAiABKAhSFGR1bXBfcHJvY2Vzc19lbmFibGVkMqkECgtjb25uZWN0aW9ucxJZCgVjb25ucxIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRo4Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9uZXdfY29ubmVjdGlvbnMSYQoKY2xvc2VfY29ubhI7Lnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9yZW1vdmVfY29ubmVjdGlvbnMaFi5nb29nbGUucHJvdG9idWYuRW1wdHkSTQoFdG90YWwSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaLC55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS50b3RhbF9mbG93ElEKBm5vdGlmeRIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRotLnl1aGFpaW4ucHJvdG9zLnN0YXRpc3RpYy5zZXJ2aWNlLm5vdGlmeV9kYXRhMAESXwoOZmFpbGVkX2hpc3RvcnkSFi5nb29nbGUucHJvdG9idWYuRW1wdHkaNS55dWhhaWluLnByb3Rvcy5zdGF0aXN0aWMuc2VydmljZS5mYWlsZWRfaGlzdG9yeV9saXN0ElkKC2FsbF9oaXN0b3J5EhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5GjIueXVoYWlpbi5wcm90b3Muc3RhdGlzdGljLnNlcnZpY2UuYWxsX2hpc3RvcnlfbGlzdEI7WjlnaXRodWIuY29tL0FzdXRvcnVmYS95dWhhaWluL3BrZy9wcm90b3Mvc3RhdGlzdGljL3NlcnZpY2ViBnByb3RvMw",[d.t,i.L9,a.i]),u=(0,o.Z)(s,3),r=(0,c.Z)(s,0)},700:e=>{e.exports={clickable:"clickable_clickable__ytaUf"}}},e=>{var l=l=>e(e.s=l);e.O(0,[607,100,306,818,993,158,441,517,358],()=>l(6781)),_N_E=e.O()}]);