(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[198],{5640:(e,t,n)=>{Promise.resolve().then(n.bind(n,304))},744:(e,t,n)=>{"use strict";n.d(t,{DH:()=>s,G_:()=>m,Ow:()=>d,Oz:()=>l,VN:()=>v,X3:()=>u,_s:()=>h,dp:()=>p,h$:()=>y,kP:()=>o,mv:()=>g,oH:()=>a,r3:()=>r,u1:()=>c});var o="",l="https://clients3.google.com/generate_204",r="dns.nextdns.io:853",a=!0,s="http://ip.sb",c="stun.syncthing.net:3478",u="stun.nextcloud.com:443";let i=()=>{let e=localStorage.getItem("api_url");o=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(l=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(r=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(a="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(s=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(c=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(u=e)},d=e=>{x("api_url",e)},p=e=>{x("latency_dns_url",e)},m=e=>{x("latency_http_url",e)},g=e=>{x("latency_ipv6",e.toString())},y=e=>{x("latency_ip_url",e)},h=e=>{x("latency_stun_url",e)},v=e=>{x("latency_stun_tcp_url",e)},x=(e,t)=>{""===t?localStorage.removeItem(e):localStorage.setItem(e,t),i()};i()},304:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var o=n(5155),l=n(3577),r=n(9093),a=n(1936),s=n(2115),c=n(8003),u=n(6180),i=n(2963),d=n(2981),p=n(8927),m=n(148),g=n(6863);let y=function(){let e=(0,s.useContext)(m.u),[t,n]=(0,s.useState)(""),[y,h]=(0,s.useState)(void 0);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(c.A,{className:"mb-3",children:[(0,o.jsx)(u.A.Control,{placeholder:"www.example.com",value:t,onChange:e=>n(e.target.value)}),(0,o.jsx)(i.A,{variant:"outline-primary",onClick:()=>{""!==t&&(0,p.kP)(g.XH.method.test,"/bypass/test","POST",(0,l.v)(a.g8,{value:t})).then(async t=>{let{data:n,error:o}=t;o?e.Error("test failed ".concat(o.code,"| ").concat(o.msg)):h(n)})},children:"Test"})]}),y&&(0,o.jsx)(d.A,{className:"mb-3",children:(0,o.jsx)(d.A.Body,{children:(0,o.jsx)("pre",{children:(0,r.J7)(g.C$,y,{prettySpaces:2})})})})]})}},8927:(e,t,n)=>{"use strict";n.d(t,{AD:()=>s,kP:()=>c,zZ:()=>u});var o=n(950),l=n(7558),r=n(6989),a=n(744);function s(e,t,n,s){return c=>s?(0,o.o)(e.output,s):fetch("".concat(a.kP).concat(c),{method:t,body:n?(0,l.R)(e.input,n):void 0}).then(async t=>{if(!t.ok)throw{code:t.status,msg:t.statusText,raw:t.text()};return(0,r.Er)(e.output,new Uint8Array(await t.arrayBuffer()))})}async function c(e,t,n,o){let s=await fetch("".concat(a.kP).concat(t),{method:n,body:o?(0,l.R)(e.input,o):void 0});return s.ok?{data:(0,r.Er)(e.output,new Uint8Array(await s.arrayBuffer()))}:{error:{code:s.status,msg:await s.text()}}}function u(e,t,n){let o,s=!1;return(c,u)=>{let{next:i}=u,d=new URL(""!==a.kP?a.kP:window.location.toString());d.pathname=c,d.protocol="https:"===d.protocol?"wss:":"ws:";let p=()=>{s||(console.log("connecting to: ".concat(d)),(o=new WebSocket(d)).binaryType="arraybuffer",o.addEventListener("open",n=>{console.log("connect to: ".concat(d,", event type: ").concat(n.type)),null==o||o.send((0,l.R)(e.input,t))}),o.addEventListener("message",t=>{let o=(0,r.Er)(e.output,new Uint8Array(t.data));i(null,e=>n(o,e))}),o.addEventListener("error",e=>{let t="websocket have some error";i({msg:t,code:500}),console.log(t,e.type)}),o.addEventListener("close",e=>{console.log("websocket closed, code: "+e.code),i(null,void 0),s||(console.log("reconnect after 1 seconds"),setTimeout(p,1e3))}))};return p(),()=>{s=!0,void 0!==o&&(console.log("close: ".concat(c)),o.close(),o=void 0)}}}},148:(e,t,n)=>{"use strict";n.d(t,{u:()=>s,y:()=>c});var o=n(5155),l=n(2115),r=n(1757),a=n(491);let s=(0,l.createContext)({Info:e=>{},Error:e=>{}}),c=e=>{let{children:t}=e,[n,c]=(0,l.useState)([]),u=(e,t)=>c(n=>[...n,{text:e,type:t}]);return(0,o.jsxs)(s.Provider,{value:{Info:e=>{console.log(e),u(e,"success")},Error:e=>{console.error(e),u(e,"danger")}},children:[(0,o.jsx)(r.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:n.map((e,t)=>(0,o.jsxs)(a.A,{role:"alert","aria-live":"assertive",show:!0,bg:e.type,onClose:()=>{c(e=>[...e.slice(0,t),...e.slice(t+1)])},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,o.jsxs)(a.A.Header,{children:[(0,o.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,o.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,o.jsx)(a.A.Body,{className:"text-center",children:e.text})]},"toast"+t))}),t]})}},8003:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var o=n(4617),l=n.n(o),r=n(2115),a=n(1653),s=n(2389),c=n(2471),u=n(5155);let i=r.forwardRef((e,t)=>{let{className:n,bsPrefix:o,as:r="span",...s}=e;return o=(0,a.oU)(o,"input-group-text"),(0,u.jsx)(r,{ref:t,className:l()(n,o),...s})});i.displayName="InputGroupText";let d=r.forwardRef((e,t)=>{let{bsPrefix:n,size:o,hasValidation:s,className:i,as:d="div",...p}=e;n=(0,a.oU)(n,"input-group");let m=(0,r.useMemo)(()=>({}),[]);return(0,u.jsx)(c.A.Provider,{value:m,children:(0,u.jsx)(d,{ref:t,...p,className:l()(i,n,o&&"".concat(n,"-").concat(o),s&&"has-validation")})})});d.displayName="InputGroup";let p=Object.assign(d,{Text:i,Radio:e=>(0,u.jsx)(i,{children:(0,u.jsx)(s.A,{type:"radio",...e})}),Checkbox:e=>(0,u.jsx)(i,{children:(0,u.jsx)(s.A,{type:"checkbox",...e})})})},2471:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});let o=n(2115).createContext(null);o.displayName="InputGroupContext";let l=o},9537:(e,t,n)=>{"use strict";function o(e,t,...n){if(0==n.length)return e.enums[t];let l=n.pop();return n.reduce((e,t)=>e.nestedMessages[t],e.messages[t]).nestedEnums[l]}n.d(t,{R:()=>o})},9678:(e,t,n)=>{"use strict";n.d(t,{i:()=>r,w:()=>a});var o=n(6788),l=n(8123);let r=(0,o.w)("Ch9nb29nbGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3RvEg9nb29nbGUucHJvdG9idWYiKwoJVGltZXN0YW1wEg8KB3NlY29uZHMYASABKAMSDQoFbmFub3MYAiABKAVChQEKE2NvbS5nb29nbGUucHJvdG9idWZCDlRpbWVzdGFtcFByb3RvUAFaMmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3RpbWVzdGFtcHBi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"),a=(0,l.Z)(r,0)}},e=>{var t=t=>e(e.s=t);e.O(0,[295,515,920,340,863,441,517,358],()=>t(5640)),_N_E=e.O()}]);