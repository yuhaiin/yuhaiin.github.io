"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7605],{2358:(e,t,a)=>{a.d(t,{$d:()=>i,FX:()=>d,Vx:()=>c,no:()=>o});var s=a(5155),n=a(8054),l=a(1846),r=a(8136);let i=e=>{let{label:t,checked:a,onChange:i,className:c}=e;return(0,s.jsxs)(n.A.Group,{as:l.A,className:c,children:[(0,s.jsx)(n.A.Label,{column:!0,sm:2,children:t}),(0,s.jsx)(r.A,{sm:10,className:"d-flex align-items-center",children:(0,s.jsx)(n.A.Check,{className:"d-flex align-items-center",type:"switch",checked:a,onChange:e=>i(e.target.checked)})})]})},c=e=>{var t;let{...a}=e;return(0,s.jsxs)(n.A.Group,{as:l.A,className:a.lastElem?"":"mb-2",children:[(0,s.jsx)(n.A.Label,{column:!0,sm:2,children:a.label}),(0,s.jsx)(r.A,{sm:10,children:(0,s.jsx)(n.A.Select,{value:a.value,onChange:e=>a.onChange(Number(e.target.value)),children:a.type.values.filter(null!==(t=a.filter)&&void 0!==t?t:()=>!0).map(e=>(0,s.jsx)("option",{value:e.number,children:a.format?a.format(e.number):e.name},e.number))})})]})},o=e=>{let{label:t,values:a,onChange:i,value:c,emptyChoose:o,lastElem:d}=e;return(0,s.jsxs)(n.A.Group,{as:l.A,className:d?"":"mb-2",children:[(0,s.jsx)(n.A.Label,{column:!0,sm:2,children:t}),(0,s.jsx)(r.A,{sm:10,children:(0,s.jsxs)(n.A.Select,{value:c,onChange:e=>i(e.target.value),children:[o&&(0,s.jsx)("option",{value:"",children:"Choose..."}),a.map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})})]})},d=e=>{let{values:t,onChange:a,value:l,emptyChoose:r,format:i}=e;return(0,s.jsxs)(n.A.Select,{value:l,onChange:e=>a(e.target.value),children:[r&&(0,s.jsx)("option",{value:"",children:"Choose..."}),t.map(e=>{let t="string"==typeof e?e:e[0],a="string"==typeof e?e:e[1];return(0,s.jsx)("option",{value:a,children:i?i(t):t},t)})]})}},6835:(e,t,a)=>{a.d(t,{u:()=>i,y:()=>c});var s=a(5155),n=a(2115),l=a(9376),r=a(6215);let i=(0,n.createContext)({Info:e=>{console.log(e)},Error:e=>{console.error(e)}}),c=e=>{let{children:t}=e,[a,c]=(0,n.useState)({value:{},index:0}),o=(e,t)=>c(a=>({value:{...a.value,[a.index]:{text:e,type:t}},index:a.index+1}));return(0,s.jsxs)(i.Provider,{value:{Info:e=>{console.log(e),o(e,"success")},Error:e=>{console.error(e),o(e,"danger")}},children:[(0,s.jsx)(l.A,{className:"p-3",position:"top-center",containerPosition:"fixed",style:{zIndex:999999},children:Object.entries(a.value).map(e=>{let[t,a]=e;return(0,s.jsxs)(r.A,{role:"alert","aria-live":"assertive",show:!0,bg:a.type,onClose:()=>{c(e=>{let a={...e.value};return delete a[t],{...e,value:a}})},"aria-atomic":"true",delay:4e3,autohide:!0,animation:!0,children:[(0,s.jsxs)(r.A.Header,{children:[(0,s.jsx)("strong",{className:"me-auto",children:"Notification"}),(0,s.jsx)("small",{className:"text-muted",children:"just now"})]}),(0,s.jsx)(r.A.Body,{className:"text-center",children:a.text})]},"toast"+t)})}),t]})}},7622:(e,t,a)=>{a.d(t,{A:()=>i,O:()=>r});var s=a(5155),n=a(2358),l=a(3697);let r=e=>(0,s.jsx)(i,{value:e.value,onChange:e.onChange}),i=e=>{let{value:t,onChange:a,showEnabled:r}=e;return(0,s.jsxs)(s.Fragment,{children:[(void 0===r||r)&&(0,s.jsx)(n.$d,{label:"TLS Enabled",checked:t.enable,onChange:()=>{a({...t,enable:!t.enable})}}),(0,s.jsx)(n.$d,{label:"InsecureSkipVerify",checked:t.insecureSkipVerify,onChange:()=>{a({...t,insecureSkipVerify:!t.insecureSkipVerify})}}),(0,s.jsx)(l.e9,{className:"mb-2",title:"ServerNames",data:t.serverNames,onChange:e=>{a({...t,serverNames:e})}}),(0,s.jsx)(l.e9,{className:"mb-2",title:"NextProtos",data:t.nextProtos,onChange:e=>{a({...t,nextProtos:e})}}),(0,s.jsx)(l.n4,{title:"CaCert",textarea:!0,data:t.caCert,onChange:e=>{a({...t,caCert:e})}}),(0,s.jsx)(l.a9,{label:"ECH Config List",value:t.echConfig?btoa(String.fromCharCode(...t.echConfig)):"",onChange:e=>{try{a({...t,echConfig:Uint8Array.from(Array.prototype.map.call(atob(e),e=>e.charCodeAt(0)))})}catch(e){c(e)}}})]})},c=e=>{}},9020:(e,t,a)=>{a.d(t,{D:()=>m,b:()=>x});var s=a(5155),n=a(960),l=a(2115),r=a(6355),i=a(902),c=a(8347),o=a(8054),d=a(3697),h=a(2410);let x=e=>{var t,a;let[x,m]=(0,l.useState)("www.example.com");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.e9,{title:"Next Protos",className:"mb-2",data:null!==(a=null===(t=e.tls)||void 0===t?void 0:t.nextProtos)&&void 0!==a?a:[],onChange:t=>e.onChange({...e.tls,nextProtos:t})}),e.tls&&e.tls.certificates.map((t,a)=>(0,s.jsx)(r.A,{className:"mb-2",children:(0,s.jsxs)(r.A.Body,{children:[(0,s.jsx)(r.A.Title,{className:"d-flex justify-content-end align-items-center",children:(0,s.jsx)(i.A,{variant:"outline-danger",onClick:()=>e.onChange({...e.tls,certificates:e.tls.certificates.filter((e,t)=>t!==a)}),children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})}),(0,s.jsx)(u,{cert:(0,n.v)(h.f6,t),onChange:t=>{e.onChange({...e.tls,certificates:[...e.tls.certificates.slice(0,a),t,...e.tls.certificates.slice(a+1)]})}})]})},"tls_certificates"+a)),(0,s.jsx)(c.A,{className:"d-flex justify-content-end mb-2",children:(0,s.jsxs)(i.A,{variant:"outline-success",onClick:()=>e.onChange({...e.tls,certificates:[...e.tls.certificates,(0,n.v)(h.f6,{cert:new Uint8Array(0),key:new Uint8Array(0),certFilePath:"",keyFilePath:""})]}),children:[(0,s.jsx)("i",{className:"bi bi-plus-lg"}),"New Certificate"]})}),e.tls&&e.tls.serverNameCertificate&&Object.entries(e.tls.serverNameCertificate).map(t=>{let[a,l]=t;return(0,s.jsx)(r.A,{className:"mb-2",children:(0,s.jsxs)(r.A.Body,{children:[(0,s.jsxs)(r.A.Title,{className:"d-flex justify-content-between align-items-center",children:[a,(0,s.jsx)(i.A,{variant:"outline-danger",onClick:()=>{let t={...e.tls.serverNameCertificate};delete t[a],e.onChange({...e.tls,serverNameCertificate:t})},children:(0,s.jsx)("i",{className:"bi bi-x-lg"})})]}),(0,s.jsx)(u,{cert:(0,n.v)(h.f6,l),onChange:t=>{e.onChange({...e.tls,serverNameCertificate:{...e.tls.serverNameCertificate,[a]:t}})}})]})},"server_name_certificate"+a)}),(0,s.jsxs)(c.A,{className:"d-flex justify-content-end",children:[(0,s.jsx)(o.A.Control,{value:x,onChange:e=>m(e.target.value)}),(0,s.jsxs)(i.A,{variant:"outline-success",onClick:()=>{x&&e.onChange({...e.tls,serverNameCertificate:{...e.tls.serverNameCertificate,[x]:(0,n.v)(h.f6,{})}})},children:[(0,s.jsx)("i",{className:"bi bi-plus-lg"}),"New SNI Certificate"]})]})]})},m=e=>{let{value:t,onChange:a}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(x,{tls:t.tls,onChange:e=>a({...t,tls:e})})})},u=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.jU,{label:"Cert",value:new TextDecoder().decode(e.cert.cert),onChange:t=>e.onChange({...e.cert,cert:new TextEncoder().encode(t)})}),(0,s.jsx)(d.jU,{label:"Key",value:new TextDecoder().decode(e.cert.key),onChange:t=>e.onChange({...e.cert,key:new TextEncoder().encode(t)})}),(0,s.jsx)(d.a9,{label:"Cert File",value:e.cert.certFilePath,onChange:t=>e.onChange({...e.cert,certFilePath:t})}),(0,s.jsx)(d.a9,{label:"Key File",value:e.cert.keyFilePath,onChange:t=>e.onChange({...e.cert,keyFilePath:t})})]})}}]);