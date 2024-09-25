"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{4971:function(e,n,t){t.d(n,{$f:function(){return m},Mj:function(){return v},Ti:function(){return o},U9:function(){return g},XE:function(){return h},YO:function(){return r},Z5:function(){return c},dn:function(){return i},fG:function(){return a},gU:function(){return s},gW:function(){return x},q$:function(){return f},r:function(){return d},rQ:function(){return l}});var a="",l="https://clients3.google.com/generate_204",s="dns.nextdns.io:853",r=!0,o="http://ip.sb",c="stun.syncthing.net:3478",i="stun.nextcloud.com:443";let u=()=>{let e=localStorage.getItem("api_url");a=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(l=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(s=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(r="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(o=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(c=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(i=e)},d=e=>{j("api_url",e)},m=e=>{j("latency_dns_url",e)},h=e=>{j("latency_http_url",e)},x=e=>{j("latency_ipv6",e.toString())},g=e=>{j("latency_ip_url",e)},v=e=>{j("latency_stun_url",e)},f=e=>{j("latency_stun_tcp_url",e)},j=(e,n)=>{""===n?localStorage.removeItem(e):localStorage.setItem(e,n),u()};u()},716:function(e,n,t){var a=t(7437),l=t(2514),s=t(6264),r=t.n(s);n.Z=function(e){return(0,a.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,a.jsx)("div",{className:"p2",children:(0,a.jsx)(l.Z,{})})]})}},879:function(e,n,t){t.d(n,{D4:function(){return r},OV:function(){return o},Uo:function(){return c},o5:function(){return i}});var a=t(4971),l=t(4050),s=t(7764);function r(e,n,t,r){return o=>r?(0,l.d)(e,r):fetch("".concat(a.fG).concat(o),{method:n,body:t}).then(async n=>{if(!n.ok)throw{code:n.status,msg:n.statusText,raw:n.text()};return(0,s.h4)(e,new Uint8Array(await n.arrayBuffer()))})}function o(e,n,t,l){return r=>fetch("".concat(a.fG).concat(r),{method:t,body:l}).then(async t=>{if(!t.ok)throw{code:t.status,msg:t.statusText,raw:t.text()};return n((0,s.h4)(e,new Uint8Array(await t.arrayBuffer())))})}let c=async(e,n)=>{let t=await fetch("".concat(a.fG).concat(e),{method:void 0!==n.method?n.method:"POST",body:n.body});return t.ok?void 0===n.process?{}:{data:n.process(t)}:{error:{code:t.status,msg:t.text()}}};function i(e,n,t){return(l,r)=>{let o,{next:c}=r,i=new URL(""!==a.fG?a.fG:window.location.toString());i.pathname=l,i.protocol="https:"===i.protocol?"wss:":"ws:";let u=!1,d=()=>{u||(console.log("connecting to: ".concat(i)),(o=new WebSocket(i)).binaryType="arraybuffer",o.addEventListener("open",n=>{console.log("connect to: ".concat(i,", event type: ").concat(n.type)),null==o||o.send(e)}),o.addEventListener("message",e=>{let a=(0,s.h4)(n,new Uint8Array(e.data));c(null,e=>t(e,a))}),o.addEventListener("error",e=>{let n="websocket have some error";c({msg:n,code:500}),console.log(n,e.type)}),o.addEventListener("close",e=>{console.log("websocket closed, code: "+e.code),c(null,void 0),u||(console.log("reconnect after 1 seconds"),setTimeout(d,1e3))}))};return d(),()=>{u=!0,void 0!==o&&(console.log("close: ".concat(l)),o.close(),o=void 0)}}}},6601:function(e,n,t){t.d(n,{Jg:function(){return o}});var a=t(7437);t(2265);var l=t(7420),s=t(358),r=t(6712);let o=e=>(0,a.jsxs)(l.Z.Group,{as:s.Z,className:"mb-2",children:[(0,a.jsx)(l.Z.Label,{column:!0,sm:2,children:e.label}),(0,a.jsx)(r.Z,{sm:10,className:"d-flex align-items-center",children:(0,a.jsx)(l.Z.Check,{className:"d-flex align-items-center",type:"switch",checked:e.checked,onChange:()=>e.onChange()})})]})},1159:function(e,n,t){t.d(n,{P:function(){return o},t:function(){return c}});var a=t(7437),l=t(2265),s=t(8620),r=t(1529);let o=(0,l.createContext)({Info:e=>{},Error:e=>{}}),c=e=>{let{children:n}=e,[t,c]=(0,l.useState)({value:{},index:0}),i=(e,n)=>c(t=>({value:{...t.value,[t.index]:{text:e,type:n}},index:t.index+1}));return(0,a.jsxs)(o.Provider,{value:{Info:e=>{console.log(e),i(e,"success")},Error:e=>{console.error(e),i(e,"danger")}},children:[(0,a.jsx)(s.Z,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(t.value).map(e=>{let[n,l]=e;return(0,a.jsxs)(r.Z,{role:"alert","aria-live":"assertive",show:!0,bg:l.type,onClose:()=>{let e=t.value;delete e[n],c({...t,value:e}),console.log("close: "+n)},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,a.jsxs)(r.Z.Header,{children:[(0,a.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,a.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,a.jsx)(r.Z.Body,{className:"text-center",children:l.text})]},"toast"+n)})}),n]})}},8727:function(e,n,t){t.d(n,{CX:function(){return p},NZ:function(){return f},Vf:function(){return v},W2:function(){return y},kx:function(){return Z},sr:function(){return b},u5:function(){return g},yh:function(){return j}});var a=t(7437),l=t(5554),s=t(6852),r=t(473),o=t(7420),c=t(358),i=t(6712),u=t(2312),d=t(2808),m=t(7185),h=t(3181),x=t(2265);class g{constructor(e){this.label=e.label,this.value=e.value,this.label_children=e.label_children}}let v=x.memo(e=>(0,a.jsxs)(o.Z.Group,{as:c.Z,className:e.mb?e.mb:"mb-2",children:[(0,a.jsx)(o.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.label}),(0,a.jsx)(i.Z,{sm:10,children:(0,a.jsxs)(u.Z,{className:e.mb?e.mb:"mb-2",hasValidation:!!e.errorMsg,children:[e.reminds&&e.reminds.length?(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(l.Z.Toggle,{variant:"outline-secondary",id:"dropdown-basic"}),(0,a.jsx)(s.Z,{style:{maxHeight:"300px",overflowY:"auto"},children:e.reminds.map(n=>(0,a.jsxs)(r.Z,{onClick:()=>e.onChange&&e.onChange(n.value),children:[(0,a.jsx)("b",{children:n.label}),n.label_children&&n.label_children.map(e=>(0,a.jsx)("div",{children:(0,a.jsx)("span",{className:"text-body-secondary",children:e})},e))]},n.value))})]}):(0,a.jsx)(a.Fragment,{}),e.url?(0,a.jsx)("a",{className:"mt-1",href:e.url,target:"_blank",children:e.value}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z.Control,{value:e.value,plaintext:e.plaintext,placeholder:e.placeholder,isInvalid:!!e.errorMsg,onChange:n=>{e.onChange&&e.onChange(n.target.value)}}),e.errorMsg&&(0,a.jsx)(o.Z.Control.Feedback,{type:"invalid",children:e.errorMsg})]})]})})]})),f=e=>(0,a.jsxs)(o.Z.Group,{as:c.Z,className:"mb-2",children:[(0,a.jsx)(o.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.label}),(0,a.jsx)(i.Z,{sm:10,children:(0,a.jsx)(o.Z.Control,{as:"textarea",rows:5,value:e.value,onChange:n=>e.onChange(n.target.value)})})]});function j(e){var n;let[t,l]=(0,x.useState)({value:""});return(0,a.jsxs)(o.Z.Group,{as:c.Z,className:"mb-3",children:[(0,a.jsx)(o.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),e.data&&e.data.map((n,t)=>(0,a.jsx)(i.Z,{sm:{span:10,offset:0!==t?2:0},children:(0,a.jsxs)(u.Z,{className:"mb-2",hasValidation:!!e.errorMsgs&&!!e.errorMsgs[n],children:[(0,a.jsx)(o.Z.Control,{onChange:n=>{e.data&&(e.data[t]=n.target.value,e.onChange(e.data))},isInvalid:!!e.errorMsgs&&!!e.errorMsgs[n],value:n}),(0,a.jsx)(d.Z,{variant:"outline-danger",onClick:()=>{e.data&&(e.data.splice(t,1),e.onChange(e.data))},children:(0,a.jsx)("i",{className:"bi bi-x-lg"})}),e.errorMsgs&&e.errorMsgs[n]&&(0,a.jsx)(o.Z.Control.Feedback,{type:"invalid",children:e.errorMsgs[n]})]})},t)),(0,a.jsx)(i.Z,{sm:{span:10,offset:(null===(n=e.data)||void 0===n?void 0:n.length)!==0?2:0},children:(0,a.jsxs)(u.Z,{className:"mb-2",children:[(0,a.jsx)(o.Z.Control,{value:t.value,onChange:e=>l({value:e.target.value})}),(0,a.jsx)(d.Z,{variant:"outline-success",onClick:()=>{e.data.push(t.value),e.onChange(e.data)},children:(0,a.jsx)("i",{className:"bi bi-plus-lg"})})]})})]})}function p(e){var n;let[t,l]=(0,x.useState)({value:""});return(0,a.jsxs)(o.Z.Group,{as:c.Z,className:"mb-3",children:[(0,a.jsx)(o.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),e.data&&e.data.map((n,t)=>(0,a.jsx)(i.Z,{sm:{span:10,offset:0!==t?2:0},children:(0,a.jsxs)(u.Z,{className:"mb-2",children:[(0,a.jsx)(o.Z.Control,{value:new TextDecoder().decode(n),as:e.textarea?"textarea":void 0,onChange:n=>{e.data[t]=new TextEncoder().encode(n.target.value),e.onChange(e.data?e.data:[])}}),(0,a.jsx)(d.Z,{variant:"outline-danger",onClick:()=>{e.data&&(e.data.splice(t,1),e.onChange(e.data))},children:(0,a.jsx)("i",{className:"bi bi-x-lg"})})]})},"bi-"+t)),(0,a.jsx)(i.Z,{sm:{span:10,offset:(null===(n=e.data)||void 0===n?void 0:n.length)!==0?2:0},children:(0,a.jsxs)(u.Z,{className:"mb-2",children:[(0,a.jsx)(o.Z.Control,{as:e.textarea?"textarea":void 0,value:t.value,onChange:e=>l({value:e.target.value})}),(0,a.jsx)(d.Z,{variant:"outline-success",onClick:()=>{let n=new TextEncoder().encode(t.value);e.data?e.data.push(n):e.data=[n],e.onChange(e.data)},children:(0,a.jsx)("i",{className:"bi bi-plus-lg"})})]})})]})}function b(e){return(0,a.jsxs)(o.Z.Group,{as:c.Z,className:e.mb?e.mb:"mb-2",children:[(0,a.jsx)(o.Z.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),(0,a.jsx)(i.Z,{sm:{span:10,offset:0},children:(0,a.jsx)(u.Z,{className:e.mb?e.mb:"mb-2"})}),e.data&&e.data.map((n,t)=>(0,a.jsx)(i.Z,{sm:{span:10,offset:2},className:"mt-0",children:(0,a.jsx)(u.Z,{className:e.mb?e.mb:"mb-2",children:n})},t))]})}class Z{constructor(e,n,t){this.length=e,this.current=n,this.onmove=t}}let y=e=>{var n,t,l,s,r,o;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(m.Z,{className:"flex-grow-1 form-floating",children:[(0,a.jsxs)(m.Z.Header,{className:"d-flex justify-content-between",children:[e.title,(!e.hideClose||(null!==(r=null===(n=e.moveUpDown)||void 0===n?void 0:n.length)&&void 0!==r?r:0)>1)&&(0,a.jsxs)(h.Z,{children:[(null!==(o=null===(t=e.moveUpDown)||void 0===t?void 0:t.length)&&void 0!==o?o:0)>1&&(0,a.jsxs)(a.Fragment,{children:[(null===(l=e.moveUpDown)||void 0===l?void 0:l.current)!=0&&(0,a.jsx)(d.Z,{variant:"outline-primary",size:"sm",onClick:()=>e.moveUpDown.onmove(!0),children:(0,a.jsx)("i",{className:"bi bi-arrow-up"})}),(null===(s=e.moveUpDown)||void 0===s?void 0:s.current)!=e.moveUpDown.length-1&&(0,a.jsx)(d.Z,{variant:"outline-primary",size:"sm",onClick:()=>e.moveUpDown.onmove(!1),children:(0,a.jsx)("i",{className:"bi bi-arrow-down"})})]}),!e.hideClose&&(0,a.jsx)(d.Z,{variant:"outline-danger",size:"sm",onClick:e.onClose,children:(0,a.jsx)("i",{className:"bi bi-x-lg"})})]})]}),(0,a.jsx)(m.Z.Body,{children:e.children})]}),(0,a.jsx)("br",{})]})}}}]);