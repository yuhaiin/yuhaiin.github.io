"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{744:(e,l,t)=>{t.d(l,{DH:()=>r,G_:()=>h,Ow:()=>u,Oz:()=>s,VN:()=>g,X3:()=>c,_s:()=>x,dp:()=>m,h$:()=>p,kP:()=>n,mv:()=>v,oH:()=>o,r3:()=>a,u1:()=>i});let n="",s="https://clients3.google.com/generate_204",a="dns.nextdns.io:853",o=!0,r="http://ip.sb",i="stun.syncthing.net:3478",c="stun.nextcloud.com:443",d=()=>{let e=localStorage.getItem("api_url");n=null!==e?e:"",e=localStorage.getItem("remote_bypass"),null!==(e=localStorage.getItem("latency_http_url"))&&(s=e),null!==(e=localStorage.getItem("latency_dns_url"))&&(a=e),null!==(e=localStorage.getItem("latency_ipv6"))&&(o="true"===e),null!==(e=localStorage.getItem("latency_ip_url"))&&(r=e),null!==(e=localStorage.getItem("latency_stun_url"))&&(i=e),null!==(e=localStorage.getItem("latency_stun_tcp_url"))&&(c=e)},u=e=>{j("api_url",e)},m=e=>{j("latency_dns_url",e)},h=e=>{j("latency_http_url",e)},v=e=>{j("latency_ipv6",e.toString())},p=e=>{j("latency_ip_url",e)},x=e=>{j("latency_stun_url",e)},g=e=>{j("latency_stun_tcp_url",e)},j=(e,l)=>{""===l?localStorage.removeItem(e):localStorage.setItem(e,l),d()};d()},9169:(e,l,t)=>{t.d(l,{A:()=>r});var n=t(5155),s=t(5554),a=t.n(s),o=t(4216);let r=function(e){return(0,n.jsxs)("div",{className:"z-1090 d-flex flex-column justify-content-center align-items-center",style:{height:"100px"},children:[void 0!==e.children&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a(),{className:"p2",statusCode:void 0!==e.code?e.code:500,title:e.children})}),(0,n.jsx)("div",{className:"p2",children:(0,n.jsx)(o.A,{})})]})}},8927:(e,l,t)=>{t.d(l,{AD:()=>r,kP:()=>i,zZ:()=>c});var n=t(950),s=t(7558),a=t(6989),o=t(744);function r(e,l,t,r){return i=>r?(0,n.o)(e.output,r):fetch("".concat(o.kP).concat(i),{method:l,body:t?(0,s.R)(e.input,t):void 0}).then(async l=>{if(!l.ok)throw{code:l.status,msg:l.statusText,raw:l.text()};return(0,a.Er)(e.output,new Uint8Array(await l.arrayBuffer()))})}async function i(e,l,t,n){let r=await fetch("".concat(o.kP).concat(l),{method:t,body:n?(0,s.R)(e.input,n):void 0});return r.ok?{data:(0,a.Er)(e.output,new Uint8Array(await r.arrayBuffer()))}:{error:{code:r.status,msg:await r.text()}}}function c(e,l,t){let n,r=!1;return(i,c)=>{let{next:d}=c,u=new URL(""!==o.kP?o.kP:window.location.toString());u.pathname=i,u.protocol="https:"===u.protocol?"wss:":"ws:";let m=()=>{r||(console.log("connecting to: ".concat(u)),(n=new WebSocket(u)).binaryType="arraybuffer",n.addEventListener("open",t=>{console.log("connect to: ".concat(u,", event type: ").concat(t.type)),null==n||n.send((0,s.R)(e.input,l))}),n.addEventListener("message",l=>{let n=(0,a.Er)(e.output,new Uint8Array(l.data));d(null,e=>t(n,e))}),n.addEventListener("error",e=>{let l="websocket have some error";d({msg:l,code:500}),console.log(l,e.type)}),n.addEventListener("close",e=>{console.log("websocket closed, code: "+e.code),d(null,void 0),r||(console.log("reconnect after 1 seconds"),setTimeout(m,1e3))}))};return m(),()=>{r=!0,void 0!==n&&(console.log("close: ".concat(i)),n.close(),n=void 0)}}}},7204:(e,l,t)=>{t.d(l,{a9:()=>g,e9:()=>b,fH:()=>f,jU:()=>j,kk:()=>w,mI:()=>x,mc:()=>y,n4:()=>A});var n=t(5155),s=t(2115),a=t(9637),o=t(3381),r=t(9725),i=t(6180),c=t(6121),d=t(3667),u=t(8003),m=t(2963),h=t(2981),v=t(3614),p=t(896);class x{constructor(e){this.label=e.label,this.value=e.value,this.label_children=e.label_children}}let g=e=>{let{label:l,value:t,url:s,plaintext:m,onChange:h,reminds:v,mb:p,placeholder:x,errorMsg:g}=e;return(0,n.jsxs)(i.A.Group,{as:c.A,className:void 0!==p?p:"mb-2",children:[(0,n.jsx)(i.A.Label,{column:!0,sm:2,className:"nowrap",children:l}),(0,n.jsx)(d.A,{sm:10,children:(0,n.jsxs)(u.A,{className:void 0!==p?p:"mb-2",hasValidation:!!g,children:[v&&v.length?(0,n.jsxs)(a.A,{children:[(0,n.jsx)(a.A.Toggle,{variant:"outline-secondary",id:"dropdown-basic"}),(0,n.jsx)(o.A,{style:{maxHeight:"300px",overflowY:"auto"},children:v.map(e=>(0,n.jsxs)(r.A,{onClick:()=>h&&h(e.value),children:[(0,n.jsx)("b",{children:e.label}),e.label_children&&e.label_children.map(e=>(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:"text-body-secondary",children:e})},e))]},e.value))})]}):(0,n.jsx)(n.Fragment,{}),s?(0,n.jsx)("a",{className:"mt-1",href:s,target:"_blank",children:t}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A.Control,{value:t,plaintext:m,placeholder:x,isInvalid:!!g,onChange:e=>{h&&h(e.target.value)}}),g&&(0,n.jsx)(i.A.Control.Feedback,{type:"invalid",children:g})]})]})})]})},j=e=>(0,n.jsxs)(i.A.Group,{as:c.A,className:"mb-2",children:[(0,n.jsx)(i.A.Label,{column:!0,sm:2,className:"nowrap",children:e.label}),(0,n.jsx)(d.A,{sm:10,children:(0,n.jsx)(i.A.Control,{as:"textarea",rows:5,value:e.value,onChange:l=>e.onChange(l.target.value)})})]}),b=e=>{let{title:l,data:t,onChange:a,errorMsgs:o,beforeContent:r}=e,[h,v]=(0,s.useState)({value:""});return(0,n.jsxs)(i.A.Group,{as:c.A,children:[(0,n.jsx)(i.A.Label,{column:!0,sm:2,className:"nowrap",children:l}),r&&(0,n.jsx)(d.A,{sm:{span:10},children:r}),t&&t.map((e,l)=>(0,n.jsx)(d.A,{sm:{span:10,offset:r||0!==l?2:0},children:(0,n.jsxs)(u.A,{className:"mb-2",hasValidation:!!o&&!!o[e],children:[(0,n.jsx)(i.A.Control,{onChange:e=>{a([...t.slice(0,l),e.target.value,...t.slice(l+1)])},isInvalid:!!o&&!!o[e],value:e}),(0,n.jsx)(m.A,{variant:"outline-danger",onClick:()=>{a([...t.slice(0,l),...t.slice(l+1)])},children:(0,n.jsx)("i",{className:"bi bi-x-lg"})}),o&&o[e]&&(0,n.jsx)(i.A.Control.Feedback,{type:"invalid",children:o[e]})]})},l)),(0,n.jsx)(d.A,{sm:{span:10,offset:r||(null==t?void 0:t.length)!==0?2:0},children:(0,n.jsxs)(u.A,{children:[(0,n.jsx)(i.A.Control,{value:h.value,onChange:e=>v({value:e.target.value})}),(0,n.jsx)(m.A,{variant:"outline-success",onClick:()=>{a([...t,h.value])},children:(0,n.jsx)("i",{className:"bi bi-plus-lg"})})]})})]})},A=e=>{let{title:l,data:t,onChange:a,textarea:o}=e,[r,h]=(0,s.useState)({value:""});return(0,n.jsxs)(i.A.Group,{as:c.A,className:"mb-3",children:[(0,n.jsx)(i.A.Label,{column:!0,sm:2,className:"nowrap",children:l}),t&&t.map((e,l)=>(0,n.jsx)(d.A,{sm:{span:10,offset:0!==l?2:0},children:(0,n.jsxs)(u.A,{className:"mb-2",children:[(0,n.jsx)(i.A.Control,{value:new TextDecoder().decode(e),as:o?"textarea":void 0,onChange:e=>{a([...t.slice(0,l),new TextEncoder().encode(e.target.value),...t.slice(l+1)])}}),(0,n.jsx)(m.A,{variant:"outline-danger",onClick:()=>{a([...t.slice(0,l),...t.slice(l+1)])},children:(0,n.jsx)("i",{className:"bi bi-x-lg"})})]})},"bi-"+l)),(0,n.jsx)(d.A,{sm:{span:10,offset:(null==t?void 0:t.length)!==0?2:0},children:(0,n.jsxs)(u.A,{className:"mb-2",children:[(0,n.jsx)(i.A.Control,{as:o?"textarea":void 0,value:r.value,onChange:e=>h({value:e.target.value})}),(0,n.jsx)(m.A,{variant:"outline-success",onClick:()=>{t?a([...t,new TextEncoder().encode(r.value)]):a([new TextEncoder().encode(r.value)])},children:(0,n.jsx)("i",{className:"bi bi-plus-lg"})})]})})]})};function w(e){return(0,n.jsxs)(i.A.Group,{as:c.A,className:e.mb?e.mb:"mb-2",children:[(0,n.jsx)(i.A.Label,{column:!0,sm:2,className:"nowrap",children:e.title}),(0,n.jsx)(d.A,{sm:{span:10,offset:0},children:(0,n.jsx)(u.A,{className:e.mb?e.mb:"mb-2"})}),e.data&&e.data.map((l,t)=>(0,n.jsx)(d.A,{sm:{span:10,offset:2},className:"mt-0",children:(0,n.jsx)(u.A,{className:e.mb?e.mb:"mb-2",children:l})},t))]})}class f{constructor(e,l,t,n){this.move=e=>{if(this.elems.length<=1||e&&0===this.current||!e&&this.current===this.elems.length-1)return;let l=[...this.elems],t=l[this.current];l[this.current]=l[this.current+(e?-1:1)],l[this.current+(e?-1:1)]=t,this.onmove(l)},this.length=()=>this.elems.length,this.isTop=()=>0===this.current,this.isBottom=()=>this.current===this.elems.length-1,this.current=l,this.elems=e,this.onmove=t,this.drag=n}}function y(e){var l,t,a,o;let[r,i]=(0,s.useState)({value:!1}),[c,d]=(0,s.useState)(!1),[u,x]=(0,s.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(h.A,{border:c?"success":u?"primary":void 0,className:"flex-grow-1 form-floating",onDragOver:e=>{e.preventDefault(),d(!0)},onDragLeave:e=>{e.preventDefault(),d(!1)},onDragEnd:()=>{d(!1)},onDrop:()=>{var l,t;d(!1),null===(t=e.moveUpDown)||void 0===t||null===(l=t.drag)||void 0===l||l.onDrop(e.moveUpDown.current)},children:[(0,n.jsxs)(h.A.Header,{draggable:null===(t=e.moveUpDown)||void 0===t?void 0:null===(l=t.drag)||void 0===l?void 0:l.draggable,onDragEnd:()=>{d(!1)},onDragStart:()=>{x(!1),e.moveUpDown&&e.moveUpDown.drag&&e.moveUpDown.drag.onDragStart(e.moveUpDown.current)},style:e.fold?{cursor:"pointer"}:{},className:"d-flex justify-content-between",onClick:()=>e.fold&&i(e=>({value:!e.value})),onMouseDown:()=>{x(!0)},onMouseUp:()=>{x(!1)},"aria-controls":"example-collapse-text","aria-expanded":r.value,children:[e.title,(!e.hideClose||e.moveUpDown)&&(0,n.jsxs)(v.A,{children:[!(null===(a=e.moveUpDown)||void 0===a?void 0:a.isTop())&&(0,n.jsx)(m.A,{variant:"outline-primary",size:"sm",onClick:l=>{var t;l.stopPropagation(),null===(t=e.moveUpDown)||void 0===t||t.move(!0)},children:(0,n.jsx)("i",{className:"bi bi-arrow-up"})}),!(null===(o=e.moveUpDown)||void 0===o?void 0:o.isBottom())&&(0,n.jsx)(m.A,{variant:"outline-primary",size:"sm",onClick:l=>{var t;l.stopPropagation(),null===(t=e.moveUpDown)||void 0===t||t.move(!1)},children:(0,n.jsx)("i",{className:"bi bi-arrow-down"})}),!e.hideClose&&(0,n.jsx)(m.A,{variant:"outline-danger",size:"sm",onClick:l=>{l.stopPropagation(),e.onClose()},children:(0,n.jsx)("i",{className:"bi bi-x-lg"})})]})]}),e.fold&&(0,n.jsx)(p.A,{in:r.value,children:(0,n.jsx)("div",{id:"example-collapse-text",children:(0,n.jsx)(h.A.Body,{children:e.children})})}),!e.fold&&(0,n.jsx)(h.A.Body,{children:e.children})]}),(0,n.jsx)("br",{})]})}}}]);